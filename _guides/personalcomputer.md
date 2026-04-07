---
title: "Personal Computer"
updated: "2026-03-02"
category: "Personal"
links: {"Apple FileVault":"https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac","Microsoft BitLocker":"https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838","uBlock Origin":"https://ublockorigin.com","Mullvad VPN":"https://mullvad.net","Signal":"https://signal.org"}
---

Your personal computer is where you handle online banking, shopping, email, document storage, and increasingly cryptocurrency management. Unlike a phone, it's also where you're most likely to encounter drive-by downloads, phishing sites, malicious extensions, and sophisticated web-based exploits. Securing your personal computer requires attention to both the operating system and the software running on it.

## Keep It Updated

This is the single most important thing you can do. Operating system and application updates contain critical security patches. Once an update is released, attackers reverse-engineer the patch to exploit unpatched systems — the window between "patch released" and "exploit in the wild" is shrinking.

-   **Enable automatic updates** for your operating system (macOS, Windows, Linux) and all applications.
-   **Don't delay updates.** Install them within a day or two of release. It's fair to not want to be the very first to update, but you absolutely do not want to be the slowest.
-   **Check for firmware updates** on your hardware (BIOS/UEFI) periodically — these patch low-level vulnerabilities that OS updates cannot fix.

## Login and Lock Screen

-   Use a **strong passphrase** to log in — at least 21 characters, ideally a random word passphrase. See the [Passwords guide](/guides/passwords) for details.
-   **Configure your computer to lock immediately** when the screen is closed, when it goes to sleep, or after a short idle timeout (no more than 2 minutes).
    -   **macOS**: System Settings → Lock Screen → set "Require password after screen saver begins or display is turned off" to **Immediately**.
    -   **Windows**: Settings → Accounts → Sign-in options → set "Require sign-in" to **When PC wakes from sleep**. Also set a short screen timeout under Settings → System → Power & battery.
    -   **Linux**: Configure your desktop environment's screen lock settings accordingly.
-   **Use a separate admin account** for system changes and a standard (non-admin) account for daily use. This limits the damage malware can do if it executes under your daily account.

## Full Disk Encryption

Full disk encryption ensures that if your computer is lost, stolen, or physically accessed, the data on the drive is unreadable without your passphrase. This should be enabled on every computer you own.

