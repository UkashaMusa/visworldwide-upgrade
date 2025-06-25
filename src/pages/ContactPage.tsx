import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { ToastContainer, toast } from 'react-toastify'; 

const ContactPage = () => {
  const { t } = useTranslation(); 
                   
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    toast.error("Please fill in all fields before submitting.");
  }else{
    toast.success("Thank you for reaching out! We'll get back to you within 24 hours.");
  }

   try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: "11aa113e-e657-45ee-9dd5-e2b56039a2d6",
        subject: `New Inquiry from VisAfrica.rw: ${formData.name}`,
        name: formData.name,
        email: formData.email,
        company: formData.subject,
        message: formData.message
      })
    });

    const result = await response.json();

    if (result.success) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      toast.error("Submission failed. Please try again.");
    }
  } catch (error) {
    toast.error("Network error. Please try again later.");
  }
};
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
      details: 'edugalitech@gmail.com',
      link: 'mailto:edugalitech@gmail.com',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 pt-32 pb-16 bg-neutral-50">
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
                      onChange={(e) => handleChange("name", e.target.value)}
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
                      onChange={(e) => handleChange("email", e.target.value)}
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
                    onChange={(e) => handleChange("subject", e.target.value)}
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
                    onChange={(e) => handleChange("message", e.target.value)}
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
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992879.9219083878!2d30.1006848!3d-1.9660800000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6af921f1347%3A0x807f3d177233c34f!2sKG%20549%20St%2C%20Kigali!5e1!3m2!1sen!2srw!4v1750780196675!5m2!1sen!2srw" width="100%" height="100%"></iframe>
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
               <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;