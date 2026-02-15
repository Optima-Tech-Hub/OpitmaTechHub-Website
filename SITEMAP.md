# 🗺️ Website Sitemap & Structure

## Navigation Structure

\`\`\`
┌─────────────────────────────────────────────────────────┐
│ OPTIMA TECH HUB │
│ Main Navigation Bar │
└─────────────────────────────────────────────────────────┘
│
├── Home (/)
│ ├── Hero Section
│ ├── Services Overview (4 cards)
│ ├── Why Choose Us (5 features)
│ ├── Stats (3 metrics)
│ └── CTA Section
│
├── About (/about)
│ ├── Hero
│ ├── Who We Are
│ ├── Mission & Vision
│ ├── Core Values (4 values)
│ └── Journey Timeline (5 milestones)
│
├── Services (/services)
│ ├── Hero
│ ├── Service Details (4 services)
│ │ ├── Digital Platform Development
│ │ ├── AI Integration & Automation
│ │ ├── Cloud & Infrastructure
│ │ └── Maintenance & Support
│ ├── Our Process (6 steps)
│ └── CTA
│
├── Solutions (/solutions)
│ ├── Hero
│ ├── Industry Solutions (6 industries)
│ │ ├── Enterprise & Corporate
│ │ ├── Education
│ │ ├── Healthcare
│ │ ├── E-Commerce & Retail
│ │ ├── Financial Services
│ │ └── Manufacturing & Logistics
│ └── CTA
│
├── Case Studies (/case-studies)
│ ├── Hero
│ ├── Case Study Cards (6 projects)
│ ├── Stats Section
│ └── CTA
│
├── Team (/team)
│ ├── Hero
│ ├── Founders Section (3 founders)
│ │ ├── Amer (CEO)
│ │ ├── Hisham (CTO)
│ │ └── Saleh (CGO)
│ ├── Team Members (6 members)
│ └── Join Team CTA
│
├── Careers (/careers)
│ ├── Hero
│ ├── Benefits (6 benefits)
│ ├── Open Positions (6 listings)
│ └── Send Resume CTA
│
├── Blog (/blog)
│ ├── Hero
│ ├── Category Filter
│ ├── Featured Post
│ ├── Blog Grid (6 articles)
│ └── Newsletter Signup
│
├── Contact (/contact)
│ ├── Hero
│ ├── Contact Info Cards (3)
│ ├── Contact Form
│ ├── Office Hours
│ ├── Social Links
│ └── Map
│
└── 404 Page (\*)
├── Error Message
├── Navigation Options
└── Suggested Links

┌─────────────────────────────────────────────────────────┐
│ FOOTER │
│ Company Info | Quick Links | Resources | Social Media │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Page Breakdown

### 🏠 Home Page

**Sections**: 5  
**Components**: Hero, Services Grid (4), Features (5), Stats (3), CTA  
**Animations**: Fade in, Float, Scale  
**Scroll Indicator**: Yes

### ℹ️ About Page

**Sections**: 6  
**Components**: Hero, Story Grid, Mission/Vision Cards, Values Grid (4), Timeline (5)  
**Animations**: Slide in, Fade  
**Special**: Alternating timeline layout

### 🛠️ Services Page

**Sections**: 4  
**Components**: Hero, Service Details (4 large), Process Grid (6), CTA  
**Animations**: Slide in from sides, Hover lift  
**Features**: Anchor links to services

### 💼 Solutions Page

**Sections**: 3  
**Components**: Hero, Solution Cards (6), CTA  
**Animations**: Fade in, Hover effects  
**Layout**: Alternating left/right

### 📊 Case Studies Page

**Sections**: 4  
**Components**: Hero, Case Study Grid (6), Stats (4), CTA  
**Animations**: Stagger fade in  
**Special**: Result metrics highlighting

### 👥 Team Page

**Sections**: 4  
**Components**: Hero, Founder Cards (3), Team Grid (6), CTA  
**Animations**: Scale on hover  
**Special**: Social media links

### 💼 Careers Page

**Sections**: 4  
**Components**: Hero, Benefits Grid (6), Job Listings (6), CTA  
**Animations**: Lift on hover  
**Special**: Department tags

### 📝 Blog Page

**Sections**: 5  
**Components**: Hero, Filter Bar, Featured Post, Blog Grid (6), Newsletter  
**Animations**: Fade in, Hover  
**Special**: Category filtering

### 📧 Contact Page

**Sections**: 3  
**Components**: Hero, Info Cards (3), Form, Details, Map  
**Animations**: Slide in  
**Special**: Working form validation

### ❌ 404 Page

**Sections**: 1  
**Components**: Error Display, Navigation Options, Quick Links  
**Animations**: Scale in  
**Special**: Go back button

## Component Library

\`\`\`
Components/
├── Navbar
│ ├── Desktop Navigation
│ ├── Mobile Navigation
│ ├── Dropdown Menus
│ └── CTA Button
│
├── Footer
│ ├── Company Info
│ ├── Link Columns (3)
│ ├── Social Media
│ └── Copyright
│
├── Logo
│ ├── SVG Vector
│ └── Image Fallback
│
├── SectionHeader
│ ├── Title
│ ├── Underline Animation
│ └── Subtitle
│
└── ScrollToTop
└── Auto-scroll on route change
\`\`\`

## Color Scheme

### Primary Colors

- **Cyan**: #22d3ee (Primary accent)
- **Blue**: #0ea5e9 (Secondary accent)
- **Slate**: #0f172a to #f8fafc (Backgrounds/Text)

### Gradient Combinations

1. Cyan → Blue (Primary)
2. Blue → Purple (Secondary)
3. Purple → Pink (Tertiary)
4. Emerald → Teal (Success)
5. Orange → Red (Warning)
6. Indigo → Purple (Info)

## Typography

### Headings

- H1: 4xl - 7xl (responsive)
- H2: 3xl - 5xl
- H3: 2xl - 4xl
- H4: xl - 2xl

### Body

- Large: text-lg (18px)
- Normal: text-base (16px)
- Small: text-sm (14px)
- Extra Small: text-xs (12px)

### Fonts

- Primary: Inter
- Fallback: system-ui, sans-serif

## Animations

### Type

- Fade In
- Slide Up/Down
- Slide Left/Right
- Scale
- Hover Lift
- Glow Effect

### Triggers

- On Scroll (whileInView)
- On Hover
- On Load
- On Click

### Duration

- Fast: 0.3s
- Normal: 0.5s
- Slow: 0.8s

## Responsive Breakpoints

- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)

## SEO Structure

Each page includes:

- Semantic HTML5
- Proper heading hierarchy
- Meta-ready structure
- Descriptive alt texts
- Clean URLs

## Performance Features

- Code splitting by route
- Lazy loading ready
- Optimized animations
- Minimal dependencies
- Fast build times

---

**Total Pages**: 10 (9 main + 404)  
**Total Sections**: 40+  
**Total Components**: 60+  
**Lines of Code**: ~5000+

## Quick Stats

| Metric          | Count                   |
| --------------- | ----------------------- |
| Pages           | 10                      |
| Components      | 5 shared                |
| Services        | 4                       |
| Solutions       | 6                       |
| Case Studies    | 6                       |
| Team Members    | 9 (3 founders + 6 team) |
| Job Listings    | 6                       |
| Blog Posts      | 6                       |
| Animations      | 30+                     |
| Color Gradients | 6                       |
| Icons           | 50+                     |
