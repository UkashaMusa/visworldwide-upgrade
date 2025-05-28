import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import PackageCard from '../common/PackageCard';

const FeaturedDestinations = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Serengeti Wildlife Safari',
      location: 'Tanzania',
      duration: '7 Days',
      groupSize: '2-12 People',
      price: '$1,999',
      link: '/visit/serengeti-safari',
      featured: true,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Cape Town City Experience',
      location: 'South Africa',
      duration: '5 Days',
      groupSize: '2-8 People',
      price: '$1,499',
      link: '/visit/cape-town',
      featured: false,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Marrakech Cultural Tour',
      location: 'Morocco',
      duration: '6 Days',
      groupSize: '2-10 People',
      price: '$1,299',
      link: '/visit/marrakech',
      featured: false,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle 
          title={t('home.featured.title')}
          subtitle={t('home.featured.subtitle')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <PackageCard 
              key={destination.id}
              image={destination.image}
              title={destination.title}
              location={destination.location}
              duration={destination.duration}
              groupSize={destination.groupSize}
              price={destination.price}
              link={destination.link}
              featured={destination.featured}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/visit" className="btn btn-outline">
            {t('common.viewAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;