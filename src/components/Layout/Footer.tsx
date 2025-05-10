import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import logoImage from '../../assets/icon.ico';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
            <img src={logoImage} alt="SDS Logo" className="h-11 w-11 rounded-full object-cover" />
              <span className="text-xl font-bold uppercase">SDS AUTOMOTIVE <br/>All Car Service</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium car care and repair services with a commitment to excellence since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-accent transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M4.25 3h3.437l5.23 7.588L18.494 3H22l-7.44 10.474L22 21H18.438l-5.308-7.7L5.591 21H2l7.672-10.3L2 3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sdsautomotive_cud/" className="text-gray-300 hover:text-accent transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-accent transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/Contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-accent transition-colors">FAQ</Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#body-shop" className="text-gray-300 hover:text-accent transition-colors">Body Shop</Link>
              </li>
              <li>
                <Link to="/services#painting" className="text-gray-300 hover:text-accent transition-colors">Painting</Link>
              </li>
              <li>
                <Link to="/services#mechanic-service" className="text-gray-300 hover:text-accent transition-colors">Mechanic Service</Link>
              </li>
              <li>
                <Link to="/services#electronic-service" className="text-gray-300 hover:text-accent transition-colors">Electronic Service</Link>
              </li>
              <li>
                <Link to="/services#detailing" className="text-gray-300 hover:text-accent transition-colors">Detailing</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">KARAIKADU, SIPCOT POST, CUDDALORE TO VIRUDHACHALAM MAIN ROAD,CUDDALORE-607005</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-accent transition-colors">+91 9842365406, 9952513032</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent mr-2 flex-shrink-0" />
                <a href="mailto:info@sdsauto.com" className="text-gray-300 hover:text-accent transition-colors">sdsmotors2019@gmail.com </a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Monday-Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SDS All Car Service Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;