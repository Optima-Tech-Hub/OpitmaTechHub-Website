# 🚀 Optima Tech Hub Website

Optima Tech Hub is a premium software development and consulting agency specializing in AI integration, custom software engineering, and digital transformation. We empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.

**Innovate. Integrate. Optimize.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

</div>

---

## 🌟 Overview

The **Optima Tech Hub** website is a cutting-edge corporate site designed to showcase AI solutions, digital transformation services, and industry-specific software. It prioritizes high performance, seamless animations, and a premium "dark mode" aesthetic.

### ✨ Key Features

- **🎯 SEO Optimized**: Full Meta tags, Open Graph support, and JSON-LD structured data.
- **📱 PWA Ready**: Installable as a web app on mobile devices via `manifest.json`.
- **🚀 Ultra Fast**: Built with Vite for nearly instantaneous load times.
- **🌍 I18N Ready**: Multi-language support (English/Arabic) with RTL layout compatibility.
- **🎨 Premium UI**: Glassmorphism effects, smooth staggered animations, and responsive layouts.

---

## 🛠️ Tech Stack

| Category       | Technology                   |
| :------------- | :--------------------------- |
| **Frontend**   | React 19, TypeScript         |
| **Styling**    | Tailwind CSS v4, Vanilla CSS |
| **Animations** | Framer Motion                |
| **Routing**    | React Router DOM v7          |
| **Icons**      | Lucide React                 |
| **Build Tool** | Vite                         |

---

## ⚙️ Configuration & Customization

This project is designed to be easily configurable without touching complex code logic.

### 1. Centralized Constants

Edit `src/constants/shared.ts` to update site-wide information:

- **`company`**: Name and branding details.
- **`contact`**: Emails, phones, and addresses.
- **`metadata`**: SEO titles, descriptions, and keywords.
- **`theme`**: Brand color palette (Navy/Cyan/Blue).

### 2. Environment Variables

Local development can be configured via `.env` files.

```bash
cp .env.example .env
```

### 3. SEO & Analytics

- **Page Meta**: Use the `<SEO />` component located in `src/components/SEO.tsx`.
- **Assets**: Favicons and sharing images are managed in the `public/` directory.

---

## 📂 Project Anatomy

```text
src/
├── components/     # Reusable UI building blocks (Navbar, SEO, etc.)
├── pages/          # Full page layouts (Home, Services, Blog)
├── constants/      # Shared static data and configurations
├── locales/        # Translation files (JSON) for i18n
├── assets/         # Static assets (Logos, official imagery)
├── config/         # App-level configs (i18n, etc.)
├── App.tsx         # Main router and layout management
└── main.tsx        # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Optima-Tech-Hub/OpitmaTechHub-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

_The optimized build will be available in the `dist/` directory._

---

## 📈 Performance & Browser Support

- **Optimizations**: Lazy loading, code splitting, and optimized asset delivery.
- **Browsers**: Chrome, Firefox, Safari, and Edge (Latest versions).

---

## 📄 License & Support

&copy; 2026 **Optima Tech Hub**. All rights reserved.

For technical support, contact <contact@optimatech.hub> or visit [optimatechhub.com](https://optimatechhub.com).
