---
title: "IoT Devices"
updated: "2026-03-02"
category: "Personal"
links: {"OWASP IoT Top 10":"https://owasp.org/www-project-internet-of-things-top-10/","Matter Protocol":"https://csa-iot.org/all-solutions/matter/","Bitdefender Network Segmentation Guide":"https://www.bitdefender.com/en-us/blog/hotforsecurity/network-segmentation","Firewalla Network Segmentation":"https://help.firewalla.com/hc/en-us/articles/4408644783123-Network-Segmentation"}
---

Many of us have Internet of Things (IoT) devices in our homes — thermostats, voice assistants, smart speakers, lights, cameras, door locks, appliances, robot vacuums, and more. Most IoT devices work by connecting to a cloud-based service, enabling remote control and automation. This means they are constantly communicating with the internet, and a compromised device can become an entry point into your entire home network.

Be very careful what you plug into your home. IoT devices remain the weakest link in most home networks. In 2025, entry-level smart devices are the most significant security risk in connected homes, with most compromises beginning on the home Wi-Fi network where IoT devices provide little resistance to attackers.

## Minimize Your IoT Footprint

The most effective security measure is to **limit the number of IoT devices in your home**. Every connected device is an additional attack surface. Before buying a new smart device, ask yourself whether the convenience is worth the security and privacy tradeoff.

-   **Take inventory** of every IoT device in your home right now. Include everything: smart bulbs, plugs, speakers, cameras, doorbells, thermostats, appliances, fitness devices, baby monitors, robot vacuums.
-   **Unplug or factory-reset any device you're no longer using.** Dormant devices still connected to your network are a liability — they don't receive your attention but may still receive malicious traffic.
-   **Remove devices that no longer receive updates.** If a manufacturer has abandoned a product (no firmware updates in 12+ months), it is accumulating unpatched vulnerabilities. Replace it or disconnect it.

## Choose Devices From Responsible Manufacturers

Not all IoT manufacturers are equal when it comes to security. Prioritize devices from companies with:

-   **Active security update programs** — companies like Apple, Google, and Amazon have bug bounty programs and generally patch vulnerabilities quickly. Smaller manufacturers may not have the resources to maintain devices long-term.
-   **Clear end-of-life policies** — some manufacturers disclose how long they'll support a device. Prefer devices with longer committed support windows.
-   **Matter certification** — the [Matter protocol](https://csa-iot.org/all-solutions/matter/) is an industry standard (backed by Apple, Google, Amazon, and Samsung) designed to improve interoperability and security across smart home devices. Matter-certified devices use built-in device authentication, operate locally without requiring an internet connection for core functions, and undergo certification testing. As of late 2025, over 300 devices are Matter-certified, with version 1.5 adding support for cameras and energy management. When possible, prefer Matter-certified devices over proprietary alternatives.
-   **Local control options** — devices that can function locally (without phoning home to a cloud server) are inherently more private and continue working if the manufacturer's servers go down or the company folds.

## Isolate IoT Devices on Your Network

This is one of the most impactful things you can do. **Do not put IoT devices on the same network as your computers, phones, and work devices.** A compromised smart bulb should not be able to reach your laptop.

### Network segmentation options

-   **Guest network (basic)** — most routers offer a guest network feature. Put all IoT devices on the guest network and keep your primary devices on the main network. This provides basic isolation with no additional hardware.
-   **VLAN segmentation (advanced)** — if your router supports VLANs (many Ubiquiti, TP-Link Omada, Firewalla, and pfSense setups do), create dedicated VLANs for different device categories: one for primary/trusted devices, one for IoT, and optionally one for security cameras. Configure firewall rules so IoT devices can reach the internet but cannot communicate with your primary devices.
-   **Consider a dedicated IoT firewall/router** — products like [Firewalla](https://firewalla.com) are designed specifically to segment and monitor home networks, giving you visibility into what your IoT devices are doing and the ability to block suspicious traffic.

### Why this matters

Most smart-home compromises begin on the home Wi-Fi network, where attackers find IoT devices with default credentials, unpatched firmware, or poor encryption. Without segmentation, a single compromised device gives the attacker a foothold to reach everything else — your work laptop, NAS, phone, and other sensitive systems.

## Secure Every Device

For every IoT device in your home:

-   **Change the default password immediately** after setup. Use a strong, unique password for each device. Many IoT devices ship with well-known default credentials that attackers scan for automatically.
-   **Enable 2FA** on the associated account/app if available.
-   **Update firmware regularly.** Enable automatic updates if the device supports it. If not, check the manufacturer's website or app at least monthly. Firmware updates patch security vulnerabilities — delaying them leaves you exposed.
-   **Disable UPnP** (Universal Plug and Play) on your router. UPnP allows devices to automatically open ports on your network, which IoT devices often exploit and attackers can abuse. Disable it at the router level and manually configure any port forwards you actually need.

## Control Audio and Video Recording

Pay close attention to any device that can record audio and/or video. These devices can capture everything said and done in your home.

### Voice assistants (Alexa, Google Home, Siri)

-   **Review and delete your voice history** regularly. All major voice assistant platforms store recordings of your interactions. Find the privacy settings in the associated app and delete history periodically, or enable auto-delete.
-   **Mute the microphone** when not actively using the assistant. Most devices have a physical mute button — use it as your default state and unmute only when needed.
-   **Disable "always listening" features** if possible. Some devices offer a mode where they only respond when a button is pressed rather than listening for a wake word.
-   **Review what third-party skills/apps have access** to your voice assistant. Remove any you don't actively use — they may have access to your voice data and account information.

### Cameras and doorbells

-   **Disable audio recording** on camera feeds if you don't need it. Video-only surveillance reduces privacy exposure.
-   **Use cameras with local storage** (NVR, NAS, or SD card) rather than mandatory cloud storage where possible. See the [Home Office guide](/guides/homeoffice) for more on camera selection.
-   **Be thoughtful about placement.** Exterior cameras and common-area cameras provide security value. Cameras in private spaces (bedrooms, bathrooms) create unnecessary risk.
-   **Secure camera accounts** with strong passwords and 2FA. An unsecured camera is an invasion of your own privacy.

### Baby monitors and pet cameras

-   These are frequently targeted by attackers due to poor default security. Change the password immediately, update firmware, and put them on your IoT network segment.
-   Prefer models that support encrypted communication and local storage.

## Review Third-Party Integrations

Smart home devices often connect to third-party platforms and services, creating additional security exposure. A breach in one service could give attackers access to your entire smart home ecosystem.

-   **Audit which services your devices are connected to** — check each device's app for linked accounts, IFTTT integrations, smart home hubs, etc.
-   **Revoke access for services you no longer use.**
-   **Be cautious when granting new integrations.** Only connect devices to services you trust, and grant the minimum permissions necessary.

## When Disposing of Devices

When you're done with an IoT device, don't just throw it away or sell it:

-   **Factory reset** the device to wipe your credentials, Wi-Fi passwords, and account linkages.
-   **Remove the device from your account** in the manufacturer's app.
-   **Remove it from your smart home hub** (HomeKit, Google Home, Alexa, SmartThings, etc.).

A device sold or discarded without being wiped may still contain your Wi-Fi credentials and account tokens.

*(This guide is part of a [series on Personal Security](/news/2020-03-06-personal-security-series).)*
