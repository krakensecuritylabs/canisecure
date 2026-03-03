---
title: "Digital Life"
updated: "2026-03-02"
category: "Personal"
links: {"Have I Been Pwned":"https://haveibeenpwned.com","Proton Mail":"https://protonmail.com","Mullvad VPN":"https://mullvad.net","Bitwarden":"https://bitwarden.com","EFF Surveillance Self-Defense":"https://ssd.eff.org"}
---

Below are general guidelines applicable to all areas of your digital life. If you work in a higher-risk field like cryptocurrency, finance, or activism, these practices are not optional — they are foundational. Where there's money (or the perception of it), there will always be criminals committed to getting their hands on it. The guidance below is designed to make you a significantly harder target.

## Define Your Threat Model

Before diving into specific tools and settings, take a moment to think about your **threat model** — who might target you, what they're after, and how far they'd go to get it. A journalist protecting sources has different needs than someone simply trying to avoid spam. Your threat model helps you prioritize which of the recommendations below are essential versus nice-to-have.

At minimum, everyone should implement: strong unique passwords with a password manager, 2FA on all important accounts, regular software updates, and limited personal information exposure.

## Strong Passwords

Use a [**strong, unique password**](/guides/passwords) for every account. Passwords should be long (20+ characters), randomly generated, and never reused across services. The only way to manage this practically is with a **password manager** like [Bitwarden](https://bitwarden.com), 1Password, or Dashlane.

-   **Never reuse passwords.** Credential stuffing attacks use breached passwords from one service to break into others. Check [Have I Been Pwned](https://haveibeenpwned.com) to see if your credentials have appeared in known breaches.
-   **Use your password manager's generator** to create passwords. Don't try to invent "random" passwords yourself — humans are bad at randomness.
-   **Protect your password manager** with a very strong master passphrase and a hardware token or authenticator app for 2FA. Your password manager is the keys to the kingdom — treat it accordingly.

## Multi-Factor Authentication (MFA/2FA)

Always enable a second factor on every account that supports it. The security hierarchy of 2FA methods, from strongest to weakest:

1.  **Hardware security keys** (e.g., YubiKey, Google Titan) — phishing-resistant, strongest option available
2.  **Passkeys** — FIDO2-based, biometric or PIN-based, phishing-resistant, supported by a growing number of services
3.  **Authenticator apps** (e.g., Authy, 2FAS, Aegis, Google Authenticator) — time-based codes generated on your device
4.  **SMS/text message** — better than nothing, but vulnerable to SIM swap attacks
5.  **No second factor** — unacceptable for any important account

**SIM swap warning:** Be very careful with SMS-based 2FA. If an attacker ports your phone number via a SIM swap, they can intercept your SMS codes and potentially reset account passwords. If SMS is the only 2FA option a service offers, use it — but consider using a Google Voice number or a separate prepaid SIM rather than your primary carrier number. See the [Mobile Phone guide](/guides/mobilephone) for more on SIM swap protection.

## Software Updates

Every computer, mobile device, and connected device in your digital life runs software that needs to be updated. Get into the habit of installing updates promptly — they almost always contain critical security fixes. Once an update is released, attackers reverse-engineer the patch to understand the vulnerability and race to exploit unpatched systems.

-   **Enable automatic updates** wherever possible (OS, browser, apps).
-   **Check firmware updates manually** for devices that don't auto-update (routers, hardware wallets, IoT devices) — at least monthly.
-   It's fair to not want to be the very first to update (in case there's an issue with the release), but you absolutely do not want to be the slowest.

## Limit the Information You Expose

The less personal information you put out there, the harder it is for someone to target you. Apply data minimization everywhere:

-   **Don't give companies real information unless legally required.** Does your retailer rewards program really need your real name, address, phone number, and birthday to give you a discount?
-   **Use email aliases** for signups. Services like SimpleLogin, AnonAddy, or the built-in aliasing in Proton Mail and iCloud let you create unique addresses for each service. If one gets breached or sold, you know exactly where it came from and can disable it.
-   **Use unique usernames.** Don't reuse the same username across services — it makes it trivial to link your accounts and build a profile on you.
-   **Minimize social media exposure.** Review your profiles on all platforms and remove or restrict anything that reveals your location, employer, daily routines, or financial status. See the individual platform guides for specific settings.
-   **Opt out of data brokers.** Your personal information (name, address, phone number, relatives) is sold by data aggregation sites. Use opt-out services or submit removal requests manually. See the [Public Records guide](/guides/publicrecords) for details.

## Personal Email

Your personal email is the gateway to most of your digital life. Banking, social media, mobile carrier, ISP, government services — most are tied to your email. Someone with access to your email can reset passwords, intercept 2FA codes, and disrupt your life in minutes.

**This is the single most important account to protect.**

-   Use a **strong, unique password** and **2FA with a hardware key or authenticator app** — this is not optional.
-   Consider a privacy-respecting email provider like [Proton Mail](https://protonmail.com) rather than services that scan your inbox for advertising or AI training purposes.
-   Consider using a **custom domain** for your primary email. If your email provider ever shuts down or you need to migrate, you keep your address and all accounts tied to it.
-   If you use Gmail, see the [Google Account guide](/guides/google) for specific hardening steps, including disabling Gemini AI access to your inbox.

If you are reading this and know you have a weak password and/or do not have 2FA enabled on your email, **stop reading and fix this now**.

## Browser Security

Your web browser is one of your most exposed attack surfaces. Harden it:

-   **Keep your browser updated** — browsers are a primary target for exploits.
-   **Install a content blocker** like uBlock Origin to block ads, trackers, and potentially malicious scripts.
-   **Use a privacy-focused extension** like Ghostery or Privacy Badger to limit cross-site tracking.
-   **Disable or manage browser extensions carefully.** Every extension has access to your browsing data. Remove any you don't actively use, and only install extensions from verified sources.
-   **Don't save passwords in your browser.** Use a dedicated password manager instead.
-   **Clear cookies regularly** or use containers/profiles to isolate sessions (Firefox Multi-Account Containers is excellent for this).
-   **Be cautious with browser notifications.** Deny notification permissions by default — they are frequently abused for phishing and spam.

## VPN and DNS

A VPN encrypts your internet traffic and hides your IP address from the sites you visit. This is especially important on public Wi-Fi, but is good practice in general.

-   Use a reputable, no-log VPN provider like [Mullvad](https://mullvad.net), ProtonVPN, or IVPN. Avoid free VPN services — if you're not paying, your data is the product.
-   **Change your DNS resolver** from your ISP's default to a privacy-respecting provider. [Cloudflare DNS](https://1.1.1.1) (1.1.1.2 / 1.0.0.1 for malware blocking) or Quad9 (9.9.9.9) are good options. This prevents your ISP from logging every domain you visit and can also block known malicious domains.
-   Configure DNS at the router level so all devices on your network benefit.

## AI Tools and Chatbots

The rise of AI assistants (ChatGPT, Gemini, Copilot, Claude, etc.) introduces new data exposure risks:

-   **Never paste sensitive information** (passwords, private keys, financial data, proprietary code, personal health info) into AI chatbots. Anything you input may be stored, logged, or used for training.
-   **Review data retention settings** in any AI tool you use. Many allow you to disable conversation history or opt out of training.
-   **Be aware of AI integrations** built into products you already use (Gmail, Docs, Slack, etc.). Review and disable these where possible — see the individual platform guides for specifics.
-   **Treat AI-generated links and code with skepticism.** AI models can hallucinate URLs, suggest vulnerable code patterns, or reference packages that don't exist (which attackers have started registering maliciously).

## Other Internet Accounts

For every other online account in your life:

-   **Use a unique password** generated by your password manager.
-   **Enable 2FA** everywhere it's available.
-   **Use email aliases** so each account has a unique email address.
-   **Periodically audit your accounts.** Review what's linked to your email, which services have your payment info, and which old accounts you no longer use. Delete or deactivate accounts you don't need — dormant accounts are a liability.
-   **Monitor for breaches.** Set up alerts on [Have I Been Pwned](https://haveibeenpwned.com) for your email addresses so you're notified immediately if your credentials appear in a breach.

## Secure Messaging

For sensitive conversations, use a messaging app with end-to-end encryption by default:

-   [**Signal**](https://signal.org) is the gold standard for secure messaging — E2E encrypted by default, minimal metadata collection, open source.
-   Be aware that many popular messaging apps (Telegram, Facebook Messenger, SMS) are **not** end-to-end encrypted by default. See the individual platform guides for details on enabling encryption where available.
-   **Don't discuss sensitive topics** (financial details, private keys, security configurations) over unencrypted channels.

## Printable Security Checklist

Use this as a quick reference to verify your baseline security posture:

-   ☐ Password manager installed and in use for all accounts
-   ☐ Strong unique password on every account (20+ characters, randomly generated)
-   ☐ 2FA/MFA enabled on all accounts (hardware key or authenticator app preferred)
-   ☐ Personal email secured with strong password + 2FA (this is #1 priority)
-   ☐ Software auto-updates enabled on all devices
-   ☐ Router firmware updated and DNS changed to a privacy-respecting provider
-   ☐ VPN installed and active, especially on public Wi-Fi
-   ☐ Browser hardened (content blocker, no saved passwords, minimal extensions)
-   ☐ Public information cleaned up (social media, data brokers)
-   ☐ Old/unused accounts deactivated or deleted
-   ☐ Breach monitoring enabled (Have I Been Pwned alerts)
-   ☐ Sensitive conversations on Signal or other E2E encrypted platform
-   ☐ AI tools reviewed for data retention and disabled where unnecessary

*(This guide is part of a [series on Personal Security](/news/2026-03-06-personal-security-series).)*
