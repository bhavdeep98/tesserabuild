# -*- coding: utf-8 -*-
"""Patch future-story.html for homepage embed + mobile reliability."""
from pathlib import Path

p = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html")
text = p.read_text(encoding="utf-8")
orig = text

# --- CSS: embed mode + stronger mobile viewport ---
embed_css = """
/* Homepage embed: hide story chrome that duplicates the site header;
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

if "html.embed body{overscroll-behavior:contain}" not in text:
    # Insert before closing </style> of the first big style block — use last
    # occurrence before </head> if multiple; file has one primary <style>
    style_close = text.find("</style>")
    if style_close == -1:
        raise SystemExit("no </style> found")
    text = text[:style_close] + embed_css + text[style_close:]

# --- Afterword: add home continue link (shown only in embed) ---
old_back = 'Back to the Tessera data room ↗</a>'
new_back = (
    'Back to the Tessera data room ↗</a>'
    '<a class="home-continue" href="/#product">Continue exploring Home Passport ↓</a>'
)
if "home-continue" not in text:
    if old_back not in text:
        raise SystemExit("afterword back link not found")
    text = text.replace(old_back, new_back, 1)

# --- Boot script: detect embed query / iframe parent ---
boot = """
<script>
(()=>{try{
  const q=new URLSearchParams(location.search);
  const embed=q.get('embed')==='1'||q.get('from')==='home'||(window.parent&&window.parent!==window);
  if(embed)document.documentElement.classList.add('embed');
  if(q.get('from')==='home'||embed){
    const a=document.querySelector('.afterword a[href*=\"data-room\"]');
    if(a){a.setAttribute('href','/');a.textContent='Back to Tessera ↗';}
  }
}catch(e){}})();
</script>
"""

if "document.documentElement.classList.add('embed')" not in text:
    # Insert right after <body> or before main — find <body or <main
    marker = '<main id="journey"'
    idx = text.find(marker)
    if idx == -1:
        raise SystemExit("main journey not found")
    # Find start of body content — symbols svg before main
    body_idx = text.find("<body")
    if body_idx == -1:
        text = text.replace(marker, boot + marker, 1)
    else:
        body_end = text.find(">", body_idx) + 1
        text = text[:body_end] + boot + text[body_end:]

if text == orig:
    print("No changes (already patched?)")
else:
    p.write_text(text, encoding="utf-8")
    print(f"Patched {p.name}: {len(orig)} -> {len(text)} chars")
