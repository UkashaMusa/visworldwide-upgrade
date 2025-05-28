import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="African sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-900/90 to-accent-900/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-neutral-100">
            {t('home.cta.subtitle')}
          </p>
          <Link to="/contact" className="btn bg-white text-accent-700 hover:bg-neutral-100">
            {t('home.cta.button')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;