# Internationalization (i18n) & Content Management Structure

## 📋 Overview

This project uses a scalable, maintainable structure for content and translations that supports:

- ✅ Multiple languages (Arabic & English)
- ✅ RTL (Right-to-Left) support
- ✅ Future database integration
- ✅ Centralized content management
- ✅ Type-safe translation keys

## 🏗️ Architecture

### 1. **Shared Constants** (`src/constants/shared.ts`)

All repeated/static values are centralized here:

```typescript
export const SHARED = {
  company: {
    name: "Optima",
    nameAccent: "Tech",
    nameSuffix: "Hub",
  },
  contact: {
    email: "contact@optimatech.hub",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Innovation City, IC 12345",
  },
  social: {
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  paths: {
    home: "/",
    about: "/about",
    services: "/services",
    // ... all routes
  },
};
```

**Benefits:**

- Single source of truth for all static values
- Easy to update (change once, reflects everywhere)
- Ready for database integration
- No hardcoded values in components

### 2. **Translation Files** (`src/locales/`)

```
src/locales/
├── ar/
│   └── translation.json    # Arabic translations
└── en/
    └── translation.json    # English translations
```

**Structure:**

```json
{
  "common": {
    "loading": "جاري التحميل...",
    "contactUs": "اتصل بنا"
  },
  "nav": {
    "home": "الرئيسية",
    "about": "من نحن"
  },
  "footer": {
    "company": {
      "title": "الشركة",
      "description": "..."
    }
  }
}
```

### 3. **i18n Configuration** (`src/config/i18n.ts`)

Configures react-i18next with:

- Language detection (localStorage, browser, HTML tag)
- Default language: Arabic
- Fallback language: Arabic
- Automatic RTL/LTR direction switching

### 4. **Content Structure Pattern**

All page content follows this pattern:

```typescript
// ❌ OLD WAY (Hardcoded)
const email = "contact@example.com";
const title = "Contact Us";

// ✅ NEW WAY (Structured)
import { SHARED } from '../constants/shared';

const contactSections = [
  {
    id: "email",
    titleKey: "contact.info.email",  // Translation key
    value: SHARED.contact.email,      // Shared constant
    icon: <Mail />,
  },
  {
    id: "phone",
    titleKey: "contact.info.phone",
    value: SHARED.contact.phone,
    icon: <Phone />,
  },
];

// In component
const { t } = useTranslation();
contactSections.map(section => (
  <div key={section.id}>
    <h3>{t(section.titleKey)}</h3>
    <p>{section.value}</p>
  </div>
));
```

## 🚀 Usage

### In Components

```tsx
import { useTranslation } from "react-i18next";
import { SHARED } from "../constants/shared";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Use translation keys */}
      <h1>{t("nav.home")}</h1>

      {/* Use shared constants */}
      <a href={`mailto:${SHARED.contact.email}`}>{SHARED.contact.email}</a>

      {/* Combine both */}
      <p>{t("footer.company.description")}</p>
    </div>
  );
};
```

### Language Switcher

```tsx
import LanguageSwitcher from "./components/LanguageSwitcher";

// Add to navbar or anywhere
<LanguageSwitcher />;
```

### RTL Support

RTL is automatically handled:

- Arabic → `dir="rtl"`
- English → `dir="ltr"`

The `LanguageSwitcher` component updates `document.documentElement.dir` automatically.

## 📁 File Structure

```
src/
├── components/
│   ├── LanguageSwitcher.tsx      # Language toggle component
│   └── ...
├── config/
│   └── i18n.ts                   # i18n configuration
├── constants/
│   └── shared.ts                 # Shared static values
├── locales/
│   ├── ar/
│   │   └── translation.json      # Arabic translations
│   └── en/
│       └── translation.json      # English translations
└── main.tsx                      # i18n initialization
```

## 🗄️ Database Integration (Future)

The structure is designed for easy database integration:

### Current Structure

```typescript
// constants/shared.ts
export const SHARED = {
    contact: {
        email: 'contact@optimatech.hub',
    }
};

// locales/ar/translation.json
{
  "contact": {
    "title": "اتصل بنا"
  }
}
```

### Future Database Structure

```typescript
// API Response
{
  "shared": {
    "contact": {
      "email": "contact@optimatech.hub"
    }
  },
  "translations": {
    "ar": {
      "contact": {
        "title": "اتصل بنا"
      }
    },
    "en": {
      "contact": {
        "title": "Contact Us"
      }
    }
  }
}
```

### Migration Steps

1. Create API endpoints for shared constants and translations
2. Replace static imports with API calls
3. Cache responses in localStorage
4. Use React Query or SWR for data fetching
5. Keep the same structure for components (no changes needed!)

## 🌐 Adding New Languages

1. Create new translation file:

```bash
mkdir src/locales/fr
touch src/locales/fr/translation.json
```

2. Add translations following the same structure

3. Update i18n config:

```typescript
// config/i18n.ts
import translationFR from "../locales/fr/translation.json";

const resources = {
  ar: { translation: translationAR },
  en: { translation: translationEN },
  fr: { translation: translationFR }, // Add new language
};
```

4. Update LanguageSwitcher component to include new language

## ✅ Best Practices

### DO:

✅ Use translation keys: `t('nav.home')`
✅ Use shared constants: `SHARED.contact.email`
✅ Structure content as arrays of objects
✅ Keep presentation logic separate from content
✅ Use semantic translation keys: `footer.company.title`

### DON'T:

❌ Hardcode text: `<h1>Contact Us</h1>`
❌ Hardcode values: `email: "contact@example.com"`
❌ Mix content with presentation
❌ Use generic keys: `text1`, `label2`

## 🔧 Maintenance

### Updating Content

1. **Static values** (email, phone, etc.): Update `constants/shared.ts`
2. **Translations**: Update `locales/{lang}/translation.json`
3. **Both**: Components automatically reflect changes

### Adding New Content

1. Add to shared constants if it's a repeated value
2. Add translation keys for all supported languages
3. Use in components with `t()` and `SHARED`

## 📊 Current Translation Coverage

- ✅ Navigation
- ✅ Footer (all sections)
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Cookie Policy
- ✅ Contact Page
- ✅ Common UI elements

## 🎯 Next Steps

1. Refactor existing components to use i18n
2. Add LanguageSwitcher to Navbar
3. Create content management admin panel
4. Set up database integration
5. Add more languages as needed

---

**Note**: This structure ensures that your application is:

- 🌍 Fully multilingual
- 📱 RTL-ready
- 🗄️ Database-ready
- 🔧 Easy to maintain
- 📈 Scalable for growth
