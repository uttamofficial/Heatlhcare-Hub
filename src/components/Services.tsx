import React from 'react';
import { Users, Heart, Ambulance } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Primary Care',
      description: 'General health check-ups, family physician consultations, and preventive healthcare for all age groups.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Specialty Care',
      description: 'Consultations with expert specialists in cardiology, orthopaedics, gynaecology, paediatrics, and more.'
    },
    {
      icon: <Ambulance className="w-8 h-8" />,
      title: 'Emergency Care',
      description: 'Round-the-clock emergency services with fully equipped ambulances and quick-response medical teams.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive healthcare services for you and your family</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
