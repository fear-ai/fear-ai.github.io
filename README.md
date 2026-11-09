# Fear AI

Source for the [Fear AI website](https://fear-ai.github.io/), which examines claims about AI, employment, trust, and infrastructure. GitHub Pages serves static HTML, CSS, JavaScript, and SVG directly from the root of `main`.

| Path | What to edit |
| --- | --- |
| [`index.html`](index.html) | Home page, research questions, and featured work. |
| [`perspective/index.html`](perspective/index.html) | Editorial draft on employment, trust, and agency. |
| [`datacenters/index.html`](datacenters/index.html) | Electricity demand, infrastructure, and environmental evidence. |
| [`sources/index.html`](sources/index.html) | Public reading list, source notes, and categories used by the filters. |
| [`privacy/`](privacy/) and [`terms/`](terms/) | Privacy notice and terms of use. |
| [`assets/site.css`](assets/site.css) | Shared typography, layout, and responsive styles. |
| [`assets/site.js`](assets/site.js) | Mobile navigation, source filters, and data center scope controls. |
| [`assets/field.svg`](assets/field.svg) and [`assets/mark.svg`](assets/mark.svg) | Home page illustration and site mark. |

From the repository root, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open [the local preview](http://localhost:4173/). The pages use URLs such as `/assets/site.css`, so serve the repository root. No package installation or build is needed.

Edit copy in its page’s HTML. Navigation and footer markup are repeated across the pages, so update each page when changing a shared link or label. For revised electricity figures, check the visible HTML and the `scope` values in `assets/site.js`. Keep dates, units, geographic scope, and the distinction between measurements and projections beside each figure.

Before publishing, preview the changed pages at desktop and mobile widths. Check navigation, source links, filters, and scope controls. A push to `main` starts the Pages deployment. Verify the build and open the live pages after it finishes.

Public citations belong on the site. Working research, earlier design studies, and internal material belong in the private [fear-ai/Dir archive](https://github.com/fear-ai/Dir).
