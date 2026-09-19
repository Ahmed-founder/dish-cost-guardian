# Restaurant Command Center

Build ONLY the navbar + hero section of a landing page for "[BRAND]" — an Arabic-first SaaS back-office system for restaurants (inventory, recipes & food-cost, central kitchen, purchasing, stocktaking, multi-branch). Do NOT build any other sections yet; I'll ask for them later in the same theme, so put all design tokens in CSS variables and make components reusable.

## Tech
- React + Tailwind + framer-motion + @phosphor-icons/react (use Phosphor for ALL icons, weight "regular"/"bold", no lucide).
- <html lang="ar" dir="rtl">. Use logical Tailwind utilities (ms/me/ps/pe/start/end), never left/right for layout.
- Fonts (Google Fonts): "IBM Plex Sans Arabic" (300/400/500/700) for all Arabic text; "Geist" + "Geist Mono" for Latin text and numbers. Numbers use tabular-nums.
- Everything in the product mockup must be real HTML/SVG components — NO screenshots, NO stock images, NO placeholder image boxes.
- Respect prefers-reduced-motion (disable all motion, show final state).
- Light mode only for now.

## Design tokens (:root)
--brand: #f6821f;          /* Cloudflare orange — accent only, used sparingly */
--ink: #171717;            /* primary text + primary button */
--muted: #737373;          /* secondary text */
--canvas: #fcfcfc;         /* app background inside mockup */
--base: #ffffff;           /* cards */
--hairline: #ebebeb;       /* 1px borders */
--line: rgba(0,0,0,.10);
--success: #009966; --danger: #e7000b; --warning: #f59e0b;
--radius-ui: 6px;          /* inputs, badges, small UI — Cloudflare dashboard feel */
--radius-card: 12px;       /* floating cards, mockup inner cards */
--radius-frame: 16px;      /* browser frame */
--radius-panel: 44px;      /* big white page panels for FUTURE sections */

## Visual direction (important)
Mix two styles:
1) OUTER page = soft, editorial, premium (like yasfda.com): a full-page diagonal gradient background, big airy typography, pill buttons, generous whitespace.
2) INNER product UI = crisp Cloudflare-dashboard style: white cards, 1px hairline borders, 6px radius, small 13–14px text, neutral grays, orange only as accent, colored status badges.
Plus Vercel/Next.js-style decorative UI: a faint grid, glows, floating UI cards, animated beams — the hero must feel like a product, not a wall of text.

## Background
- body background: linear-gradient(207deg, #FFE1C7 8%, #FDEEE2 28%, #F8F5F1 45%, #F4F4F3 62%, #F1F2F5 100%).
- Overlay: a Vercel-style 1px grid (64px cells, rgba(0,0,0,.045)) masked with a radial gradient so it's visible only around the top-center and fades out.
- A soft orange radial glow (--brand at ~18% opacity, blur 120px) behind the product mockup.

## Navbar (sticky)
- Transparent at top; after 12px scroll → bg white/70 + backdrop-blur-xl + bottom 1px hairline. Max-width 1200px, height 64px.
- Start side (right in RTL): logo = small 28px rounded-[8px] black square with an orange Phosphor "CookingPot" icon + wordmark "[BRAND]" (Geist, 600).
- Center links (14px, --muted, hover --ink): المميزات · الأسعار · كيف يعمل · الأسئلة الشائعة
- End side: text link "تسجيل الدخول" + small primary pill "ابدأ مجاناً".
- Mobile: links collapse into a Phosphor "List" button opening a clean sheet.

## Hero content (centered, max-width 880px, padding-top ~120px)
1) Announcement pill (Vercel style): white/70, backdrop-blur, 1px hairline, fully rounded, 13px. Inside: a tiny orange badge "جديد" (--brand bg, white text, radius 9999) + "اقرأ فواتير الموردين بالذكاء الاصطناعي" + Phosphor "ArrowLeft" icon. Subtle hover lift.

2) Headline — two lines, 64px desktop / 38px mobile, line-height 1.15, color --ink, letter-spacing -0.01em:
   - Line 1, weight 300: "اعرف وين يروح كل ريال"
   - Line 2, weight 700: "في مطبخـــك"   (keep the kashida elongation — it's a deliberate stylistic touch)
   Animation: word-by-word reveal — each word from opacity .12, blur(8px), translateY(10px) → full, stagger 70ms, ease [0.22,1,0.36,1].

3) Subheadline (18px, --muted, max-width 620px, line-height 1.8):
   "نظام عربي لإدارة المخزون والوصفات والمطبخ المركزي والمشتريات لكل فروعك — يحسب تكلفة كل طبق، ويقرأ فواتير الموردين بالذكاء الاصطناعي، ويشتغل جنب نظام الكاشير حقك."

