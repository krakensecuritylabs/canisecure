---
title: "Mobile Phone"
updated: "2019-10-23"
category: "Personal"
---

More of our lives exist on a mobile device today than on a personal computer. It is vital that you are responsible with your mobile device to ensure that if it were to fall into the wrong hands, you are not putting your digital life at risk. 

First, you should think about the last time you purchased a mobile device. If your device is more than 3 years old, it is likely no longer supported by the manufacturer, meaning you will no longer be getting software updates. If this is the case, it is time to get a new phone. You don't necessarily need to go to your carrier's store and shell out $1,000 but having a mobile device that is still supported and patched by the manufacturer is extremely important. 

Now that you have a device that is still getting updates, go ahead and update it. Make sure to keep the OS and the apps that you have running on it up-to-date at all times. 

Next, make sure you set a passcode on the device to something greater than 4 numbers. In addition to protecting the device from being accessed by anyone other than you, setting a passcode will also turn on device-level encryption automatically for many mobile manufacturers. 

Some devices have fingerprint or facial recognition that can be used instead of a passcode. These are generally acceptable to use, but you need to consider the environment you operate in. If you live or travel frequently in an area where searchers and random law enforcement stops are common, you should not enable these features or if you normally use them you should proactively disable them when your environment changes. You can claim to forget a passcode, but you can't forget your fingerprint or face.

### Mobile Number Hijacking / SIM Swap Attacks

Many attacks, especially in the cryptocurrency industry, happen through social engineering phone support by remote attackers but the FTC's example points out that it's trivial for an attacker to make a fake ID, walk in to a physical store and have them override your security features. Read the following accounts of successful attacks:

-   [Coinbase Mobile Hijacking](https://medium.com/the-coinbase-blog/on-phone-numbers-and-identity-423db8577e58).

-   [FTC CTO's Mobile Hijacking](https://www.ftc.gov/news-events/blogs/techftc/2016/06/your-mobile-phone-account-could-be-hijacked-identity-thief).

-   [SIM Swapping Scheme](https://apple.news/A5RrcZMjaSCymMBRpFFrH6g).

For more background on mobile security weaknesses, read the following:

-   [How Social Engineering is Done](http://www.businessinsider.com/hacker-social-engineer-2016-2).

-   [Telco Employee Speaks on Security](https://news.ycombinator.com/item?id=8541313).

-   [Wired - Stop Using SMS 2FA](https://www.wired.com/2016/06/hey-stop-using-texts-two-factor-authentication/).

-   [NIST Deprecating SMS 2FA](https://www.schneier.com/blog/archives/2016/08/nist_is_no_long.html).

Understand the outcome of a mobile number hijacking

1.  Privilege escalation

    -   Attacker can gain access to any services relying on phone/SMS as account recovery options.

    -   Attacker can gain access to banking and utilities which pre-verify you by the phone number you're calling in from.

    -   If the attacker can get in to your email account, they often can learn of and take over your other accounts from there.

3.  Phishing

    -   Attackers will use your phone to impersonate you, phishing your friends, family and coworkers to be their next victims.

    -   Attackers will use information collected from your associates to further escalate their attack on you.

5.  Harassment

    -   Attackers will take advantage of your phone's connection to your address to order emergency services such as Police Swatting (where the call 911 from your number a report a murder in your home resulting in the police kicking down your door) or Fire & Ambulance services where you will be responsible for the charges if your city charges for such services.

Secure your account/phone number with your carrier

You can request that your cell phone provider enable additional security measures to secure your account. Each carrier is different so see below some of the measures/experiences by carrier.

A couple of items to do to mitigate the risk of being attacked via your mobile phone:

1.  Call your carrier and ask them to add an enhanced security lock to your account to prevent them from issuing a new SIM card with your number or allowing someone to port your number to a new carrier. Also ask them to put a note on your account that you have been targeted in the past for account take over (it is OK to lie about this here). This note will then be seen by the customer service rep should someone attempt to take over your number in the future.

2.  Login to your personal email accounts (eg. Gmail)

    -  Enable 2FA (hardware token like a Yubikey is best, but Google Authenticator can also be used).

    -  Remove your mobile phone number from account recovery.

    -  Remove any backup emails attached to your account.

3.  Login to all of your critical accounts like online banking, credit cards, Amazon and social media accounts that are linked to your email account and turn on 2FA (non-SMS wherever possible, if not possible use a Google Voice number, not your actual mobile number).

Typically when an attack happens, your number will be ported to a new SIM, the voice/data plan will stop working on your phone, your number is then used by the attacker to recover access to your email account, then each of your personal accounts will have their passwords reset via email if 2FA is not enabled.

There have been instances were Step 1 above isn't good enough to prevent a phone number takeover, so having Step 2 and 3 in place will prevent a personal cascading disaster should this happen to you.

Other mobile security enhancements include:

-   PIN or Passcode & Mandatory SMS Verification: to be required for any subsequent changes on your account.

-   Port Freeze: to prevent your phone number being reassigned to a different carrier.

Identify and Respond when your number has been hijacked

Telltale signs include

-   Phone stops receiving a signal in an area where the signal is generally good.

-   Phone displays "Emergency calls only" or "No Network".

-   You are unable to make or receive calls.

-   When not on Wi-Fi, data services don't work.

How to respond if your number has been hijacked

-   Immediately contact your carrier and ask them to:

-   Reassign the number back to you (could take days).

-   Stop the number from sending/receiving any calls and SMS until it's reassigned to you.

-   Do everything in the above section to make sure it doesn't happen again.

-   Immediately attempt to remove SMS recovery from key accounts.

-   Immediately let your friends and social network know to be on alert for phishing attempts coming from your phone.

-   Call your local police and file a report to preempt a swatting by the harassing attacker whose ransom you have not paid.

-   Later, check your bill and make sure you were not charged for any overage, toll calls or unauthorized charges after the attack.

*(This guide is part of a [series on Personal Security](/news/2019-10-23-personal-security-series).)*
