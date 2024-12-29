import React from 'react';
import { LineChart, Shield, UserCheck } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Transparency',
    description: 'Track your portfolio performance in real-time with detailed analytics and reporting.',
  },
  {
    icon: Shield,
    title: 'Ease of Use',
    description: 'Start investing immediately with no prior trading knowledge required.',
  },
  {
    icon: UserCheck,
    title: 'Trustworthy Traders',
    description: 'Connect with thoroughly vetted and ranked professional traders.',
  },
];

const InvestorFeatures = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center">
                <div className="p-3 bg-indigo-100 rounded-2xl">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorFeatures;