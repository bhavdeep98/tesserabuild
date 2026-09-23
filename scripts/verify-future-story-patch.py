# -*- coding: utf-8 -*-
from pathlib import Path

t = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html").read_text(
    encoding="utf-8"
)
print("embed css", "html.embed body" in t)
print("home-continue", "home-continue" in t)
print("boot", "classList.add('embed')" in t)
i = t.find("home-continue")
print(t[i - 100 : i + 140] if i >= 0 else "missing")
# show boot snippet
j = t.find("classList.add('embed')")
print("--- boot ---")
print(t[j - 200 : j + 350] if j >= 0 else "missing")
