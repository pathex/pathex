# PathEx Foundation — Website

A single-page site for PathEx Foundation, built as static HTML/CSS/JS
(no build step, no framework) so it deploys instantly and for free.

## What's inside

```
index.html      All page content and structure
style.css       Full design system (colors, type, layout, animation)
script.js       Scroll-reveal, animated stats, mobile nav, the "path" spine
assets/logo.png Your foundation logo (used in header, favicon, footer)
```

## Design notes

- **Palette**: forest green + gold, taken directly from your logo, with a
  warm cream/paper background for readability in the light sections.
- **Type**: Fraunces (headlines) + Inter (body text), loaded from Google Fonts.
- **Signature element — "The Path"**: a thin gold line traces down the
  right side of the page on desktop, with a glowing dot that travels along
  it as you scroll. It's a literal visualization of a student's journey
  through the Foundation — echoing the swoosh in your logo. It hides
  automatically on tablets/phones to keep things clean.
- **Motion**: sections fade/rise into view as you scroll, stat numbers
  count up, and buttons respond to both hover and scroll-entrance. All
  animation respects `prefers-reduced-motion` for accessibility.
- **Gallery**: currently uses free stock placeholder photos (Unsplash) so
  the section looks complete immediately. Swap these for real event photos
  whenever you have them — instructions below.

## Why a static site (not Replit/a app builder)

For a foundation site like this — content-driven, no logins, no database —
plain HTML/CSS/JS is the right tool:
- **Free & fast hosting** on Vercel, with zero server costs.
- **No moving parts** to break or maintain.
- **Anyone can edit it** — the code is plain text, no build tools required.

Replit is great for building/prototyping apps with a backend, but for a
public marketing/impact site, deploying static files directly to Vercel is
simpler, faster, and free forever.

## Running it locally

You can just double-click `index.html` to open it in a browser. For the
full experience (some browsers restrict local file access), run a tiny
local server instead:

```bash
cd pathex
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploying to Vercel (free) — get `pathex.vercel.app`

**Option A — Vercel website (no installs needed)**
1. Go to https://vercel.com and sign up / log in (GitHub, GitLab, or email).
2. Click **Add New → Project**.
3. Choose **"Deploy without Git"** / drag-and-drop, and drag this whole
   `pathex` folder (or the zip, unzipped) into the upload area.
4. Vercel will detect it as a static site automatically — no config needed.
5. Click **Deploy**.
6. Once deployed, go to **Project Settings → Domains** and add/edit the
   subdomain to `pathex` — your live URL becomes:
   **`https://pathex.vercel.app`**

**Option B — Vercel CLI**
```bash
npm install -g vercel
cd pathex
vercel login
vercel --prod
```
When prompted for project settings, accept the defaults (no framework,
output directory = current folder). Then in the Vercel dashboard, set the
project's subdomain to `pathex` under **Settings → Domains**.

**Option C — GitHub + Vercel (best for ongoing edits)**
1. Push this folder to a new GitHub repository.
2. In Vercel, **Add New → Project → Import Git Repository**, pick the repo.
3. Deploy with default settings (static site, no build command needed).
4. Set the subdomain to `pathex` in Domains settings.
5. From now on, every push to GitHub auto-deploys — easiest way to keep
   the site updated as the Foundation grows.

## Customizing content

Everything is in plain HTML in `index.html` — open it in any text editor
(VS Code recommended) and edit the text directly between tags. Key sections,
in order:
- `#top` — Hero headline and intro
- `#about` — Who We Are
- `#mission` — Vision, Mission, and the three focus goals
- `#work` — Timeline of programmes (EIP, scholarships, mentorship)
- `#impact` — Stat counters (edit `data-target` numbers to update them)
- `#gallery` — Event photos
- `#founders` — Founder bios and photos
- `#join` — Contact / Instagram CTA

## Replacing the gallery & founder placeholder photos

1. Add your real photos into the `assets/` folder (e.g. `assets/eip-2025-1.jpg`).
2. In `index.html`, find each `<img src="https://images.unsplash.com/...">`
   tag inside `#gallery` or `#founders`, and replace the `src` with your
   local path, e.g.:
   ```html
   <img src="assets/eip-2025-1.jpg" alt="Describe the photo here" loading="lazy">
   ```
3. Keep photos under ~500KB each for fast loading (any online compressor
   like squoosh.app works well).

## Updating the Instagram / contact links

Search `index.html` for `instagram.com/_pathexfoundation` and
`mailto:hello@pathexfoundation.org` — update the email address to your
real one once available.

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). Animations
degrade gracefully; the path spine hides on small screens by design.

---

Questions or want help adding a Donate page, a blog, or a contact form
(e.g. via Formspree) — just ask.
