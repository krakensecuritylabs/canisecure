---
title: "Zoom Video Conferencing"
updated: "2026-03-02"
category: "Account Security"
links: {"Zoom Security Settings":"https://zoom.us/profile/setting","Zoom 2FA Setup":"https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066054","Zoom Passkey Setup":"https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0083521","Zoom AI Companion Privacy":"https://www.zoom.com/en/products/ai-assistant/resources/privacy-security/","Zoom E2E Encryption":"https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060861"}
---

Zoom has matured significantly since the "Zoombombing" incidents of 2020, but video conferencing still carries inherent risks — from unintended screen shares to AI features that process your conversations. Whether you use Zoom for personal calls or professional meetings, configuring these settings properly helps protect your privacy and your data.

## Account Security

### Use a Strong Password

Use a strong, unique passphrase of at least 21 characters for your Zoom account. Store it in a dedicated password manager like Bitwarden or 1Password. See the [Passwords guide](/guides/passwords/) for details.

### Enable Two-Factor Authentication

Zoom supports 2FA for all account types, including free accounts. Enable it to prevent unauthorized access even if your password is compromised.

**How to enable:**

1. Sign in to the Zoom web portal at zoom.us
2. Navigate to Profile → Security → Two-Factor Authentication
3. Click "Turn On" and choose your preferred method

**Available methods (in order of preference):**

1. **Passkey** — Phishing-resistant passwordless authentication using device biometrics or a hardware security key (like YubiKey). This is the strongest option. Navigate to Profile → Security → Passkeys to set up.
2. **Authenticator app** — Use Authy, Google Authenticator, or similar. Scan the QR code to link the app.
3. **SMS** — A one-time code sent via text message. Vulnerable to SIM swap attacks. Use only if the above methods are unavailable.

### Secure Your Email Account

The email address linked to your Zoom account is a critical dependency. Make sure it uses a strong passphrase and 2FA. See the [Google](/guides/google/), [iCloud](/guides/icloud/), or [Microsoft](/guides/microsoft/) guides for email-specific security instructions.

## Meeting Security

### Require a Passcode

All Zoom meetings should require a passcode to prevent uninvited guests from joining. Zoom now enables meeting passcodes by default for new meetings, but verify this is active in your settings.

**How to configure:** Sign in to the Zoom web portal → Settings → Security → "Require a passcode when scheduling new meetings" (ensure this is toggled on).

**Best practices for passcodes:**

- Use a random passcode rather than a simple one
- For sensitive meetings, send the passcode through a separate channel (like an encrypted messaging app) rather than including it in the calendar invitation where it may be visible to unintended recipients
- For recurring meetings, change the passcode periodically — former participants (such as ex-colleagues) may still have the original passcode

### Enable the Waiting Room

The waiting room gives the host control over who enters the meeting. Each participant must be individually admitted, allowing the host to verify identities before granting access.

**How to enable:** Settings → Security → Waiting Room (toggle on). You can also enable this on a per-meeting basis when scheduling.

When admitting participants from the waiting room, the host should ask each attendee to verbally identify themselves and confirm via video. If an attendee refuses to identify themselves, remove them from the meeting immediately.

### Lock the Meeting

Once all expected participants have joined, the host can lock the meeting to prevent anyone else from entering — even if they have the meeting ID and passcode.

**How to lock:** During a meeting, click Security (shield icon) in the toolbar → "Lock Meeting."

### Restrict Screen Sharing

By default, only the host should be able to share their screen. This prevents participants from displaying unwanted or disruptive content.

**How to configure:** Settings → In Meeting (Basic) → Screen sharing → set to "Host Only." The host can grant screen sharing to specific participants during the meeting if needed.

### Disable File Transfer

Unless you specifically need participants to send files through the meeting chat, disable file transfer to prevent potential malware distribution.

**How to configure:** Settings → In Meeting (Basic) → File transfer → toggle off.

### Remove Disruptive Participants

If an unauthorized or disruptive person enters your meeting, the host can remove them immediately. Hover over the participant's name in the Participants panel and click "Remove." Removed participants cannot rejoin the same meeting.

## Video and Audio Privacy

### Disable Auto-Join Video

Prevent Zoom from automatically turning on your camera when you join a meeting. This gives you control over when you are visible.

**How to configure:** In the Zoom desktop client, go to Settings → Video → turn off "Turn off my video when joining a meeting" (ensure it is checked, meaning video starts off).

### Use a Virtual Background

If you are calling from home or any location where your surroundings might reveal personal information (home layout, address visible on mail, family photos, whiteboards with sensitive content), use a virtual or blurred background.

**How to configure:** Settings → Backgrounds & Effects → choose a virtual background or select "Blur."

### Physical Camera Cover