4) CTAs (row, gap 12px; stacked full-width on mobile):
   - Primary pill: "ابدأ تجربتك المجانية" + Phosphor ArrowLeft. bg #171717, white text, padding 12px 26px, radius 9999, font 500, with this exact inner glow:
     box-shadow: inset 0 .6px .6px -1.25px rgba(246,130,31,.72), inset 0 2.3px 2.3px -2.5px rgba(246,130,31,.64), inset 0 10px 10px -3.75px rgba(246,130,31,.25);
     Hover: translateY(-1px) + slightly stronger glow.
   - Secondary pill: "احجز عرضاً توضيحياً" + Phosphor "PlayCircle". White bg, 1px hairline, --ink text.

5) Trust row (13px, --muted, Phosphor "CheckCircle" in --success): "تجربة مجانية ١٤ يوم" · "بدون بطاقة ائتمان" · "إعداد خلال يوم واحد" · "عربي بالكامل"
   Do NOT add fake customer logos, fake testimonials, or fake usage numbers anywhere.

## Product mockup (the star of the hero)
Below the CTAs (margin-top ~64px), max-width 1120px, a browser-window frame:
- Frame: white, 1px hairline, radius --radius-frame, shadow: 0 1px 2px rgba(0,0,0,.04), 0 24px 60px -12px rgba(0,0,0,.18). Top bar 40px with three 10px gray dots (physical left) and a centered URL pill "app.[brand].sa" in Geist Mono 12px.
- Scroll effect: starts at perspective(1600px) rotateX(18deg) scale(.94) opacity .9 and settles to rotateX(0) scale(1) as the user scrolls (framer-motion useScroll/useTransform).
- Inside = Cloudflare-style dashboard on --canvas, RTL:
  • Sidebar (start side, 208px, white, end-border hairline): branch switcher button "فرع الرياض" + Phosphor "CaretDown"; nav items with Phosphor icons: الرئيسية (active: --canvas bg, 2px orange indicator on the start edge), المخزون (Package), الوصفات (BookOpenText), المشتريات (ShoppingCart), المطبخ المركزي (CookingPot), الجرد (ClipboardText), التقارير (ChartLine).
  • Top bar: title "لوحة التحكم" + a segmented control "اليوم | هذا الأسبوع | الشهر" (active = white with hairline).
  • 4 stat cards (white, hairline, radius-ui, 12px label --muted, 22px Geist Mono value):
    - قيمة المخزون — 48,230 ر.س
    - تكلفة الطعام — 28.4% with a green badge "↓ 2.1%"
    - الهدر هذا الأسبوع — 1,120 ر.س
    - طلبات توريد مفتوحة — 6
  • Area chart card "تكلفة الطعام مقابل المبيعات" (7 days, pure SVG): orange line with orange→transparent gradient fill + dashed gray comparison line, faint horizontal gridlines, small Arabic day labels. Animate the line drawing in (pathLength 0→1).
  • Table card "أصناف تحت الحد الأدنى" (13px rows, hairline row dividers): columns الصنف / الكمية / الحالة:
    صدر دجاج — 12 كجم — badge "منخفض" (red tint) · طماطم — 30 كجم — "متوفر" (green tint) · خبز صامولي — 140 حبة — "متوفر" · زيت قلي — 8 لتر — "منخفض". Badges: radius-ui, 11px, tinted bg (color at 10%) + colored text.

## Floating cards around the mockup (Vercel style)
Glass cards: white/85 + backdrop-blur-md + 1px hairline + radius-card + soft shadow. Each gently floats (y ±6px, 5–7s, different phases). They overlap the frame edges slightly. On mobile show only card 1 and 2, placed under the mockup (no overlap).
1) "قراءة فاتورة المورد" (top, physical-left, overlapping frame edge): header with Phosphor "Sparkle" + small badge "AI". Body: a mini paper invoice skeleton (gray bars) with an orange horizontal scan line sweeping top→bottom on loop (with a faint orange glow). Below it, three extracted rows that type in one after another with a check icon:
   المورد: مؤسسة الوادي للدواجن · الإجمالي: 3,450.00 ر.س · تمت قراءة 7 أصناف ✓
2) Toast (bottom, physical-right): green Phosphor "CheckCircle" + "تم خصم مكونات 42 طبق من المخزون تلقائياً" + 12px muted "قبل ثانيتين". Slides in after the mockup settles.
3) Supply flow chip (mid, physical-right edge): two small nodes "المطبخ المركزي" → "فرع جدة" connected by a dashed line with an animated orange "beam" dot traveling along it, + badge "قيد التجهيز" (orange tint).
4) Tiny mono card (near chart): "تكلفة طبق · برجر كلاسيك" / Geist Mono "9.80 ر.س · هامش 67%".

## Quality bar
- Pixel-clean alignment, consistent 8px spacing scale, no text overflow in RTL, no horizontal scroll at 375px.
- Arabic must render right-to-left correctly everywhere, including inside the mockup, badges, and the chart labels.
- Keep it airy: the hero should breathe; orange appears only as an accent (badge, chart, beam, glow, active indicator).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dish-cost-guardian.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b03c5953-f816-4135-808b-35f695144cef).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
