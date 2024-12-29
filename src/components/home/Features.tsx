import React from 'react';
import { Shield, TrendingUp, Users, Globe } from 'lucide-react';

const features = [
  {
    name: 'Secure Platform',
    description: 'State-of-the-art security measures to protect your investments and data.',
    icon: Shield,
  },
  {
    name: 'Real-time Tracking',
    description: 'Monitor your investments and trading performance in real-time.',
    icon: TrendingUp,
  },
  {
    name: 'Expert Traders',
    description: 'Connect with verified and skilled cryptocurrency traders.',
    icon: Users,
  },
  {
    name: 'Global Access',
    description: 'Trade and invest from anywhere in the world, 24/7.',
    icon: Globe,
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform offers unparalleled features for freelance traders and investors.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-6">
                <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;