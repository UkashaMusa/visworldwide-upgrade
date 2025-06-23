import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Partnaship from './Partnaship';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Your Gateway to the World</title>
        <meta name="description" content="Visit, Invest, Study — Explore Opportunities Across Continents." />
      </Helmet>

      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServicesSection />
        <FeaturedDestinations />
        <TestimonialsSection />
        <Partnaship />
        <CtaSection />
      </motion.div>
    </>
  );
};

export default HomePage;