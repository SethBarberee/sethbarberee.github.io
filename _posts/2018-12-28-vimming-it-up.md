---
layout: post
title: "Vimming it up"
date: 2018-12-28
tags: [vim]
---
So Christmas break is happening right now and I don't have classes to worry
about. That's amazing that I don't have to be frantically coding some random
project that I will probably never use again. What it does mean is that I can
do stuff that I want to do. A few examples to illustrate my point:

 * My Python script to sort a JSON file of ships from Azur Lane
 * Figuring out QMK keyboard stuff
 * Learning how to use VIM better <--- MOST IMPORTANT

For the month of December, some redditors from [r/vim](https://www.reddit.com/r/vim/) created 
an [advent calendar](https://vimways.org/2018/) for Vim. With this calendar, 
articles are posted everyday to learn something new about VIM. In all honestly,
I've learned quite a bit. 

## Vimways to the rescue
I consider myself quite a beginner still with Vim. I have converted to using
it daily for any bit of code that I have to write. But with that commitment, I
have amassed a decently sized init.vim that can be a hassle to manage.
[December 3](https://vimways.org/2018/from-vimrc-to-vim/) was a great help as
it demonstrated how to split up my init.vim. You can see how it looks 
[here](https://github.com/SethBarberee/dotfiles/tree/master/neovim/.config/nvim). 
Cool, right? Pretty much a file for each plugin that I have installed... 
And Vim loads them on startup, wow. Combine the load guards in those files
with vim-plug's lazy-load ability and I can narrow out what gets loaded and
what doesn't. Thanks to those people who submitted articles to Vimways! It
really helped a lot. If you haven't read them yet, give them a look [here](https://vimways.org/2018).

## Hacking around
Well, now that formalities are exchanged with Vim. The real learning begins
now as I dive off the deep cliff by looking at other people's configs and
tweak mine to better serve myself. Maybe mess with folding?? Who knows....
