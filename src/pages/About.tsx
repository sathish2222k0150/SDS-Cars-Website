import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../components/UI/AnimatedElement';
import Button from '../components/UI/Button';
import { Award, Users, BarChart, PenTool as Tool, Calendar, ShieldCheck } from 'lucide-react';
import about from '../assets/about2.jpg';
import about1 from '../assets/profile.webp';
import found from '../assets/found.jpg';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center">
      <div className="absolute inset-0 z-0">
          <img 
            src={about} 
            alt="About SDS All Car Service" 
            className="w-full h-full object-cover object-center md:object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black-900/90 to-black-800/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About SDS All Car Service Workshop</h1>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl">
              Excellence in automotive care since 2018. Get to know the team behind your trusted workshop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement direction="right">
              <div className="relative">
                <img 
                  src={about1} 
                  alt="SDS All Car Service workshop team" 
                  className="w-[550px] h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl hidden md:flex items-center">
                  <img 
                    src={found}
                    alt="Founder" 
                    className="w-18 h-16 rounded-full object-cover border-4 border-white mr-4 "
                  />
                  <div>
                    <div className="text-lg font-bold text-center">Praveen Kumar S</div>
                    <div className="text-gray-600 text-sm uppercase">CEO of SDS Automotive ALL CAR SERVICE</div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement direction="left">
              <h6 className="text-red-600 font-semibold mb-2">OUR STORY</h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Passion for Automotive Excellence</h2>
                            <p className="text-gray-600 mb-4">
                Founded in 2018, SDS All Car Service Workshop began as a small garage with a big dream: to provide exceptional automotive care with unmatched precision and customer service.
              </p>
              <p className="text-gray-600 mb-4">
                Our technical expertise and dedication to quality quickly earned SDS a reputation for excellence. As demand grew, so did our team of specialists and our facility.
              </p>
              <p className="text-gray-600 mb-8">
                Today, SDS All Car Service Workshop is a state-of-the-art facility equipped with the latest technology and staffed by certified professionals who share our founding vision: treating every vehicle as if it were our own.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">7+</div>
                  <div className="text-gray-600 text-center">Years in Business</div>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">1,000+</div>
                  <div className="text-gray-600 text-center">Happy Customers</div>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">5+</div>
                  <div className="text-gray-600 text-center">Expert Technicians</div>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">3</div>
                  <div className="text-gray-600 text-center">Service Awards</div>
                </div>
              </div>
              
              <Button to="/contact" variant="primary">
                Get in Touch
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h6 className="text-red-600 font-semibold mb-2">OUR VALUES</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Principles that Drive Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At SDS All Car Service Workshop, our work is guided by a core set of values that ensure we deliver excellence in every service.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every task, no matter how small. Our commitment to quality is unwavering, and we're constantly raising our standards.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen, understand, and provide solutions that exceed expectations.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We never stop learning and improving. Our team regularly updates their skills and knowledge to stay ahead of industry developments.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Tool className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Precision</h3>
                <p className="text-gray-600">
                  We believe in getting it right the first time. Our attention to detail ensures that every service is performed with the utmost precision.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.5}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reliability</h3>
                <p className="text-gray-600">
                  When we make a promise, we keep it. Our customers count on us for timely service and solutions they can trust.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We operate with transparency and honesty in all our dealings. Our pricing is fair, and our recommendations are always in our customers' best interest.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Satisfied Customers</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience the SDS difference. Schedule your service today and see why we're the trusted choice for automotive care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Visit Us
              </Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default About;