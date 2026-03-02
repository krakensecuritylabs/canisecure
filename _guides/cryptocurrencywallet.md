---
title: "Cryptocurrency Wallet"
updated: "2026-03-02"
category: "Personal"
links: {"Ledger Security Checklist":"https://www.ledger.com/academy/topics/security/crypto-wallet-security-checklist-protect-crypto-with-ledger","BitPay Seed Phrase Guide":"https://www.bitpay.com/blog/how-to-store-crypto-seed-phrase","Hacken Wallet Security":"https://hacken.io/discover/wallet-security/"}
---

A cryptocurrency wallet is anything that allows you to generate and store public-private key pairs for use with a specific cryptocurrency. Public keys can be shared; private keys must be kept secret. Private keys are used to generate public keys — they are always linked in a pair. One private key can be used to generate a nearly infinite number of linked public keys. Public and private keys are used together to store, send, and receive cryptocurrency.

Before you can send someone cryptocurrency, a private key stored in your wallet must prove its relationship (via a cryptographic function) to the public address that the funds are currently assigned to. This proves ownership and signals to the network that the transaction is valid. If ownership is proved, the transaction is recorded on the blockchain, your balance decreases, and the receiver's balance increases accordingly.

Cryptocurrencies are bearer instruments — once funds are sent, whether by intention, accident, or theft, the transaction is irreversible. The same is true if you lose a private key without a backup: the funds associated with it cannot be recovered. The stakes are high, and the threat landscape is evolving rapidly. In 2025 alone, over $3 billion in crypto was lost to theft and fraud.

## Understanding Wallet Types

Before we explore safekeeping your private keys, it is important to understand the main types of cryptocurrency wallets.

### Hot wallets (software wallets)

Hot wallets require an internet connection to function. They come in several forms:

-   **Desktop and mobile wallets** are installed on your device. The private keys are usually generated and stored locally by the software. Examples include Exodus, Electrum, and Trust Wallet.
-   **Browser extension wallets** run inside your web browser and are commonly used for interacting with DeFi protocols and dApps. Examples include MetaMask, Rabby, and Phantom. These are non-custodial (you control the keys), but are exposed to browser-based attacks including malicious extensions, phishing sites, and supply chain compromises.
-   **Custodial wallets** (typically exchange wallets) are managed by a third party like Kraken, Coinbase, or Gemini. You do not control the private keys directly — the exchange holds them on your behalf. This is convenient but means you must trust the exchange's security practices.

### Cold wallets (offline storage)

Cold wallets do not remain connected to the internet and are therefore much harder to compromise remotely.

-   **Hardware wallets** are dedicated physical devices that generate and store private keys in a secure element. The private key never leaves the device. Leading options include Ledger and Trezor. Hardware wallets with a secure display screen are critical — they let you verify transaction details on the device itself rather than trusting your potentially compromised computer.
-   **Metal/paper backups** are physical copies of your seed phrase or private key recorded on a durable medium such as a titanium plate (e.g., Cryptosteel, Billfodl) or paper. These allow funds to be stored completely offline in a safe, bank vault, or other secure location. Metal backups are strongly preferred over paper as they are resistant to fire, water, and degradation.

## Seed Phrase Security

Most modern wallets generate a **seed phrase** (also called a recovery phrase) — a series of 12 or 24 human-readable words that serves as the master backup for your wallet. Anyone with your seed phrase can regenerate all of your private keys and take your funds. Protecting your seed phrase is the single most important thing you can do.

-   **Never store your seed phrase digitally.** Do not save it in a notes app, cloud storage, email, screenshot, or password manager. If your device or cloud account is compromised, your funds are gone.
-   **Write it down on a durable physical medium.** Use a metal backup plate (titanium or steel) for durability. Paper is acceptable as a secondary backup but is vulnerable to fire, water, and degradation.
-   **Store backups in multiple secure locations.** Keep at least two copies in separate physical locations (e.g., a home safe and a bank safety deposit box). This protects against loss from a single disaster.
-   **Never share your seed phrase with anyone.** No legitimate service, support team, or airdrop will ever ask you for your seed phrase. Anyone who asks is trying to steal your funds — no exceptions.
-   **Consider using a passphrase (25th word).** Most hardware wallets support an optional passphrase that acts as an additional word appended to your seed phrase, creating an entirely separate set of hidden wallets. This means even if your seed phrase is physically compromised, the attacker still cannot access your funds without the passphrase. Store the passphrase separately from the seed phrase.

## Blind Signing and Transaction Verification

**Blind signing** — approving a transaction when your wallet only displays a hash or "Data Present" instead of readable details — is one of the most dangerous practices in crypto. Attackers can hide malicious actions inside blind-signed transactions, including unlimited token approvals, wallet drainer contracts, and NFT-sweeping commands.

