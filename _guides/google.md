---
title: "Google Account"
updated: "2026-03-02"
category: "Account Security"
links: {"Google Security Checkup":"https://myaccount.google.com/security-checkup","Google Privacy Checkup":"https://myaccount.google.com/privacycheckup","Google Passkeys":"https://myaccount.google.com/signinoptions/passkeys","Advanced Protection Program":"https://landing.google.com/advancedprotection/","Gemini Privacy Hub":"https://support.google.com/gemini/answer/13594961"}
---

Your Google account is likely the most critical account in your digital life — it ties together email, documents, photos, location history, search history, browser data, and often serves as the authentication backbone for dozens of other services. Treat it accordingly.

## Security Checkup

The quickest way to make basic improvements to your Google account security is to use [Google's Security Checkup](https://myaccount.google.com/security-checkup). This walks you through reviewing recent security events, your devices, sign-in methods, and third-party access. Run through this at least quarterly.

## Privacy Checkup

The quickest way to review your Google account privacy is to use [Google's Privacy Checkup](https://myaccount.google.com/privacycheckup). This tool walks you through activity controls, ad personalization, and what data you share. Try to pause or turn off everything here unless you have a specific reason to keep it enabled.

## Use a Strong Password

As with everything, make sure you [**use a strong unique password**](/guides/passwords) for your Google account. Use a password manager to generate and store a long, complex password. This should not be reused anywhere else — if your Google account is compromised, the blast radius is enormous.

## Set Up Passkeys

Google now supports passkey sign-in (FIDO2), which lets you authenticate using your device's biometrics (fingerprint, face scan) or a PIN instead of a password. Passkeys are phishing-resistant and significantly more secure than passwords alone.

To set up a passkey, go to [myaccount.google.com/signinoptions/passkeys](https://myaccount.google.com/signinoptions/passkeys), tap **Create a passkey**, and follow the on-screen instructions. If you use a hardware security key like a YubiKey, you can register it as a passkey as well.

Set up passkeys on multiple devices you own so you have a fallback if one device is lost. Never set up a passkey on a shared or public computer.

## Use 2-Step Verification

Google offers multiple 2FA methods: passkeys, security keys, authenticator apps (Google Authenticator, Authy, Microsoft Authenticator), Google Prompts, and SMS. Use a **passkey, hardware security key, or authenticator app**. Avoid SMS due to SIM swap attacks.

To add or update 2FA, go to [myaccount.google.com/security](https://myaccount.google.com/security) and click **2-Step Verification**. Walk through the setup and make sure to save your backup codes in a secure location (such as your password manager) in case you lose access to your primary 2FA method.

## Recovery Options

Recovery options are a double-edged sword. A recovery phone number or email can help you regain access if you're locked out — but it also gives an attacker a path in via SIM swaps or compromised recovery accounts.

**If you are enrolled in the Advanced Protection Program**, Google's recovery process is already hardened and requires identity verification that takes several days. In this case, having recovery options is less risky.

**If you are not enrolled in APP**, consider the tradeoff carefully. If you do keep a recovery email, make sure that email account itself has a strong unique password, 2FA with an authenticator app or hardware key, and no SMS-based recovery. If you keep a recovery phone number, ensure your carrier account is protected with a PIN/passkey and SIM swap protections are enabled.

At minimum, review your recovery options at [myaccount.google.com/security](https://myaccount.google.com/security) and make sure you recognize and control every recovery method listed.

## Review and Limit Third-Party Applications

Some applications link with your Google account to access services like Gmail, Drive, or Calendar. Review third-party apps at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). Remove any applications you no longer use or don't recognize. Pay close attention to the permissions each app has — some may have full access to read and send email on your behalf.

Exercise caution when authorizing new applications. Only grant the minimum permissions necessary, and prefer apps that use limited (scoped) access rather than full account access.

## Data and Activity Controls

Navigate to [myaccount.google.com/data-and-privacy](https://myaccount.google.com/data-and-privacy) to manage what Google collects about you. Key settings to review:

-   **Web & App Activity** - This controls the bulk of data Google collects, including your searches, browsing history, and app usage. Pause this unless you have a specific need for it. If you do keep it on, toggle off "Include voice and audio activity" and "Include Chrome history and activity from sites, apps, and devices that use Google services". Consider enabling auto-delete (3 months or 18 months).
-   **Location History (Timeline)** - Pause this. Google tracks your physical movements and stores a detailed location timeline. If you've had it on, consider deleting your history.
-   **YouTube History** - Pause both watch history and search history unless you rely on recommendations.
-   **Ad Personalization** - Turn this off at [adssettings.google.com](https://adssettings.google.com). This limits how Google uses your data to target ads across its network.
-   **Personalized results in Search** - Consider turning this off for less filtered search results.

## Gemini AI and Smart Features

Google's Gemini AI is increasingly integrated across Gmail, Docs, Drive, and other services. There are several settings to be aware of:

### Gemini Apps Activity

If you use Gemini (Google's AI assistant), your conversations may be stored and reviewed. Go to [myaccount.google.com/activitycontrols](https://myaccount.google.com/activitycontrols) and look for **Gemini Apps Activity** (also labeled "Keep Activity"). Consider turning this off or setting auto-delete to 3 months.

### Smart Features in Gmail

Gemini powers features like smart compose, email summarization, and automatic inbox categorization in Gmail. To disable these:

**On Desktop:** Open Gmail → Settings (gear icon) → See all settings → General tab → scroll to "Smart features and personalization" → uncheck "Turn on smart features and personalization in Gmail, Chat, and Meet". Also uncheck "Smart features and personalization in other Google products". Click Save.

**On Mobile:** Open Gmail → Settings → Data privacy → toggle off "Smart features and personalization" and "Smart features and personalization in other Google products".

Be aware that disabling smart features also turns off things like smart compose, automatic email categorization (Promotions, Social tabs), and some autocorrect features. This is a privacy-versus-convenience tradeoff worth making if your threat model warrants it.

### Gemini Access to Your Data

Google has introduced features that allow Gemini to access your Gmail, Drive, and Calendar content (such as "Deep Research"). These features require you to opt in. Do not enable this unless you fully understand what data Gemini will access. Review these settings in your [Gemini privacy settings](https://support.google.com/gemini/answer/13594961).

## Sign-In Settings

Avoid saving passwords to your Google account or using Chrome's built-in password manager as your primary password vault. Use a dedicated password manager instead (such as Bitwarden or 1Password). Avoid using "Sign in with Google" on third-party sites where possible — each connection expands your attack surface.

Review your saved passwords and linked sign-in methods at [passwords.google.com](https://passwords.google.com) and remove anything you don't need stored there.

## Consider Enrolling in Google's Advanced Protection Program

The [Advanced Protection Program](https://landing.google.com/advancedprotection/) provides Google's strongest account security and is designed for users at risk of targeted attacks — journalists, activists, business leaders, political campaign teams, and anyone working in high-risk industries like cryptocurrency.

APP provides the following protections:

-   **Stronger sign-in requirements** - Requires a passkey or physical security key for authentication. As of 2024, you can enroll using a passkey alone (previously two physical security keys were required).
-   **Third-party access restrictions** - Limits which apps can access your Google data to Google apps and select verified third-party apps.
-   **Enhanced email scanning** - Adds extra scanning for incoming attachments and links in Gmail.
-   **Blocks unknown app installation** - On Android, prevents installing apps from outside the Google Play Store.
-   **Hardened account recovery** - Adds extra identity verification steps to the recovery process, which takes several days. This makes it significantly harder for attackers to social-engineer their way into your account.

Enrollment is free and takes a few minutes. If you work in a high-risk field, this is one of the single most impactful things you can do to protect yourself.
