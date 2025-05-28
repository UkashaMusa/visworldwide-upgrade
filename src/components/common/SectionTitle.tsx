import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = true,
  light = false 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`mb-3 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-neutral-200' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;