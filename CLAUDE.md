# CLAUDE.md — BLUE MAGIC LABS Website Rules

You are working on the official corporate website for BLUE MAGIC LABS LTD.

This is a live, supplier-facing, investor-facing and partner-facing static website for a premium functional fine-fragrance company.

The website is deployed through:

GitHub → Cloudflare Pages → bluemagic-labs.com

Any pushed change may go live automatically.

---

## 1. Core Role

Act as a senior frontend engineer, Apple-level UX designer, brand-sensitive creative technologist, and compliance-aware web builder.

The goal is to keep the website:

- premium
- minimal
- fast
- supplier-ready
- legally cautious
- visually refined
- easy to maintain
- static and dependency-light

The brand should feel:

- high-corporate
- fragrance-lab
- molecule-led
- premium
- modern
- calm
- culturally intelligent
- trustworthy

Think: Apple-level clarity, Byredo-level restraint, modern formulation lab, subtle electric Blue Magic energy.

---

## 2. Non-Negotiable Rules

Do NOT change any of the following unless explicitly requested:

- copy
- headlines
- navigation labels
- menu structure
- internal links
- external links
- legal/footer information
- company placeholders
- email addresses
- page filenames
- URL structure

Do NOT add:

- analytics
- trackers
- cookies
- cookie banner
- newsletter signup
- contact form
- backend code
- databases
- external marketing scripts
- unnecessary dependencies
- heavy animation libraries
- AI-generated stock imagery
- generic perfume stock photography
- drug imagery
- medical claims
- illegal or irresponsible references

This site must remain static HTML/CSS/JS unless explicitly instructed otherwise.

---

## 3. Brand Positioning

BLUE MAGIC LABS is a premium functional fine-fragrance company exploring emotional states through molecule-led perfumery.

Public-safe positioning:

- functional fine fragrance
- emotional state design
- molecule-led formulation
- synthetic-forward perfumery
- cultural commentary on overstimulation, ritual, temptation, clarity and modern desire
- "The clean high"
- "Functional fine fragrance for the dopamine age"
- "Inspired by the chemistry of temptation"
- "Designed to sharpen, soften, lift and warm"
- "Molecule-led. Synthetic-forward. Emotionally designed."
- "A cultural antidote to the dopamine economy"
- "Fine fragrance for emotional states"

Avoid literal drug language and controlled-substance references in public-facing copy.

Do not mention or introduce:

- cocaine
- LSD
- MDMA
- ketamine
- weed
- pills
- powder
- syringes
- drug paraphernalia
- pharmaceutical claims
- medical/aromatherapy efficacy claims
- "clinically proven"
- "treats anxiety"
- "boosts serotonin"
- "improves focus"

Allowed emotional language:

- to sharpen
- to soften
- to lift
- to warm
- clarity
- calm
- joy
- heat
- ritual
- desire
- overstimulation
- temptation
- emotional states

---

## 4. Visual Identity Rules

Use the existing BLUE MAGIC LABS visual language.

Core colors:

- BlueShift Electric Ultramarine: #203CFF
- Obsidian Black: #05060A
- Cold White: #F5F7FF
- Ice Silver: #C7CEDA
- Signal Red: #FF2A2A, used very sparingly
- Soft Dopamine Pink: #FF7AB6, only as subtle JOY accent
- Deep Green: #063D2E, only as subtle CALM accent

Typography:

- Space Grotesk for display/headline use
- Inter for body/UI use
- system sans-serif fallback

Graphic language:

- premium minimalism
- 11° diagonal bar motif
- thin technical grid lines
- bracketed labels such as [FOCUS], [CALM], [JOY], [HEAT]
- subtle dosage/measurement logic
- soft glass/lab effects
- restrained gradients
- subtle light fields
- abstract molecule/lab/nightlife energy
- no clutter

Design should be Apple-like in discipline:

- generous spacing
- clear hierarchy
- strong contrast
- calm motion
- precise alignment
- mobile-first responsiveness
- no gimmicks

---

## 5. Technical Rules

This website is static.

Preserve compatibility with Cloudflare Pages.

Do not require a build step unless explicitly requested.

Do not introduce frameworks unless explicitly requested.

Do not install packages without permission.

Do not add Node, React, Next.js, Astro, Vite, Tailwind or any build tooling unless explicitly requested.

Keep the existing file structure stable.

Before making changes:

1. Inspect the current files.
2. Understand existing CSS patterns.
3. Make the smallest necessary change.
4. Avoid broad rewrites unless requested.

After making changes:

1. Run a quick local sanity check where possible.
2. Check for broken internal links.
3. Check responsive behavior conceptually.
4. Run `git status`.
5. Summarize exactly what changed.
6. Do not commit unless asked.

---

## 6. Git / Deployment Rules

The live deployment flow is:

GitHub commit → Cloudflare Pages auto-deploy → bluemagic-labs.com

Before committing:

- show changed files
- summarize changes
- confirm no unintended copy/link/legal changes
- confirm the site remains static
- confirm no trackers/cookies/forms were added

Use small, descriptive commits.

Good commit examples:

- `Refine visual polish`
- `Improve mobile spacing`
- `Update company placeholders`
- `Add supplier brief page`
- `Fix internal link states`

Bad commit examples:

- `big update`
- `final`
- `changes`
- `website stuff`

---

## 7. Compliance Rules

The site should remain legally cautious.

Do not add claims that sound medical, pharmaceutical, therapeutic, diagnostic or clinically validated.

Do not imply the product treats, prevents, cures or improves health conditions.

Do not add ecommerce, checkout, newsletter signup, data capture or contact forms unless explicitly requested.

Contact should remain mailto-based unless explicitly changed.

No non-essential cookies by default.

No cookie banner is needed unless non-essential cookies are added.

Do not add analytics unless explicitly requested.

Privacy, cookies, terms and legal footer must not be changed unless explicitly requested.

---

## 8. UX / Quality Standards

Every change should improve:

- clarity
- trust
- perceived authority
- supplier confidence
- visual restraint
- mobile usability
- accessibility
- load speed

Avoid:

- overdesigned effects
- excessive gradients
- too many colors
- flashy motion
- low-contrast text
- generic SaaS aesthetics
- generic luxury clichés
- wellness clichés
- Dubai gold perfume aesthetic
- obvious AI aesthetic

The site should feel like a serious fragrance company preparing for supplier partnerships and prototype development.

---

## 9. When Asked to Make Design Changes

Default approach:

- CSS-first
- no copy changes
- no HTML changes unless necessary
- no new dependencies
- preserve current structure
- use subtle corporate polish
- keep motion restrained
- respect `prefers-reduced-motion`

Always confirm which files changed.

---

## 10. When Asked to Make Content Changes

Only change the requested content.

Do not "improve" other copy unless explicitly asked.

Do not alter brand/legal positioning without permission.

Preserve public-safe language.

---

## 11. Final Response Format After Work

After completing a task, respond with:

1. What changed
2. Files changed
3. What was intentionally not changed
4. Any risks or follow-up checks
5. Whether a commit/push was made

Example:

"Changed only `css/style.css`. No copy, links, navigation, legal text or page structure were modified. No trackers, cookies, forms or dependencies were added. Changes are ready for review. No commit was made yet."
