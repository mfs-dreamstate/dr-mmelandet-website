# Design System - drømmelandet

## Design Philosophy

### Core Principles

**Dreamlike Elegance**
- Ethereal, floating elements that evoke dreams and aspirations
- Soft, translucent surfaces with glassmorphism effects
- Smooth, flowing animations that feel magical yet professional

**Premium Minimalism**
- Clean, uncluttered layouts with purposeful negative space
- High-quality imagery and precise typography
- Subtle details that create sophisticated user experience

**Danish Sensibility**
- Functional beauty with attention to craft
- Human-centered design that feels approachable
- Quality over quantity in every design decision

**Transformative Experience**
- Progressive disclosure that builds excitement
- Visual metaphors for transformation and growth
- Interactive elements that engage and delight

## Color System

### Primary Palette

**Brand Primary - Electric Blue**
```css
--color-primary: #646cff;
--color-primary-50: #f0f1ff;
--color-primary-100: #e5e6ff;
--color-primary-200: #d1d3ff;
--color-primary-300: #b4b7ff;
--color-primary-400: #9ca0ff;
--color-primary-500: #646cff;  /* Main brand color */
--color-primary-600: #5a61e6;
--color-primary-700: #4c53cc;
--color-primary-800: #3d44b3;
--color-primary-900: #2e3599;
```

**Secondary - Slate Gray**
```css
--color-secondary: #64748b;
--color-secondary-50: #f8fafc;
--color-secondary-100: #f1f5f9;
--color-secondary-200: #e2e8f0;
--color-secondary-300: #cbd5e1;
--color-secondary-400: #94a3b8;
--color-secondary-500: #64748b;  /* Main secondary */
--color-secondary-600: #475569;
--color-secondary-700: #334155;
--color-secondary-800: #1e293b;
--color-secondary-900: #0f172a;
```

### Extended Palette

**Success - Emerald**
```css
--color-success: #10b981;
--color-success-light: #d1fae5;
--color-success-dark: #065f46;
```

**Warning - Amber**
```css
--color-warning: #f59e0b;
--color-warning-light: #fef3c7;
--color-warning-dark: #92400e;
```

**Error - Rose**
```css
--color-error: #ef4444;
--color-error-light: #fecaca;
--color-error-dark: #b91c1c;
```

### Gradient Definitions

**Primary Gradient**
```css
--gradient-primary: linear-gradient(135deg, #646cff 0%, #9ca0ff 100%);
--gradient-primary-reverse: linear-gradient(315deg, #646cff 0%, #9ca0ff 100%);
```

**Ethereal Gradient**
```css
--gradient-ethereal: linear-gradient(45deg, #646cff08 0%, #9ca0ff12 50%, #64748b08 100%);
```

**Hero Background Gradient**
```css
--gradient-hero: radial-gradient(ellipse at top left, #646cff15 0%, transparent 70%),
                 radial-gradient(ellipse at bottom right, #9ca0ff12 0%, transparent 70%),
                 linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
```

**Glass Overlay Gradients**
```css
--glass-light: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
--glass-dark: linear-gradient(145deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%);
```

## Typography System

### Font Loading Strategy
```css
/* Preload critical fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
```

### Font Stacks
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
--font-secondary: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
```

### Type Scale & Styles

**Display Typography**
```css
.text-hero {
  font-family: var(--font-secondary);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-display-lg {
  font-family: var(--font-secondary);
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-secondary-900);
}

.text-display-md {
  font-family: var(--font-secondary);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-secondary-800);
}
```

**Heading Typography**
```css
.text-h1 {
  font-family: var(--font-primary);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-secondary-900);
}

.text-h2 {
  font-family: var(--font-primary);
  font-size: clamp(1.25rem, 2.5vw, 1.875rem);
  font-weight: 500;
  line-height: 1.4;
  color: var(--color-secondary-800);
}

.text-h3 {
  font-family: var(--font-primary);
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-secondary-700);
}
```

**Body Typography**
```css
.text-lead {
  font-family: var(--font-primary);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75;
  color: var(--color-secondary-600);
}

.text-body {
  font-family: var(--font-primary);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-secondary-700);
}

.text-small {
  font-family: var(--font-primary);
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-secondary-600);
}
```

## Glassmorphism Components

### Glass Cards

**Primary Glass Card**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(100, 108, 255, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(100, 108, 255, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border-color: rgba(100, 108, 255, 0.2);
}

.glass-card:hover::before {
  opacity: 1;
}
```

