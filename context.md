# Pixel Focus Landing Page Project Context

## Project Overview
Pixel Focus is a landing page for a student-focused productivity application that combines ten essential study tools into one app. The project is built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion for animations.

## App Details & Functional Information
**What the App Does**: Pixel Focus is a comprehensive productivity application designed specifically for students that consolidates multiple study tools into a single, unified platform. It helps students manage their academic life more efficiently by providing:

- **Core Purpose**: Replace multiple disjointed apps with one integrated solution for student productivity
- **Key Features**: 
  - Dashboard: Overview of study time, tasks, streaks, and schedule
  - Tasks: Subject/priority/deadline-based task management
  - Analytics: Time-tracking and productivity insights with heatmaps
  - Focus Timer: Pomodoro technique with customizable sessions
  - Mock Tests: Practice test logging and performance tracking
  - Ambient Music: Built-in background sounds for concentration
- **Target Audience**: Students seeking better organization and focus tools
- **Development Story**: Built as a passion project by an individual developer (no VC funding or corporate team)
- **Platform Availability**: Currently available for Windows, Linux, and Android (macOS/iOS coming soon)
- **Distribution**: Available via direct download links (Google Drive)

**Taglines & Messaging**:
- "Built by a student. For every student."
- "Ten tools. One place. One less reason to quit."
- "Stop juggling. Start owning your study life."
- "Every rupee goes back into making Pixel Focus better."

## Color Palette (For Logo/Design Reference)
The app uses a magical starlight dark mode theme with vibrant accent colors. Here are the exact color values for design reference:

### Primary Colors
- **Background**: `hsl(250, 40%, 8%)` - Deep midnight violet
- **Foreground**: `hsl(0, 0%, 95%)` - Near white for contrast
- **Primary**: `hsl(330, 85%, 65%)` - Vibrant pink (magical girl starlight accent)
- **Secondary**: `hsl(180, 85%, 60%)` - Electric teal
- **Muted**: `hsl(250, 20%, 20%)` - Soft lavender muted
- **Accent**: `hsl(45, 95%, 60%)` - Star gold

### Semantic Colors
- **Destructive**: `hsl(0, 70%, 50%)` - For errors/critical actions
- **Ring**: `hsl(330, 85%, 65%)` - Focus ring color (matches primary)
- **Chart Colors**: 
  - Chart 1: `hsl(330, 85%, 65%)` (Primary)
  - Chart 2: `hsl(180, 85%, 60%)` (Secondary)
  - Chart 3: `hsl(45, 95%, 60%)` (Accent)
  - Chart 4: `hsl(250, 20%, 20%)` (Muted)
  - Chart 5: `hsl(250, 20%, 40%)` (Lighter muted)

### Neutrals & UI Elements
- **Card**: `hsl(250, 20%, 12%)` - Slightly elevated background
- **Border**: `hsl(250, 20%, 15%)` - Soft lavender border
- **Sidebar**: `hsl(250, 20%, 10%)` - Even darker sidebar
- **Input**: `hsl(0, 0%, 16%)` - Form input background

### Accessibility Variants (for reference)
- **Reduced Transparency**: 
  - Background: `hsl(250, 40%, 12%)`
  - Primary: `hsl(330, 85%, 55%)`
  - Secondary: `hsl(180, 85%, 50%)`
- **High Contrast**:
  - Background: `hsl(250, 40%, 5%)`
  - Foreground: `hsl(0, 0%, 98%)`
  - Primary: `hsl(330, 85%, 70%)`
  - Border: `hsl(250, 20%, 25%)`

## Project Structure
```
artifacts/pixel-focus/
├── src/
│   ├── App.tsx                 # Main application component with routing
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles including Tailwind configuration
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with platform links
│   │   ├── Hero.tsx            # Hero section with headline, platform pills, and CTA
│   │   ├── Marquee.tsx         # Scrolling marquee with feature highlights
│   │   ├── Problem.tsx         # Problem statement section
│   │   ├── AppReveal.tsx       # App reveal animation section
│   │   ├── Ecosystem.tsx       # Feature showcase with screenshots
│   │   ├── Platforms.tsx       # Platform availability section
│   │   ├── ThePromise.tsx      # Platform download buttons
│   │   ├── Donate.tsx          # Donation/support section
│   │   ├── Footer.tsx          # Footer with links
│   │   └── ui/                 # ShadCN UI components
│   ├── pages/
│   │   ├── LandingPage.tsx     # Main landing page composition
│   │   └── not-found.tsx       # 404 page
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                    # Utility functions
│   │   └── utils.ts
│   └── assets/                 # Image assets (screenshots)
├── public/                     # Static assets
│   ├── favicon.svg
│   ├── og-image.png
│   ├── pfp.jpg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── components.json             # ShadCN/UI configuration
```

## Key Technologies
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome, Simple Icons)
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation
- **UI Components**: ShadCN/UI (Radix UI primitives)

## Design Principles Implemented (Apple Design Alignment)

### 1. Fluid Interfaces
- Spring-based animations using Framer Motion with proper `bounce` and `duration` parameters
- All animations are interruptible and responsive to user input
- Natural, physics-based motion that feels alive and responsive

### 2. Response
- Immediate feedback on pointer down (touch/click) for all interactive elements
- Visual feedback on press states for buttons and links
- Hover, tap, and press interactions provide clear affordances

### 3. Direct Manipulation
- Elements respond directly to user input with appropriate visual feedback
- Platform pills and buttons show pressed states immediately
- Scroll interactions are smooth and natural

