---
title: "Thunderbird"
updated: "2026-03-02"
category: "Software"
links: {"Thunderbird Privacy & Security":"https://support.mozilla.org/en-US/products/thunderbird/privacy-and-security","OpenPGP in Thunderbird":"https://support.mozilla.org/en-US/kb/openpgp-thunderbird-howto-and-faq","Thunderbird Scam Detection":"https://support.mozilla.org/en-US/kb/thunderbirds-scam-detection","Thunderbird Security Advisories":"https://www.mozilla.org/en-US/security/known-vulnerabilities/thunderbird/"}
---

Thunderbird is a free, open-source email client maintained by the Mozilla Foundation. Because it is open source, its code can be audited publicly — and unlike webmail providers, Thunderbird does not scan your email for advertising or sell your data. It supports multiple email accounts, built-in OpenPGP encryption, S/MIME, and granular privacy controls that webmail interfaces often lack.

However, Thunderbird's security depends heavily on how you configure it. The defaults are reasonable, but tightening the settings below significantly reduces your exposure to phishing, tracking, and data leakage.

## Keep Thunderbird Updated

This is the single most important step. Thunderbird regularly patches security vulnerabilities — some of which can allow arbitrary code execution or expose sensitive data. Always run the latest version.

**How to check:** Help → About Thunderbird. Updates are downloaded automatically by default. If not, go to Settings → General → Thunderbird Updates and ensure "Automatically install updates" is selected.

Thunderbird follows an Extended Support Release (ESR) cycle. The current major release series is Thunderbird 128+ (codenamed "Nebula"). If you are running an older version, update immediately.

## Account Authentication

### Use OAuth2 Where Available

For major email providers (Google, Microsoft, Yahoo), Thunderbird supports OAuth2 authentication, which is significantly more secure than storing your email password directly in Thunderbird. OAuth2 lets you authenticate through your provider's secure sign-in flow (including their 2FA) without Thunderbird ever seeing your actual password.

**How to configure:** When adding an account, Thunderbird will typically auto-detect OAuth2 support. If you are using an existing account that was set up with a stored password, you can switch: go to Account Settings → (your account) → Server Settings and change the Authentication Method to "OAuth2."

### Primary Password (Formerly "Master Password")

If you store email passwords in Thunderbird (rather than using OAuth2), set a Primary Password to protect them. Without it, anyone with access to your computer can view all stored passwords in plain text.

**How to enable:**

1. Go to Settings → Privacy & Security
2. Under "Passwords," check "Use a Primary Password"
3. Set a strong passphrase (21+ characters)

You will need to enter this password once per session when Thunderbird first needs to access a stored credential.

**To review or remove stored passwords:** Settings → Privacy & Security → Passwords → Saved Passwords. Remove any credentials for accounts you no longer use.

**Note:** If you use a dedicated password manager (recommended), you can avoid storing passwords in Thunderbird altogether by entering them manually or using OAuth2.

## Email Encryption

### OpenPGP (Built-In)

Thunderbird has native OpenPGP support built directly into the client (since version 78), replacing the old Enigmail extension. OpenPGP allows you to encrypt email contents and digitally sign messages so recipients can verify they came from you and were not tampered with.

**How to set up:**

1. Go to Account Settings → (your account) → End-To-End Encryption
2. Click "Add Key" to either generate a new OpenPGP key pair or import an existing one
3. Once your key is configured, select it as your default personal key
4. To encrypt a message, click the "Encrypt" button (lock icon) when composing. The recipient must also have OpenPGP set up and you must have their public key.

**Key management tips:**

- Back up your private key securely (encrypted USB drive or password manager vault). If you lose it, you cannot decrypt messages encrypted to that key.
- Publish your public key to a key server or share it directly with contacts so they can send you encrypted email.
- Verify key fingerprints with contacts through a separate channel (in person, phone call, or encrypted messaging) to prevent man-in-the-middle attacks.

### S/MIME

Thunderbird also supports S/MIME encryption and signing using certificates issued by a Certificate Authority. S/MIME is more commonly used in corporate environments. If your organization provides S/MIME certificates, configure them under Account Settings → (your account) → End-To-End Encryption → S/MIME.

### Practical Reality

End-to-end email encryption requires both sender and receiver to be set up. For most personal communication, encrypted messaging apps like Signal are far easier to use. OpenPGP in Thunderbird is most valuable for specific use cases like communicating with journalists, security researchers, or in contexts where email is the required medium.

## Phishing and Scam Protection

### Enable Scam Detection

Thunderbird can analyze incoming messages and warn you if they appear to be phishing attempts — for example, messages containing links where the displayed text does not match the actual URL.

**How to enable:** Settings → Privacy & Security → Email Scams → check "Tell me if the message I'm reading is a suspected email scam."

