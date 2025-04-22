import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">About <span className="text-blue-600">MedicalHub</span></h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              During the 2020 lockdown, access to medical supplies and communication between providers was a challenge. Founded by biomedical engineers, MedicalHub bridges the gap between healthcare providers, distributors, and communities, ensuring timely access to home care devices.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940"
              alt="Healthcare Professional"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Core Values */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {[
            {
              icon: <Heart className="w-8 h-8 text-pink-600" />,
              title: 'Patient-Centered Care',
              desc: 'We prioritize patient needs and well-being in all our services.'
            },
            {
              icon: <Shield className="w-8 h-8 text-indigo-600" />,
              title: 'Quality & Safety',
              desc: 'We uphold the highest standards in everything we offer.'
            },
            {
              icon: <Users className="w-8 h-8 text-green-600" />,
              title: 'Community Focus',
              desc: 'We’re committed to supporting communities with healthcare solutions.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Our Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2940"
              alt="Modern Medical Facility"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              MedicalHub revolutionizes healthcare communication by connecting providers, suppliers, and patients on one platform. We enable efficient medical supply distribution and support the healthcare ecosystem through technology-driven solutions.
            </p>
            <ul className="space-y-4 text-gray-700">
              {[
                '24/7 Support for Healthcare Providers',
                'Streamlined Medical Supply Distribution',
                'Efficient Communication Platform'
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
