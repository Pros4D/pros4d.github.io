# Pros4D website design

The user authorizes an original paper website and GitHub organization/repository publication, and delegates visual and content decisions. Target organization: Pros4D. Target repository: pros4d.github.io.

Use an English editorial research layout with a warm white background, dark green typography, measured spacing, green observed-state accents, and lavender future-state accents. The paper itself supplies the imagery. Self-host every runtime asset.

The narrative progresses through the paper identity and authors, observed/future state schematic, research motivation and abstract, 4D-LSR and 4DLA, data construction, benchmark coverage, verified comparisons, qualitative examples, release status, and citation.

The site is static HTML/CSS/JavaScript, compatible with GitHub Pages branch deployment. Interactions include model-scale switching, accessible example tabs, image enlargement, citation copying with fallback, and a mobile navigation menu. Respect reduced motion, support keyboard access, and provide image text alternatives.

Use the exact author order and affiliations from main_arxiv.tex. Derive quantitative claims from the manuscript. Do not invent release URLs, author profiles, publication status, or arXiv identifiers. Compile the supplied main_arxiv.tex as the downloadable paper.

Validation covers local asset references, HTML identifiers, quantitative consistency with the TeX tables, JavaScript syntax and behavior, CSS parsing, and HTTP delivery. Actual viewport rendering remains unverified if browser control is unavailable. Creating the organization requires a usable browser session or a manual user step; cached Git credentials can handle repository creation and Pages after the organization exists.
