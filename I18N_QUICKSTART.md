# 🚀 Quick Start: Implementing i18n in Your Components

## Step-by-Step Guide

### 1. Import Required Dependencies

```tsx
import { useTranslation } from "react-i18next";
import { SHARED } from "../constants/shared";
```

### 2. Use the Translation Hook

```tsx
const MyComponent = () => {
  const { t } = useTranslation();

  // Now you can use t() to translate
};
```

### 3. Replace Hardcoded Text

**❌ Before:**

```tsx
<h1>Contact Us</h1>
<p>Get in touch with us</p>
```

**✅ After:**

```tsx
<h1>{t('contact.title')}</h1>
<p>{t('contact.subtitle')}</p>
```

### 4. Replace Hardcoded Values

**❌ Before:**

```tsx
const email = "contact@optimatech.hub";
const phone = "+1 (555) 123-4567";
```

**✅ After:**

```tsx
const email = SHARED.contact.email;
const phone = SHARED.contact.phone;
```

### 5. Structure Content as Arrays

**❌ Before:**

```tsx
<div>
  <div>
    <Mail />
    <a href="mailto:contact@optimatech.hub">contact@optimatech.hub</a>
  </div>
  <div>
    <Phone />
    <span>+1 (555) 123-4567</span>
  </div>
</div>
```

**✅ After:**

```tsx
const CONTACT_METHODS = [
  {
    id: "email",
    icon: <Mail />,
    labelKey: "contact.info.email",
    value: SHARED.contact.email,
    link: `mailto:${SHARED.contact.email}`,
  },
  {
    id: "phone",
    icon: <Phone />,
    labelKey: "contact.info.phone",
    value: SHARED.contact.phone,
    link: null,
  },
];

// In component
{
  CONTACT_METHODS.map((method) => (
    <div key={method.id}>
      {method.icon}
      {method.link ? (
        <a href={method.link}>{method.value}</a>
      ) : (
        <span>{method.value}</span>
      )}
    </div>
  ));
}
```

## Complete Example

```tsx
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { SHARED } from "../constants/shared";

// Content structure (outside component)
const CONTACT_INFO = [
  {
    id: "email",
    icon: <Mail size={20} />,
    labelKey: "contact.info.email",
    value: SHARED.contact.email,
    link: `mailto:${SHARED.contact.email}`,
  },
  {
    id: "phone",
    icon: <Phone size={20} />,
    labelKey: "contact.info.phone",
    value: SHARED.contact.phone,
    link: `tel:${SHARED.contact.phone}`,
  },
  {
    id: "address",
    icon: <MapPin size={20} />,
    labelKey: "contact.info.address",
    value: SHARED.contact.address,
    link: null,
  },
];

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.subtitle")}</p>

      <div>
        {CONTACT_INFO.map((info) => (
          <div key={info.id}>
            {info.icon}
            <h3>{t(info.labelKey)}</h3>
            {info.link ? (
              <a href={info.link}>{info.value}</a>
            ) : (
              <span>{info.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
```

## Adding New Translations

### 1. Add to Arabic Translation File (`src/locales/ar/translation.json`)

```json
{
  "myPage": {
    "title": "عنوان صفحتي",
    "subtitle": "وصف الصفحة",
    "button": "انقر هنا"
  }
}
```

### 2. Add to English Translation File (`src/locales/en/translation.json`)

```json
{
  "myPage": {
    "title": "My Page Title",
    "subtitle": "Page description",
    "button": "Click Here"
  }
}
```

### 3. Use in Component

```tsx
<h1>{t('myPage.title')}</h1>
<p>{t('myPage.subtitle')}</p>
<button>{t('myPage.button')}</button>
```

## Adding New Shared Constants

### 1. Add to `src/constants/shared.ts`

```typescript
export const SHARED = {
  // ... existing constants

  newSection: {
    value1: "Some value",
    value2: "Another value",
  },
};
```

### 2. Use in Component

```tsx
import { SHARED } from "../constants/shared";

<p>{SHARED.newSection.value1}</p>;
```

## Best Practices Checklist

- [ ] Use `t()` for all user-facing text
- [ ] Use `SHARED` for all repeated values
- [ ] Structure content as arrays of objects
- [ ] Use semantic translation keys (e.g., `page.section.element`)
- [ ] Keep presentation logic separate from content
- [ ] Add translations for all supported languages
- [ ] Test in both Arabic (RTL) and English (LTR)

## Common Patterns

### Navigation Links

```tsx
const NAV_LINKS = [
  { labelKey: "nav.home", path: SHARED.paths.home },
  { labelKey: "nav.about", path: SHARED.paths.about },
  { labelKey: "nav.contact", path: SHARED.paths.contact },
];

{
  NAV_LINKS.map((link) => (
    <Link key={link.path} to={link.path}>
      {t(link.labelKey)}
    </Link>
  ));
}
```

### Buttons with Icons

```tsx
<button>
  <Mail size={18} />
  {t("common.contactUs")}
</button>
```

### Lists with Translations

```tsx
const FEATURES = [
  {
    titleKey: "features.feature1.title",
    descKey: "features.feature1.description",
  },
  {
    titleKey: "features.feature2.title",
    descKey: "features.feature2.description",
  },
];

{
  FEATURES.map((feature, index) => (
    <div key={index}>
      <h3>{t(feature.titleKey)}</h3>
      <p>{t(feature.descKey)}</p>
    </div>
  ));
}
```

## Testing Your Implementation

1. **Switch languages** using the LanguageSwitcher
2. **Check RTL layout** in Arabic mode
3. **Verify all text** is translated
4. **Ensure no hardcoded** strings remain
5. **Test all links** and paths work correctly

## Need Help?

- Check `I18N_STRUCTURE.md` for detailed architecture
- See `FooterI18n.tsx` for a complete example
- Review `I18N_IMPLEMENTATION_SUMMARY.md` for overview

---

**Remember**: The goal is to have NO hardcoded text or values in your components. Everything should come from translation files or shared constants!
