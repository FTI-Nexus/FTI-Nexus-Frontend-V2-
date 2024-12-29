import React from 'react';

const testimonials = [
  {
    quote: "FTI Nexus has transformed my trading career. The platform's exposure helped me grow my managed portfolio significantly.",
    author: "David Zhang",
    role: "Professional Crypto Trader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The ranking system motivates me to maintain high performance. It's a great way to showcase your trading abilities.",
    author: "Emma Rodriguez",
    role: "Senior Portfolio Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

const TraderTestimonials = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Trader Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Learn from traders who have grown with us
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

export default TraderTestimonials;