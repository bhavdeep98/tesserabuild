# -*- coding: utf-8 -*-
from pathlib import Path
import re

p = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html")
t = p.read_text(encoding="utf-8")

# 1) Remove afterword section entirely
t2, n = re.subn(
    r'<section class="afterword"[^>]*>.*?</section>\s*',
    "",
    t,
    count=1,
    flags=re.DOTALL,
)
print("afterword removed", n)
if n != 1:
    raise SystemExit("afterword section not found")

# 2) Drop afterword-related embed CSS helpers
for scrap in [
    'html.embed .afterword a[href*="data-room"]{display:none}\n',
    'html.embed .afterword .home-continue{display:inline-flex!important}\n',
    '.afterword .home-continue{display:none;margin-top:14px;align-items:center;gap:8px;font-size:14px;color:var(--green);text-decoration:none;border-bottom:1px solid rgba(45,125,111,.35);padding-bottom:2px;width:fit-content}\n',
]:
    if scrap in t2:
        t2 = t2.replace(scrap, "")
        print("removed css scrap")

# 3) Simplify boot script — no afterword link rewrite
old_boot = """<script>
(()=>{try{
  const q=new URLSearchParams(location.search);
  const embed=q.get('embed')==='1'||q.get('from')==='home'||(window.parent&&window.parent!==window);
  if(embed)document.documentElement.classList.add('embed');
  if(q.get('from')==='home'||embed){
    const a=document.querySelector('.afterword a[href*=\"data-room\"]');
    if(a){a.setAttribute('href','/');a.textContent='Back to Tessera ↗';}
  }
}catch(e){}})();
</script>"""

new_boot = """<script>
(()=>{try{
  const q=new URLSearchParams(location.search);
  const embed=q.get('embed')==='1'||q.get('from')==='home'||(window.parent&&window.parent!==window);
  if(embed)document.documentElement.classList.add('embed');
}catch(e){}})();
</script>"""

if old_boot in t2:
    t2 = t2.replace(old_boot, new_boot, 1)
    print("boot simplified")
else:
    # try looser match
    t2b, nboot = re.subn(
        r"<script>\s*\(\(\)=>\{try\{\s*const q=new URLSearchParams\(location\.search\);.*?catch\(e\)\{\}\)\(\);\s*</script>",
        new_boot,
        t2,
        count=1,
        flags=re.DOTALL,
    )
    print("boot regex", nboot)
    t2 = t2b

# 4) If next-on-last-scene scrolls to afterword, point home instead
# Look for afterword scroll patterns in main script
for pat, repl, label in [
    ("'.afterword'", "'#journey'", "afterword selector in JS"),
    ('".afterword"', '"#journey"', "afterword selector dbl"),
    ("afterword", None, "count remaining afterword mentions"),
]:
    if repl is None:
        print("remaining 'afterword' count", t2.count(pat))
    elif pat in t2:
        t2 = t2.replace(pat, repl)
        print("replaced", label)

p.write_text(t2, encoding="utf-8")
print("done", p.stat().st_size)
