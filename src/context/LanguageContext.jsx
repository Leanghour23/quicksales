import { useEffect, useState } from 'react';
import LanguageContext from './languageContext.js';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('qs-language');

    if (savedLanguage === 'kh') {
      return 'kh';
    }

    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('qs-language', language);
  }, [language]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('qs-language');

    if (savedLanguage === 'kh') {
      document.body.classList.add('font-battambang');
    } else {
      document.body.classList.remove('font-battambang');
    }
  }, []);

  const changeLanguage = (lang) => {
    if (lang === 'kh') {
      document.body.classList.add('font-battambang');
      setLanguage('kh');
    } else {
      document.body.classList.remove('font-battambang');
      setLanguage('en');
    }
  };

  const toggleLanguage = () => {
    if (language === 'en') {
      changeLanguage('kh');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, changeLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
