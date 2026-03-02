---
title: "Kraken.com Exchange"
updated: "2026-03-02"
category: "Account Security"
links: {"Kraken - Securing your account":"https://support.kraken.com/hc/en-us/articles/201396837-Securing-your-account","Kraken - Passkeys & Multiple 2FA":"https://blog.kraken.com/crypto-education/passkeys-multiple-2fa","Kraken - Global Settings Lock":"https://support.kraken.com/articles/201396877-what-is-the-global-settings-lock-gsl-"}
---

Kraken is one of the longest-running cryptocurrency exchanges and offers a robust set of security features. However, these features only protect you if you actually enable and configure them. This guide walks through every layer of account security, from the essentials to the advanced options that can protect your funds even if your login credentials are compromised.

## Essential Security (Do These First)

### 1. Enable Passkeys for Sign-In

Passkeys are Kraken's recommended sign-in protection and should be your first priority. A passkey uses phishing-resistant FIDO2 security — the key never leaves your device and cannot be entered on a fake website, making it immune to phishing attacks.

You can enable up to five passkeys and one authenticator app on your account. Kraken supports both roaming passkeys (hardware security keys like YubiKey) and device-bound passkeys (using your phone's or computer's biometrics).

**How to set up:** Navigate to Settings → Security → Two-factor Authentication → Add Passkey. Follow the prompts to register your device or hardware key.

**Important notes:**
- Your first sign-in 2FA method must be a roaming passkey (like a hardware security key). You can add a device-bound passkey afterward as a backup.
- Kraken highly recommends passkeys over authenticator apps. If you currently use an authenticator app, consider migrating to passkeys.

### 2. Enable Sign-In Two-Factor Authentication (If Not Using Passkeys)

If you cannot use passkeys, enable sign-in 2FA using an authenticator app (such as Authy or Google Authenticator). A hardware security key (YubiKey) is preferred over an authenticator app.

**Do not use SMS-based 2FA.** SMS is vulnerable to SIM swap attacks — see the Social Engineering and Mobile Phone guides in this series for details.

When you enable sign-in 2FA, Kraken automatically activates **Step-up 2FA** — an additional verification step required any time 2FA settings are added, edited, or removed. This means even if someone gains access to your account, they cannot disable your 2FA protections without an additional code.

**Do not store your 2FA backup codes insecurely.** Write them down on paper and store them in a secure physical location (like a safe). Do not save them in a notes app, cloud storage, or screenshot.

### 3. Set Up a Master Key

The Master Key adds authentication to sensitive account actions like password resets. Without a Master Key, an attacker who compromises your email could reset your Kraken password.

**Critical:** Use a different authentication method for your Master Key than you use for sign-in 2FA. For example, if you use a YubiKey for sign-in, use an authenticator app (or a different YubiKey) for the Master Key. This ensures that compromising one device does not compromise both layers.

**How to set up:** Navigate to Settings → Security → Master Key. Choose your authentication method and follow the prompts.

### 4. Secure Your Email Account

Your email is the gateway to your Kraken account. If an attacker controls your email, they can initiate password resets and intercept confirmation links.

- Use a strong, unique passphrase for your email account (21+ characters — see the Passwords guide).
- Enable 2FA on your email account using a hardware key or authenticator app.
- **Remove all phone numbers from your email account** to eliminate SIM swap risk. See the Google or iCloud guides in this series for instructions specific to your email provider.
- Consider using a dedicated email address for your Kraken account that you do not use for anything else.

### 5. Set an Anti-Phishing Code

Kraken lets you set a secret word that appears in every legitimate Kraken email. If you receive an email claiming to be from Kraken but your anti-phishing code is missing, you know it is a phishing attempt.

**How to set up:** Navigate to Settings → Security → Anti-Phishing Code. Choose a word that is easy for you to recognize but hard for anyone else to guess.

## Advanced Security (Strongly Recommended)

### 6. Enable the Global Settings Lock (GSL)

The Global Settings Lock is Kraken's most powerful security feature and your last line of defense if your sign-in credentials and 2FA are compromised. When GSL is enabled, it prevents changes to your account settings, hides sensitive account information, and locks withdrawal address management.

Even if an attacker fully controls your account, they cannot modify settings, add new withdrawal addresses, or access sensitive data while GSL is active.

