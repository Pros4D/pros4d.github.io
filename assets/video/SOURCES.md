# Sources and interpretation

All scientific content and visual evidence come from the supplied Pros4D manuscript and assets. No PDF page is shown as a slide in the finished film.

## Provided material

- `figures/teaser_v7.pdf`: observed/future illustration extracted as individual raster assets (`teaser-extract-9.png`, `teaser-extract-8.png`), plus case wording. The supplied observed/future illustration is used; it is not generated video output. Its on-screen annotation has been removed as requested.
- `videos/teaser.mp4`: black-car observed clip. Source is trimmed to 5.6 s and played at 0.625× for readability, then held. No future frames are added.
- `figures/datagen_v4.pdf` and the supplied `Pros4D-DataGen*.png` files: input frames, masks, verified overlays, and recovered 3D geometry. Their steps are reconstructed as editable animation. The geometry image is a supplied reconstruction view; its animated framing does not claim new 3D reconstruction.
- `figures/pipeline_v6.pdf` and `figures/Pros4D-Pipeline-input.png`: model structure, alternating text and latent states, visual/geometric alignment, and camera-motion example. Token grids and flows are conceptual diagrams, not extracted numerical activations.
- `appfigs/pros4d_result4.pdf` and `appfigs/results4-frames1.png` through `results4-frames5.png`: pedestrian case, qualitative comparison, supplied filmstrip.
- `videos/video (25).mp4`: the corresponding pedestrian source clip. **Only 8.0–11.8 s is retained**, played at 0.5× and then frozen. No later frames are used in the film. Colored boxes are manually authored explanatory annotations, not a claimed tracking-model output. The two moving dots are a labeled trajectory schematic, not measured coordinates or generated future video.
- `videos/video (14).mp4`, `(11)`, `(10)`, `(16)`, `(20)`, `(3)`, `(8)`, `(15)`: moving footage for the task-coverage montage. These illustrate the categories; the film does not claim they are individually scored question/answer examples.
- `logos/`: the five institution logos. Author spelling, affiliations and symbols follow the user's corrected list.
- `appfigs/mind2act.mp4`: visual-reference analysis only. Its footage, graphics, music, and narration are not reused.

## Revision 4 sources and reasoning

- The new motivation passage summarizes sections/0_abstract.tex. It explains the observed/future capability gap and continuous-dynamics representation motivation.
- overview-engine.png, overview-bench.png and overview-model.png are high-resolution image exports of datagen_v4.pdf, statistic_v3.pdf, and pipeline_v6.pdf, included together as requested for the introduction. No PDF reader interface or manuscript page is shown.
- The Stage 3 trace is condensed from the supplied data-engine figure: infer the white delivery car's direction from 1.5–5.2 s, recall observed states, imagine future states, and answer B, move right. The template and traces are explanatory text reconstructed from the supplied figure.
- The pedestrian case now shows only Pros4D reasoning: opposite motion, meeting/passing, subsequent separation, and answer C, moving away. It retains the same observed-only source clip.
- The model diagram separates frame-to-encoder targets from observed/future-state-to-alignment-head predictions. These converge at 4DLA during training. It is a conceptual diagram, not measured activations.
- Pros4D-Bench 8B results remain: 49.7 to 64.9 observed, 40.7 to 59.5 future; +15.2/+18.8 percentage points. Overall 62.9%. Engine 40K; benchmark 3,000 questions across eight tasks.

## Audio and typography

- English male narration: `en-US-GuyNeural`, generated at −4% rate. Playback is not accelerated. Subtitle timing comes from the narration's word-boundary timing.
- Quiet transition sounds are original synthetic noise envelopes; no third-party music is included.
- Manrope and IBM Plex Mono: Google Fonts distributions under the SIL Open Font License; license files are included alongside the fonts.

## Visual quality decisions

Main captions are single-line phrases whenever possible, with a reserved bottom safe zone. Text uses balanced wrapping and explicit phrase breaks. Dense methodological paragraphs are replaced with timed visual actions. Small attribution labels remain secondary to the footage and captions.

- Final delivery is SDR. The HDR-tagged night-scene montage source is tone-mapped by HyperFrames using its standard SDR export path; no stylized color grade is applied.