-   **macOS**: Enable [FileVault](https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac) via System Settings → Privacy & Security → FileVault. Uses XTS-AES-128 with a 256-bit key. Store your recovery key in a physically secure location (not in iCloud if you want maximum control).
-   **Windows Pro/Enterprise**: Enable [BitLocker](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) via Settings → Privacy & security → Device encryption, or search for "BitLocker" in the Start menu. Uses AES-XTS 128-bit or 256-bit encryption. Store your recovery key in your password manager or a physically secure location.
-   **Windows Home**: BitLocker is not available on Windows Home. Use [VeraCrypt](https://veracrypt.fr) for full-system encryption, or consider upgrading to Windows Pro.
-   **Linux**: Use LUKS (Linux Unified Key Setup) — most distributions offer this as an option during installation.

## Firewall

Enable your operating system's built-in firewall. This blocks unauthorized incoming connections to your computer.

-   **macOS**: System Settings → Network → Firewall → turn on. Also enable "Stealth mode" under Firewall Options to make your computer less discoverable on networks.
-   **Windows**: Windows Defender Firewall is enabled by default. Verify at Settings → Privacy & security → Windows Security → Firewall & network protection. Ensure it's active for all network profiles (Domain, Private, Public).
-   **Linux**: Use `ufw` (Uncomplicated Firewall) or your distribution's firewall tool. Enable it and set default deny for incoming connections.

## Antivirus and Endpoint Protection

Use the antivirus features built into your operating system and keep them updated. We haven't seen convincing evidence that third-party antivirus products provide significant advantages over the built-in options for most personal users — and some third-party products introduce their own privacy and security concerns.

-   **Windows**: Windows Defender (Microsoft Defender Antivirus) is capable and well-maintained. Ensure it's enabled and definitions are up to date. It includes real-time protection, cloud-delivered protection, and automatic sample submission.
-   **macOS**: macOS includes XProtect (antimalware), Gatekeeper (app signing verification), and Malware Removal Tool. These run automatically and are updated silently by Apple. No additional antivirus is needed for most users.
-   **Linux**: The risk profile is lower, but consider ClamAV for scanning downloaded files if your threat model warrants it.

For all platforms: **be cautious about what you download and install.** The best antivirus is your own judgment — don't run software from untrusted sources, don't open unexpected email attachments, and don't disable security warnings.

## Browser Security

Your web browser is one of the most exposed attack surfaces on your computer. Harden it:

### Choose a secure browser

Use **Chrome**, **Firefox**, or **Brave** as your primary browser and keep it updated. All three receive frequent security patches and support modern security features. Consider:

-   **Firefox** for the strongest privacy defaults and extension ecosystem (supports container tabs for session isolation).
-   **Chrome/Brave** for the strongest sandboxing and exploit mitigation (V8 sandbox, site isolation).

### Essential extensions

-   [**uBlock Origin**](https://ublockorigin.com) — blocks ads, trackers, and malicious scripts. This is the single most impactful privacy and security extension you can install.
-   **Privacy Badger** or **Ghostery** — blocks cross-site trackers that uBlock may miss.
-   Keep your extension count low. Every extension has broad access to your browsing data — audit and remove any you don't actively use.

### Browser settings to configure

-   **Disable saved passwords** in the browser. Use your password manager (Bitwarden, 1Password) instead.
-   **Disable autofill** for payment methods and addresses in the browser.
-   **Enable Enhanced Safe Browsing** (Chrome) or **Enhanced Tracking Protection** set to Strict (Firefox).
-   **Block third-party cookies** or use total cookie protection (Firefox does this by default).
-   **Disable browser notifications** by default — they are frequently abused for phishing.

## Password Manager

Install and use a password manager that syncs across all your devices. See the [Passwords guide](/guides/passwords) for full recommendations. In brief:

-   [**Bitwarden**](https://bitwarden.com) — open source, excellent free tier, cross-platform.
-   [**1Password**](https://1password.com) — polished, premium features including Travel Mode and dark web monitoring.
-   [**KeePassXC**](https://keepassxc.org/) — local-only, open source. Best for advanced users who want full control and no cloud dependency.

**Note:** We no longer recommend LastPass due to multiple security breaches in 2022-2023. If you're currently using LastPass, migrate to Bitwarden or 1Password.

Protect your password manager with a strong master passphrase (21+ characters) and 2FA (hardware key or authenticator app).

## Privacy-Focused Search and Email

-   **Search**: Use [DuckDuckGo](https://duckduckgo.com/), [Brave Search](https://search.brave.com/), or [Startpage](https://www.startpage.com/) instead of Google Search to limit tracking of your search activity.
-   **Email**: Consider a privacy-focused email provider like [Proton Mail](https://protonmail.com) that doesn't scan your inbox for ads or AI training. See the [Digital Life guide](/guides/digitallife) for more on email security.

## VPN

Use a reputable, no-log VPN service to encrypt your internet traffic and hide your IP address — especially important on public Wi-Fi, but good practice in general.

-   [**Mullvad**](https://mullvad.net) — strong privacy stance, accepts anonymous payment, no account required (just a number).
-   [**ProtonVPN**](https://protonvpn.com) — integrates well with Proton Mail, good free tier.
-   [**IVPN**](https://www.ivpn.net) — transparent privacy policy, multi-hop support.

Avoid free VPN services — if you're not paying, your data is the product. Also note: a VPN does not make you anonymous. It shifts trust from your ISP to the VPN provider.

## Secure Messaging

Use [**Signal**](https://signal.org/) for sensitive conversations with friends, family, and colleagues. Signal is end-to-end encrypted by default, collects minimal metadata, and is open source. It's available on macOS, Windows, Linux, iOS, and Android. See the [Digital Life guide](/guides/digitallife) for more on secure messaging.

## Physical Security

If you use your laptop outside your home, add physical security layers:

-   **Privacy screen filter** — prevents shoulder surfing by narrowing the viewing angle. Runs about $30-$80 depending on screen size.
-   **Camera cover** — a simple sliding cover for your webcam prevents visual surveillance if your camera is compromised. Under $10.
-   **Laptop lock** — a cable lock that secures your laptop to a desk or table. About $20-$40. Important in co-working spaces, cafes, and hotels.
-   **Never leave your laptop unattended** in public, even briefly. An unlocked laptop left for 30 seconds is enough for an attacker to install malware via USB or access your accounts.
-   **Be cautious with USB devices.** Don't plug in USB drives or cables from unknown sources — malicious USB devices can compromise your computer in seconds. Use a **USB data blocker** when charging from public ports.

## Additional Recommendations

-   **Enable Find My (macOS)** or set up equivalent device tracking so you can locate, lock, or erase your laptop remotely if lost or stolen.
-   **Back up regularly** using encrypted backups. On macOS, enable encrypted Time Machine backups. On Windows, use File History or a third-party backup tool with encryption. Test your backups periodically to make sure they actually restore.
-   **Disable remote access features** you don't use (Remote Desktop, SSH, screen sharing). Each open service is an additional attack surface.
-   **Review startup programs and background services** periodically. Remove anything you don't recognize or no longer need.
-   **Use Lockdown Mode (macOS)** if you are a high-risk target. See the [iCloud / Apple Account guide](/guides/icloud) for details.

*(This guide is part of a [series on Personal Security](/news/2020-03-06-personal-security-series).)*
