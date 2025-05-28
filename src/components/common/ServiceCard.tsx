import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link, 
  buttonText 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          {buttonText} <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;