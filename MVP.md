# MVP Requirements - drømmelandet

## Company Overview

**Company Name:** drømmelandet
**Industry:** Other
**Email:** mfs@dreamstate.dk
**Phone:** 27831444

## Customer's Original Requirements

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
**Detected Language:** Danish

## Target Audience

Our target audience

## Visual Design Requirements

### Overall Aesthetic
- **Style:** Modern, visually appealing with depth and motion
- **Inspiration:** High-end agency websites (e.g., DreamState.dk)
- **Key Elements:** 
  - Parallax scrolling effects
  - Floating elements with subtle animations
  - Glass morphism effects
  - Gradient overlays
  - Interactive hover states
  - Smooth scroll-triggered animations

### Hero Section
- **Layout:** Full viewport height with scroll indicator
- **Background:** 
  - Option 1: High-quality stock video from Pexels/Coverr
  - Option 2: Parallax image with gradient overlay
  - Option 3: Abstract animated background (particles, waves, gradients)
- **Content:**
  - Main headline: drømmelandet
  - Subheadline: Din betroede partner for enestående løsninger
  - Primary CTA button with hover effects
  - Secondary ghost button
- **Effects:**
  - Text animation on load (fade in with slight movement)
  - Floating geometric shapes
  - Mouse-follow effects on desktop
  - Smooth scroll to next section

### Landing Page Sections

#### 1. Features/Services Showcase
- **Layout:** Alternating left/right with images
- **Cards:** Glass morphism effect with hover animations
- **Content:**


#### 2. Statistics/Trust Indicators
- **Layout:** 4-column grid on desktop, 2x2 on mobile
- **Content:**
  - Years of experience
  - Satisfied clients
  - Projects completed
  - Team members
- **Animation:** Count-up animation on scroll
- **Style:** Large numbers with gradient text

#### 3. Testimonials
- **Layout:** Carousel with glass cards
- **Content:** 2 testimonials with:
  - Client photo (from UI Faces or similar)
  - Quote text
  - Name and company
  - 5-star rating visual
- **Animation:** Auto-play with pause on hover

#### 4. Call-to-Action Section
- **Background:** Gradient or blurred image
- **Content:**
  - Compelling headline
  - Supporting text
  - Large CTA button
- **Effects:** Parallax background, floating elements

#### 5. Process/How It Works
- **Layout:** Timeline or stepped cards
- **Animation:** Draw line between steps on scroll
- **Interactive:** Hover to expand details

### About Page

**Hero Section:**
- Smaller hero with parallax image
- Headline: Om os
- Breadcrumb navigation

**Content Sections:**
1. **Our Story**
   - Rich text with inline images
   - Timeline of milestones
   
2. **Our Team** (if applicable)
   - Grid of team cards with:
     - Professional photos
     - Hover effect revealing bio
     - Social media links
     
3. **Our Values**
   - Icon cards with descriptions
   - Animated on scroll

### Services Page

**Layout:** Hub page with service cards
**Each Service Card:**
- Featured image/illustration
- Service name and brief description
- "Learn More" link with arrow animation
- Hover: Lift effect with shadow

### Contact Page

**Split Layout:**
- Left: Contact form with floating labels
- Right: Contact information with map

**Form Features:**
- Glass morphism container
- Floating label inputs
- Real-time validation
- Success animation on submit
- Integration with email service

## Technical Requirements

### Core Features
- **SEO Optimization:** 
  - Meta tags, Open Graph, structured data
  - Sitemap generation
  - Image optimization
- **Performance:**
  - Lazy loading for images and sections
  - Code splitting
  - < 3s load time
- **Analytics:** Google Analytics 4 with event tracking
- **Animations:** Framer Motion for React components
- **Images:** Unsplash API integration for placeholder images

### Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom animations
- **UI Library:** Shadcn/ui for base components
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **State Management:** Zustand (if needed)
- **Forms:** React Hook Form with Zod validation
- **Deployment:** Vercel

### Third-Party Integrations
1. **Unsplash API** for stock photos
2. **EmailJS** or **Resend** for contact forms
3. **Google Maps** for location
4. **Google Fonts** for typography
5. **Hotjar** or **Clarity** for user behavior tracking

## Content Generation Guidelines

### Placeholder Content
When user provides minimal information, generate:
1. **Industry-specific headlines** in detected language
2. **3-4 paragraphs** of relevant body text
3. **Feature lists** with descriptions
4. **Testimonials** with realistic names and companies
5. **FAQ section** with 5-6 common questions

### Image Suggestions
For each section, suggest Unsplash search queries:
- Hero: "Other office", "modern workspace", "abstract technology"
- Services: Specific to each service type
- About: "team meeting", "company culture"
- General: "business success", "innovation", "growth"

### Micro-interactions
- Button hover: Scale + shadow
- Card hover: Lift + reveal more info
- Link hover: Underline animation
- Image hover: Zoom with overflow hidden
- Input focus: Glow effect
- Scroll: Parallax and reveal animations

## Success Metrics

1. **Visual Impact:** Immediate "wow" factor on load
2. **Engagement:** >2 min average session duration
3. **Performance:** 90+ Lighthouse score
4. **Conversion:** Clear CTAs with >5% click rate
5. **Accessibility:** WCAG AA compliant
6. **Mobile Experience:** Fully responsive with touch-optimized interactions