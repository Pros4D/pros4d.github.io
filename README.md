# Pros4D project website

Research homepage for **Pros4D: Modeling Evolving 4D Worlds in Latent Space for Dynamic Spatial Reasoning**.

Live website: https://pros4d.github.io/

## Preview locally

From this directory, run `python -m http.server 4173 --bind 127.0.0.1` and visit http://127.0.0.1:4173/.

This is a self-contained static website with no build step or external runtime dependencies. The font and all images are hosted locally. JavaScript adds model-scale comparison, keyboard-accessible example tabs, figure enlargement, a mobile menu, and citation copying.

## Publish on GitHub Pages

Create the **Pros4D** organization and a public repository named **pros4d.github.io**. Push this directory to its `main` branch. In **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/ (root)**. `.nojekyll` keeps the static files unchanged. The publishing helper in the original paper workspace can also create the repository, push, and configure Pages using the owner's cached GitHub credentials.

The organization must exist before repository publication. No credentials belong in this repository.

## Edit content

- `index.html`: authors, paper description, method, benchmark, selected results, resources, and citation.
- `style.css`: visual design and responsive layouts.
- `script.js`: interactions and 3B/8B result values.
- `assets/`: web-optimized figures and video frames extracted from the supplied manuscript.
- `downloads/Pros4D.pdf`: compiled from `main_arxiv.tex`, including the supplement.
- `downloads/pros4d.bib`: the citation displayed on the page; update both together.

When code, model, data, or arXiv URLs become available, replace the relevant resource statuses with real links. The site currently describes these as coming soon and makes no conference-acceptance claim. The citation is labeled as a research manuscript; replace it with the official publication record when available.

If the organization name changes, update the canonical URL, social metadata, structured data, citation, robots file, sitemap, and website-source link.

## Provenance

Research text, author order, figures, and numbers follow the supplied paper. The hero's street frames are extracted from `figures/teaser_v7.pdf`. The state timeline is a conceptual schematic, not generated future video. Alignment and data-engine figures come from `figures/pipeline_v6.pdf` and `figures/datagen_v4.pdf`. Qualitative comparisons come from the supplementary figures.

The website has an original layout. DynTrace's project website was a structural reference. Its code and styling were not copied.

Manrope is distributed under the SIL Open Font License in `assets/fonts/OFL.txt`. Paper and figure rights remain with their respective authors and rights holders; no new license is assigned to the research material here.
