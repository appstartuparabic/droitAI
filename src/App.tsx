import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/config';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className={`min-h-screen ${i18n.language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;