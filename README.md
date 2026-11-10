# Pros4D project website

Research homepage for **Pros4D: Modeling Evolving 4D Worlds in Latent Space for Dynamic Spatial Reasoning**.

Live website: https://pros4d.github.io/

## Preview locally

From this directory, run `python -m http.server 4173 --bind 127.0.0.1` and visit http://127.0.0.1:4173/.

This is a self-contained static website with no build step or external runtime dependencies. The font and all images are hosted locally. JavaScript adds model-scale comparison, keyboard-accessible example tabs, figure enlargement, a mobile menu, and a BibTeX dialog with citation copying.

## Publish on GitHub Pages

Create the **Pros4D** organization and a public repository named **pros4d.github.io**. Push this directory to its `main` branch. In **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/ (root)**. `.nojekyll` keeps the static files unchanged. The publishing helper in the original paper workspace can also create the repository, push, and configure Pages using the owner's cached GitHub credentials.

The organization must exist before repository publication. No credentials belong in this repository.

## Edit content

- `index.html`: authors, paper description, method, benchmark, selected results, and the BibTeX dialog.
- `style.css`: visual design and responsive layouts.
- `script.js`: interactions and 3B/8B result values.
- `assets/`: web-optimized figures and video frames extracted from the supplied manuscript.
- `downloads/pros4d.bib`: the citation displayed on the page; update both together.

The navigation includes Overview, Method, Benchmark, Results, Examples, and BibTeX. Examples scrolls to the qualitative examples; both BibTeX controls open the same citation dialog. The paper is to be read through arXiv only; the local PDF download and its navigation entry have been removed. The header resource pills follow the supplied arXiv / Code / BibTeX reference. The arXiv and Code buttons are disabled until their URLs are supplied; replace them with links retaining the `resource-pill` class when available. BibTeX opens the citation dialog. The separate Resources section has been removed. The site makes no conference-acceptance claim. The citation is labeled as a research manuscript; replace it with the official publication record when available.

If the organization name changes, update the canonical URL, social metadata, structured data, citation, robots file, sitemap, and website-source link.

## Provenance

Research text, author order, figures, and numbers follow the supplied paper. The author block uses explicit rows of eight and seven authors on desktop, with responsive wrapping on narrow screens. Per the supplied author reference, Rongxin Gao is marked as Project Lead (*); Xinghao Ding and Yuzhi Huang are marked as Corresponding Authors (†). Runyu Chen and Kairun Wen are included in the 15-author list and BibTeX. Jingyan Jiang and Tsinghua University use affiliation 4. The hero displays the updated `figures/teaser_v7.pdf` supplied on 2026-11-10. Non-title text sizes are 1.5 times the previous CSS values; the main and section h2 titles retain their sizes. Pros4D in the title uses Orbitron with a teal-to-blue-to-purple gradient. Alignment and data-engine figures come from `figures/pipeline_v6.pdf` and `figures/datagen_v4.pdf`. Fig.03 uses the appendix's camera–object distance comparison (`appfigs/pros4d_result1.pdf`); Fig.04 uses the object motion comparison (`appfigs/pros4d_result2.pdf`). Decorative page arrows are removed; original research diagrams are preserved.

The website has an original layout. DynTrace's project website was a structural reference. Its code and styling were not copied.

Manrope and Orbitron are distributed under the SIL Open Font License in `assets/fonts/OFL.txt` and `assets/fonts/Orbitron-OFL.txt`. Paper and figure rights remain with their respective authors and rights holders; no new license is assigned to the research material here.

University affiliations use the supplied SVG emblems at 1em beside XMU, CUMT, CUHK, THU, and HIT on one desktop row. The method, engine, results, and example section heading pairs are vertically centered. The former hero summary sentence is removed.
