import React from 'react';
import { UserPlus, Search, HandshakeIcon, LineChart } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create an Account',
    description: 'Sign up in minutes with our simple registration process.',
  },
  {
    icon: Search,
    title: 'Browse Traders',
    description: 'Explore trader profiles, performance metrics, and trading strategies.',
  },
  {
    icon: HandshakeIcon,
    title: 'Choose Your Trader',
    description: 'Select a professional trader that matches your investment goals.',
  },
  {
    icon: LineChart,
    title: 'Track Progress',
    description: 'Monitor your investment growth with real-time portfolio tracking.',
  },
];

const HowItWorks = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Get started with FTI Nexus in four simple steps
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-center text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;