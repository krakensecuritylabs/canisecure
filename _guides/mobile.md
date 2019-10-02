---
title: "Mobile Security"
keywords: "mobile"
updated: "2019-08-20"
category: "Mobile"
---

**Heed this or perish.**

Let's begin with the assumption that within 24 hours your usual mobile phone number will be hijacked by social engineers.  They will use your number to gain access to every account you own that utilizes phone-based authentication and account recovery, like your email.  They will then use that access and information to compromise more accounts, and harass, steal, blackmail and extort you and your associates.

In the past month, there've been at least 10 cases of people publicly involved in the cryptocurrency scene being victimized by mobile phone hijacking.  The consequences have been expensive, embarrassing, enduring, and, in at least one case, life-threatening.

***If you are in any way publicly involved in cryptocurrency, consider yourself an active target.  You need to immediately audit the security of your accounts -- especially email, social media, social networking and mobile phone.***

Somehow, the masses have been led to believe that phone numbers are inextricably bound to identities and therefore make good authentication tools.  There's a reason that Kraken has never supported SMS-based authentication:  The painful reality is that your telco operates at the security level of a third-rate coat check.  Here's an example interaction:

**Hacker:**  Can I have my jacket?\
**Telco:** Sure, can I have your ticket?\
**Hacker:**  I lost it.\
**Telco:**  Do you remember the number?\
**Hacker:**  Nope, but it's that one right there. 😉\
**Telco:**  Ok cool.  Here ya go.  Please rate 10/10 on survey ^_^

So, we need to achieve three things:

1\.  A shift in the way we think about phone numbers\
2\.  The securing of your phone number (to the extent possible)\
3\.  The separation of your phone number from any security functions

1\. Changing the way we think about phone numbers
-------------------------------------------------

**Telcos **-- Give up the security theater.  Start thinking of yourselves more like Brinks and less like Toys "R" Us.  Or, just be honest about what you offer: a gamble.

**Service Providers** -- Stop accepting (and requiring) SMS as a method to "recover" or bypass all other security guides on an account.  You're custodians of valuable identities and information whether you like it or not.  You too need to think of yourselves more like a vault.  Until Telcos shape up, you're perpetuating the misconception that phone numbers are secure.

**People** -- Understand that phone calls and SMS should only be used when you have no alternative, secure mode of communication.  Certainly, do not mistake a phone number for an identity.  Try to stick to services where you actually own your identity, where your communications are private, and where you can authenticate your interlocutor.  See: [Signal](https://whispersystems.org/) and [BitMessage](https://bitmessage.org/wiki/Main_Page) for a good start.

These problems of ownership in mobile numbers, email accounts, domains and other virtual identities are low hanging fruit for Blockchain entrepreneurs.  Some attempts have already been made and more solutions are on the horizon.  I'm hopeful that we'll work this out in the next few years.

2\. Securing your mobile phone number and telco account
-------------------------------------------------------

**Call your telco and:**

-   Set a passcode/PIN on your account
    -   Make sure it applies to ALL account changes
    -   Make sure it applies to all numbers on the account
    -   Ask them what happens if you forget the passcode
        -   Ask them what happens if you lose that too
-   Institute a port freeze
-   Institute a SIM lock
-   Add a high-risk flag
-   Close your online web-based management account
-   Block future registration to online management system
-   Hack yo' self
    -   See what information they will leak
    -   See what account changes you can make

**Secure the email address associated with your telco account**

-   Create a new email address that you only use with your telco
    -   Assume that telco agents will leak this to any caller
    -   Try something like:
        -   STOP.DO.NOT.PORT.THIS.NUMBER@kraken.com
            -   they might think twice before doing something stupid
        -   SKEET.SKEET.SKEET.SKEET@kraken.com
            -   they might be prohibited from saying this on the call
        -   ijljj1IiiOlI0oiiljlIlj1llillOjlli0Ijilolljoij1l0jilI@kraken.com
            -   they might not be able to accurately read it back to the attacker
    -   Make sure the email account is extremely secure
        -   Passcode bypass instructions will go to this email account
        -   Instructions on securing email, below

**Consider switching to a more secure telco, without a human interface**

-   Google Fi
    -   No phone support agents
    -   No physical locations
    -   No problems
-   No known, comparable other options

**Consider setting up a proxy phone number to hide your real one**

-   Google Voice
    -   Port your old main number to Google Voice
    -   Get a new number with Telco and never use it for anything but GV
    -   Handle all calls through Google Voice
-   No known, comparable other options

**Pray**

-   Sacrifice your virgins now because, ultimately, Xenu's graces are the only thing preventing your phone number from being ported to a 12-year-old in Syria
-   There is no 100% sure way to prevent the theft of your phone number

3\. Separating your phone number from security functions
--------------------------------------------------------

**Upgrade to secure 2FA methods wherever possible**

-   Google Authenticator
-   Yubikey
-   U2F security key

Use SMS only where absolutely necessary and consider whether you want it at all if it will also be used for account "recovery" or password bypass.  Ask yourself what are the chances of your password being stolen vs your mobile phone number being stolen.

**If you must use SMS, you have two options:**

**Option A:**

-   Get a secret, low tech, pre-paid burner phone
    -   Pay cash for the device and minutes
    -   Don't attach your identity (name, address, birthday) to it
    -   Don't attach your credit card to it
    -   Don't tell anyone about it
    -   Use it exclusively for SMS two-factor and account recovery
    -   Change it if any services you use it with get hacked

**Option B (recommended):**

-   Get a Google Voice (with SMS) number
    -   Don't attach your identity (name, address, birthday) to it
    -   Don't attach your credit card to it
    -   Don't tell anyone about it
    -   Don't use the accompanying email address, drive or other services
    -   Use it exclusively for SMS two-factor and account recovery
    -   Change it if any services you use it with get hacked
    -   Set up Google Authenticator or U2F as the only two-factor method
    -   Disable account recovery

An advantage of Option B is that you can (relatively) securely share access to the SMS messages through SMS-to-email forwarding rules, and by sharing the two-factor method's seed.

It is recommended that you keep your interactions with this Google Voice number and its SMS messages to a device separate from your primary computer and smartphone.  An old smartphone would be a good option.

Read the rest of this guide at <https://blog.kraken.com/post/219/security-advisory-mobile-phones/>.
