import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('app.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-12 max-w-3xl mx-auto">
            {t('app.hero.subtitle')}
          </p>
          <button className={`inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-100 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
            {t('app.hero.cta')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};