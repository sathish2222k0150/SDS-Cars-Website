import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../components/UI/AnimatedElement';
import ContactForm from '../components/UI/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquareText } from 'lucide-react';
import contact from '../assets/contact.jpg';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
        <img 
          src={contact}
          alt="Contact Us" 
          className="w-full h-full object-cover object-center md:object-[center_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
      </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl">
              Get in touch with our team for inquiries, quotes, or to schedule a service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimatedElement className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or need assistance? Our team is here to help. Reach out to us through any of the following channels or fill out the contact form.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full text-red-600 mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600">KARAIKADU, SIPCOT POST, CUDDALORE TO VIRUDHACHALAM MAIN ROAD,CUDDALORE-607005</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">+91 9842365406, 9952513032</p>
                      <p className="text-gray-500 text-sm">Monday to Friday, 8am to 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">sdsmotors2019@gmail.com</p>
                      <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 mr-4">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours of Operation</h3>
                      <ul className="text-gray-600">
                        <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                        <li>Saturday: 9:00 AM - 4:00 PM</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <MessageSquareText className="text-red-600 mr-2" size={20} />
                    Quick Contact Options
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="tel:+91 9842365406" 
                      className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Phone size={18} className="mr-2" />
                      Call Us Now
                    </a>
                    <a 
                      href="https://wa.me/9952513032" 
                      className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement direction="left">
              <ContactForm />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conveniently located in the Automotive District, with easy access from major highways.
            </p>
          </AnimatedElement>
          
          <AnimatedElement>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.159672239899!2d79.7386745!3d11.683094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54bda2fe27114f%3A0xda0f7a89ae73b8a8!2sSDS%20MOTORS!5e0!3m2!1sen!2sin!4v1746032350066!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={true} 
                loading="lazy"
                title="SDS All Car Service Workshop Location"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <span className="font-semibold">Directions:</span> Karaikadu bus stop, to, Virudhachalam - Cuddalore Rd, Cuddalore, Tamil Nadu 607005.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default Contact;