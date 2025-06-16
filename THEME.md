# THEME Guidelines - drømmelandet

## Brand Identity

**Company:** drømmelandet
**Industry:** Other

## Customer's Design Specifications

```
{
"companyInfo": {
"name": "drømmelandet",
"contactPerson": "Mads Stoltenborg",
"industry": "Other",
"email": "mfs@dreamstate.dk",
"phone": "27831444",
"contactPreference": [
"email"
],
"address": null
},
"brandDesign": {
"logo": {
"hasLogo": false,
"url": "",
"description": ""
},
"colors": {
"primary": "#646cff",
"secondary": "#64748b",
"accent": [],
"text": "#1A1A1A",
"background": "#FFFFFF"
},
"fonts": {
"primary": "Inter",
"secondary": "Playfair Display",
"preference": "modern"
},
"style": {
"theme": "glassmorphism",
"inspiration": []
}
},
"targetAudience": {
"description": "",
"demographics": {
"ageRange": "",
"location": "Denmark",
"interests": []
},
"painPoints": [],
"goals": []
},
"content": {
"language": "da",
"pages": {
"home": {
"hero": {
"headline": "drømmelandet",
"subheadline": "",
"description": "",
"cta": {
"primary": {
"text": "Kom i gang",
"link": "#contact"
},
"secondary": {
"text": "Læs mere",
"link": "#about"
}
}
},
"sections": []
},
"about": {
"enabled": true,
"headline": "Om os",
"story": "",
"mission": "",
"vision": "",
"values": [],
"team": []
},
"services": [],
"contact": {
"enabled": true,
"headline": "Kontakt os",
"description": "",
"showForm": true,
"showMap": true,
"hours": null,
"address": "",
"additionalInfo": ""
},
"customPages": []
},
"testimonials": [],
"faq": []
},
"features": {
"core": {
"responsive": true,
"seo": true,
"analytics": true,
"performanceOptimized": true,
"accessibility": true
},
"functionality": {
"contactForm": false,
"newsletter": false,
"blog": false,
"ecommerce": false,
"booking": false,
"memberArea": false,
"liveChat": false,
"multiLanguage": false,
"search": false,
"socialMedia": {
"enabled": false,
"platforms": []
}
}
},
"projectInfo": {
"budgetExpectation": "as-calculated",
"maxBudget": "",
"launchDate": "2-weeks",
"hasExistingWebsite": false,
"existingWebsiteUrl": "",
"designResponsibility": "dreamstate-designs",
"pageCount": "6-10",
"contentDelivery": [
"need-images"
],
"communication": [
"contact-form"
],
"wantsGratisDesignudkast": false
},
"competitiveAnalysis": {
"competitors": [],
"uniqueSellingPoints": ""
},
"media": {
"hasImages": false,
"imageLinks": []
},
"additionalInfo": {
"additionalNotes": "",
"internalNotes": "Generated from website-calculator form submission"
},
"seo": {
"metaTitle": "drømmelandet - Professional Services",
"metaDescription": "",
"keywords": [],
"ogImage": ""
},
"deployment": {
"domain": "needs-domain",
"subdomain": "www",
"ssl": true,
"cdn": true
},
"metadata": {
"formVersion": "2.0",
"submittedAt": "2025-06-16T20:45:03.761Z",
"formType": "website-calculator"
}
}
```
**Visual Style:** Premium Modern with Depth and Motion
**Language:** Danish

## Color Palette

### Primary Colors

**Primary Brand Color**
- Hex: #646cff
- RGB: 100, 108, 255
- Usage: Main brand color, primary CTAs, key interactive elements, gradient starts
- Hover state: #3139cc
- Glow effect: 0 0 20px #646cff33

**Secondary Color**
- Hex: #64748b
- RGB: 100, 116, 139
- Usage: Supporting elements, gradient ends, accent components

### Extended Palette

**Vibrant Accent**
- Hex: #979fff
- Usage: Highlights, badges, special CTAs
- Glow: 0 0 30px #979fff40

**Light Accent**
- Hex: #cad2ff
- Usage: Hover states, glass effects, light overlays

**Dark Accent**
- Hex: #3139cc
- Usage: Text on light backgrounds, deep shadows

### Gradient System

**Primary Gradient**
```css
background: linear-gradient(135deg, #646cff 0%, #979fff 100%);
```

**Vibrant Gradient**
```css
background: linear-gradient(45deg, #646cff 0%, #cad2ff 50%, #979fff 100%);
```

**Subtle Background Gradient**
```css
background: radial-gradient(ellipse at top left, #646cff08 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, #979fff08 0%, transparent 50%);
```

### Neutral Colors

**Background Colors**
- Pure White: #FFFFFF - Main content
- Off White: #FAFBFC - Subtle backgrounds
- Light Gray: #F7F9FB - Section backgrounds
- Soft Gray: #E5E7EB - Borders and dividers

**Dark Mode Backgrounds**
- Deep Black: #0A0A0B - Main background
- Rich Black: #111113 - Card backgrounds
- Charcoal: #1A1A1D - Elevated surfaces
- Dark Gray: #2A2A2D - Borders

**Text Colors**
- Primary Text: #1A1A1A - Main body text
- Secondary Text: #6B7280 - Subtitles, meta
- Light Text: #FFFFFF - On dark backgrounds
- Muted Text: #9CA3AF - Disabled states

## Typography System

### Font Selection: modern

**Primary Font Stack**
- Display: 'Sora', 'Inter', -apple-system, sans-serif
- Body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- Monospace: 'Fira Code', 'Consolas', monospace

### Type Scale - Desktop

