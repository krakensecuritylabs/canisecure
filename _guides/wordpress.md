---
title: "Wordpress"
keywords: "wordpress"
updated: "2019-10-15"
category: "CMS"
links: {
  "https://perishablepress.com/stop-user-enumeration-wordpress":"https://perishablepress.com/stop-user-enumeration-wordpress",
  "https://www.helpbot.net/what-is-xmlrpcphp-in-wordpress-and-why-should-you-disable-it":"https://www.helpbot.net/what-is-xmlrpcphp-in-wordpress-and-why-should-you-disable-it",
  "https://www.wpbeginner.com/plugins/how-to-enable-automatic-updates-for-wordpress-plugins":"https://www.wpbeginner.com/plugins/how-to-enable-automatic-updates-for-wordpress-plugins",
  "https://github.com/da667/Ciderpress":"https://github.com/da667/Ciderpress"
}
---

Wordpress is a popular content management system that is utilized by beginners and experts alike for blogs, portfolios, and even online stores.

Ensure automatic updates are on
-------------------------------

Because Wordpress is utilized in so many sites, vulnerabilities in the core of Wordpress are often exploited by attackers en masse after disclosure. In order to force Wordpress to automatically update, the following line can be added to your wp-config file:

```define( 'WP_AUTO_UPDATE_CORE', true );```

Themes and plugins can be updated using the following code in functions.php, respectively:

```
add_filter( 'auto_update_plugin', '__return_true'  );
add_filter( 'auto_update_theme', '__return_true'  );
```

If you are more comfortable with using a plugin, the [Automatic Updater](https://wordpress.org/plugins/automatic-updater/) plugin provides a nice way to update the core, themes, and plugins.

Think twice before using untested plugins
-----------------------------------------

Although Wordpress natively features a marketplace of over 50,000 user-submitted plugins, be careful about installing unknown or untrusted code on your website. Many plugins are submitted by hobbyists, but have not been tested for security. Many instances exist of small plugins allowing SQL injection, cross-site scripting (XSS), and more. While a large project does not necessarily guarantee its security, make sure you analyze how quickly the developers identify and patch bugs in their plugin.

Know the risks of XMLRPC and WP JSON
------------------------------------

The XMLRPC endpoint is a feature enabled by default that allows developers and other plugins to interact with your site. While this has legitimate utility, this is an endpoint often used by malicious actors to further fingerprint your site, brute force credentials, or create pingbacks on other spam sites.

To disable this manually, add the following line to functions.php:

```add_filter( 'xmlrpc_enabled', '__return_false' );```

This endpoint can also be disabled within an .htaccess file or a plugin.

Similarly, the WP JSON endpoint can be disabled with [Disable WP REST API](https://wordpress.org/plugins/disable-wp-rest-api/).

Hide Author Login Names
-----------------------
By default, Wordpress allows unauthenticated users to enumerate the login names of authors using the ?author=1 endpoint. Although you may have changed the default usernames (eg, from "admin" or "administrator"), an attacker can identify those changes and use the names as a critical part of brute force attacks.

This can be stopped using a plugin or manually with the following code below:

```
// block WP enum scans

// https://m0n.co/enum

if (!is_admin()) {

// default URL format

if (preg_match('/author=([0-9]*)/i', $_SERVER['QUERY_STRING'])) die();

add_filter('redirect_canonical', 'shapeSpace_check_enum', 10, 2);

}

function shapeSpace_check_enum($redirect, $request) {

// permalink URL format

if (preg_match('/\?author=([0-9]*)(\/*)/i', $request)) die();

else return $redirect;

}
```

Prevent Brute Force Attempts
----------------------------

If an attacker gets access to a user account, it's relatively simple to find a path to be able to deploy code in the context of your webserver. In order to slow down or prevent brute force attempts, the following plugins can be used:

[Login Lockdown](https://wordpress.org/plugins/login-lockdown/) - Blocks IP addresses after multiple failed attempts

[Google Authenticator](https://wordpress.org/plugins/google-authenticator/) - Adds Two-Factor Authentication (2FA) to your Wordpress site. Even if an attacker can compromise your password, they will not be able to log in without access to your Authenticator app.

Disable Version Information
---------------------------

Depending on your deployment, your Wordpress site might leak information about software versions in the headers (such as the Server header or X-Powered-By). Edit your Apache or Nginx configurations to ensure that these options are disabled. These also can be removed with a plugin called [WP .htaccess Control](https://wordpress.org/plugins/wp-htaccess-control/).

In addition to headers, the Wordpress Generator can leak the version of Wordpress installed, which can be reliably removed using the [Remove WP Version](https://wordpress.org/plugins/remove-wp-version/) plugin.

Use Least Privileges
--------------------

If you do decide to use Wordpress, make sure that the web service is running as a limited user (such as www-data or apache). Running Wordpress as a root or privileged user can allow an attacker to further their access into your environment and establish a foothold that lasts beyond a complete reinstallation of Wordpress.

Clean Up Files
--------------

Upon first install of Wordpress, many default posts, pages, and text files exist on the server. The following files can be safely deleted after installation:

```
install.php
Wp-config-sample.php
Readme.html
Hello Dolly (wp-content/plugins/hello.php)
```