**Service Card Variant**
```css
.service-card {
  @extend .glass-card;
  padding: 2.5rem 2rem;
  text-align: center;
  cursor: pointer;
}

.service-card .icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  background: var(--gradient-primary);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.service-card:hover .icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 24px rgba(100, 108, 255, 0.3);
}
```

**Testimonial Card**
```css
.testimonial-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 32px;
  padding: 3rem 2.5rem;
  box-shadow: 
    0 12px 40px rgba(100, 108, 255, 0.08),
    0 4px 20px rgba(0, 0, 0, 0.03);
  position: relative;
}

.testimonial-card::after {
  content: '"';
  position: absolute;
  top: -1rem;
  left: 2rem;
  font-size: 6rem;
  font-family: var(--font-secondary);
  color: var(--color-primary-200);
  opacity: 0.6;
}
```

### Navigation Components

**Main Navigation**
```css
.main-nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.main-nav.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  border-bottom-color: rgba(100, 108, 255, 0.1);
}

.nav-link {
  font-family: var(--font-primary);
  font-weight: 500;
  color: var(--color-secondary-700);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary-600);
  background: rgba(100, 108, 255, 0.08);
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 100%;
}
```

**Mobile Menu**
```css
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.mobile-menu.open {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-link {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-secondary-800);
  text-decoration: none;
  margin: 1rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease;
}

.mobile-menu.open .mobile-nav-link {
  opacity: 1;
  transform: translateY(0);
}

.mobile-menu.open .mobile-nav-link:nth-child(1) { transition-delay: 0.1s; }
.mobile-menu.open .mobile-nav-link:nth-child(2) { transition-delay: 0.2s; }
.mobile-menu.open .mobile-nav-link:nth-child(3) { transition-delay: 0.3s; }
.mobile-menu.open .mobile-nav-link:nth-child(4) { transition-delay: 0.4s; }
```

## Button System

### Primary Buttons

**Hero CTA Button**
```css
.btn-hero {
  background: var(--gradient-primary);
  color: white;
  font-family: var(--font-primary);
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1.25rem 3rem;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: 
    0 8px 24px rgba(100, 108, 255, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.6s ease;
}

.btn-hero:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 12px 32px rgba(100, 108, 255, 0.4),
    0 6px 16px rgba(0, 0, 0, 0.15);
}

.btn-hero:hover::before {
  left: 100%;
}

.btn-hero:active {
  transform: translateY(-1px);
}
```

**Standard Primary Button**
```css
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(100, 108, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.btn-primary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(100, 108, 255, 0.3);
}

.btn-primary:active::after {
  width: 200px;
  height: 200px;
}
```

**Ghost/Secondary Button**
```css
.btn-ghost {
  background: transparent;
  color: var(--color-primary-600);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border: 2px solid var(--color-primary-600);
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-ghost::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.4s ease;
  z-index: -1;
}

.btn-ghost:hover {
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(100, 108, 255, 0.2);
}

.btn-ghost:hover::before {
  width: 100%;
}
```

## Form Components

### Glass Form Container
```css
.form-glass {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 
    0 12px 40px rgba(100, 108, 255, 0.08),
    0 4px 20px rgba(0, 0, 0, 0.03);
}
```

### Floating Label Inputs
```css
.input-floating {
  position: relative;
  margin-bottom: 2rem;
}

.input-floating input,
.input-floating textarea {
  width: 100%;
  padding: 1.25rem 1rem 0.75rem;
  background: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(100, 116, 139, 0.2);
  border-radius: 1rem;
  font-family: var(--font-primary);
  font-size: 1rem;
  color: var(--color-secondary-800);
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.input-floating label {
  position: absolute;
  top: 1.25rem;
  left: 1rem;
  color: var(--color-secondary-500);
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s ease;
  pointer-events: none;
  background: transparent;
}

.input-floating input:focus,
.input-floating textarea:focus {
  outline: none;
  border-color: var(--color-primary-500);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 
    0 0 0 4px rgba(100, 108, 255, 0.1),
    0 4px 16px rgba(100, 108, 255, 0.1);
}

.input-floating input:focus + label,
.input-floating input:not(:placeholder-shown) + label,
.input-floating textarea:focus + label,
.input-floating textarea:not(:placeholder-shown) + label {
  top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-primary-600);
  font-weight: 500;
}
```

