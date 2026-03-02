---
title: "WordPress"
updated: "2026-03-02"
category: "Software"
links: {"WordPress Security Documentation":"https://developer.wordpress.org/advanced-administration/security/hardening/","WP 2FA Plugin":"https://wordpress.org/plugins/wp-2fa/","Wordfence":"https://wordpress.org/plugins/wordfence/","Patchstack Vulnerability Database":"https://patchstack.com/database/","SolidWP Vulnerability Reports":"https://solidwp.com/blog/category/vulnerability-report/"}
---

WordPress powers a significant portion of the web, which makes it one of the most heavily targeted platforms for automated attacks. The good news is that WordPress core software is generally well-maintained. The bad news is that the plugin and theme ecosystem is where the vast majority of breaches occur — in 2025, 92% of successful WordPress compromises originated from plugins or themes, not WordPress core.

The average time between a new WordPress vulnerability disclosure and automated exploit attempts has dropped to under six hours. Keeping your site secure requires active maintenance, not just a one-time setup.

## Keep Everything Updated

This is the single most important WordPress security practice. Vulnerabilities in outdated core software, plugins, and themes are the primary attack vector.

### WordPress Core Auto-Updates

WordPress core now includes automatic updates for minor releases by default. To also enable automatic major version updates, add the following to your `wp-config.php` file:

```
define( 'WP_AUTO_UPDATE_CORE', true );
```

### Plugin and Theme Auto-Updates

WordPress 5.5+ includes a native auto-update feature for plugins and themes. You can enable it directly from the WordPress dashboard — no code changes required.

**How to enable:** Navigate to Plugins → Installed Plugins. For each plugin, click "Enable auto-updates" in the right-hand column. Do the same for themes under Appearance → Themes.

Alternatively, to force auto-updates for all plugins and themes via code, add to your theme's `functions.php`:

```
add_filter( 'auto_update_plugin', '__return_true' );
add_filter( 'auto_update_theme', '__return_true' );
```

### PHP Version

Keep your server's PHP version current. Older PHP versions stop receiving security patches and can introduce vulnerabilities regardless of WordPress configuration. As of 2026, PHP 8.1+ is the minimum supported version. Check with your hosting provider to ensure you are running a current version.

## Authentication and Access Control

### Two-Factor Authentication (Required)

2FA adoption on WordPress sites has grown from 15% in 2024 to over 60% in 2026. If you are not using it, you are behind.

Install a 2FA plugin for all administrator, editor, and author accounts. Recommended options:

