---
layout: post
title: Taking a Bite of the Apple
date: 2026-09-17
toc: true
tags: [job, pmd-red, pmd-sky, homelab]
---

> [!NOTE]
> All opinions here are my personal opinions and do not reflect my employer.

And now, with that out of the way. Yeah, I work at Apple now. But let's walk
through what's happened through the gap in posts.

## pmd-red

pmd-red update which I'm glad to show:

```c
pmd_red progress:
Code decompilation is 100% complete

248822 total symbols
226134 symbols documented (90.8818%)
82 symbols partially documented (0.0330%)
22606 symbols undocumented (9.0852%)

31607401 total bytes of data
26040491 bytes of data in src (82.3873%)
5566910 bytes of data in data (17.6127%)

1423317 bytes of data in 745 incbins (4.5031%)
```

Mhm, we did it. 100% decompilation completed. Mostly documented too! So, what
next? pmd-sky, obviously!

## pmd-sky

```c
pmdsky progress:
Analysis of pmdsky.us binary:
  2269816 total bytes of code
    188760 bytes of code in src (8.31609%)
    2081056 bytes of code in asm (91.6839%)

  380656 total bytes of data
    2400 bytes of data in src (0.630491%)
    378256 bytes of data in asm (99.3695%)

  60638 total pointers
    59961 properly-linked pointers (98.8835%)
    677 hard-coded pointers (1.11646%)

Analysis of sub binary:
  158064 total bytes of code
    0 bytes of code in src (0%)
    158064 bytes of code in asm (100%)

  1780 total bytes of data
    0 bytes of data in src (0%)
    1780 bytes of data in asm (100%)

  1737 total pointers
    1722 properly-linked pointers (99.1364%)
    15 hard-coded pointers (0.863558%)
```

It's not simple thumb anymore. We get the full ARM7 and ARM9 instruction sets
of the Nintendo DS. Lots of stuff carries over but others don't.

## Job stuff

So Alphawave was acquired by Qualcomm at the end of 2025. I continued on
working and then I was approached on Linkedin with the opportunity to join
Apple. Of course, I cannot say what I work on because of NDAs.

## Homelab

Homelab is still going strong. Just added a GliNet Comet X KVM and used my
employee discount to get a Mac Mini. I'm gonna enjoy running local LLM on this and
moving Jellyfin to it as well.
