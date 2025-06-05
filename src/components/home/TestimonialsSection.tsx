import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'David Johnson',
      role: 'Tourist from USA',
      quote: 'My safari experience with VisAfrica exceeded all expectations. The guides were knowledgeable, the accommodations were comfortable, and the wildlife sightings were incredible!',
      rating: 5,
      type: 'visit',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Business Owner',
      quote: 'VisAfrica helped my company establish operations in Kenya with minimal hassle. Their market insights and legal support were invaluable for our successful expansion.',
      rating: 5,
      type: 'invest',
    },
    {
      id: 3,
      name: 'Michael Okafor',
      role: 'International Student',
      quote: 'Thanks to VisAfrica, I was able to secure a scholarship at a top university in South Africa. Their support with visa applications and accommodation made my transition smooth.',
      rating: 5,
      type: 'study',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section bg-primary-50">
      <div className="container">
        <SectionTitle 
          title={t('home.testimonials.title')}
          subtitle={t('home.testimonials.subtitle')}
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 -ml-4 sm:-ml-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 -mr-4 sm:-mr-6">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Testimonials */}
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-8 md:p-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    
                    <div>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl italic text-neutral-700 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                        <p className="text-sm text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-600' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;