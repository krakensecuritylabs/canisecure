---
title: "Microsoft / Outlook / Hotmail Account"
updated: "2026-03-02"
category: "Account Security"
links: {"Microsoft Security Basics":"https://account.microsoft.com/security","Microsoft Privacy Dashboard":"https://account.microsoft.com/privacy","Go Passwordless":"https://support.microsoft.com/en-us/account-billing/how-to-go-passwordless-with-your-microsoft-account-674ce301-3574-4387-a93d-916751764c43","Passkey Setup":"https://support.microsoft.com/en-us/account-billing/signing-in-with-a-passkey-09a49a86-ca47-406c-8acc-ed0e3c852c6d"}
---

Your Microsoft account (whether it is an Outlook.com, Hotmail, or Live email address) is a high-value target. It may control access to your email, OneDrive files, Microsoft 365 apps, Xbox account, Windows devices, and any third-party services you have signed into with "Sign in with Microsoft." Securing it properly is essential.

## Passkeys (Recommended)

Passkeys are the strongest way to protect your Microsoft account. A passkey uses phishing-resistant FIDO2 security — it is tied to your device and cannot be entered on a fake website, making it immune to phishing attacks. Microsoft reports that passkey sign-ins are roughly eight times faster than password-plus-MFA and have a 98% success rate compared to 32% for passwords.

**How to set up a passkey:**

1. Sign in at account.live.com/proofs/manage (or navigate to your Microsoft account → Security → Advanced Security Options)
2. Select "Add a new way to sign in or verify"
3. Choose "Face, fingerprint, PIN, or security key"
4. Follow the prompts to register your device biometrics or a hardware security key (like YubiKey)

You can register multiple passkeys across different devices for redundancy.

### Go Passwordless

Once you have a passkey or the Microsoft Authenticator app set up, you can remove your password entirely. This eliminates the risk of password theft, phishing, and credential stuffing.

**How to go passwordless:** Navigate to your Microsoft account → Security → Advanced Security Options → Passwordless Account → Turn On. You will then sign in using your passkey, Microsoft Authenticator, Windows Hello, a hardware security key, or SMS code.

If you are not ready to go passwordless, use a strong unique passphrase (21+ characters — see the [Passwords guide](/guides/passwords/)) and store it in a dedicated password manager (not in your browser or Microsoft account).

## Two-Step Verification

If you are not yet using passkeys, enable two-step verification immediately. This requires a second factor (authenticator app, hardware key, or phone) in addition to your password.

**How to enable:**

1. Go to account.microsoft.com/security and sign in
2. Select "Advanced security options"
3. Under "Two-step verification," select "Turn on"
4. Follow the prompts to set up your preferred method

**Recommended 2FA methods (in order of preference):**

1. **Hardware security key** (YubiKey or similar) — phishing-resistant, cannot be remotely compromised
2. **Authenticator app** (Microsoft Authenticator, Authy, or Google Authenticator) — strong protection, widely supported
3. **SMS codes** — better than nothing, but vulnerable to SIM swap attacks. Avoid if possible.

When setting up two-step verification, Microsoft will provide recovery codes. Write these down on paper and store them in a secure physical location. Do not save them digitally.

## Recovery Options

Recovery methods are a double-edged sword. They help you regain access if you are locked out, but an attacker can also use them to break into your account.

**Recommended approach:**

- **Remove phone numbers** from your account recovery options if possible. Phone-based recovery is vulnerable to SIM swap attacks. If you must keep a phone number, make sure your carrier account has a strong PIN and port-freeze enabled (see the [Mobile Phone guide](/guides/mobilephone/)).
- **Recovery email:** If you use a recovery email, make sure that email account is itself secured with a strong passphrase and 2FA. An attacker who compromises your recovery email can reset your Microsoft password.
- **Recovery codes:** Keep your recovery codes stored securely offline as your primary backup method.

## Phishing Protection

Phishing is the most common attack against Microsoft accounts. Attackers create convincing replicas of the Microsoft sign-in page to steal your credentials.

**How to protect yourself:**

