---
title: "Strava"
updated: "2026-03-02"
category: "Account Security"
links: {"Strava Privacy Controls":"https://support.strava.com/hc/en-us/articles/207343930-Privacy-Controls","Strava Map Visibility":"https://support.strava.com/hc/en-us/articles/115000173384-Edit-Map-Visibility","Strava Global Heatmap Opt-Out":"https://support.strava.com/hc/en-us/articles/216918877-Strava-Metro-and-the-Global-Heatmap","Strava Activity Privacy":"https://support.strava.com/hc/en-us/articles/216919377-Activity-Privacy-Controls"}
---

Strava is one of the most popular fitness tracking apps, used by millions of runners, cyclists, and other athletes to log workouts and share achievements. However, fitness data is inherently sensitive — your activity maps can reveal your home address, your daily routine, your workplace, and the times you are away from home. By default, Strava makes much of this data visible to others. In 2018, the Strava Global Heatmap inadvertently exposed the locations of military bases and intelligence facilities when soldiers' activities were aggregated on the public map.

Taking a few minutes to configure your privacy settings can dramatically reduce your exposure.

## Account Security

### Authentication

Strava now requires one-time codes sent via email for sign-in, adding a layer of security beyond just a password. However, Strava still does not support authenticator app-based two-factor authentication or hardware security keys — a significant gap for a platform that handles sensitive health and location data.

**Recommendations:**

- **Use a strong, unique passphrase** (21+ characters) that you use nowhere else. Store it in a dedicated password manager. See the [Passwords guide](/guides/passwords/) for details.
- **Consider signing in with Google or Apple** instead of a Strava-specific password. Both Google and Apple support passkeys and strong 2FA, so you inherit their account security. This is currently the strongest way to protect your Strava login.
- **Secure the email account** associated with your Strava login. Since one-time codes are sent to your email, anyone who controls your email can access your Strava account. Make sure your email uses a strong passphrase and 2FA (see the [Google](/guides/google/), [iCloud](/guides/icloud/), or [Microsoft](/guides/microsoft/) guides).

## Privacy Controls

Navigate to your Strava profile → Settings → Privacy Controls (on the web: strava.com/settings/privacy).

### Activity Visibility (Who Can See Your Workouts)

Strava lets you set a default visibility for your activities. The options are:

- **Everyone** — Anyone on the internet can see your activities, even without a Strava account. This is the least private option.
- **Followers** — Only people you have approved as followers can see your activities.
- **Only You** — Activities are completely private.

**Recommendation:** Set your default to **Followers** at minimum. If you do not need social features, set it to **Only You**. You can always override the default on individual activities if you want to share a specific ride or run.

### Profile Visibility

Review who can see your profile information, including your full name, bio, photos, and activity feed. Consider limiting profile visibility to followers only.

## Map Visibility (Critical)

This is the single most important privacy setting on Strava. Your activity maps can pinpoint exactly where you live, work, and spend time.

Navigate to Settings → Privacy Controls → Map Visibility.

### Hide Start and End Points

Strava offers two options for hiding the start and end of your activities:

1. **Hide at specific addresses** — Add your home address, workplace, or any other location you want to protect. Choose a radius (in meters) around each address where your activity map will be hidden. Add all locations where you regularly start or end activities.

2. **Hide all start and end points** — Select a radius (in meters) and Strava will automatically hide the start and end of every activity, regardless of where it takes place. This is the simpler and more thorough option.

**Recommendation:** At minimum, add your home address with a radius of at least 500 meters (the larger the radius, the harder it is to reverse-engineer your location). Better yet, enable the option to hide all start and end points.

**Important:** Strava hides the first and last 200 meters of new activities by default, but 200 meters is often not enough to prevent someone from identifying your home — especially in suburban or rural areas. Increase this radius.

### Past Activities

Map visibility settings only apply to future activities by default. If you have previously recorded workouts with visible start/end points, you need to apply the settings retroactively.

Navigate to Settings → Privacy Controls → Map Visibility → Edit Past Activities to update your existing activities.

## Global Heatmap and Aggregated Data

Strava's Global Heatmap aggregates activity data from all users into a public visualization. Even if your individual activities are set to "Followers" or "Only You," your data may still contribute to the heatmap and other aggregated features like Strava Metro, Points of Interest, Start Points, and Community Generated Routes.

**How to opt out:**

Navigate to Settings → Privacy Controls → Aggregated Data Usage and turn off "Contribute your activity data to de-identified, aggregate data sets."

**Recommendation:** Turn this off. While the data is described as "de-identified," aggregated heatmap data has been shown to reveal sensitive location patterns, especially in low-traffic areas where your activity may be one of very few contributions.

## Connected Devices and Apps

### Device Permissions

Strava connects to fitness devices like heart-rate monitors, GPS watches, power meters, and smart trainers. Regularly review what data you are sharing with Strava from these devices.

Navigate to Settings → Data Permissions to review and adjust what information Strava collects from your connected devices.

### Third-Party Apps

Strava can be connected to a variety of third-party apps and services. Each connected app has access to some of your Strava data — potentially including your activity maps and location history.

Navigate to Settings → My Apps (or strava.com/settings/apps) to review all connected applications. Revoke access for any app you no longer use. If you sold an old fitness tracker or stopped using a third-party training platform, disconnect it.

## Additional Recommendations

- **Be cautious with Flyby.** Strava's Flyby feature shows other athletes who were near you during an activity. While it can be fun, it also means others can see when and where you were. You can disable Flyby in your privacy settings.
- **Review tagged photos and mentions.** Other Strava users can tag you in activities and photos. Check your notification settings and consider whether you want to be discoverable through others' activities.
- **Consider what your activity names reveal.** Default activity names like "Morning Run" are fine, but custom names like "Run from home to the office" or "Lunchtime loop from [Company Name]" can leak information. Keep activity names generic.
- **Be mindful of segment leaderboards.** If you appear on a segment leaderboard near your home, your general location can be inferred. There is no way to opt out of segments individually while keeping activities visible, so this is another reason to limit activity visibility to followers.
- **Commute tagging.** If you tag activities as commutes, they reveal your daily route between home and work. Consider whether you need this feature, and if so, keep commute-tagged activities set to "Only You."

## Security Checklist

1. Use a strong, unique passphrase (21+ characters) or sign in with Google/Apple for stronger authentication
2. Secure the email account linked to your Strava login with 2FA
3. Set default activity visibility to "Followers" or "Only You"
4. Add your home address (and other sensitive locations) to Map Visibility with a radius of at least 500 meters
5. Apply map visibility settings to past activities retroactively
6. Opt out of the Global Heatmap and aggregated data
7. Review and disconnect unused third-party apps
8. Review device data permissions
9. Disable Flyby or limit its visibility
10. Keep activity names generic — avoid revealing locations or routines
