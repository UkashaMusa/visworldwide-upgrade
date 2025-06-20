import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      details: 'KG 549 Street Kigali, Rwanda',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone Number',
      details: '+250 791 434 915',
      link: 'tel:+250791434915',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: 'info@visworldwide.com',
      link: 'mailto:info@visworldwide.com',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-300 via-blue-300 to-indigo-300 pt-32 pb-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-xl text-neutral-600">
              We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-neutral-600">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] bg-neutral-200 rounded-xl overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.331832338966!2d36.80943243771!3d-1.2833537081621001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10be32c63c7d%3A0x76f53d6bcd4f9ce0!2sNairobi%20City%2C%20Kenya!5e0!3m2!1sen!2sus!4v1653385422249!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="VisAfrica Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">How do I book a travel package?</h3>
                <p className="text-neutral-600">
                  You can book a travel package by browsing our available packages on the Visit page, selecting the one you're interested in, and following the booking instructions. Alternatively, you can contact us directly for assistance.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2">What services do you offer for investors?</h3>
                <p className="text-neutral-600">
                  We provide comprehensive investment facilitation services, including market research, regulatory guidance, legal support, partnership development, and ongoing operational assistance for businesses looking to establish or expand in African markets.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-2">How can I apply for a study program?</h3>
                <p className="text-neutral-600">
                  To apply for a study program, visit our Study page, explore the available programs, and click on the "Apply Now" button for the program you're interested in. Our team will guide you through the application process, including document preparation and submission.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-2">Do you offer customized travel packages?</h3>
                <p className="text-neutral-600">
                  Yes, we can create customized travel packages tailored to your preferences, budget, and timeframe. Contact our team with your requirements, and we'll design a personalized itinerary for you.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;