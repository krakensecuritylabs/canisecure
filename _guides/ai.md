---
title: "AI Tools & Chatbots"
updated: "2026-03-02"
category: "AI"
links: {"OWASP Top 10 for LLM Applications":"https://owasp.org/www-project-top-10-for-large-language-model-applications/","Stanford HAI - AI Chatbot Privacy":"https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot","EFF - AI Privacy":"https://www.eff.org/issues/ai"}
---

AI tools — chatbots, image generators, coding assistants, voice assistants, and more — have become part of daily life for millions of people. Services like ChatGPT, Claude, Gemini, Copilot, Meta AI, and others are powerful and useful, but they introduce privacy and security risks that most people are not thinking about.

This guide provides general security and privacy principles that apply regardless of which AI tools you use. For platform-specific settings, refer to the individual account guides in this series.

## The Core Rule: Treat Every Input as Potentially Public

The single most important principle when using any AI tool is this: **do not share anything with an AI system that you would not be comfortable seeing published publicly.**

Even when a provider promises privacy protections, the reality is that your data may be stored on remote servers, reviewed by human employees for quality assurance, included in training data for future AI models, exposed in a data breach, subject to legal requests or subpoenas, or retained far longer than you expect.

A 2025 industry study found that 77% of employees who use AI tools have pasted company data into chatbots, with 22% of those instances including confidential personal or financial information. Treat AI tools with the same caution you would apply to posting on a public forum.

## What Not to Share with AI Tools

Be especially careful about sharing the following with any AI chatbot or assistant:

- **Passwords, API keys, or authentication tokens** — Never paste credentials into an AI tool. If you need help with code that uses credentials, replace them with placeholder values first.
- **Financial information** — Bank account numbers, credit card numbers, tax documents, investment details, or financial statements.
- **Personal identification** — Social Security numbers, passport numbers, driver's license numbers, or government IDs.
- **Medical or health information** — Diagnoses, prescriptions, medical records, or mental health details.
- **Confidential work information** — Trade secrets, unreleased product details, internal strategy documents, legal matters, or proprietary code.
- **Private communications** — Emails, messages, or conversations involving other people who have not consented to their content being shared with an AI provider.
- **Photos of other people** — Especially children. AI image analysis tools may store, process, or train on uploaded images.
- **Location data** — Exact addresses, daily routines, or travel schedules.

When in doubt, ask yourself: "If this information appeared in a data breach tomorrow, would it cause me harm?" If yes, do not share it.

## Data Training: What Happens to Your Conversations

Most AI providers use your interactions to improve their models — unless you explicitly opt out. Here is how the major platforms handle training data as of early 2026:

**Anthropic (Claude):** Does not use your prompts or responses to train models by default. You must explicitly opt in for your data to be used for training. Conversations are retained for safety monitoring and abuse prevention but are not fed into model training.

**OpenAI (ChatGPT):** Uses your conversations to train models by default. You can opt out by navigating to Settings → Data Controls → "Improve the model for everyone" → toggle off. ChatGPT Plus, Team, and Enterprise plans have training opt-out enabled by default.

**Google (Gemini):** Retains conversations for up to 18 months by default for users 18+, and human reviewers may access them. To opt out: open Gemini → Activity → Turn Off → Turn Off and Delete Activity → Next → Delete. Note that conversations with Gemini in Google Workspace may have separate data handling policies.

**Microsoft (Copilot):** Microsoft states that Microsoft 365 Copilot does not use your data to train foundation models. However, personal Copilot users cannot fully opt out of data usage for training. You can delete interaction history through your Microsoft account privacy settings.

**Meta AI:** Does not offer a reliable opt-out for AI training. Meta states it will "review objection requests in accordance with relevant data protection laws," but does not guarantee your data will be excluded. If privacy is a concern, avoid using Meta AI for anything sensitive.

**xAI (Grok):** Uses your X (Twitter) posts and Grok interactions for training by default. Opt out on desktop at x.com/settings/grok_settings. See the [X (Twitter) guide](/guides/twitter/) for details.

**General rule:** If a service is free, assume your data is being used unless you have explicitly confirmed otherwise. Even paid tiers may use data for training unless the terms specifically exclude it.

## Account Security for AI Platforms

Your AI chat history can contain a surprising amount of sensitive information — work projects, personal questions, health concerns, financial situations. Protect these accounts as you would any other high-value account.

- **Use a strong, unique passphrase** (21+ characters) for each AI platform account. See the [Passwords guide](/guides/passwords/).
- **Enable two-factor authentication** wherever available. Use a hardware security key or authenticator app, not SMS.
- **Use passkeys** if the platform supports them (several AI platforms are adding passkey support).
- **Review and delete conversation history** periodically. Most platforms let you delete individual conversations or your entire history. Make it a habit.
- **Log out of shared devices.** Do not stay logged into AI tools on computers or phones that others can access.

## AI-Generated Content: Verify Everything

AI tools can produce content that sounds authoritative and confident but is factually wrong. This is commonly called "hallucination" — the model generates plausible-sounding text that has no basis in reality.

