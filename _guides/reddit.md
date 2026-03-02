---
title: "Reddit"
updated: "2026-03-02"
category: "Account Security"
links: {"Reddit Safety & Privacy Settings":"https://www.reddit.com/settings/privacy","Reddit Connected Apps":"https://www.reddit.com/prefs/apps","Reddit Help - Privacy":"https://support.reddithelp.com/hc/en-us/categories/360003246511-Privacy-Security","Reddit Data Request":"https://www.reddit.com/settings/data-request"}
---

Reddit may feel like a casual platform, but your account is a valuable target. Attackers regularly use leaked password lists to hijack Reddit accounts for spam, crypto scams, and vote manipulation. More importantly, your comment history can reveal a surprising amount about your real identity — your location, employer, family, interests, political views, and daily routine. Reddit also licenses user content to AI companies, making everything you post potentially part of training data for large language models.

## Use a Strong Password

Reddit allows passwords as short as six characters, which is dangerously weak. Use a strong, unique passphrase of at least 21 characters and store it in a dedicated password manager like Bitwarden or 1Password. See the [Passwords guide](/guides/passwords/) for details.

## Enable Two-Factor Authentication

Enable 2FA to prevent attackers from accessing your account with just a stolen password. Reddit supports authenticator app-based 2FA (not SMS).

**How to enable (must be done on the website, not the app):**

1. Go to reddit.com/settings/privacy (or navigate to User Settings → Safety & Privacy)
2. Scroll down to "Advanced Security"
3. Toggle on "Use two-factor authentication"
4. Scan the QR code with your authenticator app (Authy, Google Authenticator, etc.)
5. Save the backup codes Reddit provides — write them down on paper and store them in a secure physical location

If you have ever received an email from Reddit about unusual sign-in activity, enabling 2FA should be your immediate priority.

## Privacy and Personalization Settings

By default, Reddit opts you into extensive tracking and personalization. Every toggle below is turned on by default — go through each one and disable what you are not comfortable with.

Navigate to reddit.com/settings/privacy (or User Settings → Safety & Privacy) and review the following:

### Advertising Preferences

- **Personalize ads based on your Reddit activity** — Turn off. This stops Reddit from using your browsing, upvote, and comment behavior to target ads.
- **Personalize ads based on information from our partners** — Turn off. This prevents Reddit from using third-party tracking data (cookies, site widgets) to target ads.
- **Personalize ads based on your activity with our partners** — Turn off.
- **Personalize recommendations based on your general location** — Turn off (or set to "No location specified"). Note that Reddit will still infer your approximate location from your IP address for some purposes regardless of this setting.
- **Personalize all of Reddit based on the outbound links you click** — Turn off. This stops Reddit from tracking which external links you click.

### Visibility Settings

Navigate to reddit.com/settings/account (or User Settings → Account):

- **Allow people to follow you** — Consider turning off. Followers can see your new posts in their feed, making it easier to track your activity.
- **Show up in search results** — Consider turning off. This prevents your profile from appearing in Reddit's internal search.
- **Content visibility** — Consider turning off. When enabled, your profile and posts can appear on popular feeds and in recommendations to users who do not follow you.

### Search Engine Indexing

- **Show your profile in search engine results** — Turn off. This prevents Google and other search engines from indexing your Reddit profile. While third-party archive sites may still mirror Reddit content, disabling this significantly limits your exposure.

**Important:** Reddit privacy settings only apply when you are logged in. Browsing Reddit without logging in resets all settings to their defaults.

## AI Data Licensing

Reddit has signed major content licensing deals with companies including Google (reported at $60 million annually) and OpenAI, allowing them to use Reddit posts and comments to train AI models. This means anything you have ever posted on Reddit may be used as training data for large language models.

**What you can do:**

- Reddit does not currently offer a granular opt-out for AI training specifically. The most effective mitigation is to limit what you post and periodically delete old content (see "Limit Your Information" below).
- You can request a copy of your data at reddit.com/settings/data-request to see what Reddit has collected.
- Under certain privacy laws (GDPR, CCPA), you may be able to request deletion of your data. Visit reddit.com/settings/data-request or contact Reddit's privacy team.

## Limit Your Information

Your Reddit comment history is a goldmine for anyone trying to build a profile of you. Over months and years, comments about your job, neighborhood, pets, relationships, health, travel, and opinions can be pieced together to identify you — even if you never shared your real name.

**Assess your exposure:** Try searching your username on a Reddit analysis tool to see what someone could learn about you from your public comment history. You may be surprised at how much is revealed.

**Strategies to reduce your footprint:**

- **Periodically delete old comments and posts.** Tools like [Power Delete Suite](https://github.com/j0be/PowerDeleteSuite) can overwrite your comments with blank text before deleting them, which helps prevent deleted content from being recovered through archive services.
- **Consider rotating accounts.** Creating a new account every few months prevents a long comment history from accumulating. This is one of the most effective privacy measures on Reddit.
- **Be mindful of what you share.** Avoid mentioning specific locations, workplaces, family details, or identifiable life events. Even seemingly innocent details can be combined to identify you.
- **Use different accounts for different purposes.** If you post in both a local city subreddit and a niche hobby subreddit, those two data points together may be enough to identify you. Using separate accounts for different topics adds compartmentalization.

## Review Connected Applications

Navigate to reddit.com/prefs/apps to see all third-party applications you have granted access to your Reddit account. Each connected app is a potential attack vector — if that app is breached or poorly secured, your Reddit account data may be exposed.

Revoke access for any application you no longer use or do not recognize. Make it a habit to review this list every few months.

## Account Deletion

If you decide Reddit is not worth the privacy tradeoff, you can delete your account entirely.

**How to delete:** Navigate to User Settings → Account → Delete Account. You will need to confirm with your password.

**Important notes:**

- Deleting your account removes your username and profile, but your comments and posts may remain visible (attributed to "[deleted]"). To truly remove your content, overwrite and delete your comments before deleting your account.
- Account deletion is permanent and cannot be undone.
- Consider downloading your data first at reddit.com/settings/data-request.

## Security Checklist

1. Set a strong, unique passphrase (21+ characters) using a password manager
2. Enable two-factor authentication via authenticator app (on the website, not the app)
3. Save your 2FA backup codes securely offline
4. Turn off all personalization and advertising toggles in Safety & Privacy settings
5. Disable search engine indexing of your profile
6. Review and adjust follower and content visibility settings
7. Review and revoke access for unused connected applications
8. Assess your comment history exposure and delete old content as needed
9. Consider using separate accounts for different topics
10. Request a copy of your data to understand what Reddit has collected
