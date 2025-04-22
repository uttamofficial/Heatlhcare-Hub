import React from 'react';
import { Clock, User, Laptop, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gray-50 py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Transforming Lives Through Advanced Care
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities. Your well-being is our commitment.
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium text-gray-800">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium text-gray-800">Expert Doctors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Laptop className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium text-gray-800">Modern Technology</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition duration-200">
                <User className="w-5 h-5" />
                <span>Find a Doctor</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition duration-200">
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Right image — UNCHANGED */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2791&ixlib=rb-4.0.3"
              alt="Modern Healthcare Facility"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
