import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { Car, WifiOff, Home, ArrowRight } from 'lucide-react';
import { useOfflineDetection } from '../hooks/useOfflineDetection';

const NotFound: React.FC = () => {
  const isOffline = useOfflineDetection();
  
  // Animation for the car
  const carAnimation = {
    initial: { x: -100, rotate: 0 },
    animate: { 
      x: 100, 
      rotate: [0, -5, 5, -5, 0],
      transition: { 
        x: { duration: 3, repeat: Infinity, repeatType: "reverse" },
        rotate: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
      }
    }
  };

  // Animation for the smoke
  const smokeAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.5, 2],
      transition: { duration: 2, repeat: Infinity }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">
            {isOffline ? 'You\'re Offline' : 'Page Not Found'}
          </h2>
          <p className="text-blue-100">
            {isOffline 
              ? 'Please check your internet connection and try again.' 
              : 'The page you are looking for doesn\'t exist or has been moved.'}
          </p>
        </div>
        
        <div className="p-8">
          <div className="relative h-40 mb-8">
            <motion.div 
              className="absolute top-1/2 transform -translate-y-1/2"
              variants={carAnimation}
              initial="initial"
              animate="animate"
            >
              <Car size={64} className="text-red-600" />
              
              <motion.div 
                className="absolute -right-8 top-6 rounded-full bg-gray-500/50 w-6 h-6"
                variants={smokeAnimation}
                initial="initial"
                animate="animate"
              />
              
              <motion.div 
                className="absolute -right-12 top-8 rounded-full bg-gray-500/30 w-8 h-8"
                variants={smokeAnimation}
                initial="initial"
                animate="animate"
                style={{ animationDelay: "0.5s" }}
              />
            </motion.div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
          </div>
          
          <div className="text-center mb-8">
            {isOffline ? (
              <div className="flex justify-center mb-6">
                <WifiOff size={48} className="text-red-500" />
              </div>
            ) : null}
            
            <h3 className="text-xl font-semibold mb-4">
              {isOffline 
                ? 'Looks like you\'re offline' 
                : 'This page has broken down'}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {isOffline 
                ? 'Our website requires an internet connection to function properly. Please check your connection and try again.' 
                : 'Don\'t worry, our team is on it! In the meantime, you can navigate back to our homepage or check out our services.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/" variant="primary" className="w-full sm:w-auto">
                <Home size={16} className="mr-2" />
                Return Home
              </Button>
              
              {!isOffline && (
                <Button to="/services" variant="outline" className="w-full sm:w-auto">
                  Our Services
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              )}
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>If you believe this is an error, please <Link to="/contact" className="text-red-600 hover:underline">contact our support team</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;