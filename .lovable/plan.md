# Arabic restaurant SaaS hero

## Scope
Build only the sticky navigation and opening section at `/`, with no additional landing-page sections.

## Experience
- Apply the specified warm editorial background, masked grid, Arabic-first typography, restrained orange accents, and reusable CSS variables.
- Add the responsive navigation, scroll treatment, centered announcement, two-line headline, supporting copy, calls to action, trust points, and mobile menu sheet.
- Build the full restaurant dashboard preview from HTML and SVG: sidebar, controls, metrics, animated cost chart, low-stock table, invoice reader, automation notice, branch flow, and dish-cost card.
- Use Phosphor icons throughout and motion effects that become static when reduced motion is preferred.

## Technical details
- Add `framer-motion` and `@phosphor-icons/react`.
- Organize the page into focused reusable React components.
- Set Arabic RTL document metadata and load IBM Plex Sans Arabic plus Geist fonts from the document head.
- Preserve the exact supplied visual values as semantic CSS variables and map them into Tailwind utilities.
- Verify desktop and 375px mobile layouts in the running preview, including menu interaction, overflow, and console errors.
