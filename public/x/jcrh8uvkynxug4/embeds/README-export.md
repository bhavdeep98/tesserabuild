# Exporting the confidence-meter animation (fallback for PPTX / PDF / offline)

The deck (`tessera-home-passport-reveal.html`, slide 04) embeds the animation as a
**live iframe** — that is the primary, best-looking path and works anywhere the deck
opens in a browser. You only need a video/GIF if you export the deck to PowerPoint or
PDF, or share it as a file that must play without a browser.

The animation lives at `embeds/confidence-score-signal-animation.html`. Add `#embed` to
show only the live console (no docs): `...confidence-score-signal-animation.html#embed`.
One full 5-act cycle runs ~16 seconds.

## Option A — Record from your own browser (recommended, no installs)

1. Start a local server from the `deck/` folder (so relative assets + fonts load):

   ```powershell
   python -m http.server 8842
   ```

2. Open in Chrome or Edge, and size the window to roughly 760 x 360:

   ```
   http://localhost:8842/embeds/confidence-score-signal-animation.html#embed
   ```

3. Record ~16 seconds (one full cycle) with the built-in Windows capture:
   - Press `Win + Alt + R` to start/stop, or `Win + G` for the Game Bar.
   - Recording saves to `%USERPROFILE%\Videos\Captures\` by default.

4. Convert / trim with ffmpeg (already installed on this machine):

   ```powershell
   # Trim to a clean 16s and normalize to MP4 (crisp, small, cross-platform)
   ffmpeg -i "input.mp4" -t 16 -vf "scale=1520:-2:flags=lanczos" -c:v libx264 -pix_fmt yuv420p -crf 20 confidence-meter.mp4

   # Optional GIF (larger, color-limited — only if MP4 can't be used)
   ffmpeg -i confidence-meter.mp4 -vf "fps=15,scale=760:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" confidence-meter.gif
   ```

## Option B — Headless capture with Playwright (if you want it fully automated)

Requires a one-time install (~150 MB Chromium download):

```powershell
pip install playwright
python -m playwright install chromium
```

Then a short script records a WebM via Playwright's `record_video_dir`, and ffmpeg
converts it to MP4/GIF with the same commands as above. Note: headless Chromium has
occasionally rendered blank in this environment — Option A avoids that risk entirely.

## Embedding a video in the slide instead of the live iframe

If you switch to a recorded file, replace the `<iframe>` in slide 04's `.hiw-stage`
with:

```html
<video src="embeds/confidence-meter.mp4" autoplay muted loop playsinline
       style="display:block;width:100%;height:100%;object-fit:cover;border:0;"></video>
```
