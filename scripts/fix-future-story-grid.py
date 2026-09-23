# -*- coding: utf-8 -*-
"""Fix embed CSS: keep header in grid so stage gets the 1fr row."""
from pathlib import Path

p = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html")
text = p.read_text(encoding="utf-8")

old = """@media(max-width:760px){
  /* Site header already brands the page — free vertical space for the scene. */
  html.embed .header{display:none}
  html.embed .top-line{display:none}
  html.embed .viewport{grid-template-rows:0 minmax(0,1fr) 64px;height:100dvh;min-height:0}
"""

new = """@media(max-width:760px){
  /* Keep .header in the grid (visibility only) — display:none reassigns
     rows and collapses .stage into the 0px track. */
  html.embed .header{visibility:hidden;height:0!important;min-height:0!important;padding:0!important;margin:0!important;overflow:hidden;border:0;pointer-events:none}
  html.embed .top-line{display:none}
  html.embed .viewport{grid-template-rows:0 minmax(0,1fr) 64px;height:100dvh;min-height:0}
"""

if old not in text:
    raise SystemExit("target CSS block not found")
p.write_text(text.replace(old, new, 1), encoding="utf-8")
print("Fixed header grid participation")
