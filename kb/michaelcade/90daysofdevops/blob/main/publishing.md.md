# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/publishing.md
Language: bash

## Snippet: Converting Markdown to PDF using XeLaTeX
Description: Pandoc command to convert multiple markdown files into a PDF document using XeLaTeX as the PDF engine and GitHub-flavored markdown as the source format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/publishing.md#2025-04-17_snippet_2
Language: bash

```bash
pandoc --output test.pdf --from gfm --pdf-engine=xelatex --to latex *.md
```

## Snippet: Installing Pandoc and LaTeX Dependencies on Linux/WSL2
Description: Commands to install Pandoc and required LaTeX packages for PDF conversion on Ubuntu/Debian based systems. These tools are necessary for converting markdown to various document formats.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/publishing.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt-get update 
sudo apt-get install pandoc
sudo apt-get install texlive-xetex
sudo apt-get install texlive-latex-base
sudo apt-get install texlive-fonts-recommended
sudo apt-get install texlive-fonts-extra
sudo apt-get install texlive-latex-extra
```

## Snippet: Converting Markdown to Microsoft Word Document
Description: Pandoc command to convert multiple markdown files into a single Word document using GitHub-flavored markdown as the source format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/publishing.md#2025-04-17_snippet_1
Language: bash

```bash
pandoc --output test.docx --from gfm -t docx *.md
```