- **Use passkeys** — they will not authenticate on a fake domain, making them inherently phishing-proof.
- **Check the URL** before entering credentials. The legitimate sign-in page will always be at login.live.com or login.microsoftonline.com. If the domain is anything else, do not enter your password.
- **Bookmark** your Microsoft sign-in page and always use your bookmark to navigate there. Do not click sign-in links from emails or search results.
- **Enable the Microsoft Authenticator app's number matching feature** — instead of a simple "Approve" prompt, you must enter a number displayed on the sign-in screen, which defeats MFA fatigue attacks (where an attacker spams you with approval requests hoping you tap "Approve" by mistake).

## Privacy and Data Settings

Microsoft collects significant amounts of activity data across its products. Review and limit this data collection.

### Privacy Dashboard

Visit account.microsoft.com/privacy to view and delete data Microsoft has collected, including browsing history, search history, location data, app and service activity, and Cortana data. You can clear each category individually or set data to auto-delete.

### Advertising and Personalization

- Navigate to account.microsoft.com/privacy → Advertising preferences
- Turn off "See personalized ads in your browser" and "See personalized ads wherever I use my Microsoft account"
- In Windows: Settings → Privacy & Security → General → turn off "Let apps show me personalized ads by using my advertising ID"

### Outlook-Specific Privacy

- **Free Outlook accounts** display advertising. Microsoft uses email metadata (not email content) and other account data to target ads. If this concerns you, consider a Microsoft 365 subscription (which is ad-free) or an alternative email provider like Proton Mail.
- **Outlook privacy settings:** In Outlook on the web, go to Settings → General → Privacy and data. In the desktop app, go to File → Options → Trust Center → Privacy Settings. Review what optional data is being sent to Microsoft and disable anything you are not comfortable with.

### Copilot AI

Microsoft Copilot is integrated across Microsoft 365 and Windows. If you use Copilot features, be aware of the following:

- Microsoft states that prompts, responses, and data accessed through Microsoft 365 Copilot are not used to train foundation AI models.
- Copilot personalization can be managed at copilot.microsoft.com → Account → Privacy → Personalization, or in the Copilot mobile app under Account → Privacy → Personalization.
- Conversation history is retained for 18 months. You can delete individual conversations or your entire history at any time.
- If you do not want Copilot to personalize responses based on your data, turn off personalization in these settings.
- For sensitive work, be cautious about what information you share with Copilot. Treat it as you would any cloud service — do not paste sensitive credentials, financial data, or confidential information into prompts.

## Account Activity and Sign-In Monitoring

Microsoft provides tools to monitor who is accessing your account.

- **Recent activity:** Visit account.live.com/Activity to see recent sign-in attempts, including location, device, browser, and whether the attempt was successful. Review this periodically and investigate any sign-ins you do not recognize.
- **Devices:** Visit account.microsoft.com/devices to see all devices signed into your Microsoft account. Remove any devices you no longer use or do not recognize.

## Additional Recommendations

- **Do not use "Sign in with Microsoft"** on third-party websites unless absolutely necessary. Each connected service increases your attack surface. If one of those services is breached, attackers may attempt to use the connection to access your Microsoft account.
- **Do not save passwords in your Microsoft account** or use Edge's built-in password manager as your primary password solution. Use a dedicated password manager like Bitwarden or 1Password instead.
- **Review connected apps:** Navigate to account.live.com/consent/Manage to see which third-party apps have access to your Microsoft account data. Remove any you no longer use.
- **Enable account alerts:** Make sure you receive email notifications for unusual sign-in activity. Check Settings → Security → Advanced Security Options to verify alert preferences.

## Security Checklist

1. Set up a passkey (or enable two-step verification with a hardware key / authenticator app)
2. Consider going passwordless if you have passkeys or Microsoft Authenticator set up
3. Remove phone numbers from recovery options (or secure your carrier account with a PIN and port-freeze)
4. Set an anti-phishing bookmark for login.live.com
5. Review and clean up the Privacy Dashboard (account.microsoft.com/privacy)
6. Turn off personalized advertising
7. Review Copilot personalization and conversation history settings
8. Check recent sign-in activity and remove unrecognized devices
9. Review and revoke access for unused third-party apps
10. Use a dedicated password manager instead of Microsoft's built-in options
