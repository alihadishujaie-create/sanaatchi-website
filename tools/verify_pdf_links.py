#!/usr/bin/env python3
"""Verify that all referenced PDF assets exist.

The script scans HTML, JavaScript, and TypeScript files for strings that look
like ``pdfs/.../*.pdf`` references and checks whether a matching file is
present in the repository. Any missing paths are printed to ``stdout`` and the
script exits with a non-zero status so it can be used in automated checks.
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path

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


def main() -> int:
    if not PDF_ROOT.exists():
        print("pdfs directory not found", file=sys.stderr)
        return 1

    references = collect_pdf_references()
    missing = verify_pdf_paths(references)

    if missing:
        print("Missing PDF files detected:")
        for rel_path in missing:
            print(f" - {rel_path}")
        return 1

    print("All referenced PDF files exist.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
