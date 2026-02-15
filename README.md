# Optima Tech Hub Website

A modern, feature-rich company website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design with dark theme
- ✨ Smooth animations with Framer Motion
- 🧭 Multi-page routing with React Router
- 📱 Mobile-first responsive design
- 🎯 SEO-friendly structure
- 🚀 Fast performance with Vite
- 💼 Multiple pages:
  - Home (Hero, Services Overview, Features, CTA)
  - About (Company Story, Mission/Vision, Values, Timeline)
  - Services (Detailed Service Offerings)
  - Solutions (Industry-Specific Solutions)
  - Team (Founders & Team Members)
  - Case Studies (Project Examples & Results)
  - Careers (Job Listings & Benefits)
  - Blog (Articles & Insights)
  - Contact (Contact Form & Information)

## Technologies Used

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **Lucide React** - Icons

## Setup Instructions

### 1. Install Dependencies

First, install the required npm packages:

\`\`\`bash
npm install framer-motion lucide-react react-router-dom
\`\`\`

### 2. Install Tailwind CSS

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
\`\`\`

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

The website will be available at `http://localhost:5173`

### 4. Build for Production

\`\`\`bash
npm run build
\`\`\`

The production-ready files will be in the `dist` directory.

## Project Structure

\`\`\`
src/
├── components/ # Reusable components
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ ├── Logo.tsx
│ ├── SectionHeader.tsx
│ └── ScrollToTop.tsx
├── pages/ # Page components
│ ├── Home.tsx
│ ├── About.tsx
│ ├── Services.tsx
│ ├── Solutions.tsx
│ ├── Team.tsx
│ ├── CaseStudies.tsx
│ ├── Careers.tsx
│ ├── Blog.tsx
│ ├── Contact.tsx
│ └── NotFound.tsx
├── App.tsx # Main app component with routing
├── main.tsx # Entry point
└── index.css # Global styles with Tailwind
\`\`\`

## Customization

### Update Logo

Edit the `USER_LOGO_URL` constant in `src/components/Logo.tsx` to use your own logo image.

### Colors & Theme

Modify the Tailwind configuration in `tailwind.config.js` to customize colors and theme.

### Content

Update the content in each page component to match your company's information.

## Features by Page

### Home

- Hero section with animated logo
- Services overview cards
- Features/Benefits section
- Statistics display
- CTA sections

### About

- Company story
- Mission & Vision
- Core values
- Journey timeline

### Services

- Detailed service descriptions
- Feature lists
- Technologies used
- Process workflow

### Solutions

- Industry-specific solutions
- Key features per industry
- Benefits and results

### Team

- Founder profiles with social links
- Team member cards
- Join team CTA

### Case Studies

- Project examples with results
- Client testimonials format
- Technologies used
- Duration and stats

### Careers

- Open position listings
- Company benefits
- Application forms
- Culture highlights

### Blog

- Featured article
- Article grid
- Category filtering
- Newsletter signup

### Contact

- Contact form
- Contact information
- Office hours
- Social media links

## Performance Optimizations

- Lazy loading for images
- Code splitting with route-based chunks
- Optimized animations
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Optima Tech Hub. All rights reserved.

## Support

For support, email contact@optimatech.hub or visit our website.
