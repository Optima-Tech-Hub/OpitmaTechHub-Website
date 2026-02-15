# Language Detection & Persistence - How It Works

## 🌍 Smart Language Detection

Your website now intelligently detects and remembers the user's language preference using a multi-layered approach.

## 🔍 Detection Order

The system checks for language preference in this order:

### 1. **localStorage** (First Priority)

- **What**: Saved language preference from previous visits
- **When**: User explicitly changed language using the switcher
- **Storage Key**: `i18nextLng`
- **Example**: User selected "English" → stored as `"en"` in localStorage

### 2. **Browser Language** (Second Priority)

- **What**: User's browser/system language settings
- **When**: First-time visitor with no saved preference
- **Detection**: Reads `navigator.language` (e.g., "en-US", "ar-SA")
- **Conversion**: Automatically converts to supported language codes ("en" or "ar")

### 3. **HTML Tag** (Third Priority)

- **What**: Language attribute on the HTML document
- **When**: Set programmatically or by server
- **Fallback**: If no other detection works

### 4. **Fallback Language**

- **Default**: English ("en")
- **When**: If all detection methods fail or language not supported

## 💾 How Persistence Works

### When User Changes Language:

1. **User clicks language switcher**

   ```
   User clicks "EN" button
   ```

2. **i18n changes language**

   ```javascript
   i18n.changeLanguage("en");
   ```

3. **Automatically saved to localStorage**

   ```javascript
   localStorage.setItem("i18nextLng", "en");
   ```

4. **Document updates**
   ```javascript
   document.documentElement.lang = "en";
   document.documentElement.dir = "ltr";
   ```

### When User Returns:

1. **Page loads**
2. **i18n checks localStorage** → Finds `"en"`
3. **Sets language to English** immediately
4. **No flash of wrong language** ✅

## 🌐 Browser Language Detection

### How It Works:

```javascript
// Browser reports: "ar-SA" (Arabic - Saudi Arabia)
convertDetectedLanguage: (lng) => {
  const languageCode = lng.split("-")[0]; // "ar"
  return ["ar", "en"].includes(languageCode) ? languageCode : "en";
};
// Returns: "ar" ✅
```

### Examples:

| Browser Language | Detected As | Result             |
| ---------------- | ----------- | ------------------ |
| `en-US`          | `en`        | English            |
| `en-GB`          | `en`        | English            |
| `ar-SA`          | `ar`        | Arabic             |
| `ar-EG`          | `ar`        | Arabic             |
| `fr-FR`          | `fr` → `en` | English (fallback) |
| `es-ES`          | `es` → `en` | English (fallback) |

## 🔧 Configuration Details

### Supported Languages:

```javascript
supportedLngs: ["ar", "en"];
```

### Detection Configuration:

```javascript
detection: {
  order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
  lookupLocalStorage: "i18nextLng",
  caches: ["localStorage"],
  convertDetectedLanguage: (lng) => {
    const languageCode = lng.split("-")[0];
    return ["ar", "en"].includes(languageCode) ? languageCode : "en";
  }
}
```

## 📱 User Experience Flow

### First-Time Visitor:

1. **User opens website**
2. **System checks localStorage** → Empty
3. **System checks browser language** → "ar-SA"
4. **Converts to "ar"**
5. **Website loads in Arabic** 🇸🇦

### Returning Visitor (Changed to English):

1. **User opens website**
2. **System checks localStorage** → "en"
3. **Website loads in English** 🇬🇧
4. **No need to change again!**

### User Changes Language:

1. **User clicks language switcher**
2. **Language changes instantly**
3. **Preference saved automatically**
4. **Next visit remembers choice**

## 🎯 Benefits

✅ **Persistent**: Language choice survives page refreshes and browser restarts
✅ **Smart**: Detects browser language for first-time visitors
✅ **Fast**: No flash of wrong language
✅ **User-Friendly**: Remembers explicit user choices
✅ **Fallback**: Always has a working default
✅ **International**: Handles regional variants (en-US, ar-SA, etc.)

## 🔍 Debugging

To check what language is detected:

### In Browser Console:

```javascript
// Check current language
i18n.language;

// Check localStorage
localStorage.getItem("i18nextLng");

// Check browser language
navigator.language;

// Force change language
i18n.changeLanguage("ar");
```

### Clear Saved Preference:

```javascript
localStorage.removeItem("i18nextLng");
// Refresh page to see browser language detection
```

## 🌟 Best Practices

1. **Don't override user choice**: Once user selects a language, always respect it
2. **Detect browser language**: Good UX for first-time visitors
3. **Provide easy switching**: Language switcher always visible
4. **Persist preference**: Save to localStorage automatically
5. **Handle edge cases**: Fallback for unsupported languages

---

**Your website now provides a seamless multilingual experience!** 🎉
