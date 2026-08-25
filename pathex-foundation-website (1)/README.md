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
- **Gallery**: expects six real EIP event photos, named `eip-1.jpg` through
  `eip-6.jpg` in `assets/` — instructions below.

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

## Replacing the founder photos (easiest option)

The founder images now point to named files already sitting in `assets/`:

- `assets/founder-oluwadamisola.jpg`
- `assets/founder-chinonyerem.jpg`

**Just drop your real photos into `assets/` using those exact filenames**
(overwriting the gold placeholder images already there) — no code editing
needed. Square photos (roughly 500x500px or larger) work best since they're
cropped into a circle.

## Adding your EIP event photos (easiest option)

The gallery now points to six named files that don't exist yet — **add your
own EIP event photos to `assets/` using these exact filenames** and they'll
appear automatically, no code editing needed:

- `assets/eip-1.jpg` — EIP Session, Asoland College
- `assets/eip-2.jpg` — Career Projection Talk
- `assets/eip-3.jpg` — Handpicked Mentorship Cohort
- `assets/eip-4.jpg` — Scholarship Recipients, 2025
- `assets/eip-5.jpg` — JAMB Prep & Access
- `assets/eip-6.jpg` — Behind the Scenes

Until real photos are added, these will show as broken images in the
browser — add all six before deploying, or edit the captions/order in
`index.html` inside `#gallery` to match whatever photos you actually have.
Keep each file under ~500KB for fast loading (any online compressor like
squoosh.app works well).

## Partners section

A "Who Walks With Us" section now sits between Founders and Get Involved,
featuring your two current partners:
- **Delta Arts** — Creative Education for students interested in the
  creative industry
- **Saint Agomeze Foundation** — Scholarships for ambitious students

Their logo placeholders are at:
- `assets/partner-delta-arts.png`
- `assets/partner-saint-agomeze.png`

**Drop in their real logos using those exact filenames** and they'll appear
automatically — no code editing needed. Square logos with a transparent or
simple background work best (roughly 300x300px).

To add a third partner later, copy one `.partner-card` block in `index.html`
(inside `#partners`) and edit the logo path, name, tag line, and description.

## Contact details

The site's Get Involved section and footer use:
- Email: `pathexfoundation@gmail.com`
- Phone: `0810 134 4189`

To update either later, search `index.html` for `pathexfoundation@gmail.com`
and `2348101344189` and replace with the new details in both the `mailto:`/
`tel:` links and the visible text.

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). Animations
degrade gracefully; the path spine hides on small screens by design.

---

Questions or want help adding a Donate page, a blog, or a contact form
(e.g. via Formspree) — just ask.
