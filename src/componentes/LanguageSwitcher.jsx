// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-2 flex gap-2 border border-gray-200">
        <Globe className="w-5 h-5 text-blue-600" />
        <button
          onClick={() => i18n.changeLanguage('ca')}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
            i18n.language === 'ca'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          CAT
        </button>
        <button
          onClick={() => i18n.changeLanguage('es')}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
            i18n.language === 'es'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          ESP
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;