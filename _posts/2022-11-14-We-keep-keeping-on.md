---
layout: post
title: We keep keeping on
date: 2022-11-14
tags: [pmd-red, tree-sitter-asm]
---

Time flies, huh? My last post was... 9 months ago?! Jeez. Maybe I should set
an alarm/reminder to make sure I write these. Anyway, I've been all over the
place. 

## PMD Red Progress
pmd-red has been doing great and progress continues. Here's the current
status:
```c
725060 total bytes of code
246992 bytes of code in src (34.0650%)
478068 bytes of code in asm (65.9350%)

14930 total symbols
6915 symbols documented (46.3161%)
313 symbols partially documented (2.0965%)
7702 symbols undocumented (51.5874%)

32059294 total bytes of data
51833 bytes of data in src (0.1617%)
32007461 bytes of data in data (99.8383%)

85658061 bytes of data in 3264 incbins (267.1864%)
```
That's more than a third of the game that has been decompiled and almost half
of it has been documented. Of course, I'm not doing this alone. Many people
have been contributing too.

## tree-sitter-asm
If you have checked my GitHub profile recently, you may have seen that I've
been working on a tree-sitter parser of my own. Given that I stare at lines of
ARM/THUMB code for hours and hours (when I'm not at work, of course), I wanted
to see if I could make my experience better. Within one weekend, I had a
basic prototype that worked pretty well. There are bugs of course but it looks
great!

{% include image.html file="tree-sitter-asm.png" description="Normal Vim syntax on Left and tree-sitter-asm on the Right" %}

Is it ready to include in the nvim-treesitter repo? Probably not. However, I
use it daily and enjoy that I created it.