This is a helpful safety net, but it is not foolproof. Always inspect links manually before clicking, especially in messages creating a sense of urgency.

### Junk Mail Filters

Thunderbird includes adaptive junk mail filtering that learns from messages you mark as spam.

- Regularly mark unwanted messages as Junk (click the flame icon or press J). Thunderbird learns from these classifications over time.
- Go to Account Settings → (your account) → Junk Settings and ensure junk mail controls are enabled.
- Consider enabling "Move new junk messages to" a designated Junk folder rather than leaving flagged messages in your inbox.

## Remote Content and Tracking

### Block Remote Content (Critical)

By default, Thunderbird blocks remote content (images, scripts, and other resources hosted on external servers) in email messages. This is an important privacy protection — remote content is commonly used by marketers and attackers to track whether you opened an email, when, from what IP address, and what device you used.

**Verify this is enabled:** Settings → Privacy & Security → Email Content → "Allow remote content in messages" should be **unchecked** (blocked by default).

If a trusted email requires remote content to display properly, Thunderbird shows a bar at the top of the message allowing you to load it for that specific email. Only do this for emails you trust.

### Disable HTML Rendering (Advanced)

For maximum privacy, you can set Thunderbird to display all messages as plain text, which eliminates tracking pixels, hidden images, and potentially malicious HTML/JavaScript.

**How to enable:** View → Message Body As → Plain Text.

This will make some emails harder to read (newsletters, formatted messages), but it eliminates an entire category of tracking and attack vectors. Consider this if you are a high-risk user.

## Antivirus Integration

Thunderbird stores email in local files (for example, an entire inbox may be a single file). If your antivirus software detects a virus in an incoming message, it could quarantine the entire inbox file rather than just the malicious message.

Enable Thunderbird's antivirus integration to store incoming messages in a temporary location first, allowing your antivirus to scan and quarantine individual messages without affecting your entire inbox.

**How to enable:** Settings → Privacy & Security → Antivirus → check "Allow antivirus clients to quarantine individual incoming messages."

## Privacy Settings

### Telemetry

Thunderbird may collect anonymous usage data to help improve the product. You can opt out.

**How to disable:** Settings → Privacy & Security → Thunderbird Data Collection and Use → uncheck "Allow Thunderbird to send technical and interaction data to Mozilla."

### Cookies and Website Data

If you use Thunderbird's built-in browser features (like RSS feeds or add-on pages), review the cookie settings.

**How to configure:** Settings → Privacy & Security → Cookies and Site Data. Set to "Keep until I close Thunderbird" or manage manually.

## Add-Ons and Extensions

Thunderbird supports add-ons that can extend its functionality, but each add-on is a potential security risk — poorly maintained or malicious add-ons can access your email data.

- Only install add-ons from the official Thunderbird Add-ons site (addons.thunderbird.net).
- Periodically review installed add-ons: Tools → Add-ons and Themes. Remove any you no longer use.
- Keep add-ons updated. Outdated add-ons may have known vulnerabilities.
- Be especially cautious with add-ons that request access to message content or account credentials.

## Additional Recommendations

- **Use IMAP over POP3** for most accounts. IMAP keeps your email synchronized across devices and on the server. POP3 downloads messages and can delete them from the server, which creates a single point of failure if your local machine is lost or compromised.
- **Require TLS/SSL for all connections.** In Account Settings → Server Settings, ensure the connection security is set to "SSL/TLS" (port 993 for IMAP, port 995 for POP3). For outgoing mail (SMTP), go to Account Settings → Outgoing Server and verify SSL/TLS is enabled (port 465). Never use unencrypted connections.
- **Do not click links in suspicious emails.** Hover over links to inspect the URL before clicking. If an email claims to be from a bank, service provider, or colleague and asks you to click a link, navigate to the website directly instead.
- **Back up your profile.** Thunderbird stores all settings, email, and keys in a local profile folder. Periodically back up this folder to an encrypted drive. The profile is located in the standard Mozilla profile directory (Help → Troubleshooting Information → "Profile Folder").
- **Encrypt your hard drive.** Since Thunderbird stores email locally, full-disk encryption (FileVault, BitLocker, LUKS) protects your email data if your computer is lost or stolen. See the [Personal Computer guide](/guides/personalcomputer/) for setup instructions.

## Security Checklist

1. Update Thunderbird to the latest version
2. Use OAuth2 authentication for Google, Microsoft, and Yahoo accounts
3. Set a Primary Password if you store credentials in Thunderbird
4. Verify remote content is blocked by default
5. Enable scam/phishing detection
6. Enable antivirus integration for individual message quarantine
7. Require SSL/TLS for all incoming and outgoing mail connections
8. Set up OpenPGP encryption for sensitive communications
9. Review and remove unused add-ons
10. Back up your Thunderbird profile to an encrypted drive
