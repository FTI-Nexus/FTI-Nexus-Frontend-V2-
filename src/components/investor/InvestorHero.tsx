import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const InvestorHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Invest Smarter, Not Harder
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Connect with top traders to grow your wealth with transparency and confidence.
          </p>
          <div className="mt-10">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHero;