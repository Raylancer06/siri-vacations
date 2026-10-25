---
name: Azure Horizon
colors:
  surface: '#f8f9ff'
  surface-dim: '#c8dcf7'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dbe9ff'
  surface-container-highest: '#d2e4ff'
  on-surface: '#081d31'
  on-surface-variant: '#424752'
  inverse-surface: '#1f3247'
  inverse-on-surface: '#eaf1ff'
  outline: '#727783'
  outline-variant: '#c2c6d4'
  surface-tint: '#085db5'
  primary: '#00468c'
  on-primary: '#ffffff'
  primary-container: '#075db5'
  on-primary-container: '#c6d9ff'
  inverse-primary: '#a9c7ff'
  secondary: '#435f8c'
  on-secondary: '#ffffff'
  secondary-container: '#aecafd'
  on-secondary-container: '#395581'
  tertiary: '#6d3a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f4e00'
  on-tertiary-container: '#ffd0aa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#acc7fa'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#2b4772'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77a'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#f8f9ff'
  on-background: '#081d31'
  surface-variant: '#d2e4ff'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.005em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an editorial luxury travel philosophy, evoking the serenity of coastal escapes, the golden warmth of tropical sunsets, and the reliability of curated concierge journeys. Drawing inspiration from regional hospitality traditions and bespoke international travel, the visual tone blends relaxed coastal ease with structured corporate poise.

The design movement combines **Minimalist Editorial** with subtle **Glassmorphism** and tactile warmth. Layouts prioritize generous breathing room, expansive high-definition photographic frames, refined typographic contrast, and deliberate micro-interactions that communicate reliability, exclusivity, and wanderlust.

## Colors

The palette balances maritime depths with sun-drenched accents:
- **Primary Blue (`#075DB5`):** The operational backbone used for high-emphasis interactive triggers, links, active navigation tabs, and primary action items.
- **Deep Navy (`#082B55`):** Provides regal weight, grounding top-tier navigational structures, luxury headers, footer containers, and prominent titles.
- **Bright Travel Blue (`#1299ED`):** Acts as an atmospheric highlight, focal gradient element, badge fill, and responsive hover state for interactive elements.
- **Warm Orange (`#FF982F`) & Sunset Gold (`#FFC45C`):** High-conversion accent colors reserved for call-to-action buttons ("Book Now", "Request Quote"), rating indicators, badges, and seasonal promo tags.
- **Surface & Backgrounds:** Crisp pure white (`#FFFFFF`) for elevated cards, backed by Soft Blue Canvas (`#F3F8FC`) to eliminate sterile eye strain.
- **Text & Content:** Deep Slate (`#15283D`) for body-level readability at full WCAG AAA contrast, complemented by Muted Slate (`#64748B`) for secondary metadata, itinerary timestamps, and subtle captions.

## Typography

The typography couples the welcoming geometric balance of **Plus Jakarta Sans** for headlines and display layers with the precision of **Inter** for dense travel itineraries, pricing matrices, and flight schedules.

- Display headers utilize negative tracking (`-0.02em` to `-0.01em`) to maintain editorial punch.
- Small labels and overlines leverage uppercase styling with loose letter spacing (`0.04em`) to establish clear hierarchy above hero elements.
- Body text retains relaxed line-heights (1.6x) to ensure legibility when reading long travel descriptions and package inclusions.

## Layout & Spacing

The layout model uses a responsive 12-column fluid grid locked inside a max container width of `1280px` for desktop viewports, shifting to an 8-column layout on tablet and a 4-column layout on mobile devices.

- **Desktop (1024px+):** Outer section margins of `3rem` (`48px`) with `1.5rem` (`24px`) inter-column gutters.
- **Tablet (768px – 1023px):** Compact margins of `2rem` (`32px`) and `1rem` (`16px`) gutters.
- **Mobile (< 768px):** Minimal outer margins of `1.25rem` (`20px`) with `0.75rem` (`12px`) gutters.

Component padding adopts strict multiples of 4px/8px, maintaining spacious vertical cadences (`space-xl`) between distinct thematic sections (e.g., "Trending International Getaways" vs. "South India Backwater Tours").

## Elevation & Depth

Visual depth is achieved through delicate, cool-tinted ambient shadows and translucent frosted layers rather than harsh drop shadows:

- **Base Layer (Flat):** Soft blue canvas (`#F3F8FC`) providing ambient warmth.
- **Elevated Card (Rest):** Pure white background with a tinted shadow: `box-shadow: 0 4px 20px -2px rgba(8, 43, 85, 0.06), 0 2px 6px -1px rgba(8, 43, 85, 0.03)`.
- **Hover/Interactive Float:** Lift on hover with `transform: translateY(-4px)` and amplified depth: `box-shadow: 0 16px 32px -4px rgba(8, 43, 85, 0.12), 0 4px 12px -2px rgba(8, 43, 85, 0.04)`.
- **Glassmorphic Floating Bars (Nav & Filters):** Background set to `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(16px)` and a subtle border: `1px solid rgba(255, 255, 255, 0.6)`.

## Shapes

The design uses balanced, modern curves (`roundedness: 2`) that mirror the luggage silhouette and arching trajectory of the logo:
- Base inputs, buttons, and action chips utilize `0.5rem` (`8px`).
- Destination cards, itinerary summaries, and promotional carousels leverage `rounded-lg` (`1rem` / `16px`).
- Featured hero showcase containers and sticky bottom booking sheets utilize `rounded-xl` (`1.5rem` / `24px`).
- Pill shapes are reserved exclusively for contextual category badges, search pill triggers, and live status indicators.

## Components

### Buttons
- **Primary CTA:** Warm Orange (`#FF982F`) background transitioning to Deep Orange on hover, white semibold text, `0.5rem` radius, subtle gold glow shadow.
- **Secondary / Action:** Primary Blue (`#075DB5`) fill with white text, or clean white fill with Deep Navy text and a `1.5px` border of Primary Blue.
- **Ghost / Tertiary:** Slate text with no background; reveals soft blue background (`#F3F8FC`) on hover.

### Cards & Destination Tiles
- Enclosed with crisp white surfaces, overflow hidden for high-aspect destination photography (16:10 ratio).
- Featuring bottom-anchored content with price badges styled in Warm Sunset Gold (`#FFC45C`) alongside Deep Navy trip titles.
- Heart-shaped wishlist toggle floating in the top right over a glassmorphic disc.

### Chips & Tags
- Height: 32px.
- Inactive: Pale blue background (`#E8F2FA`), Deep Slate text, rounded-full.
- Active: Primary Blue background (`#075DB5`), pure white text.

### Form Inputs & Search Module
- The flagship component is the floating unified Search Bar (Destination, Dates, Travelers):
  - Clean white floating panel with glass borders.
  - Divided by low-contrast vertical dividers (`#E2E8F0`).
  - Text inputs embedded with micro-icons in Bright Travel Blue (`#1299ED`).
  - Focus state indicated by a `2px` ring in `#075DB5` without jarring outline jumps.

### Checkboxes & Radios
- Size: 20px x 20px with a `4px` border radius for checkboxes, circular for radios.
- Deep Blue stroke (`#075DB5`) when active with a white checkmark icon.

### Navigation Header
- Fixed desktop navbar floating with 16px top margin, soft frosted glass background (`backdrop-filter: blur(12px)`), Deep Navy branding, and an embedded high-emphasis "Plan My Trip" Warm Orange CTA button.