# Pet Friend Clinic — GitHub Pages export

Public, Arabic-first, static HTML export of the Pet Friend Clinic website. This repository contains the generated site only; the full application source remains in the separate private source repository.

**Website:** https://nassifmhm302-beep.github.io/pet-friend-website-development-pages/

## Scope and limitations

- The export contains the site's public informational pages and build-time snapshots of services, team profiles, products, FAQs, and policies.
- GitHub Pages does not run the application's Next.js server or PostgreSQL database. Booking, account sign-in, cart, checkout, search/filter controls, and administration are not operational here. Explanatory notices replace those actions; do not enter personal or payment information.
- Product details, prices, stock, staff content, clinic hours, and FAQs are static snapshots and may not reflect current clinic information. Confirm details directly with the clinic.
- Phone and WhatsApp links are direct contact links.
- Images are local WebP copies of the Pexels assets referenced by the supplied project. Pexels photo 160839 was unavailable upstream and is mapped to an available clinic image.

The `main` branch is served from the repository root by GitHub Pages. `.nojekyll` ensures Next.js `_next` assets are published.
