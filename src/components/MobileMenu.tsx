import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-indigo-900 shadow-lg py-4 px-4">
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-indigo-200 py-2">{t('app.nav.home')}</a>
            <a href="#" className="hover:text-indigo-200 py-2">{t('app.nav.services')}</a>
            <a href="#" className="hover:text-indigo-200 py-2">{t('app.nav.documents')}</a>
            <a href="#" className="hover:text-indigo-200 py-2">{t('app.nav.contact')}</a>
          </div>
        </div>
      )}
    </div>
  );
};