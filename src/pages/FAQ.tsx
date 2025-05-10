import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../components/UI/AnimatedElement';
import FAQItem from '../components/UI/FAQItem';
import Button from '../components/UI/Button';
import { faqItems } from '../data/faq';
import { Search, Phone } from 'lucide-react';
import faq from '../assets/faq.png';
import customer from '../assets/contact us.jpg';

const FAQ: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={faq}
            alt="FAQ" 
            className="w-full h-full object-cover object-center md:object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl">
              Find answers to common questions about our services, policies, and procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Search */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="w-full px-4 py-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
              <p className="text-gray-600">
                Browse through our frequently asked questions to find answers to your inquiries.
              </p>
            </AnimatedElement>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {faqItems.map((faq, index) => (
                  <FAQItem key={faq.id} faq={faq} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">FAQ Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse questions by category to find the information you need.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedElement delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Services & Pricing</h3>
                <p className="text-gray-600 mb-4">Questions about our service offerings and pricing structure.</p>
                <a href="/FeedbackForm" className="text-red-600 font-medium hover:text-red-700">Feedback</a>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Appointments</h3>
                <p className="text-gray-600 mb-4">Information about scheduling, rescheduling, and cancellations.</p>
                <a href="/FeedbackForm" className="text-red-600 font-medium hover:text-red-700">Feedback</a>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Warranties & Guarantees</h3>
                <p className="text-gray-600 mb-4">Details about our warranty policies and service guarantees.</p>
                <a href="/FeedbackForm" className="text-red-600 font-medium hover:text-red-700">Feedback</a>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Payment Options</h3>
                <p className="text-gray-600 mb-4">Information about accepted payment methods and financing.</p>
                <a href="/FeedbackForm" className="text-red-600 font-medium hover:text-red-700">Feedback</a>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Vehicle Maintenance</h3>
                <p className="text-gray-600 mb-4">Tips and advice for maintaining your vehicle between services.</p>
                <a href="/FeedbackForm" className="text-red-600 font-medium hover:text-red-700">Feedback</a>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">About Our Workshop</h3>
                <p className="text-gray-600 mb-4">Questions about our facility, team, and qualifications.</p>
                <a href="/FeedbackForm" className="text-red-600 font-medium hover:text-red-700">Feedback</a>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 text-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <AnimatedElement>
                  <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-blue-100 mb-6">
                    Can't find what you're looking for? Our team is here to help. Get in touch with us for personalized assistance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button to="/contact" variant="primary">
                      Contact Us
                    </Button>
                    <a 
                      href="tel:+91 9842365406, 9952513032" 
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="mr-2" size={20} />
                      Call Now
                    </a>
                  </div>
                </AnimatedElement>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src={
                    customer
                  } 
                  alt="Customer Service" 
                  className="hidden md:block relative w-[800px] h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white-900/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;