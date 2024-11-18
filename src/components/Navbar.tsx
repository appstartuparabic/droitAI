import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Scale } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-indigo-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8" />
            <span className="text-xl font-bold">{t('app.title')}</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-indigo-200 transition-colors">{t('app.nav.home')}</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">{t('app.nav.services')}</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">{t('app.nav.documents')}</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">{t('app.nav.contact')}</a>
            <LanguageSwitcher />
          </div>

          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>
    </nav>
  );
};