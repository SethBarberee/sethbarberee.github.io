---
layout: post
title: Hello From Somewhere
date: 2023-06-04
tags: [pmd-red]
---

# PMD Red Progress
We've been doing pretty well over at `pmd-red`. This was taken on `master` as of
the date on this blog post. My `may-2023` branch has a small 2% bump that I
still need to merge/PR.
```c
725060 total bytes of code
295328 bytes of code in src (40.7315%)
429732 bytes of code in asm (59.2685%)

23878 total symbols
8393 symbols documented (35.1495%)
300 symbols partially documented (1.2564%)
15185 symbols undocumented (63.5941%)

32059292 total bytes of data
54955 bytes of data in src (0.1714%)
32004337 bytes of data in data (99.8286%)

85633377 bytes of data in 3240 incbins (267.1094%)
```

Considering the last blog post where I discussed progress was a little over
33%, this is a nice pace considering we are only at two people working on
this. As always, thanks to Cheng who continues to review my PRs. Recently, he
got all of `dungeon_sbin` to be shiftable! This is a major milestone as that
makes 1 of the 8 sbins shiftable. We need all data to be shiftable for people
to be able to romhack on PMD. 

# Blog Updates
Finally, after reading other blog posts (and totally copying code), I have
functional tags on this site. It's fairly basic but I can live with it for
now. Anticipate seeing more stuff in the future but can't guarantee any
timeline because we all know my speed fluctuates.
