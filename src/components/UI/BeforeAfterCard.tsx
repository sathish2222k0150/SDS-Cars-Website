import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryImageType } from '../../types';

interface BeforeAfterCardProps {
  image: GalleryImageType;
  index: number;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ image, index }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64 cursor-pointer" onMouseEnter={() => setShowAfter(true)} onMouseLeave={() => setShowAfter(false)}>
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={image.before} 
            alt={`${image.title} - Before`} 
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: showAfter ? 0 : 1 }}
          />
        </div>
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={image.after} 
            alt={`${image.title} - After`} 
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: showAfter ? 1 : 0 }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full transition-all duration-300 ${showAfter ? 'bg-green-600' : 'bg-red-600'}`}>
            {showAfter ? 'AFTER' : 'BEFORE'}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
        <p className="text-gray-600 text-sm">{image.description}</p>
      </div>
    </motion.div>
  );
};

export default BeforeAfterCard;