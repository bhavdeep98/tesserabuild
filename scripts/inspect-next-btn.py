# -*- coding: utf-8 -*-
from pathlib import Path
t = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html").read_text(encoding="utf-8")
for needle in ["Read the vision", "afterword", "scrollIntoView", "i===5"]:
    print(needle, t.count(needle))
# last part of main script
i = t.rfind("function setScene")
print(t[i:i+800])
print("---")
j = t.find("$('#next')")
while j >= 0 and j < i + 5000:
    print(t[j:j+200])
    j = t.find("$('#next')", j+1)
