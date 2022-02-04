---
title: "Linkedin"
updated: "2022-02-03"
category: "Account Security"
---

Don't make yourself a target through your LinkedIn profile. If you work in a high-risk field, like cryptocurrency, we highly recommend *against* broadcasting that information to the Internet (e.g., don't say where you work, don't call yourself a crypto evangelist and don't say you attend monthly crypto meetups)

## Locking Down Your Account

### Account access

Navigate to [Sign in & Security -> Account access](https://www.linkedin.com/psettings/sign-in-and-security):

![](/assets/images/linkedin-account-access.png){:width="70%"}

Here you want to take a good look at the following settings:

-   **Email Addresses** - Any email you have here must have a strong password, 2FA (Google Auth or YubiKey, no SMS) and disabled SMS recovery capabilities.  
-   **Phone numbers** - Remove any associated phone numbers. If a phone number is already used for 2FA you can change your 2FA settings to use an Authenticator App instead. Do not add a phone number for "Use for password reset".
-   **Change Password** - Make sure this password is long, complex, and unique. If you haven't change this in a while, change it now.
-   **Where you're signed in** - Review this and remove any session other than the one you are on. You will be asked to login again your other devices. This will clear any rogue session that may exist.
-   **Two-Step Verification** - Enable this using an Authenticator App. Do not use a phone number.


### Visibility settings

Your [Visibility settings](https://www.linkedin.com/psettings/data-visibility) have the most impact on your privacy: Here you can change who can see your e-mail address, your employer, and so on. We recommend to set most options here to "No", especially if your employer does not allow public disclosure of affiliation.

![](/assets/images/linkedin-visibility.png){:width="70%"}

### Site preferences

LinkedIn allows you to change a lot of content settings in your [Site preferences](https://www.linkedin.com/psettings/account-preferences)

![](/assets/images/linkedin-site-preferences.png){:width="70%"}

Here you want to specifically look at:
-   **Autoplay Videos** - Turn this off in the event there is some video-based exploit in the future.
-   **Name, Location, Industry** - Pay attention here. This is where a lot of the privacy information comes from within LinkedIn.

    -   Your headline leaks where you currently work. Consider changing this to "YOUR_ROLE at Undisclosed" if you work somewhere that might put you at a higher risk.
    -   Current position maps to what your current position is in your profile. Leave this as-is for now and we will customize it later.
    -   Uncheck "Show education in my intro".
    -   Country/Region - You can leave this as-is or change to something fake.
    -   Zip Code - Remove this if there is anything there.
    -   Industry - Select something other than Financial Services, Banking, etc.
    -   Contact Info - click the "pencil" icon and clear out anything sensitive. Your email there is the email that you login with and we'll secure that later in this exercise. Click Apply when done. Scroll back down to "Summary"
    -   Summary - This is your Bio. Consider against leaking sensitive info that might make you a target.
    -   Media - Click the "pencil" to remove anything that might make you a target (e.g., your workplace or any other sensitive info).
    -   Click "Save".


### Partners & services

You should take a good look at the settings here: Do you really need your Microsoft account linked with your LinkedIn account? Does LinkedIn need to be connected to your Twitter account?

![](/assets/images/linkedin-partners.png){:width="70%"}

There is also a second setting for Permitted services hidden in the [Data Privacy](https://www.linkedin.com/psettings/data-privacy) page, where you should review whether your Permitted services are really needed:

![](/assets/images/linkedin-permitted-services.png){:width="70%"}

### Advertising preferences

On the [Advertising Preferences](https://www.linkedin.com/psettings/advertising-data) panel you can change what data is used to provide ads to you. In the interest of privacy we recommend to set everything to "Off" on this site.

![](/assets/images/linkedin-ads.png){:width="70%"}
