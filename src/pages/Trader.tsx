import React from 'react';
import TraderHero from '../components/trader/TraderHero';
import TraderFeatures from '../components/trader/TraderFeatures';
import TraderSteps from '../components/trader/TraderSteps';
import TraderTestimonials from '../components/trader/TraderTestimonials';
import VideoSection from '../components/common/VideoSection';

const Trader = () => {
  return (
    <main className="bg-white">
      <TraderHero />
      <VideoSection
        title="Become a Professional Trader"
        description="Discover how to leverage FTI Nexus to grow your trading career"
      />
      <TraderFeatures />
      <TraderSteps />
      <TraderTestimonials />
    </main>
  );
};

export default Trader;