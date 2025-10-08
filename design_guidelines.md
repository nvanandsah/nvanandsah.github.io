# Design Guidelines: Professional Portfolio Website for Navneet Anand Sah

## Design Approach
**Reference-Based Design** - Exact replication of cvictory.framer.website structure, adapted for a product executive in clean energy/SaaS. The design emphasizes professional credibility, achievement metrics, and technical expertise while maintaining the clean, modern aesthetic of the reference.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Background: 250 20% 5% (deep charcoal, nearly black)
- Surface: 250 15% 10% (elevated cards/sections)
- Text Primary: 0 0% 95% (crisp white for headings)
- Text Secondary: 0 0% 65% (muted gray for body text)

**Accent Colors:**
- Brand Accent: 142 76% 36% (vibrant green - representing clean energy/growth)
- Interactive: 210 100% 60% (professional blue for links/CTAs)
- Metric Highlight: 142 70% 45% (lighter green for numbers/achievements)

### Typography
**Font Stack:**
- Primary: 'Inter', sans-serif (from Google Fonts)
- Display/Headings: 'Inter' at 600-700 weight
- Body: 'Inter' at 400-500 weight

**Scale:**
- Hero Name: text-5xl md:text-6xl font-bold (60-72px)
- Hero Title: text-xl md:text-2xl font-medium (20-24px)
- Section Headings: text-3xl md:text-4xl font-bold (36-48px)
- Subsection Titles: text-xl md:text-2xl font-semibold (20-24px)
- Body Text: text-base md:text-lg (16-18px)
- Metadata: text-sm (14px)

### Layout System
**Spacing Primitives:** Consistent use of Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Container: max-w-6xl mx-auto px-6 md:px-8
- Section Spacing: py-16 md:py-24 (vertical rhythm between major sections)
- Card Padding: p-6 md:p-8
- Element Gaps: gap-4, gap-6, gap-8 (increasing with hierarchy)

**Grid System:**
- Two-column split for hero section (profile photo left, info right on desktop, stacked on mobile)
- Single column for About, Experience timeline
- Two-column grid for Skills categories (grid-cols-1 md:grid-cols-2)
- Three-column grid for Tech Stack icons (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Two-column for Patents/Projects showcase

## Component Library

### Hero Section
- Circular profile photo (w-32 h-32 md:w-40 md:h-40) with subtle ring border
- Name and title with professional hierarchy
- Live status indicator: small green dot + "Available for opportunities" text
- Location with pin icon, email, phone, LinkedIn as horizontal metadata row
- Background: subtle gradient overlay (from deep charcoal to slightly lighter)
- Download CV button: primary green with white text, rounded-lg

### Section Cards
- Background: surface color with subtle border (border-white/10)
- Rounded corners: rounded-2xl
- Hover state: slight scale transform (hover:scale-[1.01]) and glow effect
- Inner spacing: consistent p-6 md:p-8

### Experience Timeline
- Left border accent line in brand green (border-l-2 border-green-600)
- Company name: bold, larger text
- Position title: medium weight, accent color
- Date range: small, muted text aligned right
- Achievement bullets: subtle dot markers, spaced generously (space-y-2)
- Metric callouts: bold numbers in green accent color

### Skills Grid
- Category headers: uppercase, tracked spacing, accent green color
- Skill pills: inline-flex with subtle background (bg-white/5), rounded-full px-4 py-2
- Organized in flexbox wraps (flex-wrap gap-3)

### Tech Stack Icons
- Logo containers: w-16 h-16 with centered content
- Background: bg-white/5 with rounded-xl
- Hover: background lightens (hover:bg-white/10)
- Icon + label layout: vertical stack, centered text

### Patents Section
- Card layout with border-l-4 in accent green
- Patent title: bold, larger text
- WIPO badge: small pill with outline styling
- Date: metadata text style

### Contact Section
- Large heading "Get in touch"
- Email and phone as large, clickable elements
- CTA button: prominent, green background, full on mobile, auto-width on desktop
- Time zone display: smaller metadata with clock icon

### Footer
- Minimal design: small text, centered
- "Built with pride" or similar understated message
- Links to social profiles if applicable

## Images
**Hero Profile Photo:**
- Professional headshot with clean background
- Size: 400x400px minimum
- Position: Left side of hero section on desktop, centered on mobile
- Treatment: Circular crop with subtle shadow

**Tech Stack Logos:**
- Use official brand logos for Python, Django, Flask, SQL, TensorFlow, Keras, AWS
- SVG format preferred, uniform sizing (64x64px container)
- Monochrome or subtle color to maintain consistency

**Project Thumbnails (if applicable):**
- 16:9 aspect ratio screenshots
- Subtle border and rounded corners
- Hover: slight zoom effect

## Animations
**Minimal, purposeful motion:**
- Page load: subtle fade-in for hero section (0.3s ease)
- Scroll reveal: cards fade up as they enter viewport (stagger by 0.1s)
- Hover states: scale transforms (1.01-1.02), color transitions (200ms)
- NO continuous animations, carousels, or parallax effects

## Responsive Behavior
- Mobile-first approach
- Hero: stack photo above content on mobile
- Skills grid: 1 column mobile, 2 columns tablet+
- Tech stack: 2 columns mobile, 3-4 desktop
- Typography scales down gracefully with md: and lg: breakpoints
- Padding/spacing reduces proportionally on smaller screens

## Visual Hierarchy Principles
1. Name and title dominate hero space
2. Achievement metrics (ARR, percentages) highlighted in accent green
3. Section headings use consistent size and spacing
4. White space creates breathing room between dense information
5. Card elevation distinguishes content blocks from background
6. Color used sparingly for emphasis, not decoration