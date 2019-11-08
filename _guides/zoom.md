---

title: "Zoom Video Conferencing"
updated: "2019-11-7"
category: "Account Security"

---

Implementation of the following practices and features can help reduce the risks of leaks or surveillance of privileged communications when Zoom is used for both personal and/or business use.

Limit Unintended Guests
=======================

By default, anyone that has (or guesses) a 9, 10 or 11-digit Zoom meeting ID can join your meeting without any additional authentication.


Require Password to Join
-----------------------------

Where it is not practical to limit your participants by email domain, the use of a meeting password can be useful. A password can be set on a meeting-by-meeting basis or required at the account level.

![](/assets/images/zoom-pass.png)

-   Use a random password to increase the difficulty of online attacks

-   When possible, do not send the password in the email or calendar invitation as the password may then be leaked to anyone else able to view your calendar (e.g., other coworkers). Instead send the password out of band (i.e. using a different mechanism such as encrypted chat) shortly before the meeting begins.

-   For recurring meetings, change the password on a regular basis or old attendees (e.g., ex-coworkers) may still have the password

Enable Waiting Room
-------------------

A best practice is to hold the meeting host accountable for reviewing who is joining and only admitting after they have performed due diligence to confirm the attendee is authorized. This is implemented using the "enable waiting room" feature on the meeting.

![](/assets/images/zoom-waitingroom.png)

When the host admits a new participant, they should introduce them and require the attendee to verbally identify themselves.
![](/assets/images/zoom-admit.png)

If the attendee fails to identify themselves via video image and/or voice, the host should remove them from the meeting. 

![](/assets/images/zoom-removeuser.png)

Limit Domains Allowed to Join (requires credit card verification or paid account)
-----------------------------

If you are only using Zoom with known internal personnel and established business partners (e.g., only with your coworkers), the most secure option is to allow only users from specific email domains (bottom option in screenshot) to join your meetings. 

![](/assets/images/zoom-signedin.png)

Note that limiting access to users signed into Zoom is not much benefit as anyone can sign up for Zoom with a fake email account.

Avoid Unintended Video Exposure
===============================

Though now fixed, Zoom has had [issues in the past](https://medium.com/bugbountywriteup/zoom-zero-day-4-million-webcams-maybe-an-rce-just-get-them-to-visit-your-website-ac75c83f4ef5) where webcams have been unintentionally enabled. Disable Zoom from turning on your video when joining meetings.

![](/assets/images/zoom-turnoffvideo.png)

Consider also using a physical control such as a cover for your camera to ensure you are not being recorded when not in use.

Be Careful with Screen Sharing and Audio Recording
==================================================

Zoom will notify other meeting participants if someone tries to record video/audio from the Zoom application, however there is no way to prevent users from recording through other means (e.g., taking pictures of the meeting and recording audio through a smartphone). As with any conferencing software, be careful what you say, what's in your video and what parts of your screen you may share.
