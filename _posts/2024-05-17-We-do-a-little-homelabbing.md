---
layout: post
title: We do a little homelabbing
date: 2024-05-17
tags: [homelab, tailscale, proxmox]
---

I arise from the grave with another post! I have acquired 3x HP ProDesk 405 G5
Minis that I am clustering together with [Proxmox](https://www.proxmox.com/en/). It is definitely a lot of
learning (and Google searches) to figure things out but the payoff has been
amazing. I'm able to login with [Tailscale](https://tailscale.com/) from anywhere and access my servers
and other services that I'm running at home. Side benefit, I get to use PiHole
to surf the web safely and remotely.

## The Champion: Tailscale
With any homelab, everyone comes across the question of VPN/remote access. I
even bought a domain so I could use remote proxy things and access that way.
But that's way too complicated for smooth-brained me. No one will be accessing
this besides me and I keep hearing about Tailscale (or reading about) from Xe
Iaso. It's free and supposedly does it all so why not that? It handles the DNS
and authentication for me. Plus, I don't need the custom domain but I already
bought it. I'll find something for it, don't worry.

## Accessing Proxmox through Tailscale
Now, I could be a simpleton and just do the `http://tailscale IP:8006` to access the
UI. I guarantee there will be times that I will forget the number and I would
rather just do `https://tailscale-name.ts.net` and get the UI. So, let's just
use `tailscale serve 8006 /` and I'm a happy camper. I can access the web UI
as long as I'm on my Tailscale network.

## Grafana through Tailscale
Similar method here with Tailscale where I will use `tailscale serve` but I
will also combine it with the authentication headers that Xe Iaso has blogged
about before. This means I can just go to
`https://grafana-tailscalename.ts.net` and boom! I can blossom into data nerd
who stares at charts and graphs of my homelab.

## DNS being DNS
With all the fun stuff set up, you would think it would be now just a simple
`tailscale up` on my laptop when I'm on the go and I get to connect to my
labs. Except, you are wrong! I was going through so many searches and trying
to figure out why only my laptop did this. My desktop, which also runs Arch
Linux, didn't have this problem so why this one? Welp, it involves `systemd`
and something I did in `/etc/systemd/resolved.conf`.

From Tailscale documentation, Tailscale will overwrite the resolve.conf file
and then redirect the DNS to MagicDNS with is `100.100.100.100`.

```conf
[Resolve]
# Some examples of DNS servers which may be used for DNS= and FallbackDNS=:
# Cloudflare: 1.1.1.1#cloudflare-dns.com 1.0.0.1#cloudflare-dns.com 2606:4700:4700::1111#cloudflare-dns.com 2606:4700:4700::1001#cloudflare-dns.com
# Google:     8.8.8.8#dns.google 8.8.4.4#dns.google 2001:4860:4860::8888#dns.google 2001:4860:4860::8844#dns.google
# Quad9:      9.9.9.9#dns.quad9.net 149.112.112.112#dns.quad9.net 2620:fe::fe#dns.quad9.net 2620:fe::9#dns.quad9.net
DNS=8.8.8.8 4.4.4.4
```
Oh, oh no. I forgot I was defaulting to Google. No matter what tailscale was
doing, it would still use Google DNS. Welp, I'll just comment that line back
out aaaaaand...

```c
resolvectl status:

Global
           Protocols: +LLMNR +mDNS -DNSOverTLS DNSSEC=no/unsupported
    resolv.conf mode: foreign
  Current DNS Server: 100.100.100.100
         DNS Servers: 100.100.100.100
Fallback DNS Servers: 1.1.1.1#cloudflare-dns.com 9.9.9.9#dns.quad9.net 8.8.8.8#dns.google 2606:4700:4700::1111#cloudflare-dns.com 2620:fe::9#dns.quad9.net 2001:4860:4860::8888#dns.google
          DNS Domain: example-tailscale.ts.net # NOTE: not the actual domain
```

Ah, there we go. Now, things work just fine.
