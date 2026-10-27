# Zoe Rae LMT

A responsive, buildless single-page application. HTML sections, CSS design tokens, vanilla JavaScript, and original SVG botanical artwork; no package installation required.

## Preview

From this directory: `python3 -m http.server 4173`

Open http://localhost:4173. Hosted temporarily at https://bennpurcell.com/zoe-rae/ via the parent repository’s GitHub Pages deployment. All asset paths are relative so the site works under this subdirectory.

## Edit

- `config.js`: Vagaro booking URL and introductory experience copy.
- `index.html`: sections, introduction, biography, FAQ, metadata.
- `styles.css`: palette, typography, layout, breakpoints.
- `app.js`: mobile navigation, content rendering, optional booking iframe.
- `botanical.svg` and `flower.svg`: original line artwork.

## Vagaro

All live booking links point to https://www.vagaro.com/zoraemassage and open in a separate tab. Availability, services, pricing, payment and confirmations remain in Vagaro. The website does not collect client health or payment details.

For inline booking, generate the official In Website widget in Zoe’s Vagaro account. If Vagaro supplies an iframe, set `widgetUrl` to its exact HTTPS Vagaro iframe URL in `config.js`. If it supplies a script-based widget, install the exact supplied snippet in `#booking-widget` and unhide that container; do not guess widget IDs or embed a profile URL. Keep the direct booking link as a fallback. The inline widget has not been configured or tested yet.

## Next content pass

Confirm the preferred brand spelling (Zoe Rae versus Zo Rae), actual service names, therapist bio, location, contact details, policies and any photography. The three experience cards are introductory editorial copy, not a claimed service menu. No prices, modalities, certifications beyond user-provided LMT, or testimonials have been invented.

## Accessibility

Semantic headings, skip link, visible focus, native FAQ disclosure controls, mobile navigation with expanded state and Escape support, decorative images with empty alt text, reduced-motion support.
