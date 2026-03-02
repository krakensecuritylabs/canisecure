---
title: "iCloud / Apple Account"
updated: "2026-03-02"
category: "Account Security"
links: {"Apple Account Security Overview":"https://support.apple.com/en-us/102651","Advanced Data Protection":"https://support.apple.com/en-us/108756","Apple Recovery Key":"https://support.apple.com/en-us/109345","Stolen Device Protection":"https://support.apple.com/en-us/120340","Apple Passkeys":"https://support.apple.com/en-us/102195"}
---

Your Apple Account (formerly Apple ID) is the gateway to iCloud, which stores your photos, messages, backups, passwords, health data, and more. A compromised Apple Account can give an attacker access to all of your Apple devices via Find My, your iCloud Drive contents, your iCloud Keychain passwords, and your iMessage history. Treat this account as one of your most critical.

Note: Apple rebranded "Apple ID" to "Apple Account" in 2024. Both terms refer to the same thing.

## Use a Strong Password

Use a [**strong, unique password**](/guides/passwords) for your Apple Account. Generate it with a password manager, make it long and complex, and never reuse it anywhere else. This is the single credential that protects everything in your Apple ecosystem.

## Enable Two-Factor Authentication

Apple's two-factor authentication (2FA) requires both your password and a verification code from a trusted device or phone number to sign in. Most Apple Accounts created in recent years have 2FA enabled by default, but verify yours is active.

### On iPhone or iPad

Go to **Settings → [your name] → Sign-In & Security → Two-Factor Authentication** and confirm it's turned on. If not, tap to enable it, add a trusted phone number, and follow the prompts.

### On Mac

Go to **Apple menu → System Settings → [your name] → Sign-In & Security → Two-Factor Authentication** and confirm it's enabled.

### On the web

