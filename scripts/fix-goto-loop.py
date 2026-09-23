# -*- coding: utf-8 -*-
from pathlib import Path
p = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\future-story.html")
t = p.read_text(encoding="utf-8")
old = "function goto(i,manual=true){if(manual)stop();if(i>5){window.scrollTo({top:$('#journey').offsetHeight,behavior:reduced?'instant':'smooth'});return}window.scrollTo({top:$('#journey').offsetTop+limits()*(i/6+.015),behavior:reduced||!manual?'instant':'smooth'});if(!manual)setScene(i);}"
new = "function goto(i,manual=true){if(manual)stop();if(i>5)i=0;if(i<0)i=5;window.scrollTo({top:$('#journey').offsetTop+limits()*(i/6+.015),behavior:reduced||!manual?'instant':'smooth'});if(!manual)setScene(i);}"
if old not in t:
    raise SystemExit("goto not found exactly")
p.write_text(t.replace(old, new, 1), encoding="utf-8")
print("goto loops chapters")
