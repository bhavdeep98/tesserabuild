# -*- coding: utf-8 -*-
"""Fix wedge lead, FAQ framing on data-room index."""
from pathlib import Path
import re

p = Path(r"C:\Users\bhavd\workspace\Tessera Build Inc\public\data-room\index.html")
t = p.read_text(encoding="utf-8")
orig = t

# Chapter nav: not "Built-in intelligence"
t = t.replace(
    '<a href="#wedge"><span><small>01</small> Built-in intelligence</span>↓</a>',
    '<a href="#wedge"><span><small>01</small> Inside the Passport</span>↓</a>',
    1,
)

# Hero foot: predictability as built-in, not co-equal product
t = t.replace(
    '<div><span>THE DIFFERENTIATOR</span><strong>AI predictability</strong></div>',
    '<div><span>BUILT INTO IT</span><strong>Close intelligence</strong></div>',
    1,
)

# Start-here conviction card
t = t.replace(
    '<a class="sh-card" href="#why-tessera"><span class="sh-n">03 · Conviction</span><h3>Four VC questions</h3><p>Layer → Passport, builder care, right to win, ledger — answered again.</p><span class="sh-go">Jump to answers ↓</span></a>',
    '<a class="sh-card" href="#why-tessera"><span class="sh-n">03 · Conviction</span><h3>Questions from the room</h3><p>A sample of what investors pressed — not the whole list.</p><span class="sh-go">Jump to answers ↓</span></a>',
    1,
)

# Room card "Why Tessera?"
t = t.replace(
    "<h3>Why Tessera?</h3><p>The four questions, answered below.</p>",
    "<h3>Why Tessera?</h3><p>Questions from investor conversations, answered below.</p>",
    1,
)

# Reorder tabs: Home record first, then Predictability
old_tabs = (
    '<div class="passport-tabs" role="tablist" aria-label="Passport feature pages">'
    '<button role="tab" id="feature-tab-predict" aria-controls="feature-predict" aria-selected="true" tabindex="0" data-feature="predict"><span>01</span>Predictability</button>'
    '<button role="tab" id="feature-tab-record" aria-controls="feature-record" aria-selected="false" tabindex="-1" data-feature="record"><span>02</span>Home record</button>'
    '<button role="tab" id="feature-tab-care" aria-controls="feature-care" aria-selected="false" tabindex="-1" data-feature="care"><span>03</span>Maintenance</button>'
    '<button role="tab" id="feature-tab-ownership" aria-controls="feature-ownership" aria-selected="false" tabindex="-1" data-feature="ownership"><span>04</span>Ownership</button></div>'
)
new_tabs = (
    '<div class="passport-tabs" role="tablist" aria-label="Passport chapters">'
    '<button role="tab" id="feature-tab-record" aria-controls="feature-record" aria-selected="true" tabindex="0" data-feature="record"><span>01</span>Home record</button>'
    '<button role="tab" id="feature-tab-predict" aria-controls="feature-predict" aria-selected="false" tabindex="-1" data-feature="predict"><span>02</span>Close intelligence</button>'
    '<button role="tab" id="feature-tab-care" aria-controls="feature-care" aria-selected="false" tabindex="-1" data-feature="care"><span>03</span>Care</button>'
    '<button role="tab" id="feature-tab-ownership" aria-controls="feature-ownership" aria-selected="false" tabindex="-1" data-feature="ownership"><span>04</span>Ownership</button></div>'
)
if old_tabs not in t:
    raise SystemExit("tabs block missing")
t = t.replace(old_tabs, new_tabs, 1)

# Swap default visible panel: hide predict, show record
t = t.replace(
    '<article id="feature-predict" role="tabpanel" aria-labelledby="feature-tab-predict" class="passport-feature"  tabindex="0">',
    '<article id="feature-predict" role="tabpanel" aria-labelledby="feature-tab-predict" class="passport-feature" hidden tabindex="0">',
    1,
)
t = t.replace(
    '<article id="feature-record" role="tabpanel" aria-labelledby="feature-tab-record" class="passport-feature" hidden tabindex="0">',
    '<article id="feature-record" role="tabpanel" aria-labelledby="feature-tab-record" class="passport-feature" tabindex="0">',
    1,
)

