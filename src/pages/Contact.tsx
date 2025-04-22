import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-3 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2668"
              alt="Modern Dental Office"
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h1>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="terms" className="rounded text-blue-500" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the Terms of Service
                </label>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Phone className="w-6 h-6 text-blue-500" />,
              title: 'Call Us',
              lines: ['Main: (123) 456-7890', 'Emergency: (123) 456-7899'],
            },
            {
              icon: <MapPin className="w-6 h-6 text-blue-500" />,
              title: 'Location',
              lines: ['123 Medical Center Drive', 'Healthcare City, HC 12345'],
            },
            {
              icon: <Clock className="w-6 h-6 text-blue-500" />,
              title: 'Hours',
              lines: ['Mon - Fri: 8:00 AM - 7:00 PM', 'Sat: 9:00 AM - 5:00 PM'],
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
              {item.lines.map((line, index) => (
                <p key={index} className="text-gray-600">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
