import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

interface PackageCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  link: string;
  featured?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  image,
  title,
  location,
  duration,
  price,
  link,
  featured = false,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`card overflow-hidden ${featured ? 'border-2 border-primary-500' : ''}`}
      whileHover={{ y: -5 }}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary-600 text-white text-sm font-medium py-1 px-3 rounded-full">
          Featured
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center text-neutral-600">
            <MapPin size={16} className="mr-2 text-primary-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-neutral-600">
           
            <span>{duration}</span>
          </div>
           
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-neutral-500 text-sm">From</span>
            <p className="text-xl font-bold text-primary-600">{price}</p>
          </div>
           
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;