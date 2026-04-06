# CODEX Notes

## Current Project Location

`C:\Users\agares\OneDrive\0 求职\personal-site`

This repository was migrated from a static HTML site to a Next.js portfolio template based on:

- `https://github.com/kimsengduong/nextjs-portfolio-template`

## Current Goal

This site is no longer being treated as an academic homepage first.
It is now positioned as a job-search portfolio site for 2026 full-time roles.

Primary target directions:

- Machine Learning Engineer
- Applied Scientist
- Quantitative Research
- Medical AI
- LLM systems / data-heavy applied AI roles

## Deployment

The site is deployed through GitHub Pages using GitHub Actions.

Important details:

- Repo: `Agaresd47/agaresd47.github.io`
- Live site: `https://agaresd47.github.io/`
- Pages build type: `workflow`
- Static export is enabled in `next.config.ts`

Relevant files:

- [next.config.ts](C:/Users/agares/OneDrive/0%20求职/personal-site/next.config.ts)
- [.github/workflows/deploy-pages.yml](C:/Users/agares/OneDrive/0%20求职/personal-site/.github/workflows/deploy-pages.yml)

## Local Development

Node LTS was installed on this machine during setup.

Typical commands from the repo root:

```powershell
npm install
npm run dev
```

Build check:

```powershell
npm run build
```

The build succeeded after migration, so the current project is GitHub Pages compatible.

## Where Content Lives

Main content is data-driven and should usually be edited here first:

- [src/data/profile.json](C:/Users/agares/OneDrive/0%20求职/personal-site/src/data/profile.json)

This file currently controls:

- name / title
- hero summary
- about text
- experience entries
- selected work / project cards
- skills
- education
- contact links
- navigation labels

## Key Components

These are the main files to touch when refining presentation:

- [src/components/HeroSection.tsx](C:/Users/agares/OneDrive/0%20求职/personal-site/src/components/HeroSection.tsx)
- [src/components/AboutSection.tsx](C:/Users/agares/OneDrive/0%20求职/personal-site/src/components/AboutSection.tsx)
- [src/components/ExperienceSection.tsx](C:/Users/agares/OneDrive/0%20求职/personal-site/src/components/ExperienceSection.tsx)
- [src/components/ProjectsSection.tsx](C:/Users/agares/OneDrive/0%20求职/personal-site/src/components/ProjectsSection.tsx)
- [src/components/SkillsSection.tsx](C:/Users/agares/OneDrive/0%20求职/personal-site/src/components/SkillsSection.tsx)
- [src/components/ContactSection.tsx](C:/Users/agares/OneDrive/0%20求职/personal-site/src/components/ContactSection.tsx)

## Assets

Current assets in use:

- profile photo: [public/profile.jpg](C:/Users/agares/OneDrive/0%20求职/personal-site/public/profile.jpg)
- resume: [public/Zifei_Dong_Resume.pdf](C:/Users/agares/OneDrive/0%20求职/personal-site/public/Zifei_Dong_Resume.pdf)

The resume link is intentionally configured to open in a new tab, not force download.

## Design Direction Chosen

The previous handcrafted static version felt too decorative and harder to iterate on.
The current template was chosen because it is:

- easier to read
- cleaner for recruiting use
- easier to maintain
- data-driven
- simpler to edit without redesigning the whole page

## What Was Intentionally Changed

From the original template:

- configured for static export
- adapted for GitHub Pages deployment
- changed hero CTA from generic portfolio wording to job-search wording
- changed CV buttons from download to open-in-new-tab
- changed contact section to job-search positioning
- changed section labels to be more recruiter-readable
- changed portrait styling from circular avatar to rectangular profile photo
- filled profile data with Zifei Dong's actual content

## Recommended Next Improvements

If continuing in a future Codex chat, the best next tasks are:

1. Tighten the hero text.
   Make the opening even shorter and more role-oriented.

2. Rewrite `Selected Work`.
   Current cards are good enough, but can be made more recruiter-friendly by emphasizing outcomes, scale, and execution.

3. Decide whether to keep publications inside `Selected Work` or split into:
   - Selected Projects
   - Publications

4. Potentially add one more section:
   - `What I’m Looking For`
   or
   - `Featured Projects`

5. If bilingual support becomes important again, add a language toggle later.
   It was dropped during migration to keep the new version simpler.

## Current Status

As of the migration:

- local repo path is correct
- git repo is intact
- GitHub Pages deployment is configured
- GitHub Actions deployment completed successfully
- website is live on the new Next.js version

## Suggested Prompt For Future Codex Sessions

If starting a fresh conversation, a good prompt is:

`Open C:\Users\agares\OneDrive\0 求职\personal-site and continue refining the job-search version of the Next.js portfolio. Read CODEX.md first, then improve the hero and selected work sections without making the design more decorative.`
