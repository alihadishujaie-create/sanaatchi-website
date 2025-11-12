#!/usr/bin/env python3
"""Verify that all referenced PDF assets exist.

The script scans HTML, JavaScript, and TypeScript files for strings that look
like ``pdfs/.../*.pdf`` references and checks whether a matching file is
present in the repository. Any missing paths are reported either to ``stdout``
or to an optional output file, making the script suitable for both manual
checks and automated reporting.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from textwrap import dedent

# Root of the repository (script may be executed from any working directory)
REPO_ROOT = Path(__file__).resolve().parents[1]
PDF_ROOT = REPO_ROOT / "pdfs"

# Regex for extracting PDF references relative to the repository root.
PDF_PATTERN = re.compile(r"pdfs/[A-Za-z0-9_\-/]+\.pdf")

# File extensions that may contain PDF references.
SOURCE_EXTENSIONS = {".html", ".js", ".ts"}


def iter_source_files(root: Path) -> list[Path]:
    """Yield all source files under ``root`` that may contain PDF links."""
    for path in root.rglob("*"):
        if path.suffix in SOURCE_EXTENSIONS and path.is_file():
            yield path


def collect_pdf_references() -> set[str]:
    """Collect every PDF path referenced in the source files."""
    references: set[str] = set()
    for source_path in iter_source_files(REPO_ROOT):
        try:
            text = source_path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            # Skip files that are not valid UTF-8.
            continue
        for match in PDF_PATTERN.findall(text):
            references.add(match)
    return references


def verify_pdf_paths(references: set[str]) -> list[str]:
    """Return the subset of paths that do not have a corresponding file."""
    missing: list[str] = []
    for rel_path in sorted(references):
        absolute = REPO_ROOT / rel_path
        if not absolute.exists():
            missing.append(rel_path)
    return missing


def build_report(missing: list[str], format: str) -> str:
    """Create a serialized report summarizing missing PDF assets."""
    if format == "json":
        payload = {
            "status": "missing" if missing else "ok",
            "missing": missing,
        }
        return json.dumps(payload, indent=2)

    if missing:
        lines = ["Missing PDF files detected:"]
        lines.extend(f" - {rel_path}" for rel_path in missing)
        return "\n".join(lines)

    return "All referenced PDF files exist."


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=dedent(
            """
            Examples:
              python tools/verify_pdf_links.py
              python tools/verify_pdf_links.py --format json --output reports/pdfs.json

            The command exits with a non-zero code when missing PDFs are detected,
            making it suitable for CI usage.
            """
        ).strip(),
    )
    parser.add_argument(
        "--format",
        choices=("text", "json"),
        default="text",
        help="Output format for the report (default: text).",
    )
    parser.add_argument(
        "--output",
        type=Path,
        help="Optional file path to write the report to instead of stdout.",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)

    if not PDF_ROOT.exists():
        print("pdfs directory not found", file=sys.stderr)
        return 1

    references = collect_pdf_references()
    missing = verify_pdf_paths(references)

    report = build_report(missing, args.format)

    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(report, encoding="utf-8")
    else:
        print(report)

    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
