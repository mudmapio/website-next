---
title: 'Mudmap servers are now static'
excerpt: 'You can now secure your firewall even further with Mudmaps static IP addresses.'
coverImage: '/assets/blog/static-ips/banner.png'
date: '2021-07-17'
author:
    name: Dan
    twitter: dansult
ogImage:
    url: '/assets/blog/static-ips/banner.png'
---

You asked for it. You can now secure your firewall even further with 
Mudmaps static IP addresses. 

## Static Server IP addresses

Mudmap's servers are now static, meaning you can lock down your devices SSH 
access. A load balancing service has also been implemented ensuring greater 
availability of the service. 

### Get Started

Detailed setup information can be found at the 
[documentation site][docs]. This should be the first pit stop on your Mudmap 
journey. The guide details how to get started and prepare your devices for 
integration into Mudmap. 

If you're already all over it and just need the IP addresses, they are:

- 52.33.116.20, and 
- 52.34.188.175

Ensure that *both* IP addresses are added to your rules as they are load 
balanced and failure to do so may result in errors.

I'm really happy to provide this level of security and assurance. As always,
any questions or issues can be directed to me at the [contact](/contact) page.

## Resources

Some handy resources:

- [pfSense alias][alias]
- [Mudmap setup guide][docs]

[docs]: https://docs.mudmap.io/preparing-devices#rules-ports-and-recommendations?ref=blog-static-ip
[alias]: https://docs.netgate.com/pfsense/en/latest/firewall/aliases.html
