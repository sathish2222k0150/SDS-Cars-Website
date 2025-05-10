import React from 'react';
import { motion } from 'framer-motion';
import { ServiceType } from '../../types';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Map service.icon string to the actual Lucide React icon
  const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
      id={service.id}
    >
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
          <IconComponent size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link 
          to={`/services#${service.id}`} 
          className="text-accent font-medium inline-flex items-center group-hover:text-accent-dark"
        >
          Learn more
          <Icons.ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;