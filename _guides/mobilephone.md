---
title: "Mobile Phone"
updated: "2026-03-02"
category: "Personal"
links: {"Apple Stolen Device Protection":"https://support.apple.com/en-us/120340","Android Privacy Settings":"https://www.android.com/intl/en_us/safety/privacy/","EFF Mobile Privacy Guide":"https://ssd.eff.org/module/how-to-get-to-know-android-privacy-and-security-settings","Efani Secure Carrier":"https://www.efani.com"}
---

More of our lives exist on a mobile device today than on a personal computer — email, banking, authenticator apps, crypto wallets, messaging, photos, and location data all live on your phone. A compromised mobile device or phone number can cascade into the loss of every account tied to it. Treat your mobile phone as one of your most critical assets.

## Keep Your Device Current

If your phone is no longer receiving software updates from the manufacturer, it is accumulating unpatched vulnerabilities and you are at risk. Replace it.

-   **Apple** typically supports iPhones for 6-7 years of iOS updates. Check at **Settings → General → Software Update**.
-   **Google Pixel** devices receive 7 years of OS and security updates. **Samsung Galaxy** flagships receive 7 years as of the S24 series. Other Android manufacturers vary — check your manufacturer's support policy.
-   You don't need the latest flagship — a recent mid-range phone that's still receiving security patches is far better than an outdated expensive phone.
-   **Enable automatic updates** for both the OS and your apps. Security patches should be installed promptly.

## Device Passcode and Encryption

Set a strong passcode on your device. A 4-digit PIN is not sufficient.

-   Use at least a **6-digit numeric passcode**, but an **alphanumeric passcode** is significantly stronger. On iPhone: **Settings → Face ID & Passcode → Change Passcode → Passcode Options → Custom Alphanumeric Code**.
-   Setting a passcode automatically enables **full-device encryption** on both iOS and modern Android devices. This means if someone physically takes your phone, they cannot read its contents without the passcode.
-   **Enable auto-lock** with a short timeout (30 seconds to 1 minute) so your phone locks quickly when you set it down.

## Biometrics (Face ID / Fingerprint)

Biometric authentication (Face ID, Touch ID, fingerprint) is generally acceptable and convenient. However, consider your threat model:

-   In jurisdictions where law enforcement can compel biometric unlock (but not passcode disclosure), you may want to **disable biometrics** or know how to quickly disable them. On iPhone, pressing the side button and either volume button simultaneously for 2 seconds triggers **Emergency SOS** and temporarily disables Face ID, requiring the passcode for the next unlock.
-   If you travel frequently in areas where searches and random stops are common, consider proactively disabling biometrics before entering those environments. You can claim to forget a passcode, but you can't forget your fingerprint or face.

## Stolen Device Protection (iOS)

If you use an iPhone, enable **Stolen Device Protection**. This feature prevents a thief who has both your phone and your passcode from taking over your Apple Account, disabling Find My, or accessing your passwords without biometric authentication plus a one-hour security delay.

To enable: **Settings → Face ID & Passcode → Stolen Device Protection**. As of iOS 18.4, this is enabled by default on new devices — verify it's active on yours. See the [iCloud / Apple Account guide](/guides/icloud) for more details.

## SIM Swap and Number Hijacking

SIM swap attacks remain one of the most devastating attack vectors, especially targeting cryptocurrency holders. An attacker convinces your carrier (via social engineering, a fake ID, or a bribed/negligent employee) to transfer your phone number to a new SIM or eSIM they control. Once they have your number, they can intercept SMS 2FA codes, reset passwords, and cascade through your email and financial accounts in minutes.

### What happens during a SIM swap

1.  **Privilege escalation** — the attacker gains access to any service using SMS for 2FA or account recovery, including email, banking, and crypto exchanges.
2.  **Account takeover cascade** — once they access your email, they reset passwords on every other account tied to it.
3.  **Phishing** — they impersonate you via your phone number to phish your friends, family, and coworkers.
4.  **Harassment** — attackers may use your number's connection to your address for swatting (calling emergency services to your home) or other harassment.

### Protect your carrier account

Every major US carrier now offers SIM swap protections, but **most are opt-in** — you must enable them yourself:

-   **T-Mobile**: Enable **Account Takeover Protection** and **SIM Protection** in the T-Mobile app or by calling support. Set a strong 6-15 digit **account PIN** (required for all customers). Enable **Port Out Protection** to block unauthorized number transfers.
-   **AT&T**: Enable **Wireless Account Lock** in the myAT&T app — this freezes SIM swaps, upgrades, and port-outs behind a single toggle.
-   **Verizon**: Enable **Number Lock** and **SIM Protection** in the My Verizon app. Verizon enforces delays when disabling these safeguards.

Regardless of carrier:

