---
title: "LinkedIn"
updated: "2026-03-02"
category: "Account Security"
links: {"LinkedIn Security Best Practices":"https://www.linkedin.com/help/linkedin/answer/a1375084","LinkedIn Privacy Settings":"https://privacy.linkedin.com/settings","LinkedIn Passkey Setup":"https://www.linkedin.com/help/linkedin/answer/a1621596","LinkedIn Data Processing Objection":"https://www.linkedin.com/help/linkedin/answer/a1338610"}
---

Don't make yourself a target through your LinkedIn profile if you can avoid it. If you work in a higher-risk field, like cryptocurrency, consider not listing your location, employer, or specific job functions. LinkedIn is one of the most commonly used platforms for social engineering and spear-phishing attacks, so treat your profile as a public-facing asset that adversaries will study.

## Locking Down Your Account

### Account access

Navigate to [Sign in & Security → Account access](https://www.linkedin.com/psettings/sign-in-and-security) and review the following settings:

-   **Email Addresses** - Any email you have here must have a strong password, 2FA (authenticator app or hardware key, no SMS) and disabled SMS recovery capabilities.
-   **Phone numbers** - Remove any associated phone numbers. If a phone number is already used for 2FA, change your 2FA settings to use an Authenticator App or passkey instead. Do not add a phone number for "Use for password reset".
-   **Change Password** - Make sure this password is long, complex, and unique. Use a password manager to generate and store it. If you haven't changed this in a while, change it now.
-   **Passkeys** - LinkedIn now supports passkey sign-in (FIDO2). This lets you authenticate using your device's biometrics (Touch ID, Face ID, Windows Hello) or a PIN instead of a password. You can register up to 5 passkeys. Only set up passkeys on devices you own and control — never on public or shared computers. To set this up, go to Sign in & Security → Passkeys → Set up a passkey and follow the prompts. If you use a hardware security key like a YubiKey, you can register it as a passkey here as well.
-   **Where you're signed in** - Review this and remove any session other than the one you are on. You will be asked to log in again on your other devices. This clears any rogue sessions that may exist. Make a habit of checking this periodically.
-   **Two-Step Verification** - Enable this using an Authenticator App (such as Microsoft Authenticator, Authy, or Google Authenticator). Do not use a phone number (SMS) for this. LinkedIn may occasionally prompt you with a security verification when signing in from a new device or unfamiliar location — this is expected behavior.

### Visibility settings

Your [Visibility settings](https://www.linkedin.com/psettings/data-visibility) have the most impact on your privacy. Here you can control who can see your email address, connections, last name, and more. We recommend reviewing every option and setting most to the most restrictive choice available.

Key settings to lock down:

-   **Profile viewing options** - LinkedIn offers three modes: full visibility (your name and headline shown when you view others), semi-private (only your job title and industry shown), and private mode (fully anonymous). Choose **Private mode** if privacy is a priority. Note: with a free account, enabling private mode means you also lose the ability to see who has viewed your profile.
-   **Who can see or download your email address** - Set this to "Only visible to me" or first-degree connections at most.
-   **Who can see your connections** - Set to "Only you". Your connection list is a goldmine for social engineers.
-   **Who can see your last name** - You can abbreviate your last name to just an initial.
-   **Profile discovery and visibility off LinkedIn** - Review whether your profile is discoverable by email address, phone number, or through search engines. Consider turning off public profile visibility entirely if you don't need recruiters to find you — go to your public profile settings and switch "Your profile's public visibility" to Off. This prevents non-LinkedIn members and search engines from seeing your information.

### Site preferences

LinkedIn allows you to change content and display settings in your [Site preferences](https://www.linkedin.com/psettings/account-preferences). Pay attention to:

-   **Autoplay Videos** - Turn this off to reduce attack surface from any future video-based exploits.
-   **Name, Location, Industry** - This is where a lot of privacy-relevant information comes from within LinkedIn.
    -   Your headline leaks where you currently work. Consider changing this to "YOUR_ROLE at Undisclosed" if you work somewhere that might put you at a higher risk.
    -   Current position maps to what your current position is in your profile. Leave this as-is for now and customize your profile directly later.
    -   Uncheck "Show education in my intro".
    -   Country/Region - Leave as-is or change to something generic.
    -   Zip Code - Remove this if there is anything there.
    -   Industry - Select something other than Financial Services, Banking, Cryptocurrency, etc.
    -   Contact Info - Click the edit icon and clear out anything sensitive. Your email here is the email you log in with.
    -   Summary - This is your bio. Avoid leaking sensitive info that might make you a target (specific projects, security responsibilities, asset management details, etc.).
    -   Media - Remove anything that might reveal sensitive details about your workplace, internal tools, or other operational info.

### Partners & services

Review your connected services at [Partners and services](https://www.linkedin.com/psettings/partners-and-services). Ask yourself: do you really need your Microsoft account linked with your LinkedIn account? Does LinkedIn need to be connected to your Twitter/X account?

Also check for **Permitted services** in the [Data Privacy](https://www.linkedin.com/psettings/data-privacy) page. Review whether each permitted service is still needed. Revoke access for any service you no longer actively use.

### Advertising preferences

On the [Advertising Data](https://www.linkedin.com/psettings/advertising-data) panel you can change what data is used to target ads to you. In the interest of privacy, we recommend setting everything to "Off" on this page.

As of November 2025, LinkedIn expanded its data-sharing arrangement with Microsoft. For users outside the EEA, UK, and Switzerland, LinkedIn now shares additional data with Microsoft and its affiliates — including profile information, feed activity, and ad engagement details — for cross-platform ad targeting. Disabling the advertising data options here helps limit this exposure.

## Protecting Your Data From AI Training

This is a critical privacy setting that did not exist prior to 2024. LinkedIn now uses your data — including your profile, posts, and activity — to train generative AI models. **This setting is on by default.**

### Opt out of generative AI training

Navigate to **Settings & Privacy → Data Privacy → Data for Generative AI Improvement** and toggle off **"Use my data for training content creation AI models"**.

Be aware: opting out only prevents future data from being used. Any data LinkedIn collected before you opted out may have already been used for training.

### Opt out of non-content AI models

The toggle above only covers content-generating AI. LinkedIn also uses your data for other AI models related to personalization, trust, security, and anti-abuse. To object to this processing, you need to submit a separate **[Data Processing Objection Form](https://www.linkedin.com/help/linkedin/answer/a1338610)**. Select "Object to processing for training content-generating AI models" and submit the request. You will receive a confirmation once your preferences are updated.

### Review AI-related features

Check **Settings & Privacy → Data Privacy → How LinkedIn uses your data** for any additional AI-related toggles that may appear over time. LinkedIn continues to roll out new AI features, so revisit this section periodically.

## General Recommendations

-   **Review your profile as if you were an adversary.** What could someone learn about your role, access level, employer, or daily routines from your profile? Minimize anything that could be used to craft a targeted attack.
-   **Be cautious with connection requests.** Fake profiles are common on LinkedIn and are frequently used as the first step in social engineering campaigns. Verify the person is real before accepting.
-   **Watch for phishing via LinkedIn messaging.** InMail and connection messages are commonly used to deliver phishing links or malicious attachments. Be especially skeptical of unsolicited job offers, "urgent" requests, or messages from recruiters you don't recognize.
-   **Revisit these settings quarterly.** LinkedIn frequently changes its privacy options and defaults. New features often default to the least private setting. Set a reminder to audit your settings every few months.
