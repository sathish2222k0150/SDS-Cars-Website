import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AnimatedElement from '../components/UI/AnimatedElement';
import Button from '../components/UI/Button';
import { services } from '../data/services';
import * as Icons from 'lucide-react';
import serviceHero from '../assets/service.jpg';

const Services: React.FC = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState<string | null>(null);
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setActiveService(id);
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={serviceHero}
            alt="Our Services" 
            className="w-full h-full object-cover object-center md:object-[center_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl">
              Comprehensive automotive solutions delivered with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky top-20 z-40 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
            {services.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;
              
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={`flex-shrink-0 px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                    activeService === service.id
                      ? 'bg-red-600 text-white border-red-600'
                      : 'border-gray-300 hover:border-red-400 text-gray-700'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-center">
                    <IconComponent size={16} className="mr-2" />
                    <span>{service.title}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;
              
              return (
                <div 
                  key={service.id} 
                  id={service.id} 
                  className={`scroll-mt-32 pt-2 ${
                    activeService === service.id ? 'bg-gray-50 rounded-lg p-6' : ''
                  }`}
                >
                  <AnimatedElement className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="relative">
                          <img 
                            src={service.image}
                            alt={service.title}
                            className="rounded-lg shadow-lg w-full h-64 object-cover"
                          />
                          <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-4 shadow-lg">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                              <IconComponent size={32} className="text-red-600" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                          <p className="text-gray-600 mb-6">{service.details}</p>
                          <Button to="/Contact" variant="primary">
                            Visit Us
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                          <p className="text-gray-600 mb-6">{service.details}</p>
                          <Button to="/Contact" variant="primary">
                           Visit Us
                          </Button>
                        </div>
                        <div className="relative">
                          <img 
                            src={service.image}
                            alt={service.title}
                            className="rounded-lg shadow-lg w-full h-64 object-cover"
                          />
                          <div className="absolute -bottom-5 -left-5 bg-white rounded-full p-4 shadow-lg">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                              <IconComponent size={32} className="text-red-600" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </AnimatedElement>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Services?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Book your appointment today and let our experts take care of your vehicle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/booking" variant="primary">
                Book a Service
              </Button>
              <Button to="/contact" variant="outline">
                Ask a Question
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default Services;