---
title: "SIM Swapping Protection"
updated: "2026-06-08"
category: "Personal"
links: {"FCC SIM Swap & Port-Out Fraud":"https://www.fcc.gov/consumers/guides/sim-swapping","FBI IC3 Reporting":"https://www.ic3.gov","FTC Report Fraud":"https://reportfraud.ftc.gov","Have I Been Pwned":"https://haveibeenpwned.com"}
---

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:960px;margin:1.5rem auto;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" src="https://www.youtube.com/embed/UvqYtup1tsM" title="SIM Swapping Protection — Can I Secure?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Your phone number is a master key. Most online accounts will text a verification code to it, and many will let you reset a password "via SMS." So if a criminal can move your number onto a phone they control, they can walk straight into your email, bank, and social accounts — without ever touching your device.

That move is called a **SIM swap**. An attacker gathers a few personal details about you — often bought cheaply from data brokers or pulled from past breaches — then either social-engineers your mobile carrier into transferring your number to a new SIM, or abuses a self-service feature to port it away. Your phone suddenly loses service; the attacker's phone starts receiving your calls and codes. From there, account takeover happens in minutes.

The good news: SIM swapping is largely preventable, and the core defenses take an afternoon to set up.

## Lock Your Number at the Carrier

This is the single highest-leverage step, and it has changed in your favor. US carriers now offer **free, self-service locks** you can switch on yourself — you no longer have to call and ask a representative to "make a note" on your account. Turn on every protection your carrier offers:

-   **T-Mobile** — enable **SIM Protection** and **Account Takeover Protection** in the app under account security.
-   **Verizon** — enable **Number Lock** and **SIM Protection** in the My Verizon app under Account Security.
-   **AT&T** — enable **Wireless Account Lock** in the myAT&T app under your account profile.
-   **Other and non-US carriers** — ask for a **port freeze** and require a **separate account PIN or passcode for any SIM change or number transfer**.

US carriers are now required to verify your identity securely before processing a SIM or port-out request and to notify you when one is made. Treat any unexpected "your SIM has been changed" message as an attack in progress — see the response steps at the end of this guide.

## Get Off SMS for Two-Factor and Recovery

Texted codes are exactly what a SIM swap steals. Moving your important accounts away from SMS removes the attacker's prize.

-   **Remove your phone number from account recovery and backup options**, starting with your primary email — it is the reset path to everything else.
-   **Pick the strongest two-factor method available** for each account, moving up this list wherever you can:
    -   **Best — passkeys or a hardware security key** (FIDO2/WebAuthn, such as a YubiKey): phishing-resistant and cannot be SIM-swapped.
    -   **Strong — an authenticator app** (Authy, Duo, Google Authenticator, 1Password): codes live on your device, not on your phone *number*.
    -   **Acceptable — push approval** in an app: better than SMS, though stay alert to "approval fatigue."
    -   **Avoid — SMS / text codes**: the exact channel SIM swapping defeats.

Where a service offers passkeys, use them — that is the upgrade that makes your phone number worthless to an attacker. See the Passwords and Social Engineering guides in this series for more on phishing-resistant authentication.

## Add a SIM PIN

A SIM PIN locks the physical SIM card so it cannot be activated in another device without the code.

-   **iPhone:** Settings → Cellular → SIM PIN
-   **Android:** Settings → Security → SIM card lock

One important limit: a SIM PIN protects a **physical** SIM, not an **eSIM**. Because eSIMs are provisioned digitally (often by QR code or in-app), "eSIM swap" attacks bypass the SIM PIN entirely — which is exactly why the carrier account lock above is now your most important protection.

## Shrink Your Exposure

The personal details that let an attacker impersonate you to your carrier come from somewhere. Cut off the supply.

-   **Opt out of data brokers.** Your address, date of birth, and other details are sold by people-search and data-broker sites. Removing yourself (directly or via a removal service) starves the social-engineering pretext. See the Public Records guide in this series.
-   **Take your number off your public profiles.** Remove your real mobile number from social media accounts.
-   **Use a separate VoIP number for signups.** When a site demands a phone number, give it a VoIP line (such as Google Voice) rather than your real mobile number.

## If You're Being SIM-Swapped Right Now

The telltale sign is your phone suddenly dropping to "No SIM" or "SOS only" for no reason, or a carrier alert about a SIM or port change you did not request. Move quickly:

1.  **Contact your carrier immediately** — from another phone or in a store. Say it is a SIM swap, demand your number back, and have the line locked.
2.  **From a device you trust, change your passwords** — email first, then bank and anything financial — to strong, unique passwords. A password manager makes this fast.
3.  **Move those accounts off SMS** to passkeys or an authenticator app while you are in there.
4.  **Warn your contacts and institutions.** Attackers use your number to text and call the people and banks that trust it.
5.  **File a police report.** It creates a record and matters if the attacker later uses your number for **swatting** (calling 911 while impersonating you).
6.  **Check for damage.** Review bank and carrier statements for unauthorized charges or changes, and reset any account that relied on SMS recovery.

## The Mindset That Ties It Together

Social engineering is the engine behind a SIM swap, so adopt a **trust but verify** posture. Be helpful but skeptical when anyone asks for personal information or pushes urgency, and verify independently by contacting the organization through a number you look up yourself — never one the requester provides. The attacker's entire plan depends on your phone number unlocking your life. These steps quietly take that key away.

If you are already compromised and out of your depth, get help from your carrier's fraud team, and for financial or identity theft, a professional recovery service.

## Quick-Reference: SIM-Swap Lockdown Checklist

- Turn on your carrier's number/SIM lock (SIM Protection, Number Lock, Account / Wireless Account Lock)
- Set a separate carrier account PIN and request a port freeze
- Remove your phone number from account recovery — email first
- Replace SMS two-factor with passkeys or an authenticator app
- Add a SIM PIN (remember it does not cover an eSIM)
- Take your real number off public profiles; use a VoIP number for signups
- Opt out of data brokers to starve the social-engineering pretext
- Know the response: lose signal unexpectedly → call your carrier, reset passwords from a trusted device, warn your contacts, and file a police report
