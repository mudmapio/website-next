---
title: 'Not just another network tool'
excerpt: 'Mudmap is a pfSense cloud management tool that lets you remotely manage all your devices from one dashboard.'
coverImage: '/assets/blog/hello/post-1.jpg'
date: "2021-03-20" 
author:
  name: Dan
  twitter: dansult
ogImage:
  url: '/assets/blog/hello-world/post-1.jpg'
---


Mudmap is a *pfSense* cloud management tool that lets you remotely manage all
your devices from one dashboard.

### The origin

I have always admired the ease and simplicity of *pfSense*, having been both a
consumer and manager of several in the past. For its cost, the feature set is
superior to what you can get with many other competitors, and the support has
been great.

Nothing comes without its downside, and it wasn't until I was the sole network
engineer responsible for managing a collection of *pfSense* devices that I learned 
of its greatest shortcoming; the lack of central management functionality. 
This really became apparent when I was dealing with a handful at a time and 
needed to remote in to make changes.

The problem with remote access to individual devices is not that its *just*
monotonous, repetitive, and soul-crushing but that it can push you to make
silly mistakes. Repetitive tasks such as making edits to firewall alias lists
or rules across many devices can lead to mistakes as your concentration wanes.
For a firewall, that really isn't good enough.

Sometimes, as the only network engineer, you are effectively on-call all day
and night. When you aren't actually
*on-call* it is okay to not take your laptop away with you, or to generally not
have access to it within your mandated timeframe. Though, no business really cares
if you're not *on-call* only that you fix the network issue that's disrupting
your network operations, or is preventing other employee's
from accessing their infrastructure. I learned this the hard way when I did not
have access to a machine with the required key authentication and was unable to fix a
network issue for several hours. How I longed for a cloud dashboard.

That is how Mudmap became an idea.

### Big corp defaults

Most network engineers are familiar with the big names, maybe even cut their
teeth using [Cisco IOS] before [iOS] even existed. The big names are known for
their offerings, high costs, and ubiquitousness within the networking scene.
Most offer a central management platform for their firewall products but that
default comes at a higher cost than many businesses can afford to pay.

So it pains me to say that some Managed Service Providers (MSP), and IT service
professionals are offering these big name platforms over tools such
as *pfSense* (and OPNSense). Why, because the big names offer something *pfSense*
does not, central management. When you're an IT shop with 50 or 100 clients, and
they are asking to keep you on retainer so that network issues can be diagnosed
and fixed under contract, it
does make sense to use a product with this functionality. But, some clients will not pay
the premiums for this, often neglecting a proper firewall all together. This state
of affairs can
have [dire consequences for some of these businesses][consequences]. Using 
Mudmap can give you the ability to provide a great product at lower price whilst
keeping the management burden of each device low.

### What is central management

Within the Mudmap context, it means to manage all *pfSense* devices which are
registered within the application from one location. Mudmap can be your
firewall's single source of truth as it provides near real-time updates as well
as on-demand configuration changes. At a glance, you are able to see the status
of each device or get detailed information about a particular firewall without 
leaving your browser.

Once registered, devices can be managed within the application. This negates
the need for those repetitive and monotonous connections made to each device
individually. It also allows you to access devices from machines other than
those which have the requisite keys, passwords and, or VPN configurations.
Whilst Mudmap uses strong protections inside the application, it removes the 
*need* for administrators to have these for *each* device just to view or make changes.

The user interface is also easy to use, and its layout familiar as it models
the current *pfSense* interface. Details, images and videos are coming soon
showcasing how it looks and feels.

### How is it achieved

Mudmap makes heavy use of application programmable interfaces (API) and secure
shell (SSH). It uses an agent-based approach through the installation of a BSD
package onto the base device. This grants access to the same functionality that
a user has when accessing the graphical user interface. The agent, transport
layer, and service accounts are all created to provide a robust and layered
approach to the device's security posture. Mudmap does not lower the overall
security of your device - there are no trade-offs to be made. Mudmap integrates
with *pfSense*'s own authentication mechanisms and adds extra layers to provide
a piece of mind to the users.

### How is this helping me save money or time

If you are a busy professional responsible for securing the network of
your own, your customers or thinking of doing so and, you would like to use 
*pfSense* then Mudmap is for you.

Out of the box, Mudmap lets you:

- Manage multiple devices through an easy-to-use interface,
- Get near real-time updates for all devices, 
- Negate the need for individual connections to each device,
- Remotely start, stop and restart services on any of your firewalls,
- At a glance get the health status of any device,
- Remotely backup the device configuration of one, or all devices.

All of that, for the low price of a *pfSense* firewall, and a small
subscription fee. You don't need an expensive firewall with a worse user
experience simply because it has this - now *pfSense* does too!

### Contact and updates

The launch will be announced across all the channels available
including [Twitter], [Indie Hackers], and via the newsletter. Please subscribe
to that, so you get the latest updates and announcements - or reach out to me
via [my email] if you would rather remain confidential or want to ask specific
questions.

[Cisco IOS]: https://en.wikipedia.org/wiki/Cisco_IOS
[iOS]: https://en.wikipedia.org/wiki/IOS
[consequences]: https://cybersecurityventures.com/60-percent-of-small-companies-close-within-6-months-of-being-hacked/
[twitter]: https://twitter.com/mudmapio
[indie hackers]: https://www.indiehackers.com/product/mudmap
[my email]: mailto:dan@mudmap.io
