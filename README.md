
[SEO.txt](https://github.com/user-attachments/files/23327309/SEO.txt)
when coding the the all the remaining of the categories pages mimic the production line structure   to display categories and items. 
do not use the english name " Sanaatchi" in persian and pashto text use the persian "صنعتچی" across all the steps
## Binary asset reminder

The repository keeps references to hero imagery and logistics PDFs (for example
`images/Transportation.webp` and the `pdf/route-*.pdf` files), but the binary
assets themselves are not tracked. Create or supply these files manually during
deployment so that all download links and background images function as
intended.
do not use any categories page on header navigation bar

## PDF verification helper

Run `python tools/verify_pdf_links.py` to scan every HTML/JS/TS file for
`pdfs/.../*.pdf` references and confirm that the target asset exists. The
default text report either confirms everything is present or lists the missing
paths, and the command exits with a non-zero status when any files are missing
so it can gate deployments.

Use the optional flags to tailor the output:

- `--format json` emits a structured payload that automation or CI jobs can
  parse.
- `--output path/to/report.txt` writes the report to a file instead of stdout,
  which helps when you need to keep an audit trail.

Example commands:

```bash
python tools/verify_pdf_links.py
python tools/verify_pdf_links.py --format json --output reports/pdfs.json
```

The JSON structure matches the text summary and always includes `status` and
`missing` keys, keeping downstream parsing predictable.
