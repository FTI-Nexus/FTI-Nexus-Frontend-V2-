import React from 'react';
import { Trophy, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Leadership Rankings',
    description: 'Showcase your skills and climb the ranks to gain more visibility in the trading community.',
  },
  {
    icon: Users,
    title: 'Increased Exposure',
    description: 'Get matched with investors based on your performance and trading strategy.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Manage larger portfolios and maximize your earnings through performance-based rewards.',
  },
];

const TraderFeatures = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <feature.icon className="h-8 w-8 text-purple-600" />
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

export default TraderFeatures;