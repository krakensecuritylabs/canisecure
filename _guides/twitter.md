---
title: "X (Twitter)"
updated: "2026-03-02"
category: "Account Security"
links: {"X Security Settings":"https://x.com/settings/security","X Privacy Settings":"https://x.com/settings/privacy_and_safety","X Connected Apps":"https://x.com/settings/connected_apps","X Grok Settings":"https://x.com/settings/grok_settings"}
---

X (formerly Twitter) is a high-profile platform frequently targeted by attackers — both for individual account takeovers and as a vector for spreading misinformation and scams. The platform has undergone significant changes since its acquisition, including rebranding from twitter.com to x.com, changes to verification, shifts in content moderation, and the introduction of Grok AI. These changes have privacy and security implications that are worth understanding.

## Account Security

### Use a Strong Password

Use a strong, unique passphrase of at least 21 characters for both your X account and the email account associated with it. Store it in a dedicated password manager like Bitwarden or 1Password. See the [Passwords guide](/guides/passwords/) for details.

### Enable Two-Factor Authentication

X supports three methods of two-factor authentication. Enable at least one — and preferably a phishing-resistant option.

**Available 2FA methods (in order of preference):**

1. **Passkey or hardware security key** — Phishing-resistant. Your key is tied to the x.com domain and will not authenticate on a fake site. This is the strongest option.
2. **Authenticator app** — Strong protection using apps like Authy or Google Authenticator.
3. **SMS** — Better than nothing, but vulnerable to SIM swap attacks. X removed free SMS-based 2FA for non-Premium users in 2023. If SMS is your only option, use it, but plan to migrate to an authenticator app or passkey.

**How to enable:** Navigate to Settings → Security and Account Access → Security → Two-factor authentication. Select your preferred method and follow the prompts.

**Important — x.com domain migration:** In late 2025, X migrated from the twitter.com domain to x.com. Passkeys and hardware security keys that were registered under the old twitter.com domain stopped working. If you previously enrolled a security key and have not re-enrolled it under x.com, do so now to avoid being locked out. Navigate to your 2FA settings and remove the old key, then re-register it.

### Secure Your Email Account

The email address linked to your X account is a critical security dependency. If an attacker controls your email, they can reset your X password.

- Use a strong, unique passphrase and 2FA on your email account
- Remove phone numbers from your email account to prevent SIM swap attacks
- Consider using a dedicated email address for your X account
- See the [Google](/guides/google/), [iCloud](/guides/icloud/), or [Microsoft](/guides/microsoft/) guides for email-specific security instructions

## Privacy Settings

Navigate to Settings → Privacy and Safety to review and adjust the following.

### Location Data

Sharing your location on posts can reveal your physical whereabouts in real time. People have been robbed based on the timing and location of their posts showing they were away from home.

- **Disable location tagging:** Navigate to Settings → Privacy and Safety → Location Information → Add location information to your posts → Turn off
- **Delete past location data:** In the same section, select "Remove all location information attached to your posts" to strip location data from your existing posts

### Discoverability

Control how people can find your account:

- **Email and phone discoverability:** Navigate to Settings → Privacy and Safety → Discoverability and Contacts. Turn off "Let people who have your email address find you on X" and "Let people who have your phone number find you on X." This prevents your account from being linked to your real identity through contact matching.
- **Address book sync:** Do not allow X to sync your phone's contacts. This uploads your contacts' phone numbers and email addresses to X.

### Direct Messages

- Consider setting DMs to "Only allow messages from people you follow" to reduce spam, phishing attempts, and scam messages. Navigate to Settings → Privacy and Safety → Direct Messages.
- **Grok in DMs:** X has integrated Grok AI into direct messages via an "Ask Grok" feature. Be aware that content sent to Grok in DMs is no longer protected by encryption. Do not share sensitive information through Grok in chat.

### Personalization and Data Sharing

X collects extensive behavioral data and shares it with advertisers and third parties. Turn off everything under Personalization and Data:

Navigate to Settings → Privacy and Safety → Grok & Data Sharing → turn off all toggles:

- Personalize based on your inferred identity
- Personalize based on the places you have been
- Track where you see X content across the web
- Allow additional information sharing with business partners
- Allow use of your data for personalized ads

## Grok AI and Data Training

X uses your posts, interactions, and inputs to train Grok, xAI's large language model. As of the January 2026 terms of service update, X's terms grant the platform a broad license to use your content for training AI models.

**How to limit AI data usage:**

1. Navigate to Settings → Privacy and Safety → Grok (or visit x.com/settings/grok_settings directly)
2. Uncheck "Allow your posts as well as your interactions, inputs, and results with Grok to be used for training and fine-tuning"

**Important caveats:**

- This setting is available on the web (desktop) but may not be accessible from the mobile app. Use a desktop browser to change it.
- The default setting is **on** — you must actively opt out.
- Under X's January 2026 terms of service, the opt-out may be limited in scope. X's updated terms broadly define user "Content" and include language about using content for AI system operation. The practical enforceability of the opt-out against these terms is uncertain.
- Third-party AI collaborators may also receive X data for training unless you opt out. Check the "Third-party collaborators" section in the same settings area.
- Opting out stops future data from being used for training but does not retroactively remove data that was already collected.

If AI data training is a significant concern, be cautious about what you post on X. Treat all public posts as potentially part of AI training datasets.

## Session and Account Monitoring

Regularly review who has access to your account.

- **Active sessions:** Navigate to Settings → Security and Account Access → Apps and Sessions → Sessions. Review all active sessions and log out of any you do not recognize or no longer use. Pay attention to the location and device shown for each session.
- **Login history:** In the same area, review "Account Access History" for any sign-in attempts you do not recognize.
- **Connected apps:** Navigate to Settings → Security and Account Access → Apps and Sessions → Connected Apps (or visit x.com/settings/connected_apps). Review all third-party applications with access to your account. Revoke access for any app you no longer use. Be especially cautious with apps that have read and write permissions, as they can post on your behalf.

## Additional Recommendations

- **Protect your posts:** If you want to limit your audience, you can set your account to "Protected" so only approved followers can see your posts. Navigate to Settings → Privacy and Safety → Audience and Tagging → Protect your posts. Keep in mind that this significantly limits reach and may not be practical for all users.
- **Photo tagging:** In the same Audience and Tagging section, consider disabling "Allow others to tag you in photos" or limiting it to people you follow.
- **Sensitive content warnings:** Review Settings → Privacy and Safety → Content You See to control what content you encounter and whether your own posts are marked as sensitive.
- **Do not reuse your X password** anywhere else. X has experienced data breaches in the past, and credential stuffing attacks are common.
- **Be skeptical of DMs and mentions** containing links, especially from accounts you do not know. Phishing, crypto scams, and malware distribution through X are widespread.
- **Verification (blue checkmark)** is now available to anyone with a Premium subscription and does not indicate identity verification. Do not assume a verified account is trustworthy.

## Security Checklist

1. Set a strong, unique passphrase (21+ characters) using a password manager
2. Enable 2FA with a passkey, hardware security key, or authenticator app
3. Re-enroll your security key under x.com if it was registered under twitter.com
4. Secure the email account linked to your X account (strong passphrase, 2FA, no phone numbers)
5. Turn off location tagging and delete past location data
6. Turn off email and phone number discoverability
7. Turn off all personalization and data sharing toggles
8. Opt out of Grok AI data training (on desktop)
9. Review active sessions and revoke access for unrecognized devices
10. Review and remove unused connected third-party apps
