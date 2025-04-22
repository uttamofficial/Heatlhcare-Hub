import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact & Location</h2>
          <p className="text-gray-600">Visit us or get in touch</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="h-[400px] bg-gray-200 rounded-lg mb-6">
              {/* Replace with actual map implementation */}
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3"
                alt="Location Map"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">HealthCare Hub Main Campus</h3>
            <div className="space-y-4">
              <p className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 Medical Center Drive, New York, NY 10001</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@healthcarehub.com</span>
              </p>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;