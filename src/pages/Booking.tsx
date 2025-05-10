import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../components/UI/AnimatedElement';
import BookingForm from '../components/UI/BookingForm';

const Booking: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Book a Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book a Service</h1>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl">
              Schedule your appointment with our expert technicians in just a few easy steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Appointment</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select your service, choose a convenient time, and provide your details below. We'll confirm your booking promptly.
              </p>
            </AnimatedElement>
            
            <BookingForm />
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined service process ensures a smooth experience from booking to completion.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Online</h3>
                <p className="text-gray-600">
                  Complete our simple booking form to schedule your service appointment at a time that suits you.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Confirmation</h3>
                <p className="text-gray-600">
                  Receive a confirmation email with your appointment details and any preparation instructions.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Drop Off</h3>
                <p className="text-gray-600">
                  Bring your vehicle at the scheduled time. Our team will conduct an initial assessment and discuss your needs.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Service & Pickup</h3>
                <p className="text-gray-600">
                  We'll perform the service and notify you when it's complete. Upon pickup, we'll review the work performed.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQs about booking */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Booking FAQs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our booking process and services.
            </p>
          </AnimatedElement>
          
          <div className="max-w-3xl mx-auto">
            <AnimatedElement delay={0.1}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">How far in advance should I book?</h3>
                <p className="text-gray-600">
                  We recommend booking 1-2 weeks in advance for routine services and 2-3 weeks for specialized services. For urgent repairs, please call us directly for availability.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">What if I need to reschedule?</h3>
                <p className="text-gray-600">
                  You can reschedule your appointment up to 24 hours before your scheduled time without any penalty. Simply call our service desk or use the link in your confirmation email.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Do you offer pickup and delivery?</h3>
                <p className="text-gray-600">
                  Yes, we offer vehicle pickup and delivery within a 10-mile radius for a nominal fee. Please select this option when booking or call us to arrange.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">How long will my service take?</h3>
                <p className="text-gray-600">
                  Service times vary depending on the type of service and your vehicle. Basic services typically take 2-4 hours, while more complex repairs may take a full day or more. We'll provide an estimated completion time when you drop off your vehicle.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={0.5}>
              <div>
                <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, debit cards, cash, and bank transfers. Payment is required upon service completion unless prior arrangements have been made.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;