### 4. Interruptibility
- All animations use spring physics that can be interrupted and redirected
- No fixed-duration animations that lock the user out
- Viewport-based animations respect user scrolling behavior

### 5. Accessibility
- Reduced motion media query support (`prefers-reduced-motion: reduce`)
- Reduced transparency support (`prefers-reduced-transparency: reduce`)
- Enhanced contrast support (`prefers-contrast: more`)
- Proper color contrast ratios throughout
- Semantic HTML structure

### 6. Visual Design
- Dark mode only interface with magical starlight aesthetic
- Carefully chosen color palette with vibrant accents
- Fluid typography using `clamp()` for responsive sizing
- Thoughtful use of depth, layering, and translucency
- Consistent spacing and alignment systems

## Animation Specifications (Fixed Issues)

All spring animations now use the correct Framer Motion format:
- **Before**: `{ type: "spring", damping: 20, stiffness: 150 }` (incorrect)
- **After**: `{ type: "spring", bounce: 0, duration: 0.4 }` (correct)

Fixed in these components:
- Hero.tsx: Multiple text animations, platform pills, CTA button
- Navbar.tsx: Menu animations
- AppReveal.tsx: Device mockup and text reveal
- Problem.tsx: Problem statement animation
- Ecosystem.tsx: Feature rows (text blocks and screenshot blocks)
- Platforms.tsx: Header, platform cards, coming soon text
- ThePromise.tsx: Main content animation
- Donate.tsx: Section entrance animation

## Accessibility Features Added

### index.css Media Queries
```css
/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

/* Reduced transparency */
@media (prefers-reduced-transparency: reduce) {
  :root {
    --background: 250 40% 12%; /* Less transparent background */
    --primary: 330 85% 55%; /* Less transparent primary */
    --secondary: 180 85% 50%; /* Less transparent secondary */
  }
  /* Make translucent surfaces more opaque */
  [style*="hsla"], [style*="rgba"] { opacity: 0.9 !important; }
  /* Specific fix for navbar backdrop */
  [style*="backdropFilter"] {
    background-color: hsla(var(--background-h), var(--background-s), calc(var(--background-l) + 4%)) !important;
    backdrop-filter: none !important;
    WebkitBackdropFilter: none !important;
  }
}

/* High contrast */
@media (prefers-contrast: more) {
  :root {
    --background: 250 40% 5%; /* Darker background */
    --foreground: 0 0% 98%; /* Lighter foreground */
    --primary: 330 85% 70%; /* Brighter primary */
    --border: 250 20% 25%; /* Stronger border */
  }
  /* Increase contrast and definition */
  * { border-width: 1px !important; }
  [class*="border"], [style*="border"] { border-width: 2px !important; }
  /* Ensure text has sufficient contrast */
  :not(.cta-btn):not([style*="var(--color-primary)"]) {
    text-shadow: 0 0 1px rgba(0,0,0,0.1);
  }
}
```

## Press State Handling (Added for Consistency)

All interactive elements now provide immediate visual feedback on press:

### Pattern Used
```javascript
onPointerDown={(e) => {
  // Apply pressed state styles
}}
onPointerUp={(e) => {
  // Reset to normal/hover state
}}
onPointerCancel={(e) => {
  // Reset to normal/hover state (if interaction is interrupted)
}}
```

### Applied To
- Hero platform pills
- Hero CTA button
- Donate button
- Navbar social links (already had this pattern)

## How to Run the Project

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation
```bash
# Navigate to project directory
cd artifacts/pixel-focus

# Install dependencies
npm install
# or
pnpm install
```

### Development Server
```bash
# Start development server
npm run dev
# or
pnpm dev

# The app will be available at http://localhost:5173
```

### Production Build
```bash
# Build for production
npm run build
# or
pnpm build

# Preview production build
npm run serve
# or
pnpm serve
```

### Type Checking
```bash
npm run typecheck
# or
pnpm typecheck
```

## Key Configuration Files

### vite.config.ts
Configured with:
- React plugin
- Tailwind CSS integration
- Cartographer plugin (Replit-specific)
- Dev banner plugin
- Runtime error modal plugin
- Base URL handling

### tailwindcss Configuration (in index.css)
Custom theme with:
- Custom color scheme (magical starlight dark mode)
- Fluid typography foundations
- Custom utility classes
- Animations and transitions
- Dark mode only design

## Project Characteristics Preserved

While aligning with Apple design principles, the project's original character was maintained:

1. **Purpose**: Clear focus on student productivity and the "built by a student, for students" narrative
2. **Visual Identity**: Distinctive dark mode with vibrant pink/purple accents
3. **Content Structure**: Logical flow from problem statement to solution showcase
4. **Interactive Elements**: Download links to actual app builds (Google Drive)
5. **Community Aspect**: Donation section supporting continued development
6. **Technical Approach**: Modern React stack with excellent performance

## Verification Checklist

Before considering the project complete, verify:
1. [x] All spring animations use correct `bounce`/`duration` format
2. [x] No remaining incorrect `damping`/`stiffness` properties
3. [x] Reduced motion media queries properly implemented
4. [x] Press state handling consistent across all interactive elements
5. [x] Visual design maintains original character and appeal
6. [x] All links and interactions function correctly
7. [x] Responsiveness works across different viewport sizes
8. [x] Accessibility features work as intended

This context.md file provides everything needed to understand and continue work on the pixelFocusLandingPage project from a fresh state with no prior context, including essential information for logo design and brand representation.