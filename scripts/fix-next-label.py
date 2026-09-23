# -*- coding: utf-8 -*-
from pathlib import Path
p = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html")
t = p.read_text(encoding="utf-8")

# Fix last-chapter next label
old = "$('#next').setAttribute('aria-label',i===5?'Read the vision behind the story':'Next chapter');"
new = "$('#next').setAttribute('aria-label',i===5?'Back to the beginning':'Next chapter');"
if old not in t:
    raise SystemExit("next aria-label not found")
t = t.replace(old, new, 1)

# See goto
i = t.find("function goto")
print(t[i:i+400])

p.write_text(t, encoding="utf-8")
print("aria-label updated")
