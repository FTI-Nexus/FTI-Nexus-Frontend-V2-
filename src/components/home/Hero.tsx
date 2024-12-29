import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform the Way You Trade and Invest
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Whether you're a trader looking to grow or an investor seeking opportunities, 
            FTI Nexus connects you to success.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/investor"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              I'm an Investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/trader"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              I'm a Trader
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&q=80&w=2000"
            alt="Trading Dashboard"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;