## Animation System

### Scroll-triggered Animations

**Fade In Up**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
```

**Scale In**
```css
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

.animate-scale-in {
  animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

**Slide In Right**
```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
```

### Floating Elements

**Gentle Float**
```css
@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
}

.floating-element {
  animation: gentleFloat 6s ease-in-out infinite;
}

.floating-element:nth-child(2) {
  animation-delay: -2s;
}

.floating-element:nth-child(3) {
  animation-delay: -4s;
}
```

**Parallax Layers**
```css
.parallax-bg {
  transform: translateZ(0);
  will-change: transform;
}

.parallax-slow {
  transform: translate3d(0, calc(var(--scroll-y) * 0.5px), 0);
}

.parallax-medium {
  transform: translate3d(0, calc(var(--scroll-y) * 0.3px), 0);
}

.parallax-fast {
  transform: translate3d(0, calc(var(--scroll-y) * -0.2px), 0);
}
```

### Loading States

**Skeleton Shimmer**
```css
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}
```

**Spinner**
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-primary-200);
  border-top-color: var(--color-primary-600);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

## Layout System

### Container & Grid

**Main Container**
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
```

**Section Spacing**
```css
.section {
  padding: 6rem 0;
}

.section-lg {
  padding: 8rem 0;
}

.section-sm {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  .section {
    padding: 4rem 0;
  }
  
  .section-lg {
    padding: 5rem 0;
  }
  
  .section-sm {
    padding: 3rem 0;
  }
}
```

**Grid System**
```css
.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-3,
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Interactive Elements

### Hover Effects

**Card Hover**
```css
.interactive-card {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  cursor: pointer;
}

.interactive-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(100, 108, 255, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.1);
}
```

**Image Hover**
```css
.image-hover {
  overflow: hidden;
  border-radius: 1rem;
}

.image-hover img {
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: transform;
}

.image-hover:hover img {
  transform: scale(1.05);
}
```

**Link Underline Animation**
```css
.link-underline {
  position: relative;
  text-decoration: none;
  color: var(--color-primary-600);
  font-weight: 500;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}
```

### Scroll Indicators

**Progress Bar**
```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(100, 108, 255, 0.1);
  z-index: 101;
}

.scroll-progress-bar {
  height: 100%;
  background: var(--gradient-primary);
  width: 0%;
  transition: width 0.1s ease;
}
```

**Scroll to Top**
```css
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(100, 108, 255, 0.3);
}

.scroll-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(100, 108, 255, 0.4);
}
```

## Responsive Design

### Breakpoints
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Mobile-Specific Styles

**Touch-Friendly Interactions**
```css
@media (hover: none) and (pointer: coarse) {
  .btn-primary,
  .btn-ghost,
  .btn-hero {
    min-height: 44px;
    min-width: 44px;
  }
  
  .interactive-card:hover {
    transform: none;
  }
  
  .interactive-card:active {
    transform: scale(0.98);
  }
}
```

**Mobile Typography Adjustments**
```css
@media (max-width: 768px) {
  .text-hero {
    font-size: clamp(2rem, 8vw, 3rem);
    line-height: 1.2;
  }
  
  .text-display-lg {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
  }
  
  .text-lead {
    font-size: 1.125rem;
  }
}
```

## Accessibility Features

### Focus States
```css
*:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.btn-primary:focus,
.btn-ghost:focus,
.btn-hero:focus {
  outline: none;
  box-shadow: 
    0 0 0 4px rgba(100, 108, 255, 0.3),
    0 4px 16px rgba(100, 108, 255, 0.2);
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .floating-element {
    animation: none;
  }
  
  .parallax-slow,
  .parallax-medium,
  .parallax-fast {
    transform: none !important;
  }
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  :root {
    --color-primary: #0000ff;
    --color-secondary: #000000;
  }
  
  .glass-card {
    background: #ffffff;
    border: 2px solid #000000;
  }
}
```

## Performance Optimizations

### Critical CSS Strategy
```css
/* Above-the-fold critical styles */
.critical-css {
  /* Navigation, hero section, and initial viewport styles */
  /* Should be inlined in <head> */
}
```

### Layer Management
```css
/* Create new stacking contexts for better performance */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

.animation-layer {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
```

This comprehensive design system provides all the detailed specifications needed to create a stunning, cohesive glassmorphism website that reflects the drømmelandet brand while ensuring excellent user experience and performance across all devices.