**Risks include:**

- **Fabricated citations** — AI chatbots may invent academic papers, court cases, news articles, or statistics that do not exist. People have filed legal documents containing AI-fabricated case citations.
- **Outdated information** — Models have knowledge cutoff dates and may not reflect recent events, changes in law, or updated guidance.
- **Confident errors** — AI tools rarely express uncertainty. A completely wrong answer is presented with the same confidence as a correct one.
- **Code vulnerabilities** — AI-generated code may contain security flaws, use deprecated functions, or introduce vulnerabilities. Never deploy AI-generated code without review and testing.

**Your defense:** Always verify important claims independently. Cross-check facts, citations, medical information, legal advice, and financial guidance against authoritative primary sources. Treat AI output as a starting point for research, not a final answer.

## Deepfakes and AI-Generated Media

AI can now generate realistic fake images, video, and audio. Voice cloning requires as little as three to five seconds of sample audio. In 2025, nearly eight million deepfake files were shared on social media platforms.

**Risks to be aware of:**

- **Voice cloning scams** — Attackers can clone the voice of a family member, friend, or executive to make fraudulent phone calls requesting money or sensitive information. One documented case used a cloned voice to extract nearly €1 million.
- **Fake images and video** — AI-generated images of people can be used for blackmail, fraud, impersonation, or misinformation. "Revenge" deepfakes are a growing concern.
- **Impersonation** — Deepfake video calls have been used to impersonate executives and authorize fraudulent transactions.

**Your defense:**

- Establish a **verbal code word** with family members for emergency calls so you can verify identity.
- Be skeptical of unexpected urgent requests for money or sensitive actions received via phone or video, even if the person sounds or looks familiar.
- **Verify through a separate channel** — if you receive a suspicious call from someone you know, hang up and call them back at a number you already have.
- Be cautious about how much audio and video of yourself you post publicly — it can be used as source material for deepfakes.
- See the [Social Engineering guide](/guides/socialengineering/) for more on these attack patterns.

## AI and Children

If children in your household use AI tools, be aware of additional concerns:

- **Age restrictions:** Most AI platforms require users to be at least 13 (some 18). These restrictions exist because of data privacy laws and the potential for AI to generate inappropriate content.
- **Oversharing:** Children may not understand that information shared with a chatbot is sent to a company's servers. Explain that talking to an AI is not the same as talking to a friend — everything they type is stored and may be read by other people.
- **Emotional attachment:** Some children (and adults) develop emotional reliance on AI chatbots. AI systems are not therapists, friends, or authority figures — they are software generating statistically likely responses.
- **Content risks:** AI tools can generate content that is inaccurate, misleading, or inappropriate. Younger users may not have the critical thinking skills to evaluate AI output.

Consider using AI platforms' built-in parental controls or family settings where available, and have direct conversations about what is and is not appropriate to share.

## Protecting Yourself from AI-Powered Attacks

AI has not just created new tools — it has supercharged existing attack methods.

- **AI-generated phishing** is now nearly indistinguishable from legitimate communication. Over 80% of phishing emails in 2025 contained AI-generated content. See the [Social Engineering guide](/guides/socialengineering/) for defense strategies.
- **AI-powered scams** use chatbots and generated content to build trust over time (as in "pig butchering" investment fraud).
- **AI voice cloning** makes vishing (voice phishing) dramatically more convincing.
- **AI-assisted credential attacks** can automate and personalize brute force and social engineering attempts at scale.

The fundamentals of defense remain the same: verify independently, slow down when pressured, use phishing-resistant authentication (passkeys), and limit the personal information available about you online.

## Reducing Your AI Data Footprint

- **Opt out of training** on every platform you use (see the platform-specific instructions above).
- **Delete conversation history** regularly — do not let months or years of queries accumulate.
- **Use incognito or temporary modes** when available. Some platforms offer temporary conversations that are not saved to your history.
- **Separate accounts** — consider using different accounts or email addresses for personal vs. work AI usage to limit cross-contamination.
- **Review connected apps** — if you have connected AI tools to other services (email, calendar, documents, Slack), periodically review and revoke access you no longer need.
- **Download your data** periodically to understand what the platform has collected about you. Most platforms offer a data export feature.

## Quick-Reference: AI Safety Principles

1. Never share passwords, financial details, government IDs, or confidential information with AI tools
2. Opt out of data training on every platform (and verify the setting periodically — defaults can change)
3. Secure your AI accounts with strong passphrases and two-factor authentication
4. Verify all AI-generated facts, citations, code, and advice against primary sources
5. Delete conversation history regularly
6. Establish a family code word to defend against voice cloning scams
7. Be cautious about what audio, video, and images of yourself you post publicly
8. Supervise children's use of AI tools and explain what happens to their data
9. Treat any urgent, unexpected request as suspicious — even if the voice or video looks real
10. Keep your personal information footprint small — the less data about you that is public, the harder it is for AI-powered attacks to target you effectively