-   **Always use Clear Signing.** Only sign transactions where your wallet displays the full, human-readable details of what you're approving (recipient address, token amount, contract action). Hardware wallets with secure display screens are essential for this.
-   **Verify every transaction on the hardware wallet screen itself**, not on your computer monitor. Your computer may be compromised; the hardware wallet screen is the source of truth.
-   **Be extremely careful with token approvals.** DeFi protocols often request unlimited token approvals. Use tools like [Revoke.cash](https://revoke.cash) to review and revoke unnecessary approvals periodically.
-   **Simulate transactions before signing.** Some wallets (like Rabby) offer transaction simulation, showing you what will happen before you approve. Use wallets that support this feature.

## Supply Chain Attacks

Supply chain attacks — where attackers compromise software libraries, wallet updates, or even hardware before it reaches you — have become one of the most significant threats in crypto.

-   **Only buy hardware wallets directly from the manufacturer.** Never buy from third-party sellers, Amazon resellers, or secondhand. Tampered hardware wallets are a known attack vector.
-   **Verify firmware integrity** when setting up a new hardware wallet. Follow the manufacturer's official verification steps.
-   **Be cautious with wallet software updates.** Verify updates come from the official source. Bookmark the official download page and never follow links from emails, DMs, or ads. The Ledger Connect Kit supply chain attack (2023) and multiple NPM package compromises (2025) demonstrate that even trusted software can be weaponized.
-   **Use multiple hardware wallet brands for multisig setups.** If one vendor's supply chain is compromised, the others still protect you.

## Multi-Signature (Multisig) Wallets

For significant holdings, consider a multi-signature wallet that requires multiple separate keys to authorize a transaction (e.g., 2-of-3 or 3-of-5). This means no single compromised device, stolen seed phrase, or coerced individual can move your funds.

-   **Use devices from different manufacturers** for each signing key (e.g., one Ledger, one Trezor, one Keystone). This diversifies your supply chain risk.
-   **Store each signer's seed phrase in a different physical location.**
-   **Test your multisig recovery process** before storing significant funds. Make sure you can reconstruct the wallet and sign transactions using your backups.
-   Popular multisig solutions include Gnosis Safe (now Safe) for Ethereum/EVM chains, and native multisig support on Bitcoin via Sparrow Wallet or Electrum.

## Best Practices

1.  **Keep only small amounts in hot wallets.** Treat your hot wallet like a cash wallet — store minimal amounts for daily use and keep the majority of your funds in cold storage.

2.  **Create multiple backups and test them.** Back up your seed phrases on durable media and store them in geographically separate, secure locations. Periodically verify that your backups can actually recover your wallet.

3.  **Update wallet software and firmware regularly.** Check manufacturer websites directly (never follow links from emails or messages) at least monthly for firmware and software updates. Updates patch security vulnerabilities.

4.  **Use strong PINs and passwords.** Set a strong PIN on your hardware wallet. For software wallets and exchange accounts, use a long, unique, complex password from a password manager. Enable 2FA (authenticator app, not SMS) on any exchange or wallet service that supports it.

5.  **Generate a new address for every transaction when possible.** Address reuse makes it easier for adversaries to link your transactions, identify your total holdings, and target you. Most modern wallets handle this automatically.

6.  **Revoke unnecessary token approvals.** Periodically review and revoke smart contract approvals using [Revoke.cash](https://revoke.cash) or [Etherscan Token Approval Checker](https://etherscan.io/tokenapprovalchecker). Old approvals to abandoned or compromised contracts are a common drain vector.

7.  **Be paranoid about phishing.** Bookmark official wallet and exchange URLs. Never click links in emails, Discord DMs, Telegram messages, or social media posts claiming to be from wallet providers or exchanges. Fake wallet apps and browser extensions are rampant — always verify download sources.

## Duress and Physical Security

If you hold significant cryptocurrency, consider that you may be a target for physical coercion ("$5 wrench attack"). Some mitigations:

-   **Use the passphrase (25th word) feature** to create hidden wallets. Under duress, you can reveal a seed phrase that leads to a decoy wallet with minimal funds while your main holdings remain hidden behind the passphrase.
-   **Use multisig with geographically distributed keys** so that no single location holds enough keys to move funds.
-   **Do not publicly disclose your holdings.** Avoid discussing specific amounts, portfolio values, or wallet addresses on social media or in public.
-   **Consider a time-locked vault** for long-term holdings (some wallets and protocols support this), requiring a waiting period before large withdrawals can be completed.

## Inheritance and Long-Term Planning

Make sure someone you trust can recover your digital assets if you become incapacitated or pass away. Without a plan, your funds are permanently lost.

-   **Document your recovery process** (which wallets you use, where backups are stored, what passphrases are needed) and store this documentation securely — such as with an attorney, in a sealed envelope in a safe deposit box, or using a purpose-built inheritance service.
-   **For multisig setups**, make sure your trusted contacts know how to use the signing devices and reconstruct the wallet. Walk them through a test recovery.
-   **Review and update your plan periodically**, especially when you add new wallets, change storage locations, or update seed phrases.

*(This guide is part of a [series on Personal Security](/news/2020-03-06-personal-security-series).)*
