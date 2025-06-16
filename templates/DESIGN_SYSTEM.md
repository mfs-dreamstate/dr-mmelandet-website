# Glassmorphic Design System Specification

This template provides a sophisticated, modern website design system featuring advanced glassmorphic effects with detailed specifications for creating professional service websites.

## 🎨 Color System

### Primary Brand Colors
```css
/* Core Gradient Colors */
--color-violet-600: #8b5cf6 (rgb(139, 92, 246))
--color-blue-600: #3b82f6 (rgb(59, 130, 246))
--color-pink-600: #ec4899 (rgb(236, 72, 153))

/* Light Variants for Backgrounds */
--color-violet-100: rgba(139, 92, 246, 0.1)
--color-blue-100: rgba(59, 130, 246, 0.1)
--color-pink-100: rgba(236, 72, 153, 0.1)
```

### Glass Effect Palette
```css
/* Glass Backgrounds - White with Varying Opacity */
--glass-90: rgba(255, 255, 255, 0.9)    /* Primary panels */
--glass-80: rgba(255, 255, 255, 0.8)    /* Secondary panels */
--glass-70: rgba(255, 255, 255, 0.7)    /* Borders, dividers */
--glass-60: rgba(255, 255, 255, 0.6)    /* Hover states */
--glass-50: rgba(255, 255, 255, 0.5)    /* Overlays */
--glass-40: rgba(255, 255, 255, 0.4)    /* Light overlays */
--glass-30: rgba(255, 255, 255, 0.3)    /* Very light overlays */
--glass-20: rgba(255, 255, 255, 0.2)    /* Subtle backgrounds */
--glass-10: rgba(255, 255, 255, 0.1)    /* Barely visible */
```

### Text Color Hierarchy
```css
--text-primary: #111827     /* Gray-900 - Main headings */
--text-secondary: #1f2937   /* Gray-800 - Subheadings */
--text-body: #374151        /* Gray-700 - Body text */
--text-muted: #4b5556       /* Gray-600 - Secondary text */
--text-light: #6b7280       /* Gray-500 - Light text */
--text-white: #ffffff       /* Pure white for dark backgrounds */
```

## 📏 Typography System

### Font Stack
```css
/* Display Font - For Hero & Major Headings */
--font-display: 'Playfair Display', Georgia, serif;
font-weight: 300, 400, 700, 900;

/* Body Font - For Readable Content */
--font-body: 'Merriweather', Georgia, serif;
font-weight: 300, 400, 700;

/* UI Font - For Interface Elements */
--font-ui: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
font-weight: 400, 500, 600, 700;
```

### Type Scale (Mobile → Desktop)
```css
/* Hero Title */
.text-hero {
  font-size: clamp(3rem, 5vw + 1rem, 6rem);      /* 48px → 96px */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Section Heading */
.text-section {
  font-size: clamp(2rem, 3vw + 0.5rem, 3.5rem);  /* 32px → 56px */
  line-height: 1.3;
}

/* Body Text */
.text-body {
  font-size: 1rem;      /* 16px */
  line-height: 1.75;    /* 175% */
}
```

## 🪟 Glass Effects Specifications

### Glass Card Complete Specification
```css
.glass-card {
  /* Multi-layer background for depth */
  background: 
    /* Main glass layer */
    linear-gradient(135deg, 
      rgba(255, 255, 255, 0.9) 0%, 
      rgba(255, 255, 255, 0.4) 100%
    ),
    /* Color tint layer */
    radial-gradient(ellipse at top left, 
      rgba(139, 92, 246, 0.1) 0%, 
      transparent 50%
    );
  
  /* Backdrop effects */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  
  /* Border */
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 24px;
  
  /* Complex shadow system */
  box-shadow: 
    0 20px 40px -10px rgba(139, 92, 246, 0.15),
    0 10px 20px -5px rgba(59, 130, 246, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  
  /* Smooth transitions */
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Hover state */
.glass-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 30px 60px -15px rgba(139, 92, 246, 0.25),
    0 15px 30px -7px rgba(59, 130, 246, 0.15);
}
```

## 🎭 Animation System

### Timing Functions
```css
/* Easing Functions */
--ease-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);

/* Duration Scale */
--duration-fast: 200ms;
--duration-base: 300ms;
--duration-slow: 400ms;
--duration-slower: 600ms;
```

