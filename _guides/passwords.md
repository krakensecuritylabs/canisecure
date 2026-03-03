---
title: "Passwords"
updated: "2026-03-02"
category: "Personal"
links: {"Have I Been Pwned":"https://haveibeenpwned.com","Bitwarden":"https://bitwarden.com","1Password":"https://1password.com","EFF Dice-Generated Passphrases":"https://www.eff.org/dice","NIST Password Guidelines":"https://pages.nist.gov/800-63-4/sp800-63b.html"}
---

Passwords remain the primary way you prove your identity online. A weak, reused, or compromised password is the single most common way accounts get taken over. The good news is that getting this right is straightforward — it just requires the right tools and habits.

## Use Passphrases, Not Passwords

Traditional passwords (short strings of mixed characters) are increasingly crackable by modern hardware. Instead, use **passphrases** — sequences of random, unrelated words that are both long and easy to remember.

A strong passphrase should be **at least 21 characters long** and consist of **4 or more random words**. For example, a passphrase like `marble-stadium-candle-orca-transit` is far stronger than a shorter complex password like `P@ssw0rd!23` and much easier to remember. The strength comes from **length and randomness**, not from clever substitutions or special characters.

### How to generate a good passphrase

-   **Use your password manager's generator.** Most password managers can generate random passphrases (sometimes called "diceware" passphrases) in addition to random character strings. Use this feature.
-   **Use the EFF Diceware method.** The [EFF provides word lists](https://www.eff.org/dice) you can use with physical dice to generate truly random passphrases. Roll dice, look up the corresponding word, repeat 4-6 times.
-   **Never invent your own "random" words.** Humans are bad at randomness — we unconsciously gravitate toward common phrases, song lyrics, quotes, and patterns that attackers already have in their dictionaries.
-   **Don't use personal information** in your passphrase — no pet names, birthdays, addresses, or favorite sports teams.

### When to use passphrases vs. generated passwords

-   **Passphrases (21+ characters, random words)** — use for anything you need to type manually or memorize: your password manager's master passphrase, your device passcode, your full-disk encryption passphrase.
-   **Random generated passwords (21+ characters, mixed characters)** — use for everything else. Since your password manager fills these in automatically, they don't need to be memorable. Let the generator create the longest, most complex string the service will accept.

## Use a Password Manager

A password manager stores all of your passwords in an encrypted vault, generates strong unique credentials for every account, and auto-fills them when you log in. This is not optional — it is the only realistic way to use a unique, strong password for every account.

### Recommended password managers

-   [**Bitwarden**](https://bitwarden.com) — open source, cross-platform, excellent free tier with unlimited passwords on unlimited devices. The best option for most people.
-   [**1Password**](https://1password.com) — polished interface, strong security model, additional features like Travel Mode (hides vaults when crossing borders), dark web monitoring, and email alias integration. No free tier but well worth the cost.

Both Bitwarden and 1Password use zero-knowledge architecture, meaning the company cannot access your vault — only you can, with your master passphrase.

**Note on LastPass:** We no longer recommend LastPass following multiple security breaches in 2022-2023 that resulted in encrypted customer vaults being exfiltrated. If you are currently using LastPass, consider migrating to Bitwarden or 1Password.

### Securing your password manager

Your password manager is the keys to the kingdom. Protect it accordingly:

-   **Use a very strong master passphrase** — at least 21 characters, random words, generated using the passphrase methods above. This is the most important single password in your life.
-   **Enable 2FA on your password manager account** — use a hardware key (YubiKey) or authenticator app. Never SMS.
-   **Do not store your master passphrase digitally.** Write it down and keep it in a physically secure location (a safe, a locked drawer) while you're memorizing it. Once memorized, destroy the written copy or keep it as an emergency backup in a separate secure location.
-   **Keep your password manager software updated.** Like any software, password managers receive security patches.

## Never Reuse Passwords

Password reuse is one of the most exploited vulnerabilities on the internet. After a data breach, stolen credentials are traded and sold, then used in automated **credential stuffing attacks** — bots try your leaked email/password combination against hundreds of other services. If you reused that password anywhere, those accounts are now compromised too.

-   **Every account gets a unique password.** No exceptions, no "I'll just reuse this one for low-value sites." Attackers don't distinguish between high and low value — they use low-value account access to escalate into high-value targets.
-   **Check for existing breaches.** Enter your email addresses at [Have I Been Pwned](https://haveibeenpwned.com/) to see if your credentials have appeared in known breaches. Set up **breach monitoring alerts** so you're notified immediately when your email appears in a new breach.
-   **If any password has been breached, change it immediately** on every service where you used it (this is another reason never to reuse passwords — changing one is manageable, changing dozens is a nightmare).

## Use Passkeys Where Available

Passkeys (FIDO2/WebAuthn) are the next evolution beyond passwords. A passkey uses your device's biometrics (fingerprint, face scan) or PIN to authenticate you, with a cryptographic key pair that is phishing-resistant and never leaves your device.

-   When a website or app offers passkey setup, **use it**. Passkeys are supported by Apple, Google, Microsoft, and an increasing number of services.
-   Passkeys can be stored in your password manager (both Bitwarden and 1Password support passkey storage) or in your platform's native keychain (iCloud Keychain, Google Password Manager).
-   Passkeys don't fully replace passwords everywhere yet, but they're the strongest authentication method available for services that support them. See the individual platform guides for passkey setup instructions.

## Always Pair With Multi-Factor Authentication

A strong password alone is not enough. Always enable **2FA/MFA** on every account that supports it. The security hierarchy from strongest to weakest:

1.  **Hardware security keys** (YubiKey, Google Titan) — phishing-resistant
2.  **Passkeys** — phishing-resistant, biometric-based
3.  **Authenticator apps** (Authy, 2FAS, Aegis, Google Authenticator) — time-based codes
4.  **SMS/text message** — vulnerable to SIM swap, but better than nothing

See the [Digital Life guide](/guides/digitallife) and [Mobile Phone guide](/guides/mobilephone) for detailed 2FA guidance.

## Password Hygiene Checklist

-   ☐ Password manager installed and in use (Bitwarden or 1Password)
-   ☐ Master passphrase is 21+ characters, random words, memorized
-   ☐ 2FA enabled on password manager account (hardware key or authenticator app)
-   ☐ Every account has a unique password (no reuse anywhere)
-   ☐ All passwords are 21+ characters (generated by password manager)
-   ☐ Breach monitoring enabled at Have I Been Pwned
-   ☐ Passkeys enabled on services that support them
-   ☐ Old/weak passwords identified and rotated (check your password manager's "health" or "audit" feature)
-   ☐ Recovery codes for critical accounts saved securely in password manager or physically

