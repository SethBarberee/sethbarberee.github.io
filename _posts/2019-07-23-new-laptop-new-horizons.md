---
layout: post
title: "New Laptop, New Horizons (XPS 15 9575)"
date: 2019-07-23
---
Written on said XPS 15 9575

As my time at internship with Dell comes to a close, I've been in the market
for a new laptop to replace my older Dell Precision 5510. My shopping list or
with list was the following:
* Better battery life
* Touchscreen of some fashion
* Please no more NVIDIA graphics
* 15" screen or smaller

# Background
So lemme explain, my Dell Precision gets about 3 1/2 hours of battery life.
That's not too bad but in the world of ultrabooks and how on the go I am, I
want to have something with better battery life. Touchscreen came from a
little part of me that just wants to take notes kinda like a Surface laptop
and replace my old and basically broken Samsung Tab A. My last item came from
my constant work on Wayland testing and just dealing with hybrid graphics.
NVIDIA is a great company with good products however on the Linux side,
supporting Wayland isn't on their highest priority and the Quadro M1000M of
mine could never boost since NVIDIA never released the signed firmwares for
them. With my laptop beginning to hit 3 years old and my current internship at
Dell, I wanted to take advantage of a good deal on a new laptop.
# Scouting
Luckily, I had an employee discount and I don't mind buying refurbished. My
scope was narrowed very quickly to the XPS/Latitudes of Dell. I wanted good
support on Linux which then narrowed to the XPS. Then, I settled on the 15"
after trying it in the lab and pulled the trigger. 
# Review
I've broken down each part of the laptop review to sections labeled below.
## Linux Driver Support
Most things work out of the box. Not any problems to speak of. From the Arch
wiki, the only thing that doesn't really have a driver is the fingerprint
reader but I don't really use/need it. The only thing that will bug me at
times is when the touchpad might be disabled after flipping between tablet and
laptop mode but I usually just do a full cycle switch between the two and it
usually fixes itself.
## Screen
It's glossy and 1080P. Bring on the fingerprints from touch. I did buy a Pen with the
laptop to slightly mitigate this.
## Graphics
Intel and AMD graphics are pretty rad for gaming. Since both are open source
drivers on Linux, it's nice. The AMD GPU powers off when not in use and can be
used with DRI_PRIME. Simple and efficient. The way it's supposed to be.
## Touchscreen Gestures
This needed a full on section because of the differences that Linux (Arch) and
Windows do. In Linux, a one-finger drag is a basically selecting text with the
left button while on Windows, it scrolls. I hated this in Firefox when I
wanted to scroll with one finger in Linux and can't. I ended up installing
ScrollAnywhere (Firefox Extension) to solve the issue and now I can basically
scroll like I do in Windows.
## Battery Life
For reference with my Precision, I would have to charge at least once per day
during one of my classes (typically 45 mins). With the XPS, I charge about
every other day depending on how much I actually need it. Some days are more
heavy than others like Mondays while others I don't really need it such as
my Tuesday classes. From my own testing, I typically get 6 hours and sometimes
better depending on what work I'm actually doing.
## On Screen Keyboard
With having a convertible laptop, a big issue is on-screen keyboards. Desktop
environments have their own keyboards or have one that is extremely integrated
to only that environment. With using LightDM, I already had onboard installed
so I tried using that. With it running in the background in docked mode, it
works really well especially in AwesomeWM. Currently, I have it set to
auto-hide when I type and show when it detects that it needs text input. An
example is when I open a new tab and onboard will popup to input. However, it
only shows when I'm in tablet mode. Great job, onboard folks.
