# -*- coding: utf-8 -*-
from pathlib import Path
t = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html").read_text(encoding="utf-8")
idx = 0
while True:
    i = t.find("afterword", idx)
    if i < 0:
        break
    print("---", i)
    print(t[max(0, i - 80) : i + 120])
    idx = i + 1
