import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import PackageCard from '../components/common/PackageCard';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisitPage = () => {
  const { t } = useTranslation();

  const packages = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Serengeti Wildlife Safari',
      location: 'Tanzania',
      duration: 'Embark on an unforgettable journey through Tanzania\'Serengeti National Park. Witness the Big Five, experience the Great Migration, and enjoy breathtaking landscapes with expert guides and luxury safari camps.',
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
      duration: 'Discover the charm of South African\'s Mother city. Explore Table Mountain, the V&A waterfront, and vibrant local culture with guided tours and scenic coastal drives. ',
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
      duration: 'Step into the heart of Morocco with this rich cultural tour. Wander bustling souks, visit historic palaces, and experience authentic Moroccan cuisine and traditions.',
      groupSize: '2-10 People',
      price: '$1,299',
      link: '/visit/marrakech',
      featured: false,
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Victoria Falls Adventure',
      location: 'Zimbabwe & Zambia',
      duration: 'Experience the awe of victoria Falls on the border of Zimbabwe and Zambia. Enjoy guided nature walks, river cruises, and thrilling activities near the mighty falls. ',
      groupSize: '2-10 People',
      price: '$1,799',
      link: '/visit/victoria-falls',
      featured: false,
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Zanzibar Beach Getaway',
      location: 'Tanzania',
      duration: 'Rela on Tanzania\'s exotic island paradise. Soak up the sun on white-sand beaches,swim in crystal waters, and explore Stone Town\'s unique culture and history.',
      groupSize: '2-6 People',
      price: '$1,399',
      link: '/visit/zanzibar',
      featured: false,
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Egyptian Pyramids & Nile Cruise',
      location: 'Egypt',
      duration: 'Uncover ancient wonders in Egypt. Visit the Great Pyramids of Giza, then sail the Nile River in style, exploring temples and treasures of the Pharaohs along the way.',
      groupSize: '2-16 People',
      price: '$2,199',
      link: '/visit/egypt',
      featured: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Safari in Africa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/50" />
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
              {t('visit.hero.title')}
            </h1>
            <p className="text-xl mb-8 text-neutral-100">
              {t('visit.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title={t('visit.packages.title')} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-primary-50 rounded-xl p-8 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('visit.packages.safari.title')}</h3>
              <p className="text-neutral-600">{t('visit.packages.safari.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-50 rounded-xl p-8 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('visit.packages.cultural.title')}</h3>
              <p className="text-neutral-600">{t('visit.packages.cultural.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-accent-50 rounded-xl p-8 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('visit.packages.city.title')}</h3>
              <p className="text-neutral-600">{t('visit.packages.city.description')}</p>
            </motion.div>
          </div>
          <Link to='/contact'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {packages.map((pkg) => (
              <PackageCard 
                key={pkg.id}
                image={pkg.image}
                title={pkg.title}
                location={pkg.location}
                duration={pkg.duration}
                groupSize={pkg.groupSize}
                price={pkg.price}
                link={pkg.link}
                featured={pkg.featured}
              />
            ))}       
          </div>
           </Link>
        </div>
      </section>
    </>
  );
};

export default VisitPage;