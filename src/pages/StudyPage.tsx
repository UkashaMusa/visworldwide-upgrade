import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { GraduationCap, BookOpen, Briefcase, Book, Languages, FileCheck, Plane, Home, Globe, Users } from 'lucide-react';

const StudyPage = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: 'undergraduate',
      icon: <GraduationCap size={28} />,
      title: t('study.programs.undergraduate'),
      description: "Bachelor&#39;s degree programs across various disciplines at leading African universities.",
    },
    {
      id: 'graduate',
      icon: <BookOpen size={28} />,
      title: t('study.programs.graduate'),
      description: "Master's and doctoral programs focused on African development and global perspectives.",
    },
    {
      id: 'research',
      icon: <Briefcase size={28} />,
      title: t('study.programs.research'),
      description: 'Research opportunities in fields ranging from biodiversity to urban development.',
    },
    {
      id: 'vocational',
      icon: <Book size={28} />,
      title: t('study.programs.vocational'),
      description: 'Practical skills training programs in various industries with high employment potential.',
    },
    {
      id: 'language',
      icon: <Languages size={28} />,
      title: t('study.programs.language'),
      description: 'Immersive language programs in English, French, Arabic, Swahili, and other African languages.',
    },
  ];

  const services = [
    {
      id: 'application',
      icon: <FileCheck size={40} />,
      title: t('study.services.application'),
      description: 'We help you select the right universities and programs, prepare your application documents, and submit them according to deadlines.',
    },
    {
      id: 'visa',
      icon: <Plane size={40} />,
      title: t('study.services.visa'),
      description: 'Our team guides you through the visa application process, preparing the necessary documentation and advising on interview preparation.',
    },
    {
      id: 'accommodation',
      icon: <Home size={40} />,
      title: t('study.services.accommodation'),
      description: 'We assist you in finding suitable accommodation options, whether on-campus housing or private apartments near your institution.',
    },
    {
      id: 'orientation',
      icon: <Globe size={40} />,
      title: t('study.services.orientation'),
      description: 'Pre-departure and on-arrival orientation to help you adapt to the local culture, customs, and academic environment.',
    },
    {
      id: 'support',
      icon: <Users size={40} />,
      title: t('study.services.support'),
      description: 'Ongoing support throughout your study program, including academic advice, health services information, and community connections.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Students in Africa"
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
              {t('study.hero.title')}
            </h1>
            <p className="text-xl mb-8 text-neutral-100">
              {t('study.hero.subtitle')}
            </p>
            <button className="btn btn-primary">
              {t('common.apply')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Study Programs */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title={t('study.programs.title')} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <motion.div 
                key={program.id}
                className="bg-white rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-neutral-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionTitle 
            title={t('study.services.title')}
            subtitle="Comprehensive support for your educational journey in Africa"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-xl shadow-md overflow-hidden p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle 
            title="Partner Universities"
            subtitle="We work with top institutions across Africa to provide quality education"
          />
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="w-40 h-24 bg-neutral-100 rounded-lg flex items-center justify-center p-4">
              <div className="text-center font-bold">University of Cape Town</div>
            </div>
            <div className="w-40 h-24 bg-neutral-100 rounded-lg flex items-center justify-center p-4">
              <div className="text-center font-bold">University of Nairobi</div>
            </div>
            <div className="w-40 h-24 bg-neutral-100 rounded-lg flex items-center justify-center p-4">
              <div className="text-center font-bold">Cairo University</div>
            </div>
            <div className="w-40 h-24 bg-neutral-100 rounded-lg flex items-center justify-center p-4">
              <div className="text-center font-bold">University of Ghana</div>
            </div>
            <div className="w-40 h-24 bg-neutral-100 rounded-lg flex items-center justify-center p-4">
              <div className="text-center font-bold">University of Lagos</div>
            </div>
            <div className="w-40 h-24 bg-neutral-100 rounded-lg flex items-center justify-center p-4">
              <div className="text-center font-bold">Makerere University</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyPage;