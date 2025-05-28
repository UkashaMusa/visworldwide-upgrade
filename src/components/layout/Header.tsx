import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Logo from '../common/Logo';

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <NavLink to="/" className="z-50">
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : scrolled ? 'text-neutral-800' : 'text-white'
              }`
            }
          >
            {t('nav.home')}
          </NavLink>
          <NavLink 
            to="/visit" 
            className={({ isActive }) => 
              `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : scrolled ? 'text-neutral-800' : 'text-white'
              }`
            }
          >
            {t('nav.visit')}
          </NavLink>
          <NavLink 
            to="/invest" 
            className={({ isActive }) => 
              `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : scrolled ? 'text-neutral-800' : 'text-white'
              }`
            }
          >
            {t('nav.invest')}
          </NavLink>
          <NavLink 
            to="/study" 
            className={({ isActive }) => 
              `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : scrolled ? 'text-neutral-800' : 'text-white'
              }`
            }
          >
            {t('nav.study')}
          </NavLink>
           
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : scrolled ? 'text-neutral-800' : 'text-white'
              }`
            }
          >
            {t('nav.about')}
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : scrolled ? 'text-neutral-800' : 'text-white'
              }`
            }
          >
            {t('nav.contact')}
          </NavLink>
          
          <div className="relative">
            <LanguageSwitcher isDark={!scrolled} />
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 z-50 text-neutral-800"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6"
          >
            <nav className="flex flex-col space-y-6 text-lg">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-primary-600' : 'text-neutral-800'}`
                }
                onClick={closeMenu}
              >
                {t('nav.home')}
              </NavLink>
              <NavLink 
                to="/visit" 
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-primary-600' : 'text-neutral-800'}`
                }
                onClick={closeMenu}
              >
                {t('nav.visit')}
              </NavLink>
              <NavLink 
                to="/invest" 
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-primary-600' : 'text-neutral-800'}`
                }
                onClick={closeMenu}
              >
                {t('nav.invest')}
              </NavLink>
              <NavLink 
                to="/study" 
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-primary-600' : 'text-neutral-800'}`
                }
                onClick={closeMenu}
              >
                {t('nav.study')}
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-primary-600' : 'text-neutral-800'}`
                }
                onClick={closeMenu}
              >
                {t('nav.about')}
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-primary-600' : 'text-neutral-800'}`
                }
                onClick={closeMenu}
              >
                {t('nav.contact')}
              </NavLink>
              
              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe size={20} className="text-primary-600" />
                  <span className="font-medium">{t('common.languageName')}</span>
                </div>
                <LanguageSwitcher isDark={true} direction="vertical" />
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;