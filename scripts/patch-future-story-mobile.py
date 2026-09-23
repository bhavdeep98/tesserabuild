# -*- coding: utf-8 -*-
"""Improve embed CSS: reclaim vertical space under site header on mobile."""
from pathlib import Path

p = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html")
text = p.read_text(encoding="utf-8")

old = """/* Homepage embed: hide story chrome that duplicates the site header;
   tighten mobile heights so 100dvh iframes don't clip. */
html.embed body{overscroll-behavior:contain}
html.embed .header .brand{pointer-events:none}
html.embed .header-right .edition{display:none}
html.embed .afterword a[href*="data-room"]{display:none}
html.embed .afterword .home-continue{display:inline-flex!important}
.afterword .home-continue{display:none;margin-top:14px;align-items:center;gap:8px;font-size:14px;color:var(--green);text-decoration:none;border-bottom:1px solid rgba(45,125,111,.35);padding-bottom:2px;width:fit-content}
@media(max-width:760px){
  html.embed .viewport{min-height:0;height:100dvh}
  html.embed #journey{height:620dvh}
  html.embed .header{height:56px}
  html.embed .top-line{top:55px}
  html.embed .footer-nav{height:64px}
  html.embed .timeline-progress{bottom:63px}
  html.embed .copy{top:84px}
  html.embed .world{top:26%;height:50%}
  html.embed .interaction{top:220px;max-height:calc(100dvh - 300px)}
}
@media(max-width:760px) and (max-height:700px){
  html.embed .viewport{min-height:0}
  html.embed h1{font-size:32px}
  html.embed .passport{display:none}
  html.embed .world{top:24%;height:48%}
}
"""

new = """/* Homepage embed: drop duplicate chrome; fit 100dvh frames on phones. */
html.embed body{overscroll-behavior:contain}
html.embed .header .brand{pointer-events:none}
html.embed .header-right .edition{display:none}
html.embed .afterword a[href*="data-room"]{display:none}
html.embed .afterword .home-continue{display:inline-flex!important}
.afterword .home-continue{display:none;margin-top:14px;align-items:center;gap:8px;font-size:14px;color:var(--green);text-decoration:none;border-bottom:1px solid rgba(45,125,111,.35);padding-bottom:2px;width:fit-content}
html.embed .viewport{min-height:0;height:100dvh}
html.embed #journey{height:620dvh}
@media(max-width:760px){
  /* Site header already brands the page — free vertical space for the scene. */
  html.embed .header{display:none}
  html.embed .top-line{display:none}
  html.embed .viewport{grid-template-rows:0 minmax(0,1fr) 64px;height:100dvh;min-height:0}
  html.embed .footer-nav{height:64px}
  html.embed .timeline-progress{bottom:63px}
  html.embed .copy{top:18px;left:6%;width:88%}
  html.embed .eyebrow{margin-bottom:8px}
  html.embed h1{font-size:clamp(30px,8.5vw,44px);max-width:92%}
  html.embed .subtitle{font-size:13px;margin-top:10px;max-width:92%}
  html.embed .world{top:22%;height:52%}
  html.embed .passport{bottom:16%;width:132px;padding:11px}
  html.embed .interaction{top:200px;bottom:72px;max-height:none;overflow-y:auto;width:88%;left:6%;right:6%}
  html.embed .transport{bottom:78px;left:6%}
}
@media(max-width:760px) and (max-height:700px){
  html.embed h1{font-size:28px}
  html.embed .passport{display:none}
  html.embed .world{top:20%;height:50%}
  html.embed .interaction{top:170px}
}
"""

if old not in text:
    raise SystemExit("old embed CSS block not found — file may have drifted")
text = text.replace(old, new, 1)
p.write_text(text, encoding="utf-8")
print("Updated embed mobile CSS")
