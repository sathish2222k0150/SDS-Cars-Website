import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { services } from '../../data/services';
import { Calendar, Clock, Car, User, Phone, Mail, MessageSquare, Check } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 1500);
  };

  const getTimeSlots = () => {
    return ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
  };

  // Generate dates for the next 14 days
  const generateDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Format as YYYY-MM-DD
      const formattedDate = date.toISOString().split('T')[0];
      dates.push(formattedDate);
    }
    return dates;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {isComplete ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 px-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for booking with SDS All Car Service Workshop. We've sent a confirmation email to {formData.email}.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto text-left">
            <h4 className="font-medium text-gray-900 mb-4">Booking Details:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5"><User size={16} /></span>
                <div>
                  <p className="text-gray-500 text-sm">Name</p>
                  <p className="text-gray-900">{formData.name}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5"><Calendar size={16} /></span>
                <div>
                  <p className="text-gray-500 text-sm">Date & Time</p>
                  <p className="text-gray-900">{formData.date} at {formData.time}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5"><Car size={16} /></span>
                <div>
                  <p className="text-gray-500 text-sm">Service & Vehicle</p>
                  <p className="text-gray-900">{formData.service} for {formData.vehicle}</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <div className="p-6 md:p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((stepNumber) => (
                <div 
                  key={stepNumber} 
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      step === stepNumber 
                        ? 'bg-red-600 text-white' 
                        : step > stepNumber 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > stepNumber ? <Check size={16} /> : stepNumber}
                  </div>
                  <span className="text-xs mt-2 hidden sm:block">
                    {stepNumber === 1 ? 'Service' : stepNumber === 2 ? 'Schedule' : 'Details'}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-200"></div>
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-red-600 transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Select a Service</h3>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      What service do you need?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.service}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schedule Your Appointment</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                    <Calendar size={16} className="mr-2 text-red-600" />
                    Select a Date
                  </label>
                  <select
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  >
                    <option value="">Select a date</option>
                    {generateDates().map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-8">
                  <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                    <Clock size={16} className="mr-2 text-red-600" />
                    Select a Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {getTimeSlots().map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`py-2 px-4 rounded-md border transition-all ${
                          formData.time === time
                            ? 'border-red-600 bg-red-50 text-red-600'
                            : 'border-gray-300 hover:border-red-400'
                        }`}
                        onClick={() => setFormData({ ...formData, time })}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                      <User size={16} className="mr-2 text-red-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                      <Mail size={16} className="mr-2 text-red-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                      <Phone size={16} className="mr-2 text-red-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="vehicle" className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                      <Car size={16} className="mr-2 text-red-600" />
                      Vehicle Details
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      placeholder="Year, Make, Model"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="notes" className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                    <MessageSquare size={16} className="mr-2 text-red-600" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="Any specific issues or requests?"
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md mb-6 text-sm text-blue-800">
                  <p className="font-medium mb-1">Booking Summary:</p>
                  <ul className="space-y-1">
                    <li><span className="font-medium">Service:</span> {formData.service}</li>
                    <li><span className="font-medium">Date:</span> {new Date(formData.date).toLocaleDateString()}</li>
                    <li><span className="font-medium">Time:</span> {formData.time}</li>
                  </ul>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.vehicle}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingForm;