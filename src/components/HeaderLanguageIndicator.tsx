import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

export const HeaderLanguageIndicator: React.FC = () => {
  const { language } = useLanguage();

  const getLanguageLabel = () => {
    switch (language) {
      case 'en':
        return '🇺🇸 EN';
      case 'ru':
        return '🇷🇺 RU';
      default:
        return 'EN';
    }
  };

  return (
    <Badge variant="secondary" className="mr-4">
      {getLanguageLabel()}
    </Badge>
  );
};
