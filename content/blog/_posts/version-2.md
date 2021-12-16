---
title: 'A new Mudmap is coming'
excerpt: 'Mudmap is getting a much needed upgrade behind the scenes. What does this mean for you?'
coverImage: '/assets/blog/what-is-pfsense/firewall.jpeg'
date: '2021-12-17'
author:
  name: Dan
  twitter: dansult
ogImage:
  url: '/assets/blog/what-is-pfsense/post-1.jpg'
---

Mudmap started as an idea and spawned into the application it is today. A lot of the initial 
work done to make the Mudmap you're seeing now, was done with the best intentions. Since the 
first code commit to now, a lot has changed. A lot more will change in the future still. That is 
why Mudmap is currently undergoing an extensive upgrade behind the scenes - to future proof the 
platform and allow for faster feature releases.

What does this mean for you?

 * Features and updates will be rolled out faster
 * The application is much more resilient to errors
 * Improvements to the user interface make it easier to understand with less clutter
 * Device tracking now includes audit trails, the first being email updates when devices are added or deleted, and
 * An improved authentication mechanism (Mudmap is now using [Auth0])

That's the now but there's much more to come in the future as well, such as:

 * Updated payment methods and pricing structure (scaled discounts for more devices registered)
 * More pfSense integrations rolled out (this is seriously lacking but the upgrades will make this a cinch now)
 * Support for Multi-factor authentication is on the cards 

Taking an even longer time horizon, we're looking at things such as grouping devices by category,
or "client", multi-tenancy access so that teams can sign up instead of a single access user and 
[more][roadmap]. 

For the time being, Mudmap (version 2, I'm calling it) is still in development. I'm expected it 
to be released some time in the new year but dates will be confirmed in the next couple of weeks. 


[auth0]: https://auth0.com
[roadmap]: /roadmap