Use a physical camera cover or slide when not in a meeting. This is the only guaranteed way to ensure your camera is not recording — software controls can have bugs.

### Be Mindful of Screen Sharing

Before sharing your screen, close any windows containing sensitive information — email, messaging apps, financial accounts, password managers, or documents not relevant to the meeting. Use Zoom's "Share a specific window" option rather than sharing your entire desktop.

Zoom will notify participants when someone starts recording through the app, but there is no way to prevent participants from recording through external means (smartphone camera, screen capture software). Treat any video call as potentially recorded.

## AI Companion

Zoom has integrated AI features called "AI Companion" that can summarize meetings, generate action items, and compose messages. Understanding how these features handle your data is important.

**Key facts about Zoom AI Companion:**

- Zoom states that it does not use customer audio, video, chat, screen sharing, or other meeting content to train Zoom's or third-party AI models.
- AI Companion processes meeting data in real time to generate summaries and insights, but this data is encrypted in transit and at rest.
- Zoom uses third-party AI model providers (including OpenAI and Anthropic) for some AI features. Data sent to these providers is encrypted using TLS 1.2 or AES 256-bit GCM.
- Feedback you provide on AI Companion results is used to improve the product experience but not for model training.

**How to manage AI Companion:**

- **As a host:** You control whether AI Companion features (meeting summary, smart recording, etc.) are active for your meetings. Review these settings at zoom.us → Settings → AI Companion.
- **As a participant:** When AI Companion features are active in a meeting, Zoom displays a notification. If you are not comfortable with AI processing of the meeting, you can ask the host to disable it or leave the meeting.
- **Data processing options:** Zoom offers options for how AI data is processed, including Zoom-hosted models only (ZMO), which keeps all AI processing within Zoom's infrastructure and your provisioned region. Check with your account administrator if this is important to you.

**Recommendation:** If your meeting involves sensitive or confidential content, consider disabling AI Companion features for that specific meeting. As the host, you can toggle these off in the meeting settings before or during the call.

## End-to-End Encryption (E2EE)

Zoom offers optional end-to-end encryption for meetings, which means only the meeting participants (not Zoom's servers) hold the encryption keys. This provides the highest level of privacy for sensitive conversations.

**How to enable:** Settings → Security → "Allow use of end-to-end encryption" → toggle on. Then when scheduling a meeting, select "End-to-end encryption" as the encryption type.

**Important caveats:**

- E2EE disables some features, including cloud recording, live transcription, breakout rooms, polling, reactions, and AI Companion. Plan accordingly.
- E2EE is available for meetings with up to 200 participants.
- All participants must be using Zoom version 5.4.0 or later, and must join from the Zoom desktop client, mobile app, or Zoom Rooms — browser join is not supported for E2EE meetings.
- A green shield icon with a lock appears in the upper left of the meeting window when E2EE is active. Participants can verify encryption by comparing security codes.

For routine meetings, Zoom's standard encryption (AES 256-bit GCM) is sufficient. Reserve E2EE for conversations where confidentiality is critical.

## Additional Recommendations

- **Keep Zoom updated.** Zoom frequently releases security patches. Enable auto-updates or check for updates regularly. In the desktop client: click your profile icon → Check for Updates.
- **Use unique meeting IDs** for each meeting rather than your Personal Meeting ID (PMI). Your PMI is essentially a permanent meeting room — if it leaks, anyone can attempt to join your future meetings. Schedule meetings with auto-generated IDs instead.
- **Do not post meeting links publicly.** Sharing Zoom links on social media, public websites, or unsecured channels invites unauthorized access.
- **Review connected apps.** Navigate to the Zoom App Marketplace → Manage → Installed Apps and revoke access for any apps you no longer use.
- **Disable join before host** for sensitive meetings. This prevents participants from gathering in the meeting before the host arrives and controls the start.
- **Mute participants on entry.** For larger meetings, mute all participants on entry to prevent audio disruptions and accidental sound leaks. Settings → In Meeting (Basic) → "Mute all participants when they join a meeting."
- **Limit annotation and whiteboard** permissions to the host for meetings where you want to control content sharing.

## Security Checklist

1. Set a strong, unique passphrase (21+ characters) for your Zoom account
2. Enable 2FA with a passkey, security key, or authenticator app
3. Require meeting passcodes and enable waiting rooms by default
4. Set screen sharing to "Host Only"
5. Disable auto-join video (camera starts off by default)
6. Use virtual or blurred backgrounds to protect your environment
7. Use unique auto-generated meeting IDs instead of your Personal Meeting ID
8. Review AI Companion settings and disable for sensitive meetings
9. Enable end-to-end encryption for confidential conversations
10. Keep Zoom updated and review connected apps periodically
