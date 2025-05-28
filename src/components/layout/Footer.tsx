import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Logo dark />
            <p className="mt-4 text-neutral-300 max-w-xs">
              Your trusted partner for exploring opportunities across Africa through travel, 
              investment, and education.
            </p>
            <div className="flex items-center mt-6 space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/visit" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.visit')}
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.invest')}
                </Link>
              </li>
              <li>
                <Link to="/study" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.study')}
                </Link>
              </li>
               
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">KG 549 Street Kigali, Rwanda</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="tel:+254123456789" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  +250 791 434 915
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@visafrica.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  info@visworldwide.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <LanguageSwitcher isDark={false} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800 text-neutral-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {currentYear} VisWorldwide. {t('footer.rights')}
          </p>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Link to="#" className="hover:text-primary-400 transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="#" className="hover:text-primary-400 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="#" className="hover:text-primary-400 transition-colors">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;