**Display**
- Hero: 4.5rem (72px) - Bold (700), Line height: 1.1, Letter spacing: -0.02em
- H1: 3.75rem (60px) - Bold (700), Line height: 1.2, Letter spacing: -0.01em
- H2: 3rem (48px) - Semibold (600), Line height: 1.25
- H3: 2.25rem (36px) - Semibold (600), Line height: 1.3
- H4: 1.875rem (30px) - Medium (500), Line height: 1.4
- H5: 1.5rem (24px) - Medium (500), Line height: 1.5
- H6: 1.25rem (20px) - Medium (500), Line height: 1.5

**Body Text**
- Lead: 1.25rem (20px) - Regular (400), Line height: 1.75
- Body: 1.125rem (18px) - Regular (400), Line height: 1.7
- Small: 0.9375rem (15px) - Regular (400), Line height: 1.6
- Caption: 0.8125rem (13px) - Regular (400), Line height: 1.5

### Responsive Typography
- Mobile: Reduce all heading sizes by 20%
- Maintain readability with minimum 16px body text

## Visual Design System

### Glass Morphism Variants

**Hero Glass**
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12);
```

**Card Glass**
```css
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.1);
```

**Dark Glass**
```css
background: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(16px) brightness(1.2);
-webkit-backdrop-filter: blur(16px) brightness(1.2);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Shadow System

**Elevation Scale**
```css
/* Subtle */
--shadow-xs: 0 1px 3px rgba(0, 0, 0, 0.05);

/* Small */
--shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Medium */
--shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Large */
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* Extra Large */
--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.15);

/* Glow */
--shadow-glow: 0 0 40px rgba(100, 108, 255, 0.3);
```

### Animation Library

**Entrance Animations**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

**Hover Transitions**
- Default: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Quick: all 0.2s ease-out
- Smooth: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)
- Bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)

### Component Specifications

#### Navigation Bar
- **Height:** 80px (desktop), 70px (mobile)
- **Background:** Glass effect, becomes solid on scroll
- **Logo:** Max height 40px, animated on scroll
- **Menu Items:** 
  - Spacing: 40px between items
  - Hover: Color transition + underline reveal
  - Active: Bold weight + brand color
- **Mobile Menu:** Full-screen overlay with staggered animation

#### Hero Section
- **Height:** 100vh with 80px offset for nav
- **Background Options:**
  1. Video: Muted, autoplay, with overlay
  2. Parallax: Multiple layers at different speeds
  3. Gradient Mesh: Animated color blobs
- **Content Layout:**
  - Centered with max-width: 1000px
  - Hero text: Animated on load
  - CTA buttons: 60px height, pill shaped
  - Scroll indicator: Animated chevron

#### Feature Cards
```css
.feature-card {
  padding: 40px;
  border-radius: 24px;
  background: var(--glass-card);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: translateX(0);
}
```

#### Buttons

**Primary Button**
```css
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-primary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:active::after {
  width: 300px;
  height: 300px;
}
```

**Ghost Button**
```css
.btn-ghost {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 14px 30px;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  color: white;
  border-color: transparent;
  background: var(--primary-color);
}
```

### Scroll Effects

**Parallax Layers**
- Background: 0.5x speed
- Midground: 0.7x speed
- Foreground: 1x speed
- Floating elements: 1.2x speed

**Reveal Animations**
- Trigger: 80% viewport visibility
- Stagger: 100ms between elements
- Duration: 800ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### Background Patterns

**Dot Grid**
```css
background-image: radial-gradient(circle, #00000008 1px, transparent 1px);
background-size: 24px 24px;
```

**Gradient Mesh**
```css
background: 
  radial-gradient(at 20% 80%, var(--primary-color-10) 0px, transparent 50%),
  radial-gradient(at 80% 20%, var(--secondary-color-10) 0px, transparent 50%),
  radial-gradient(at 40% 40%, var(--accent-color-10) 0px, transparent 50%);
```

### Micro-interactions

1. **Link Hover:** Underline slides in from left
2. **Card Hover:** Lift + shadow + border glow
3. **Button Click:** Ripple effect from click point
4. **Input Focus:** Border color + subtle glow
5. **Image Hover:** Zoom 1.05x with smooth transition
6. **Tab Switch:** Sliding indicator animation

### Loading States

**Skeleton Screens**
- Animated gradient shimmer
- Match component layouts
- Smooth transition to content

**Progress Indicators**
- Circular progress with gradient stroke
- Linear progress with wave animation
- Percentage counter with number animation

### Performance Optimizations

1. **Critical CSS:** Inline above-the-fold styles
2. **Font Loading:** Preload primary fonts
3. **Image Strategy:** 
   - WebP with JPEG fallback
   - Responsive sizes
   - Blur-up lazy loading
4. **Animation Performance:**
   - Use transform and opacity only
   - Will-change on interactive elements
   - GPU acceleration for complex animations

### Accessibility Requirements

- **Color Contrast:** WCAG AA minimum (4.5:1)
- **Focus Indicators:** Visible custom focus styles
- **Motion Preferences:** Respect prefers-reduced-motion
- **Screen Readers:** Proper ARIA labels and landmarks
- **Keyboard Navigation:** Full site navigable via keyboard

### Dark Mode Specifications

**Automatic Detection:** System preference
**Manual Toggle:** Persistent user choice
**Transitions:** Smooth color transitions (300ms)

**Dark Mode Colors:**
- Background: #0A0A0B
- Surface: #111113
- Text: #FFFFFF
- Muted: #A0A0A0
- Borders: #2A2A2D
- Shadows: More subtle, use glow effects