# Revision 4 — requested updates

- Vertically centered title, author and affiliation block; removed the cover eyebrow. Three continuous, opposing film belts use eight different supplied video scenes.
- Removed both entity boxes in the black-car segment. Narration and captions explicitly name the red brick building. Removed the latent-state annotation.
- Added an abstract-based motivation bridge: the gap between observed understanding and future prediction, continuous-motion information loss in text, and the complexity of external geometry. Introduced Engine, Bench, and Model using the three supplied figure assets.
- Rebuilt Stage 3 as three separate inputs (video frames, 4D-LSR template, question–answer pair) entering a Video VLM, followed by a concrete, condensed reasoning trace from datagen_v4.pdf. Retained the observed interval, latent observed/future steps, car direction and final answer.
- Rebuilt model routing: the question sits above the frames with a straight arrow; frames use a separate elbow arrow. The state sequence spans the full VLM width. Frames also feed frozen visual/geometry encoders; observed and future states feed the Alignment Head; target and predicted features meet at 4DLA. Lines have reserved lanes around labels.
- Removed the standalone inference answer scene and its labels. The inference statement remains in narration and subtitles over the existing model diagram.
- Replaced baseline answer comparisons with Pros4D's recalled motion, imagined continuation, and final answer, condensed from pros4d_result4.pdf. Removed the trajectory annotation and the comparison caption.
- English male narration and captions are retimed throughout. Total duration: 153 seconds, preserving natural delivery and reading time.

The earlier version remains in `pros4d-film-v3`.

## Revision 5 — alignment details
- Use a shared red activation scale for visual/geometry targets and aligned state features; their red regions differ, following pipeline_v6.pdf.
- Begin both Alignment Head input paths below the Observed states / Future states labels, keeping all segments clear of state blocks and text.
- Narration, subtitles, scene timings and other visuals are unchanged.
