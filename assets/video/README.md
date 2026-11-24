# Pros4D — Revised research film

153 seconds · 1920×1080 · 30 fps · English male narration · English subtitles.

This is the final editable project used to render `Pros4D-Final.mp4`. The web-optimized published film is [available here](../pros4d-film.mp4); the full-quality render can be regenerated with the command below. `Pros4D-Film.en.srt` is the subtitle track. The editable HyperFrames source is `index.html`; its organized sources are `compose.py`, `film.css`, `revision.css`, and `film.js`. Run `python compose.py` after editing those sources.

```powershell
python compose.py
npm run check
npx --yes hyperframes@0.9.80 preview --background
npx --yes hyperframes@0.9.80 render --output Pros4D-Final.mp4 --fps 30 --quality high --workers 2 --sdr
```

Node.js, Chrome and FFmpeg are required. Executable locations can be provided through HYPERFRAMES_BROWSER_PATH, HYPERFRAMES_FFMPEG_PATH and HYPERFRAMES_FFPROBE_PATH. All composition media is local. SDR export tone-maps the one HDR-tagged montage source for consistent playback.

See REVISION.md for the requested changes, SOURCES.md for factual/asset provenance, and verification.json for export checks. The source media, narration segments, timing files, fonts and licenses are included in `assets/`. No external workspace files are needed to rebuild the composition.
