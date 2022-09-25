---
layout: post
title: Jamming to a New Beat
date: 2022-02-03
---

I'm not a stranger to music. I've listened to music for most of my life and
even played it for a few years during the middle school to high school years.
I have a **very** large play time on Spotify because I listen almost every
second. When I'm home, I also listen to music on the side or when working from
home. In addition, I have a decent collection of music locally on my desktop
that I like to play on occasion. I do pay for Spotify Premium and will
probably continue to pay for it in the near future however I wanted to do
something different on my desktop. Spotify on Linux can be a little memory hog
(thanks Electron) and every now and then, I spin up MPD to listen to my local
music selection. I had seen articles/blog posts from other people about how
they can stream Spotify from the terminal but I never tried it myself. 

Enter Mopidy. Mopidy is a MPD equivalent that is extensible with Python
plugins. The capability for Spotify is one of those plugins. By default,
Mopidy only uses your local Music (on par with MPD). Once you
install/configure other plugins, you can add more functionality. For now, I've
settled on the following for my Mopidy install:

* Mopidy - Local (locally installed music)
* Mopidy - MPRIS (MPRIS Control in KDE and other environments)
* Mopidy - Spotify (Spotify playback)
* Mopidy - YTMusic (YouTube Music playback)

For me, this is a nice, little setup as I can control everything from the KDE
panel or my media buttons. In addition, I gain YouTube Music functionality.
Albeit, there are still some bugs with YTMusic, in respect to certain songs,
but it doesn't detract from the rest of my positive experience. I can mix
different sources with ease and enjoy my music the way I want to. It's times
like these that remind me why I enjoy running Linux. I can easily find an
alternative and after a little bit of time, I've got something equal or
possibly better.
