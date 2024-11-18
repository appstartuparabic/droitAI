import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, MessageCircle, Search, FileSearch } from 'lucide-react';

export const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      icon: FileText,
      title: t('app.services.contracts'),
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: t('app.services.advice'),
      color: 'bg-green-500'
    },
    {
      icon: FileSearch,
      title: t('app.services.analysis'),
      color: 'bg-purple-500'
    },
    {
      icon: Search,
      title: t('app.services.research'),
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t('app.services.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};