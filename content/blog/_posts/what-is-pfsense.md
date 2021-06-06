---
title: 'What is pfSense?'
excerpt: 'pfSense® is a free open source firewall and router software distribution based upon FreeBSD. Simple, powerful, and packed with high-end features.'
coverImage: '/assets/blog/what-is-pfsense/firewall.jpeg'
date: '2021-04-07'
author:
  name: Dan
  twitter: dansult
ogImage:
  url: '/assets/blog/what-is-pfsense/post-1.jpg'
---


*pfSense*® is a free open source firewall and router software distribution based
upon FreeBSD. Simple, powerful, and packed with high-end features.

## Firewalls and Security

Every business is a software business. It sounds cliché, but it is true
today. More and more businesses - large and small - are internet-facing. Many
of these businesses use the internet to make transactions, store sensitive 
information about clients, or otherwise depend upon the assets and infrastructure
within their organisation.

The need for a firewall as the front door to your organisation is growing day by
day. Having strong security is not just *nice to have* in the 2020s, it's
nearly a requirement. In fact, many government bodies recommend you take active
precautions, listing [firewall][0] and other network-based defences as strong mechanisms
for reducing business impact.

Cost is always a factor. The cost of purchasing a pfSense firewall could be
as low as a few hundred dollars, depending on your requirements and needs. More
likely, it will be a few thousand dollars for a single rack-mounted unit, or a
few dollars a day if cloud-hosted. But, those figures pall in comparison to the
losses and damages incurred from suffering a breach. 

Research by IBM and the Ponemon Institute concluded that the average cost of a
cyberattack is [3.86 million USD][1]. Most startling is the difference in costs 
per staff member between businesses with [greater than 25,000 employees and 
those with less than 1000.][2] 

> Large organizations with more than 25,000 employees had an average cost of a data breach of $5.11 million or $204 per employee.
> Smaller organizations with 500-1,000 employees had an average cost of $2.65 million or $3,533 per employee. 
 
## How Does a Firewall Protect You?

Firewalls provide the first line of defence against network intrusion and can limit
any damage done even if attackers do get inside. They work by allowing or denying
traffic from inside and outside your network. Whereas, routers supplied
by internet service providers are often set to allow all. Worse still, many 
routers provided for business and home use are often locked down by the vendor
to prevent you from making any changes. I have seen several where 
DNS server addresses were unable to be changed. This is certainly bad behaviour on behalf 
of the vendor as they do this to commoditize your DNS queries by selling your
browsing habit data to third parties.

A good firewall will allow the user to define rules and lists tailored
to their requirements. By setting rules, a firewall can allow legitimate
traffic to flow freely whilst ensuring any unwanted traffic is blocked. It makes
up a piece of the security onion but is an important step that must be taken 
to create a secure network within any organisation. 

Thankfully, products like pfSense exist to fill this void.

## Integrating pfSense

The beauty of products such as pfSense lies in their extensibility and low barrier
to entry. Not all businesses can afford security specialists, nor can every 
owner justifiable be an expert in this area. pfSense, however, is a great
tool for beginners, small businesses, experts and major
enterprises. It packs a whole load of features, for the novice and expert alike.

### Features 

- LAN or WAN Routing
- VPN Client and Server
- DHCP Server (including static assignment)
- DNS Forwarder or Resolver
- Network Address Translation (inbound/outbound)
- Load Balancing
- High Availability
- Captive Portal
- IPv4 and IPv6 capable (concurrent)
- Dynamic DNS
- GeoIP Blocking
- VLAN (802.1q)
- Static Routing
- Reverse Proxy
- Easy Backups
- [and more...][4]

pfSense provides **a lot** of features out of the box. The great news is, it can
be scaled to the business needs. All pfSense hardware comes with the same feature
set - there are no *upgrades* or *add-ons* for an additional cost. A business might
outgrow the hardware pfSense lives on, but the software will still be the same.

For small businesses, freelancers or consumers, pfSense can also be installed
on commodity hardware or virtualized. This makes testing, configuring, and 
restoring pfSense easy, as it can be done outside the main business network. 
The landscape is not just limited to pfSense, other great vendors include,
[OPNSense][3], [IPFire][5], and [Untangle][6] to name but a few.

## Defence is Paramount

No matter which vendor is used, your business' defence starts with a solid 
firewall. A properly configured firewall will go a long way to protecting 
any network it is attached to. The internet is a powerful tool for every
business, but it can also be a great vulnerability. Integrating a simple firewall
such as those listed in the article will elevate you from the easy low-hanging
fruit that is often targeted by criminals.

To learn more about networking, firewalls, or pfSense there are some helpful
resources below. 

### Resources

**pfSense**

- [Documentation][7]

**Networking**

- [TCP/IP Guide][8] (Old but so are networks!)
- [Network+ Course][9] (a 9.5-hour course on YouTube)

[0]: https://business.gov.au/online/cyber-security/how-to-protect-your-business-from-cyber-threats#secure-your-devices-and-network
[1]: https://www.ibm.com/security/data-breach
[2]: https://www.upguard.com/blog/cost-of-data-breach#toc-are-small-businesses-affected-by-data-breaches-
[3]: https://opnsense.org/
[4]: https://www.netgate.com/solutions/pfsense-plus/features.html
[5]: https://www.ipfire.org/
[6]: https://www.untangle.com/
[7]: https://docs.netgate.com/pfsense/en/latest/
[8]: http://www.tcpipguide.com/free/
[9]: https://www.youtube.com/watch?v=qiQR5rTSshw
[10]: https://www.businessinsider.com.au/report-cybercrime-costs-the-world-us465-billion-annually-2015-9