- **[WP 2FA](https://wordpress.org/plugins/wp-2fa/)** (by Melapress) — Free. Supports authenticator apps, email codes, and passkeys for passwordless login. Can enforce 2FA for all users or specific roles.
- **[Wordfence Login Security](https://wordpress.org/plugins/wordfence-login-security/)** — Free, lightweight. Supports TOTP authenticator apps and reCAPTCHA. Good if you already use Wordfence for security scanning.

### Passkeys

WP 2FA and some other authentication plugins now support passkeys — phishing-resistant, passwordless login using your device's biometrics or a hardware security key. This is the strongest authentication option available for WordPress.

### Strong Passwords

Enforce strong passwords for all user accounts. WordPress 4.3+ includes a built-in password strength meter, but it does not enforce minimum requirements by default. WP 2FA and other security plugins can enforce password policies (minimum length, complexity, expiration).

Use passphrases of at least 21 characters for all admin accounts. See the [Passwords guide](/guides/passwords/) for details.

### Limit Login Attempts

Brute force login attempts have nearly doubled since early 2025, largely driven by AI-enhanced botnets. Install a plugin to limit failed login attempts and block offending IP addresses.

- **Wordfence** includes brute force protection in its firewall.
- **[Limit Login Attempts Reloaded](https://wordpress.org/plugins/limit-login-attempts-reloaded/)** is a lightweight standalone option.

### Change or Protect the Login URL

The default WordPress login URL (`/wp-login.php` and `/wp-admin`) is universally known and constantly targeted by automated scanners. Consider changing it to a custom URL using a plugin like [WPS Hide Login](https://wordpress.org/plugins/wps-hide-login/).

This is security through obscurity and should not be your only defense, but it significantly reduces automated login noise.

### User Role Management

Follow the principle of least privilege. Not every user needs to be an administrator.

- Use the most restrictive role that allows each user to do their job (Subscriber, Contributor, Author, Editor before Administrator).
- Regularly audit user accounts and remove any that are no longer needed.
- Never use "admin" or "administrator" as a username.

### Hide Author Login Names

By default, WordPress allows anyone to enumerate author login names via the `?author=1` URL parameter. An attacker can use this to target specific accounts in brute force attacks.

To block this, add the following to your theme's `functions.php`:

```
if ( ! is_admin() ) {
    if ( preg_match( '/author=([0-9]*)/i', $_SERVER['QUERY_STRING'] ) ) {
        wp_safe_redirect( home_url(), 301 );
        exit;
    }
}
```

Alternatively, many security plugins (including Wordfence and Solid Security) include this protection as a configuration option.

## Plugin and Theme Security

Plugins and themes are the dominant attack surface. Treat every plugin as a potential vulnerability.

### Evaluate Before Installing

Before installing any plugin, check:

- **Last updated date** — If it has not been updated in over a year, it may be abandoned and unpatched.
- **Active installations** — Higher adoption generally means more scrutiny, though it is not a guarantee of security.
- **Compatibility** — Check if it is tested with your WordPress and PHP versions.
- **Developer response** — Look at the support forum. Do developers respond to bug reports and security issues promptly?
- **Known vulnerabilities** — Search the [Patchstack vulnerability database](https://patchstack.com/database/) or [SolidWP vulnerability reports](https://solidwp.com/blog/category/vulnerability-report/) for the plugin name before installing.

### Remove What You Do Not Use

**Delete** unused plugins and themes — do not just deactivate them. Deactivated plugins can still be exploited if they contain vulnerabilities, because the PHP files remain accessible on the server. In December 2025 alone, over 150 plugins were removed from the WordPress repository due to unpatched security issues or developer inactivity. If you have any of these installed, your site is permanently exposed until you delete them.

### Disable Plugin and Theme File Editing

By default, WordPress allows administrators to edit plugin and theme files directly from the dashboard. If an attacker gains admin access, this feature lets them inject malicious code immediately.

Disable it by adding to `wp-config.php`:

```
define( 'DISALLOW_FILE_EDIT', true );
```

## Disable XML-RPC

The XML-RPC endpoint (`xmlrpc.php`) allows external applications to interact with your WordPress site. While it has legitimate uses, it is frequently exploited for brute force attacks, credential stuffing, and DDoS amplification via pingbacks.

Unless you specifically need XML-RPC (for example, the WordPress mobile app or Jetpack), disable it.

**Via functions.php:**

```
add_filter( 'xmlrpc_enabled', '__return_false' );
```

**Via .htaccess (Apache):**

```
<Files xmlrpc.php>
    Require all denied
</Files>
```

**Via Nginx:**

```
location = /xmlrpc.php {
    deny all;
}
```

## REST API Restrictions

The WordPress REST API (`/wp-json/`) exposes site data, including user information, by default. If you do not need external access to the REST API, restrict it to authenticated users only.

Security plugins like Wordfence and Solid Security can limit REST API access. You can also restrict it manually — for example, requiring authentication for all REST API requests unless the user is logged in.

## Security Plugins

A comprehensive security plugin provides firewall protection, malware scanning, login security, and monitoring in a single package. Recommended options:

- **[Wordfence](https://wordpress.org/plugins/wordfence/)** — The most widely used WordPress security plugin (4+ million sites). Includes endpoint firewall, malware scanner, login security with 2FA, live traffic monitoring, and IP blocking. Free tier is robust; premium adds real-time firewall rules and malware signatures.
- **[Solid Security](https://solidwp.com/security/)** (formerly iThemes Security) — Step-by-step setup wizard, 2FA, brute force protection, file change detection, and dashboard monitoring. Good for users who want guided configuration.
- **[Sucuri Security](https://wordpress.org/plugins/sucuri-scanner/)** — File integrity monitoring, malware scanning, security hardening, and email alerts. The premium tier includes a cloud-based web application firewall (WAF) and DDoS protection.
- **[Patchstack](https://patchstack.com/)** — Focuses on virtual patching — automatically blocks known vulnerability exploits even before the plugin developer releases a fix. Useful as a complement to other security plugins.

You do not need to install multiple full security suites (they can conflict). Pick one primary security plugin and supplement with specialized tools as needed.

## HTTPS and Security Headers

### Enforce HTTPS

Your entire WordPress site should be served over HTTPS. Most hosting providers now offer free SSL certificates through Let's Encrypt.

- Ensure your WordPress Address and Site Address (Settings → General) both use `https://`.
- Add the following to `wp-config.php` to force admin and login pages over SSL:

```
define( 'FORCE_SSL_ADMIN', true );
```

### Security Headers

Configure your web server to send security headers that protect against common attacks. Key headers include:

- `Strict-Transport-Security` (HSTS) — Forces browsers to use HTTPS
- `X-Content-Type-Options: nosniff` — Prevents MIME type sniffing
- `X-Frame-Options: SAMEORIGIN` — Prevents clickjacking
- `Content-Security-Policy` — Controls what resources can load on your pages
- `Referrer-Policy: strict-origin-when-cross-origin` — Limits referrer information leakage
- `Permissions-Policy` — Restricts browser features (camera, microphone, geolocation)

These are configured in your Apache (`.htaccess`) or Nginx configuration, or through a plugin like [HTTP Headers](https://wordpress.org/plugins/http-headers/).

## Server-Level Hardening

### Least Privilege

Run your web server process as a limited user (such as `www-data` or `apache`). Never run WordPress as root. If an attacker exploits a vulnerability, running as a limited user prevents them from escalating to full server control.

### File Permissions

Set appropriate file permissions:

- Directories: `755` (owner can read/write/execute, others can read/execute)
- Files: `644` (owner can read/write, others can read)
- `wp-config.php`: `600` or `640` (owner can read/write, no access for others)

### Remove Default Files

After installing WordPress, delete files that leak information or are unnecessary:

- `readme.html` — Reveals your WordPress version
- `wp-config-sample.php` — Not needed after setup
- `license.txt` — Not needed in production
- `wp-content/plugins/hello.php` (Hello Dolly) — Default plugin with no security value

### Disable Version Information

WordPress can leak its version number in page source, RSS feeds, and HTTP headers. This helps attackers identify which known vulnerabilities apply to your site.

Add to `functions.php`:

```
remove_action( 'wp_head', 'wp_generator' );
```

Configure your web server to remove `Server` and `X-Powered-By` headers as well.

## Backups

No security configuration is complete without reliable backups. If your site is compromised, a clean backup is often the fastest path to recovery.

- Use a backup plugin like [UpdraftPlus](https://wordpress.org/plugins/updraftplus/) or [BlogVault](https://blogvault.net/) to schedule automatic backups.
- Store backups off-site (cloud storage, not on the same server as your WordPress installation).
- Test restoring from backup periodically to verify your backups actually work.
- Keep at least 30 days of backup history so you can restore to a point before a compromise occurred.

## Security Checklist

1. Update WordPress core, all plugins, and all themes (enable auto-updates)
2. Verify you are running a supported PHP version (8.1+)
3. Install and enforce two-factor authentication for all admin and editor accounts
4. Set strong passphrases (21+ characters) for all user accounts
5. Delete all unused plugins and themes (not just deactivate)
6. Disable XML-RPC if not needed
7. Disable file editing in the dashboard (`DISALLOW_FILE_EDIT`)
8. Install a security plugin (Wordfence, Solid Security, or Sucuri)
9. Enforce HTTPS and configure security headers
10. Set up automated off-site backups and test restoring them
11. Review user accounts and roles — remove unnecessary admin access
12. Hide author login names and protect or change the login URL