**Unlocking the GSL** requires a waiting period that you configure — from 24 hours up to 30 days. This built-in delay gives you time to detect and respond to unauthorized access. Kraken Support cannot speed up GSL removal.

**Important:** Set up your Master Key **before** enabling the GSL. The Master Key allows you to immediately unlock the GSL if needed. Without it, you must wait the full configured period.

**How to set up:** Navigate to Settings → Security → Global Settings Lock. Choose your preferred unlock waiting period (longer is more secure) and enable it.

### 7. Enable 2FA for Funding (Deposits and Withdrawals)

Adding a separate 2FA requirement for deposits and withdrawals means an attacker cannot move your funds even if they manage to sign in.

**Important:** The Global Settings Lock must be enabled for funding 2FA to be fully effective. Without GSL, an attacker could simply disable the funding 2FA and then withdraw your assets.

**How to set up:** Navigate to Settings → Security → Two-factor Authentication, and enable 2FA for Funding.

### 8. Enable 2FA for Trading

If you want to prevent unauthorized trades on your account, you can add a 2FA requirement for every trade. This is especially useful if you hold large balances on the exchange and want maximum protection.

Like funding 2FA, trading 2FA requires the Global Settings Lock to be fully effective.

### 9. Manage Withdrawal Addresses

Kraken requires email confirmation when adding new withdrawal addresses, which adds a layer of protection. Combined with the Global Settings Lock, this means an attacker cannot add new addresses to siphon your funds.

Review your saved withdrawal addresses periodically and remove any you no longer use. Fewer saved addresses means a smaller attack surface.

### 10. Configure Session Timeout

Set your session timeout to the shortest duration that is practical for your usage. A shorter timeout reduces the window during which an unattended session could be misused.

**How to set up:** Navigate to Settings → Security → Session Timeout and select your preferred duration.

## Threats to Be Aware Of

### Phishing Attacks

Phishing remains the most common attack against exchange users. Attackers create convincing fake versions of the Kraken website or send emails impersonating Kraken support. Even strong 2FA cannot protect you if you enter your credentials and codes on a phishing site.

**How to protect yourself:**
- Always verify you are on kraken.com before entering credentials. Check the URL carefully.
- Use passkeys — they are phishing-resistant by design and will not authenticate on a fake domain.
- Look for your anti-phishing code in every Kraken email.
- Bookmark kraken.com and always use your bookmark to navigate there. Do not click links in emails or search results.
- Kraken will never ask for your password, 2FA codes, or Master Key via email, phone, or social media.

### Phone Number Hijacking (SIM Swaps)

If your Kraken account or associated email uses SMS for any verification, a SIM swap attack can compromise your security. The attacker convinces your mobile carrier to transfer your phone number to their device, then intercepts SMS codes.

**How to protect yourself:**
- Remove phone numbers from your email account.
- Do not use SMS-based 2FA on Kraken or any associated accounts.
- Set a PIN on your carrier account and request a port-freeze. See the Mobile Phone guide for carrier-specific instructions.

### Fake Support Scams

Kraken does not offer phone support that you can call. If someone contacts you claiming to be Kraken support — via phone, social media, or messaging apps — it is a scam. Legitimate Kraken support is available through their website at support.kraken.com and through verified social media accounts.

### Malware and Clipboard Hijacking

Some malware monitors your clipboard and replaces cryptocurrency addresses you copy with the attacker's address. Always double-check the first and last several characters of any address you paste before confirming a withdrawal.

## PGP Email Encryption (Optional)

If your email application supports PGP signing and encryption, you can provide Kraken with your PGP public key to receive signed and encrypted emails. This ensures that emails you receive from Kraken are authentic and that their contents cannot be read if intercepted.

This is an advanced feature and not required for most users, but it provides the highest level of email security.

**How to set up:** Navigate to Settings → Security → PGP Key and upload your public key.

## Security Checklist

1. Enable passkeys for sign-in (preferred) or authenticator app 2FA with a hardware security key
2. Set up a Master Key using a different method than your sign-in 2FA
3. Set an anti-phishing code
4. Secure your email account (strong passphrase, 2FA, no phone numbers)
5. Enable the Global Settings Lock with a waiting period of at least 48 hours
6. Enable 2FA for funding (deposits and withdrawals)
7. Review and clean up saved withdrawal addresses
8. Consider enabling 2FA for trading if you hold large balances
9. Set a short session timeout
10. Bookmark kraken.com and always use it to navigate to the site