### Keyframe Animations
```css
/* Background Gradient Animation */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
    background-size: 200% 200%;
  }
  50% {
    background-position: 100% 50%;
    background-size: 200% 200%;
  }
}

/* Floating Orbs */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 0.7;
  }
  33% {
    transform: translateY(-30px) rotate(120deg) scale(1.1);
    opacity: 0.9;
  }
  66% {
    transform: translateY(20px) rotate(240deg) scale(0.95);
    opacity: 0.6;
  }
}
```

## 📱 Responsive Grid System

### Breakpoints
```css
/* Mobile First Breakpoints */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Medium devices */
--breakpoint-lg: 1024px;  /* Large devices */
--breakpoint-xl: 1280px;  /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */
```

## 📄 Page Layout Specifications

### Homepage Layout
- **Hero Height**: `min-h-[90vh]` (90% viewport height)
- **Hero Grid**: 12 columns, 7-5 split on desktop
- **Section Spacing**: 80px vertical padding
- **Service Cards**: 3 columns on desktop, stack on mobile
- **Glass Effects**: All cards use glass-card styling
- **Animations**: Floating orbs, gradient shift background

### About Page Layout
- **Page Hero**: 60vh height with gradient text
- **Video Section**: 16:9 aspect ratio, rounded corners
- **Content Grid**: 5-7 split, reverses on mobile
- **Credentials**: 4-column grid, 2 on tablet, 1 on mobile
- **Glass Cards**: All sections use glass-card with hover

### Service Pages Layout
- **Hero Section**: Centered text, 50vh minimum
- **Content Width**: Max 65ch for readability
- **Feature Grid**: 2x2 on desktop, stacks on mobile
- **Process Steps**: Numbered cards with icons
- **Glass Effects**: Lighter glass for content areas

### Contact Page Layout
- **Form Layout**: 8-4 column split on desktop
- **Form Fields**: Full width with glass styling
- **Validation**: Client-side with error states
- **Info Cards**: Stacked glass cards in sidebar
- **Submit Button**: Primary glass button style

## 🎯 Component Specifications

### Glass Card Component
```tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'light' | 'medium' | 'heavy';
  padding?: 'sm' | 'md' | 'lg';
}
```

### Glass Button Component
```tsx
interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

/* Size Specifications */
- sm: px-6 py-2 text-sm
- md: px-8 py-3 text-base (default)
- lg: px-12 py-4 text-lg
```

## 🎨 Design Tokens Summary

### Border Radius Scale
```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.75rem;    /* 12px */
--radius-lg: 1rem;       /* 16px */
--radius-xl: 1.5rem;     /* 24px */
--radius-2xl: 2rem;      /* 32px */
--radius-full: 9999px;   /* Full circle */
```

### Shadow Scale
```css
/* Elevation Levels */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.12);

/* Colored Shadows */
--shadow-violet: 0 20px 40px -10px rgba(139, 92, 246, 0.25);
--shadow-blue: 0 20px 40px -10px rgba(59, 130, 246, 0.25);
--shadow-pink: 0 20px 40px -10px rgba(236, 72, 153, 0.25);
```

## 🚀 Performance Guidelines

### CSS Performance
1. Use CSS transforms for animations (GPU accelerated)
2. Limit backdrop-filter usage on mobile
3. Use will-change sparingly
4. Optimize gradient complexity
5. Lazy load below-fold animations

### Image Guidelines
1. Use WebP format with JPEG fallback
2. Implement responsive images
3. Lazy load images below fold
4. Optimize for 2x displays maximum
5. Use blur-up technique for hero images

### Animation Performance
1. Limit to 60fps animations
2. Use CSS-only animations where possible
3. Debounce scroll events
4. Reduce animation on mobile
5. Respect prefers-reduced-motion

## 📱 Mobile Optimization

### Touch Targets
- Minimum size: 44x44px
- Spacing between targets: 8px minimum
- Increase padding on mobile

### Mobile Navigation
- Hamburger menu at < 768px
- Full screen overlay
- Large touch targets
- Smooth transitions

### Performance
- Reduce glass blur on mobile
- Simplify animations
- Optimize images aggressively
- Minimize JavaScript execution

## 🎨 Customization Guide

### Brand Color Changes
1. Update CSS variables in globals.css
2. Adjust gradient combinations
3. Update shadow colors
4. Test contrast ratios

### Typography Changes
1. Update font imports in layout.tsx
2. Adjust font scales
3. Update line heights
4. Test readability

### Glass Effect Adjustments
1. Modify backdrop-filter values
2. Adjust opacity levels
3. Update border colors
4. Fine-tune shadows