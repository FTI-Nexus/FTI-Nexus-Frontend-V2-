import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TraderHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Grow Your Portfolio.<br />Elevate Your Status.
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            The better you trade, the more you gain exposure and opportunities to manage larger investments.
          </p>
          <div className="mt-10">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors"
            >
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderHero;