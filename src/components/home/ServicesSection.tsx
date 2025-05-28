import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Compass, Building, GraduationCap } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionTitle 
          title={t('home.services.title')}
          subtitle="Our comprehensive range of services to help you explore Africa"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServiceCard 
            icon={<Compass size={28} />}
            title={t('home.services.visit.title')}
            description={t('home.services.visit.description')}
            link="/visit"
            buttonText={t('common.learnMore')}
          />
          
          <ServiceCard 
            icon={<Building size={28} />}
            title={t('home.services.invest.title')}
            description={t('home.services.invest.description')}
            link="/invest"
            buttonText={t('common.learnMore')}
          />
          
          <ServiceCard 
            icon={<GraduationCap size={28} />}
            title={t('home.services.study.title')}
            description={t('home.services.study.description')}
            link="/study"
            buttonText={t('common.learnMore')}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;