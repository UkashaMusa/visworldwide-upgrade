import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4577810/pexels-photo-4577810.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="African landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 text-white">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl mb-8 text-neutral-100">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/visit" className="btn btn-primary">
              {t('common.book')}
            </Link>
            <Link to="/invest" className="btn bg-white text-primary-600 hover:bg-neutral-100">
              {t('common.start')}
            </Link>
            <Link to="/study" className="btn border-2 border-white text-white hover:bg-white/10">
              {t('common.apply')}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute hidden  bottom-10 left-1/2 transform -translate-x-1/2 text-white md:flex flex-col items-center"
      >
        <span className="mb-2 text-sm font-medium">Scroll Down</span>
        <ArrowRight size={20} className="transform rotate-90" />
      </motion.div>
    </section>
  );
};

export default HeroSection;