---
title: "Telegram"
updated: "2026-03-02"
category: "Account Security"
links: {"Telegram Privacy FAQ":"https://telegram.org/faq#q-do-you-process-data-requests","Telegram Two-Step Verification":"https://telegram.org/blog/sessions-and-2-step-verification","Telegram Passkeys":"https://telegram.org/blog/passkeys-and-gift-offers","Signal Messenger":"https://signal.org/"}
---

Telegram is one of the most popular messaging apps, and is especially popular in the crypto community. However, it is important to understand that **Telegram is not end-to-end encrypted by default**. Regular chats (including group chats) are encrypted between your device and Telegram's servers using the MTProto 2.0 protocol, but Telegram holds the keys — meaning Telegram can access your messages. Only "Secret Chats" are end-to-end encrypted, and those are limited to one-on-one conversations.

Additionally, be aware that Telegram's privacy policy now confirms it will share user data (IP address and phone number) with law enforcement for a broader range of criminal investigations, not just terrorism cases as was previously the case.

If you value security and privacy above all else, consider using [Signal](https://signal.org/) as a complement or alternative — Signal is end-to-end encrypted by default for all messages and calls. If you're using Telegram, read on.

## Secure Your Mobile Number

Telegram still requires a phone number to create an account. If possible, use a separate phone number (e.g., Google Voice or a prepaid SIM) to create your Telegram account. This prevents your primary number from being exposed.

Go to **Settings → Privacy and Security → Phone Number** and set "Who can see my phone number" to **Nobody**. You can also set "Who can find me by my number" to **My Contacts** to prevent strangers from discovering your account via your phone number.

Consider setting a public **username** (Settings → Username) so that people can contact you via @username instead of your phone number. This lets you communicate without ever revealing your number.

## Set Up Passkeys

As of late 2025, Telegram now supports passkey sign-in. This allows you to authenticate using your device's biometrics (Face ID, fingerprint) or a PIN instead of relying on SMS verification codes when logging in on a new device.

To set up a passkey, go to **Settings → Privacy and Security → Passkeys** and follow the prompts. This is a major security improvement — SMS codes can be intercepted via SIM swap attacks, while passkeys cannot.

Note: Telegram still requires a phone number linked to your account even with passkeys enabled. Passkeys replace the SMS login code, not the phone number requirement itself.

## Use Two-Step Verification

Even with passkeys, you should enable two-step verification as an additional layer. This requires you to enter a password when signing into Telegram on a new device, on top of the SMS code or passkey.

Go to **Settings → Privacy and Security → Two-Step Verification** and set a strong, unique password. Store this password in your password manager. You can optionally add a recovery email, but make sure that email account itself is secured with 2FA and a strong password.

## Set a Passcode Lock

The passcode lock is device-specific and not tied to your Telegram account. It adds a local lock to the app so that someone with physical access to your unlocked phone still can't open Telegram without the passcode.

Go to **Settings → Privacy and Security → Passcode Lock** and enable it. You can set a 4-digit PIN or a longer alphanumeric password. Once enabled, a lock icon appears on the chats page — tap it to lock the app. You can also configure auto-lock timing and toggle hiding Telegram's content from the app switcher/task manager.

## Use Secret Chats for Sensitive Conversations

By default, chats sent over Telegram are stored in Telegram's cloud (meaning Telegram can access them). You must specifically start a **Secret Chat** to enable end-to-end encryption. Key properties of Secret Chats:

-   **End-to-end encrypted** — only you and the recipient can read the messages. Telegram cannot access them.
-   **Not stored in the cloud** — Secret Chat messages exist only on the two devices involved. They won't appear on other logged-in devices or in Telegram's web client.
-   **Self-destruct timer** — you can set messages to auto-delete after a specified time once they've been read.
-   **No forwarding** — Secret Chat messages cannot be forwarded.
-   **One-on-one only** — Secret Chats do not support group conversations (as of early 2026; Telegram has indicated plans to expand this, but it is not yet available).

To start a Secret Chat: open a conversation with someone, tap their name/profile, then select **Start Secret Chat**. For sensitive or confidential conversations, always use Secret Chat rather than a regular chat.

## Privacy Settings

Navigate to **Settings → Privacy and Security** and review every option. Restrict all of the following to **Nobody** or **My Contacts**:

-   **Phone Number** — Who can see your phone number, and who can find you by number.
-   **Last Seen & Online** — Hiding this prevents others from tracking when you're active.
-   **Profile Photos** — Restrict who can see your profile picture.
-   **Bio** — Restrict who can see your bio text.
-   **Forwarded Messages** — Set to "Nobody" so that when your messages are forwarded, they don't link back to your account.
-   **Calls** — Restrict who can call you. Also consider setting "Peer-to-Peer" to **Nobody** or **My Contacts** — peer-to-peer calls can expose your IP address to the other party.
-   **Groups & Channels** — Restrict who can add you to groups. Set to "My Contacts" to prevent being added to spam or scam groups by strangers.
-   **Voice Messages** — Restrict who can send you voice messages if desired.

## Active Sessions

Regularly review your active sessions at **Settings → Privacy and Security → Active Sessions** (or **Settings → Devices**). Terminate any session you don't recognize or no longer need. Telegram allows you to be logged in on many devices simultaneously, so an attacker who gained access once may still have an active session.

You can also toggle **Accept Secret Chats** on or off per device, and enable the option to automatically terminate old inactive sessions.

## Auto-Delete Messages

Telegram offers an auto-delete timer for all chats (not just Secret Chats). Go to **Settings → Privacy and Security → Auto-Delete Messages** and set a global timer (1 day, 1 week, 1 month, or a custom period). This reduces the amount of message history stored in Telegram's cloud and on your devices.

You can also set auto-delete timers on individual chats by tapping the chat header and selecting the timer option.

## General Recommendations

-   **Be extremely cautious with Telegram bots and links.** Telegram's bot ecosystem is heavily exploited for phishing, especially in crypto communities. Never enter seed phrases, private keys, or passwords into a Telegram bot.
-   **Beware of impersonation.** Fake accounts impersonating admins, support staff, or well-known figures are rampant on Telegram. Always verify identity through a secondary channel before acting on any request for funds or sensitive info.
-   **Don't trust "official" groups blindly.** Scam groups that mimic legitimate project channels are common. Verify group links through official websites, not through Telegram search or DMs.
-   **Disable automatic media download** if you're concerned about malicious files. Go to **Settings → Data and Storage → Automatic Media Download** and set to manual for all media types.
-   **Review connected websites and bots.** Go to **Settings → Privacy and Security → Bots and Websites** and revoke access for any you don't actively use.
