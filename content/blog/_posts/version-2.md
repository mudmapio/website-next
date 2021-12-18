---
title: 'A new Mudmap is coming'
excerpt: 'Mudmap is getting a much-needed upgrade behind the scenes. What does this mean for you?'
coverImage: '/assets/blog/version-2/logo.jpg'
date: '2021-12-17'
author:
  name: Dan
  twitter: dansult
ogImage:
  url: '/assets/blog/version-2/logo.jpg'
---

Mudmap started as an idea and spawned into the application it is today. A lot of the initial 
work done to make the Mudmap you're seeing now, was done with the best intentions. From the 
first code commit to now, a lot has changed. A lot more will change in the 
future too. That is why Mudmap is currently undergoing an extensive upgrade 
behind the scenes - to future-proof the platform and allow for faster 
feature releases.

What does this mean for you?

 * Features and updates will be rolled out faster
 * The application is much more resilient to errors
 * Improvements to the user interface make it easier to understand with less clutter
 * Device tracking now includes audit trails, the first being email updates when devices are added or deleted, and
 * An improved authentication mechanism (Mudmap is now using [Auth0])

That's the now but there's much more to come in the future as well, such as:

 * Updated payment methods and pricing structure (scaled discounts for more devices registered)
 * More pfSense integrations rolled out, the upgrades will make this a cinch now, and
 * Support for Multi-factor authentication

Taking an even longer time horizon, we're looking at things such as grouping devices by category,
or "client", multi-tenancy access so that teams can sign up instead of a single access user and 
[more][roadmap]. 

For the time being, Mudmap version 2 is still in development. I'm expecting it 
to be released some time in the new year but dates will be confirmed in the 
next couple of weeks. After the new version goes live, there will be a 
grace period where both version 1 and 2 are live. The intent will be to 
shut down the current incarnation (version 1) at the conclusion of this 
grace period. 

Dates and timeframes will be well communicated over the next few weeks. But 
as a guide I would expect that version 1 will go offline somewhere around 
March 2022.

If you are interested in more technical details of the rewrite, you can 
read that [here][rewrite]


[auth0]: https://auth0.com
[roadmap]: /roadmap
[rewrite]: https://mudmapio.notion.site/Version-2-d78ca9bd813541738f7c71cfb9c95c9e
