import React from 'react';
import { Bot } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      name: "Dr. Aditi Mehra",
      specialty: "Cardiologist"
    },
    {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      name: "Dr. Anil Kapoor",
      specialty: "Pediatrician"
    },
    {
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      name: "Dr. Kavita Nair",
      specialty: "General Physician"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Find Your Doctor</h2>
          <p className="text-gray-600">Search our network of experienced healthcare professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-gray-600 mb-4">{doctor.specialty}</p>
                <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center space-x-2">
                  <Bot className="w-4 h-4" />
                  <span>Chat with AI Assistant</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
