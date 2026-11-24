# Pros4D — Beyond observation

## Style Prompt
A research film built around continuous observation and inference. Real footage fills the frame; the camera follows an entity as pixels become masks, geometry, and latent states. Editorial typography is brief, spatially anchored, and large. Technical animations explain a changing relationship instead of presenting a slide. A dark scientific instrument aesthetic, calm English male voice, precise subtitles, and match cuts maintain continuity. The supplied Mind2Act film informs footage-first rhythm, not copied artwork.

## Colors
- #0A1015 graphite: canvas and quiet negative space
- #F2F4EF soft white: titles and subtitles
- #91A7AF slate: secondary annotations
- #7DE4BC mint: observed evidence and correct predictions
- #B9A2FF lilac: future latent states
- #EEAD87 muted coral: baseline mistakes (limited use)

## Typography
Manrope variable: heavy short headlines, medium captions and labels. IBM Plex Mono: timestamps, dimensions, model labels. Both locally embedded under OFL licenses. Headlines 60–96 px, key data 100–180 px, labels 25–32 px, subtitles 36 px. Explicit phrase breaks; no short final lines. Author credits 24 px, affiliation labels 28 px.

## Motion rules
Motion encodes time, grounding, transformation, or comparison. Film strips become temporal tokens; a focus frame grows into a real scene; masks are verified before geometry; latent states emerge in causal order. Use 0.65–1.1 second match zooms and directional transitions. Hold factual comparisons long enough to read. A large portion of the film contains live footage or evolving diagrams, rather than a static composition with text entrances. All motion deterministic and seekable in the HyperFrames timeline.

## What NOT to Do
- No full PDF pages, title-and-bullet slides, three-column information cards, or decorative dashboard panels.
- No generated future imagery presented as model output. Latent rollouts and trajectories are explicitly schematic.
- No futuristic effects that obscure source footage; masks and reconstruction come from supplied assets.
- No sped-up narration, word-by-word bouncing subtitles, orphaned final words, or tiny dense paragraphs.
- Do not expose future input frames: the pedestrian clip stops at 11.8 s.

## Revision 4
The cover has three continuous opposing film belts and vertically centered credits. A motivation bridge leads to the three supplied framework figures, shown as figure assets at the user's request. Stage 3 reveals a concrete reasoning trace. The model uses separate nonintersecting routes for question, visual input, encoder targets, and alignment-head predictions. The pedestrian segment presents only Pros4D reasoning.

## Alignment feature revision
Both target and aligned features use the shared red heatmap scale (#FF4B45 / #C75A53 / #733B3D, neutral #303940), matching the paper. Sparse targets and more diffuse predicted features have different activation regions. State input lines start below their text labels, outside the token blocks.