# Soften predictability stamps — capability of Passport, not product #1
t = t.replace(
    '<span class="eyebrow">BEFORE CLOSE / BUILDER</span><span class="page-stamp">ADOPTION DRIVER</span>',
    '<span class="eyebrow">BEFORE CLOSE / SAME PASSPORT</span><span class="page-stamp">CAPABILITY</span>',
    1,
)
t = t.replace(
    '<span class="eyebrow">FEATURE 01 / PREDICTABILITY</span>',
    '<span class="eyebrow">CHAPTER · CLOSE INTELLIGENCE</span>',
    1,
)
t = t.replace(
    '<span class="eyebrow">FEATURE 02 / HOME RECORD</span>',
    '<span class="eyebrow">CHAPTER · THE RECORD</span>',
    1,
)
t = t.replace(
    '<span class="eyebrow">FEATURE 03 / MAINTENANCE</span>',
    '<span class="eyebrow">CHAPTER · CARE</span>',
    1,
)
t = t.replace(
    '<span class="eyebrow">FEATURE 04 / OWNERSHIP</span>',
    '<span class="eyebrow">CHAPTER · OWNERSHIP</span>',
    1,
)
# Home record stamp: make it the product core
t = t.replace(
    '<span class="eyebrow">AT HANDOFF / HOME</span><span class="page-stamp">PRODUCT VISION</span></div><div class="feature-heading"><span class="eyebrow">CHAPTER · THE RECORD</span>',
    '<span class="eyebrow">THE PASSPORT / CORE</span><span class="page-stamp">THE PRODUCT</span></div><div class="feature-heading"><span class="eyebrow">CHAPTER · THE RECORD</span>',
    1,
)

# Section lede under wedge
t = t.replace(
    '<p class="eyebrow">01 / Inside Home Passport</p><h2>One Passport.<br>Every capability, connected.</h2></div><p>Turn the pages. Follow the same home.</p>',
    '<p class="eyebrow">01 / Inside Home Passport</p><h2>One Passport.<br>Every chapter of the same home.</h2></div><p>The record is the product. Close intelligence, care, and ownership are chapters on it — not separate products.</p>',
    1,
)

# FAQ framing
old_faq_head = (
    '<p class="eyebrow" style="margin:34px 0 4px;">Why Tessera — the four questions</p>'
    '<p style="font-size:14px;color:var(--muted);margin:0 0 6px;max-width:70ch;">'
    "Questions VCs already asked — answered short, with Digs and nationals named. "
    '<a href="./answers.html" style="color:var(--green);font-weight:700">Full answers →</a></p>'
)
new_faq_head = (
    '<p class="eyebrow" style="margin:34px 0 4px;">Why Tessera — questions from the room</p>'
    '<p style="font-size:14px;color:var(--muted);margin:0 0 6px;max-width:70ch;">'
    "A sample of what investors pressed in conversation — not an exhaustive list. Digs and nationals named where it matters. "
    '<a href="./answers.html" style="color:var(--green);font-weight:700">Longer answers →</a></p>'
)
if old_faq_head not in t:
    raise SystemExit("faq head missing")
t = t.replace(old_faq_head, new_faq_head, 1)

# Supporting docs link label
t = t.replace(
    '<a href="./answers.html">Four questions (full) <span>↗</span></a>',
    '<a href="./answers.html">Questions from the room (full) <span>↗</span></a>',
    1,
)

# JS: feature order is now record, predict, care, ownership in DOM tab order
# Current JS uses querySelectorAll('[data-feature]') which follows DOM order of buttons - good after reorder
# page counter says Feature 0N / 04 - soften to Chapter
t = t.replace(
    "document.getElementById('page-counter').textContent=`Feature 0${index+1} / 04`",
    "document.getElementById('page-counter').textContent=`Chapter 0${index+1} / 04`",
    1,
)

if t == orig:
    print("NO CHANGES")
else:
    p.write_text(t, encoding="utf-8")
    print(f"patched index {len(orig)} -> {len(t)}")
