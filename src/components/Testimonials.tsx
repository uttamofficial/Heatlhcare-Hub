import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328f7e74?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      name: "Priya Sharma",
      text: "The doctors here are very compassionate and professional. Dr. Mehta explained every step of my treatment with great patience. Highly recommended!"
    },
    {
      image: "https://images.unsplash.com/photo-1590080875631-7866f5fcb926?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      name: "Rahul Verma",
      text: "Very clean and well-maintained facility. The staff was polite and supportive throughout my visit. Thank you for the excellent care."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Patient Testimonials</h2>
          <p className="text-gray-600">What our patients say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