-   **Set a strong account PIN or passcode** — not your birthday, not the last 4 of your SSN.
-   **Request a port freeze / number lock** to prevent your number from being transferred to another carrier without your direct intervention.
-   **Ask your carrier to add a note** that your account has been targeted for takeover in the past (it's okay to say this preemptively). This note will alert customer service reps if someone attempts to modify your account.
-   **Remove security questions** from your carrier account if possible — they are easily guessable or discoverable via social media.

### Enable SIM PIN

A **SIM PIN** locks the SIM card itself, requiring a separate code every time the phone restarts or the SIM is moved to a new device. This adds a layer of protection even if your carrier account is compromised.

-   **iPhone**: **Settings → Cellular → SIM PIN**
-   **Android**: **Settings → Security → SIM card lock** (location varies by manufacturer). Android 17 is introducing standardized SIM PIN management for both physical SIM and eSIM.

Your carrier can provide the default SIM PIN (often 1111 or 1234) — change it immediately to something unique.

### Consider eSIM

eSIM is inherently harder to swap than a physical SIM because it cannot be removed and inserted into another device. However, eSIM swaps are still possible through carrier account compromise. The protections above (account lock, port freeze, SIM PIN) still apply.

### Protect your accounts against number hijacking

Even with carrier protections in place, assume they can be bypassed:

1.  **Remove your phone number from account recovery** on critical accounts (email, banking, crypto). Use authenticator apps or hardware keys for 2FA instead.
2.  **Enable non-SMS 2FA on every critical account** — hardware key (YubiKey) or authenticator app (Authy, Google Authenticator, 2FAS). See the [Digital Life guide](/guides/digitallife) for the full 2FA hierarchy.
3.  If SMS 2FA is the only option a service offers, use a **Google Voice number** or separate prepaid number rather than your primary carrier number. Google Voice numbers cannot be SIM-swapped through a carrier.

### Recognize and respond to a SIM swap

**Telltale signs:**
-   Your phone suddenly loses signal in an area where coverage is normally good
-   Phone displays "Emergency calls only" or "No Network"
-   You cannot make or receive calls or texts
-   Data services stop working when not on Wi-Fi
-   You receive unexpected notifications about account changes you didn't initiate

**Immediate response:**
1.  **Contact your carrier immediately** (from another phone) and request they reassign the number back to you and block the number from sending/receiving calls and SMS until it's restored. This may take hours to days.
2.  **Change passwords** on your email and critical accounts immediately (from a device you trust).
3.  **Remove SMS recovery** from key accounts if you haven't already.
4.  **Alert your contacts** that phishing attempts may come from your number.
5.  **File a police report** to preempt swatting or other harassment and to create a record for potential fraud disputes.
6.  **Check your carrier bill** afterward for unauthorized charges, toll calls, or overages.

## App Permissions and Privacy

Your phone's apps can access an enormous amount of data. Limit what you expose:

### Location

-   Set most apps to **"While Using the App"** or **"Never"** for location access. Very few apps need "Always" access.
-   On Android, prefer **"Approximate location"** over "Precise location" for apps that don't need pinpoint accuracy (weather, news, etc.).
-   **Disable Significant Locations / Frequent Locations** if you don't need it: iPhone at **Settings → Privacy & Security → Location Services → System Services → Significant Locations**; Android varies by manufacturer.

### Camera and microphone

-   Both iOS and Android show a **colored indicator dot** (green for camera, orange for microphone) when an app is actively using these sensors. If you see this unexpectedly, investigate.
-   Periodically review which apps have camera and microphone access and revoke any that don't need it.

### Contacts, photos, and other data

-   Be cautious about granting contacts access — apps that sync your contacts (messaging apps, social media) upload your entire address book to their servers.
-   Review photo library access — grant "Selected Photos" rather than "Full Access" where possible.

### Advertising and tracking

-   **iPhone**: Go to **Settings → Privacy & Security → Tracking** and deny all app tracking requests. Also go to **Settings → Privacy & Security → Apple Advertising** and disable personalized ads.
-   **Android**: Go to **Settings → Privacy → Ads** and delete your advertising ID.

### Privacy dashboards

-   **iPhone**: Review **Settings → Privacy & Security → App Privacy Report** to see which apps access your data and how often.
-   **Android**: Review **Settings → Privacy → Privacy Dashboard** for a similar overview.

## Additional Recommendations

-   **Enable Find My (iPhone) or Find My Device (Android)** so you can locate, lock, or remotely erase your phone if lost or stolen.
-   **Use Lockdown Mode (iPhone)** if you are a high-risk target. See the [iCloud / Apple Account guide](/guides/icloud) for details.
-   **Don't install apps from outside official app stores** unless you have a specific, informed reason. Sideloaded apps bypass store-level security review.
-   **Use a VPN** on public Wi-Fi. See the [Digital Life guide](/guides/digitallife) for VPN recommendations.
-   **Disable Bluetooth and Wi-Fi** when not in use to reduce your wireless attack surface and prevent passive tracking via broadcast signals.
-   **Be cautious with public USB charging stations** ("juice jacking"). Use your own charger and cable, or a USB data blocker, when charging in public.
-   **Review and clean up installed apps** periodically. Remove anything you no longer use — dormant apps still have the permissions you granted them.
