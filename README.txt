BLUE MAGIC LABS LTD — CORPORATE SITE (SUPPLIER-FACING)
========================================================

WHAT THIS IS
Neutral, corporate B2B website for supplier/manufacturer outreach.
No consumer branding, taglines, product pillar names, or drug-accord
references anywhere on the site — by design. This site exists purely
to make Blue Magic Labs Ltd look like a credible, funded, legally
registered company to prospective fragrance/packaging/manufacturing
partners.

PAGES
- index.html         Home
- company.html       Registered details, founder, approach
- capabilities.html  Product scope, sourcing needs, MOQ/compliance
- contact.html       Contact form (Netlify Forms) + direct contact
- legal.html         Company Information / Privacy / Terms
- css/style.css      Single shared stylesheet

CONTACT EMAIL
partners@bluemagic-labs.com is the current official contact email,
used across contact.html and legal.html.

BEFORE YOU GO LIVE — THINGS TO FIX
1. LINKEDIN: company.html has a placeholder "LinkedIn profile →" link
   with href="#". Replace with your real LinkedIn profile URL, or
   remove the line if you'd rather not link it yet.

2. LEGAL/PRIVACY TEXT: The privacy notice and terms on legal.html are
   a reasonable placeholder for a pre-launch B2B site, but are NOT
   reviewed by a lawyer. Have counsel review before the site takes on
   real supplier data at scale, and definitely before any consumer-
   facing launch.

3. DEPLOYMENT: Built to deploy as-is on Netlify (drag-and-drop the
   folder, or connect to git). The contact form uses Netlify Forms
   (data-netlify="true") — this works automatically once hosted on
   Netlify, no backend needed. If you host elsewhere, you'll need to
   wire the form to a different form handler (e.g. Formspree) or a
   simple mailto: fallback.

4. FAVICON: none included. Add one if you want a browser tab icon.

DESIGN NOTES
Neutral corporate palette (navy / white / grey) — no Blue Magic brand
blue, no diagonal bar motif, no pillar naming. This was a deliberate
choice so the site gives nothing away about the eventual consumer
concept. Typography is Inter (Google Fonts, loaded via CDN link).