Go to [account.apple.com](https://account.apple.com), sign in, navigate to **Sign-In & Security**, and verify 2FA is active. If prompted to upgrade your account security, follow the steps.

### Important 2FA guidelines

-   **Use a strong device passcode** on all your Apple devices — at least 6 digits, but an alphanumeric passcode is even better. Your passcode can be used to reset your Apple Account password from a trusted device, so a weak passcode undermines your entire account.
-   **Keep your trusted phone numbers up to date.** If you change your number, update it immediately.
-   **Keep your trusted devices physically secure.** Anyone with access to an unlocked trusted device can receive 2FA codes.

## Set Up a Recovery Key

A recovery key is a 28-character code that gives you an additional way to recover your account if you're locked out. With a recovery key enabled, Apple cannot help you reset your password — you must have the recovery key.

To set up: go to **Settings → [your name] → Sign-In & Security → Account Recovery → Recovery Key**. Follow the prompts to generate and confirm your key.

-   **Write it down and store it securely** — in a safe, with your estate documents, or another physically secure location separate from your devices.
-   **Do not store it in iCloud** (Notes, Photos, iCloud Drive) or in Apple Passwords. If you lose access to your account, you won't be able to open those apps to retrieve it.
-   **Make a second copy** and store it in a different physical location.

## Enable Advanced Data Protection

This is one of the most impactful security features Apple offers. **Advanced Data Protection (ADP)** enables end-to-end encryption for nearly all iCloud data categories, including iCloud Backup, Photos, Notes, Reminders, Safari bookmarks, Siri shortcuts, voice memos, wallet passes, and iCloud Drive. With ADP enabled, **Apple does not have the encryption keys** to access this data — only your trusted devices do.

To enable: go to **Settings → [your name] → iCloud → Advanced Data Protection** and follow the setup flow. You will be required to set up a recovery contact or recovery key first (so you can recover your data if you lose access to all your devices).

Without ADP, Apple holds the encryption keys for most iCloud data, meaning it can be accessed by Apple under legal compulsion or in the event of a server breach. If you handle sensitive information, enabling ADP is strongly recommended.

**Note:** A few data categories (iCloud Mail, Contacts, and Calendar) are not covered by ADP due to interoperability requirements with external services.

## Enable Stolen Device Protection

Stolen Device Protection addresses the scenario where a thief has both your iPhone and your passcode (e.g., observed you entering it before stealing the device). When enabled, sensitive operations like changing your Apple Account password, disabling Find My, or turning off Stolen Device Protection itself require:

1.  Successful Face ID or Touch ID authentication (passcode alone is not sufficient)
2.  A one-hour **Security Delay**
3.  A second successful biometric authentication after the delay

To enable: go to **Settings → Face ID & Passcode → Stolen Device Protection** and turn it on. As of iOS 18.4, this is enabled by default for new devices, but verify it on yours.

This feature is critical — without it, a thief who knows your passcode can lock you out of your own Apple Account, disable Find My, and access your iCloud Keychain within minutes.

## Use Passkeys Where Possible

Apple devices support passkeys (FIDO2) for signing into websites and apps. Passkeys are stored in iCloud Keychain (end-to-end encrypted) and sync across your Apple devices. They are phishing-resistant and significantly more secure than passwords.

When a website or app offers passkey setup, use it. Your Apple device will prompt you to create a passkey using Face ID or Touch ID. The passkey replaces the password for that service entirely.

## Apple Privacy Features

Apple offers several built-in privacy features that are worth enabling:

### Hide My Email

Available with iCloud+, this lets you generate unique, random email addresses that forward to your real inbox. Use a different Hide My Email address for each service you sign up for. If one gets compromised or sold, you know exactly which service leaked it and can disable that address without affecting your real email.

Access via **Settings → [your name] → iCloud → Hide My Email**, or use it inline when signing up for services in Safari or apps.

### iCloud Private Relay

Also available with iCloud+, Private Relay encrypts your Safari browsing traffic and routes it through two separate relays so that no single entity (including Apple) can see both who you are and what sites you visit. This functions similarly to a VPN for Safari traffic.

Enable via **Settings → [your name] → iCloud → Private Relay**.

Note: Private Relay only covers Safari traffic, not other apps or browsers. It may not be available in all countries.

### Mail Privacy Protection

When enabled in Apple Mail, this prevents email senders from learning when you opened their message, how many times, your IP address, and other tracking data. It works by pre-loading remote content in the background regardless of whether you open the email.

Enable via **Mail → Settings → Privacy → Protect Mail Activity** (Mac) or **Settings → Mail → Privacy Protection → Protect Mail Activity** (iPhone/iPad).

### App Tracking Transparency

iOS requires apps to ask your permission before tracking you across other companies' apps and websites. When an app asks to track you, **deny it** unless you have a specific reason to allow it. Review your current settings at **Settings → Privacy & Security → Tracking**.

## Sign-In and Password Settings

-   **Avoid using Apple Passwords / iCloud Keychain as your primary password manager** if you use multiple platforms. Use a dedicated cross-platform password manager (like Bitwarden or 1Password) instead. However, if you are fully within the Apple ecosystem, iCloud Keychain with Advanced Data Protection enabled is a reasonable option since it's end-to-end encrypted.
-   **Minimize "Sign in with Apple" usage** on third-party sites where possible. While Sign in with Apple is more privacy-respecting than most social logins (it supports Hide My Email and doesn't share your data with the service), each connection still expands your attack surface if your Apple Account is compromised.
-   **Review your saved passwords** at **Settings → Passwords** (or **System Settings → Passwords** on Mac). Remove any outdated or duplicate entries. Apple will flag reused and compromised passwords — act on those warnings.

## Review Connected Devices and Apps

-   Go to **Settings → [your name]** and scroll down to see all devices signed into your Apple Account. Remove any you don't recognize or no longer own.
-   Review **Settings → Privacy & Security → App Privacy Report** to see which apps are accessing your data (location, contacts, photos, microphone, camera) and how frequently.
-   Review apps using iCloud storage at **Settings → [your name] → iCloud → Manage Account Storage** and remove access for apps you no longer use.

## General Recommendations

-   **Keep all your Apple devices updated.** Apple regularly patches security vulnerabilities. Enable automatic updates at **Settings → General → Software Update → Automatic Updates**.
-   **Enable Find My** on all your devices so you can locate, lock, or erase them remotely if lost or stolen.
-   **Use Lockdown Mode** if you are at high risk of targeted attacks (journalists, activists, crypto executives). Lockdown Mode drastically restricts device functionality to minimize attack surface — it blocks most message attachment types, disables certain web technologies in Safari, blocks incoming FaceTime calls from unknown numbers, and more. Enable at **Settings → Privacy & Security → Lockdown Mode**.
-   **Audit your account at [account.apple.com](https://account.apple.com)** periodically to review trusted devices, phone numbers, and account recovery settings.
