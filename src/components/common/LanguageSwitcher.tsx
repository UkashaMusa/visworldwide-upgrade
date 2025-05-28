import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  isDark?: boolean;
  direction?: 'horizontal' | 'vertical';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  isDark = false, 
  direction = 'horizontal' 
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className={`flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-opacity-10
        ${isDark ? 'hover:bg-white text-white' : 'hover:bg-neutral-200 text-neutral-800'}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={18} />
        <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown size={16} className={isOpen ? 'transform rotate-180' : ''} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${direction === 'horizontal' ? 'right-0 mt-2 w-36' : 'w-full mt-1'} 
            bg-white rounded-lg shadow-lg py-1 z-50`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                className={`${
                  direction === 'horizontal' ? 'px-4 py-2' : 'py-3 px-2'
                } w-full text-left flex items-center justify-between
                ${language.code === currentLanguage.code ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}`}
                onClick={() => changeLanguage(language.code)}
              >
                <span>{language.name}</span>
                {language.code === currentLanguage.code && <Check size={16} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;