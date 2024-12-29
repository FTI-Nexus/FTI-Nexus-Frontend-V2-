import React from 'react';
import { UserPlus, Award, BarChart3, Wallet } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Set up your professional trader profile and showcase your expertise.',
  },
  {
    icon: BarChart3,
    title: 'Build Your Portfolio',
    description: 'Demonstrate your trading skills and build a strong track record.',
  },
  {
    icon: Award,
    title: 'Earn Recognition',
    description: 'Climb the ranks through consistent performance and strategic trading.',
  },
  {
    icon: Wallet,
    title: 'Grow Your Earnings',
    description: 'Attract more investors and increase your management portfolio.',
  },
];

const TraderSteps = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Your Path to Success</h2>
          <p className="mt-4 text-xl text-gray-600">
            Follow these steps to establish yourself as a top trader
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
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

export default TraderSteps;