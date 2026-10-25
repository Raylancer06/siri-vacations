# Siri Vacations — Next.js Responsive Web Application

A modern, responsive, high-performance travel web application for **Siri Vacations** built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Key Highlights & Interactive Features

- **Cinematic Hero with Autoplay Drone Video**: Embedded high-definition background drone footage (`public/hero_drone.mp4`) with luxury gradient scrims, sound toggle (mute/unmute), and play/pause controls.
- **Trip Discovery Concierge**: Interactive tabbed search for Domestic & International destinations, trip duration, travel style, and instant filter pills.
- **Micro-Interactions & Hover Effects**:
  - Smooth card elevations on hover (`hover:-translate-y-1.5 hover:shadow-card-hover`).
  - Image smooth zooming (`group-hover:scale-105 transition-transform duration-700`).
  - Interactive wishlist heart toggle on all package cards.
  - Button glow and scale feedback (`active:scale-95`).
- **Smooth Scrolling & Navigation**:
  - Glassmorphic sticky navbar with scroll elevation.
  - Responsive mobile drawer menu with accordion dropdowns.
  - Floating smooth back-to-top button.
- **Detailed Itinerary Experience (`/packages/coorg`)**:
  - Interactive day-by-day accordion breakdown with meal, stay, and driving metrics.
  - Photo gallery with active thumbnail selector.
  - Inclusions and exclusions breakdown.
  - Sticky booking sidebar with live guest count and dynamic total price calculator.
- **Chauffeur Car Rentals (`/car-rentals`)**:
  - Fleet showcase (Innova Crysta, Fortuner 4x4, Ertiga, Tempo Traveller).
  - Outstation, local, and airport transfer pricing calculator.
- **Multi-Step Trip Planner Wizard (`/plan-your-trip`)**:
  - Step 1: Destination & Travel Style.
  - Step 2: Tentative Dates & Travelers.
  - Step 3: Resort & Chauffeur Vehicle Preference.
  - Step 4: Contact details with instant confirmation screen.
- **Quick Inquiry / Callback Modal**:
  - Contextual modal that can be triggered from any "Book Now" or "Callback" button.
  - Direct WhatsApp concierge integration.

---

## 📁 Project Architecture & Page Routes

| Route | Page File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home page with drone video hero, search concierge, domestic & international packages, fleet preview, testimonials, FAQs |
| `/about-us` | `app/about-us/page.tsx` | Heritage, 12+ years milestones, company values, and verified stay standards |
| `/domestic-packages` | `app/domestic-packages/page.tsx` | Domestic packages directory with live search, region filter chips, and price sorting |
| `/international-packages` | `app/international-packages/page.tsx` | World tours (Dubai, Bali, Singapore, Maldives) with visa & flight guidance |
| `/packages/coorg` | `app/packages/coorg/page.tsx` | Detailed 3N/4D Coorg Coffee Trails itinerary with sticky booking sidebar |
| `/destinations` | `app/destinations/page.tsx` | Destination directory with best-time-to-visit, distance from BLR, and attraction badges |
| `/car-rentals` | `app/car-rentals/page.tsx` | Premium chauffeur-driven fleet with instant fare calculator |
| `/group-departures` | `app/group-departures/page.tsx` | Fixed departure dates calendar with seat counters & corporate offsites |
| `/plan-your-trip` | `app/plan-your-trip/page.tsx` | 4-step custom itinerary architect wizard |
| `/contact-us` | `app/contact-us/page.tsx` | Bengaluru Indiranagar lounge address, direct phone lines, and inquiry form |

---

## 🛠️ Development & Production Commands

Run the development server:
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:
```bash
pnpm run build
pnpm start
```
