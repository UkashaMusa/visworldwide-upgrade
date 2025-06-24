import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { Check, Users, Target, Globe } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Anass Aboubakar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Anass has over 15+ years of experience in international business and tourism across Africa & America.',
    },
    {
      name: 'Musa Ukasha',
      role: 'Investment Director',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Ukasha specializes in facilitating investments in emerging markets with a focus on sustainable development.',
    },
     {
      name: ' Firmin Ngendahimana',
      role: 'Business & Import Director',
      image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Muhammad has helped hundreds of students navigate international education opportunities.',
    },

    {
      name: `Muhammad Yakumut`,
      role: 'Education & Tourism Consultant',
      image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Muhammad has helped hundreds of students navigate international education opportunities.',
    },
    
    //   {
    //   name: ' Henriette Niyonkuru',
    //   role: 'Products',
    //   image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   bio: 'Muhammad has helped hundreds of students navigate international education opportunities.',
    // },
   
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-300 via-blue-300 to-indigo-300 pt-32 pb-16 bg-neutral-50">
        <div className="container ">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">About VisAfrica</h1>
            <p className="text-xl text-neutral-600">
              Your trusted partner for exploring opportunities across Africa through travel, investment, and education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                VisAfrica was founded in 2015 with a vision to connect the world to the vast opportunities that Africa offers. What began as a small travel agency has evolved into a comprehensive service provider facilitating travel, investment, and education across the continent.

                <br/>
                
                <i>Today, we operate in over 15 African countries and have helped thousands of clients discover new experiences, establish successful businesses, and pursue quality education in Africa.
  </i>  
              </p>
              <p className="text-neutral-600 mb-4">
                <h3>Vision</h3>
                We envision to be your VISA to enable you Visit, Invest & Study in Africa while saving resources
              </p>
              <p className="text-neutral-600">
                <h3>Mission</h3>
                Our primary mission is to make sure you travel study and do business worry-free. <br/>
                  </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="VisAfrica team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <SectionTitle 
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-neutral-600">
                We showcase the real Africa, beyond stereotypes, highlighting the continent's diversity, innovation, and opportunities.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-neutral-600">
                We are committed to providing the highest quality of service in every aspect of our operations, from travel experiences to investment guidance.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-neutral-600">
                We promote responsible tourism, ethical investments, and educational opportunities that contribute positively to local communities and environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="The passionate professionals behind VisAfrica"
          />
          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* <div className="h-64 overflow-hidden">
                  {<img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div> */} 
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionTitle 
            title="Why Choose VisAfrica"
            subtitle="What sets us apart from other service providers"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Local Expertise & Global Perspective</h3>
                  <p className="text-neutral-600">
                    Our team combines deep local knowledge with international experience to provide services that bridge cultural and business gaps effectively.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Services</h3>
                  <p className="text-neutral-600">
                    From travel logistics to investment facilitation to educational guidance, we offer end-to-end support for all your African engagement needs.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Personalized Approach</h3>
                  <p className="text-neutral-600">
                    We recognize that every client's needs are unique. Our services are tailored to your specific goals, preferences, and requirements.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Extensive Network</h3>
                  <p className="text-neutral-600">
                    Our strong relationships with government agencies, educational institutions, businesses, and tourism providers across Africa enable us to open doors that might otherwise remain closed.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;