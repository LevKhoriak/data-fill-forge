# Language Switching Implementation

This document describes the language switching functionality implemented in the Data Fill Forge application.

## Overview

The application now supports switching between English (EN) and Russian (RU) languages. The language preference is persisted in localStorage and automatically applied across all components.

## Features

### 1. Language Context
- **File**: `src/contexts/LanguageContext.tsx`
- Provides language state management throughout the application
- Automatically loads saved language preference from localStorage
- Updates document language attribute for accessibility

### 2. Translation System
- **File**: `src/lib/i18n.ts`
- Centralized translation management
- Type-safe translation keys
- Support for nested translation structures
- Fallback to key if translation not found

### 3. Language Switch Components

#### Sidebar Language Switch
- **File**: `src/components/LanguageSwitch.tsx`
- Dropdown menu with language options
- Shows when sidebar is expanded
- Displays flag emojis and language names

#### Collapsed Sidebar Language Toggle
- Integrated into `AppSidebar.tsx`
- Shows when sidebar is collapsed
- Uses dropdown menu with right-side positioning

#### Header Language Indicator
- **File**: `src/components/HeaderLanguageIndicator.tsx`
- Shows current language in the header
- Displays flag emoji and language code
- Always visible regardless of sidebar state

### 4. Demo Page
- **File**: `src/components/LanguageDemo.tsx`
- Route: `/demo`
- Showcases various UI elements with translations
- Demonstrates the language switching functionality

## Usage

### Switching Languages

1. **Expanded Sidebar**: Click the language icon (🌐) in the top-right of the sidebar
2. **Collapsed Sidebar**: Click the language icon at the bottom of the collapsed sidebar
3. **Language Options**: Select either "🇺🇸 English" or "🇷🇺 Русский"

### Adding New Translations

1. **Update Interface**: Add new keys to the `Translations` interface in `src/lib/i18n.ts`
2. **Add English**: Add English text to the `en` translations object
3. **Add Russian**: Add Russian text to the `ru` translations object
4. **Use in Components**: Use `t('key.path')` to access translations

### Example Translation Structure

```typescript
// In i18n.ts
export interface Translations {
  sidebar: {
    title: string;
    workflow: string;
    // ... more keys
  };
  common: {
    language: string;
    save: string;
    // ... more keys
  };
}

// In components
const { t } = useLanguage();
const title = t('sidebar.title');
const saveButton = t('common.save');
```

## Supported Languages

| Language | Code | Flag | Status |
|----------|------|------|--------|
| English  | `en` | 🇺🇸 | ✅ Complete |
| Russian  | `ru` | 🇷🇺 | ✅ Complete |

## Technical Details

### Context Provider
The `LanguageProvider` wraps the entire application in `App.tsx`, making the language context available to all components.

### Persistence
Language preference is automatically saved to localStorage and restored on application reload.

### Performance
- Translations are loaded once and cached
- No additional network requests for language switching
- Minimal re-renders during language changes

### Accessibility
- Document language attribute is automatically updated
- Screen readers will announce content in the correct language
- RTL language support can be easily added in the future

## Future Enhancements

1. **More Languages**: Add support for additional languages
2. **RTL Support**: Implement right-to-left language support
3. **Dynamic Loading**: Load translations on-demand for better performance
4. **Pluralization**: Add support for plural forms
5. **Number/Date Formatting**: Localize number and date formats

## Troubleshooting

### Common Issues

1. **Translation Not Found**: Check if the key exists in the `Translations` interface
2. **Type Errors**: Ensure all translation keys are properly typed
3. **Missing Context**: Verify the component is wrapped in `LanguageProvider`

### Debug Mode

To debug translation issues, check the browser console for any missing translation keys. The system will log the key name when a translation is not found.

## Files Modified

- `src/contexts/LanguageContext.tsx` - New language context
- `src/lib/i18n.ts` - Translation definitions
- `src/components/LanguageSwitch.tsx` - Language switch component
- `src/components/HeaderLanguageIndicator.tsx` - Header language indicator
- `src/components/AppSidebar.tsx` - Updated sidebar with language support
- `src/components/LanguageDemo.tsx` - Demo component
- `src/App.tsx` - Added language provider and demo route
- `LANGUAGE_SWITCHING.md` - This documentation file
