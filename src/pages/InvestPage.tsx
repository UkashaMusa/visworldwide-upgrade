import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { Building, Leaf, Cpu, Plane, Factory, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestPage = () => {
  const { t } = useTranslation();

  const sectors = [


    {
      id: 'Market Study',
      icon: <Factory size={36} />,
      title: 'Market Study' ,//t('invest.sectors.manufacturing')
      color: 'bg-red-100 text-red-700',
      description: 'Analyze market trends and consumer behavior to identify business opportunities across industries.',
    },
     {
      id: 'Products Registration',
      icon: <svg xmlns="http://www.w3.org/2000/svg\" width="36\" height="36\" viewBox="0 0 24 24\" fill="none\" stroke="currentColor\" strokeWidth="2\" strokeLinecap="round\" strokeLinejoin="round\" className="lucide"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>,
      title: 'Products Registration', //t('invest.sectors.energy')
      color: 'bg-yellow-100 text-yellow-700',
      description: 'Get professional assistance in registering your products for legal compliance and market entry.',
    },

     {
      id: 'Import of Products',
      icon: <Cpu size={36} />,
      title: 'Import of Products',// t('invest.sectors.tech')
      color: 'bg-blue-100 text-blue-700',
      description: "Facilitate smooth and efficient importation of products into the continent’s growing markets.",
    },
    {
      id: 'products marketing and distributions',
      icon: <Leaf size={36} />,
      title: 'Product Marketing & Distributions' ,//t('invest.sectors.agriculture')
      color: 'bg-green-100 text-green-700',
      description: "Promote and distribute your products effectively across diverse African markets.",
    },
   
   
    // {
    //   id: 'tourism',
    //   icon: <Plane size={36} />,
    //   title: t('invest.sectors.tourism'),
    //   color: 'bg-purple-100 text-purple-700',
    //   description: "Africa's diverse landscapes, wildlife, and cultural heritage create opportunities in hospitality, eco-tourism, and adventure travel.",
    // },
    
    
  ];

  const processSteps = [
    {
      id: 1,
      title: t('invest.process.consultation'),
      description: 'We begin with a comprehensive consultation to understand your investment goals and requirements.',
    },
    {
      id: 2,
      title: t('invest.process.research'),
      description: 'Our team conducts thorough market research to identify viable opportunities that align with your objectives.',
    },
    {
      id: 3,
      title: t('invest.process.planning'),
      description: 'We develop a strategic plan outlining the steps, requirements, and timeline for your investment.',
    },
    {
      id: 4,
      title: t('invest.process.execution'),
      description: 'Our experts guide you through the execution phase, handling legal, regulatory, and operational aspects.',
    },
    {
      id: 5,
      title: t('invest.process.support'),
      description: 'We provide ongoing support to ensure your investment thrives and adapts to market changes.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business meeting in Africa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900/60" />
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
              {t('invest.hero.title')}
            </h1>
            <p className="text-xl mb-8 text-neutral-100">
              {t('invest.hero.subtitle')}
            </p>
            <Link to='/contact'>
            <button className="btn btn-primary">
              {t('common.start')}
            </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Investment Sectors */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title={t('invest.sectors.title')} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <motion.div 
                key={sector.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${sector.color} rounded-full flex items-center justify-center mb-4`}>
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{sector.title}</h3>
                  <p className="text-neutral-600 mb-4">{sector.description}</p>
                   
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionTitle 
            title={t('invest.process.title')}
            subtitle="Our systematic approach to facilitating your investment in Africa"
          />
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="flex mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                    {step.id}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="h-full w-0.5 bg-primary-600 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle 
            title="Success Stories"
            subtitle="See how we've helped businesses thrive in Africa"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Agricultural investment" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Farm Products Expansion</h3>
                <p className="text-neutral-600 mb-4">
                  We helped a Peruvian-based company specializing in animal vitamins and farm products establish operations in multiple African countries, creating a sustainable supply chain and local employment.
                </p>
                  
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Tech investment" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">EdTech Platform Launch</h3>
                <p className="text-neutral-600 mb-4">
                  We facilitated the African expansion of a leading educational technology company, helping them navigate regulatory requirements and establish partnerships with local institutions.
                </p>
                 
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestPage;