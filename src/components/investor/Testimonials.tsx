import React from 'react';

const testimonials = [
  {
    quote: "FTI Nexus made investing in crypto accessible and transparent. I can finally trust my investments are in good hands.",
    author: "Sarah Johnson",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The real-time tracking and professional traders have helped me grow my portfolio beyond expectations.",
    author: "Michael Chen",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our satisfied investors
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;