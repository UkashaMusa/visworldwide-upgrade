import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-neutral-50 flex items-center justify-center py-20">
      <div className="container">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary inline-flex items-center">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;