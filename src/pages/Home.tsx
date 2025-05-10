import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Car, SprayCan, Settings } from 'lucide-react';
import Button from '../components/UI/Button';
import AnimatedElement from '../components/UI/AnimatedElement';
import ServiceCard from '../components/UI/ServiceCard';
import { services } from '../data/services';
import Homes from '../assets/home.jpg';
import Home2 from '../assets/home2.jpg';
import HeroCar from '../assets/home4.png';
import PopupImage from '../assets/SDS AUTOMOTIVE-1.png'; // Make sure this image exists

const Home: React.FC = () => {
  const highlightedServices = services.slice(0, 4);
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show after 2 seconds on every page load/refresh
    
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      {/* Welcome Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isClosing ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: isClosing ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-3xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 font-bold text-xl z-10 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close popup"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <img
                  src={PopupImage}
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/3 p-6 flex flex-col justify-center bg-primary text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Welcome to<br/> SDS AUTOMOTIVE</h3>
                <Button 
                  to="/services"
                  variant="secondary"
                  className="mt-4 w-full text-center"
                  onClick={handleClosePopup} children={undefined}                >
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-r from-primary to-primary-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={Homes}
            alt="Car Workshop" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl lg:pr-12 mb-12 lg:mb-0"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Precision in Every Turn. <span className="text-accent">Care in Every Service.</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium automotive care with state-of-the-art technology and expert technicians. We treat your vehicle like our own.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button to="/services" variant="primary">
                  Our Services
                </Button>
                <Button to="/contact" variant="outline">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-auto flex justify-center"
            >
              <img 
                src={HeroCar} 
                alt="Premium Car" 
                className="max-h-[500px] w-auto rounded-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.a 
            href="#services"
            className="text-white flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="mb-2">Scroll Down</span>
            <motion.div 
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <motion.div className="w-1 h-2 bg-white rounded-full mt-2"></motion.div>
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive automotive care from routine maintenance to complete restorations, all with the highest level of precision.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightedServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <AnimatedElement className="text-center mt-12">
            <Button to="/services" variant="primary" className="inline-flex items-center">
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement direction="right">
              <div className="relative">
                <img 
                  src={Home2} 
                  alt="Mechanic working on car" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-xl hidden md:block">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SDS All Car Service Workshop?</h2>
              <p className="text-gray-600 mb-8">
                We combine industry expertise with cutting-edge technology to deliver the highest standard of automotive care. Our certified technicians treat every vehicle with precision and personal attention.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg text-primary mr-4">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">Certified professionals with years of experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg text-primary mr-4">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Modern Equipment</h3>
                    <p className="text-gray-600">State-of-the-art diagnostic and repair tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg text-primary mr-4">
                    <Car size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">All Makes & Models</h3>
                    <p className="text-gray-600">Expertise across all vehicle types and brands.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg text-primary mr-4">
                    <SprayCan size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Quality Materials</h3>
                    <p className="text-gray-600">Only premium parts and materials used.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button to="/about" variant="primary">
                  Learn More About Us
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Car Care?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today and give your vehicle the attention it deserves.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Contact Us
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default Home;