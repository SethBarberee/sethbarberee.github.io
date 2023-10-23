---
layout: post
title: Halfway to Success
date: 2023-10-23
tags: [pmd-red, pokepinballrs]
---

## eBike Time
My Lectric XP 3.0 Long Range eBike came in ~1 month ago and I'm loving it so
far. I have 230 miles on it so halfway to a tank of gas on my car. Maximum
range is 60 miles but with pedal assist level 2, I'm getting about 40 miles
which is still great. I'm slowly getting to where I will use it for work which
is 10 miles each way. With the library weekend shift, I'm used to using the
bike now and my infrequent long night rides are boosting my confidence on
riding the long distances. Regardless, I don't think I've ever ridden a bike
this much in my lifetime so we'll take that as a win.

## `pmd-red` Update
```c
pmd_red progress:
725060 total bytes of code
366640 bytes of code in src (50.5668%)
358420 bytes of code in asm (49.4332%)

224016 total symbols
8491 symbols documented (3.7904%)
277 symbols partially documented (0.1237%)
215248 symbols undocumented (96.0860%)

32059196 total bytes of data
118953 bytes of data in src (0.3710%)
31940243 bytes of data in data (99.6290%)

27616615 bytes of data in 175136 incbins (86.1426%)
```

We finally hit 50%. We hit it after [this PR from Kermalis on Aug 30](https://github.com/pret/pmd-red/pull/155) but a 
few other PRs from me, Chen, and Kermalis have come in too since I last
blogged on the progress. Kermalis has been cleaning up the code while I keep
snipping more functions to decomp. Chen has been setting up and working on
[`pmd-sky`](https://github.com/pret/pmd-sky)! To our chagrin, a lot of the
work we've done so far on `pmd-red` has been 1:1 with matching functions in
`pmd-sky`. If you wanna dip your toes in DS decomp, take a look and help out!

## `pokepinballrs`
Surprising? I have contributed to `pokepinballrs` with some work on the
[eReader](https://github.com/pret/pokepinballrs/pull/23) and 
[high scores](https://github.com/pret/pokepinballrs/pull/35). This project still has a long way to go but it's looking nice.
Here's the `calcrom` for the repo so far:
```c
  350824 total bytes of code
   42904 bytes of code in src (12.2295%)
  307920 bytes of code in asm (87.7705%)

    2679 total symbols
    1013 symbols documented (37.8126%)
       7 symbols partially documented (0.2613%)
    1659 symbols undocumented (61.9261%)

 6710644 total bytes of data
       0 bytes of data in src (0.0000%)
  516340 bytes of data in data (7.6943%)
 6194304 bytes of data in 712 incbins (92.3057%)
```
I've also added a few constants for BG music similar to `pokeemerald` and
`pmd-red` but it's by no means complete yet.


