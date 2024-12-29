import React from 'react';
import InvestorHero from '../components/investor/InvestorHero';
import InvestorFeatures from '../components/investor/InvestorFeatures';
import Testimonials from '../components/investor/Testimonials';
import VideoSection from '../components/common/VideoSection';

const Investor = () => {
  return (
    <main className="bg-white">
      <InvestorHero />
      <VideoSection
        title="How to Start Investing"
        description="Learn how to get started with FTI Nexus and make your first investment"
      />
      <InvestorFeatures />
      <Testimonials />
    </main>
  );
};

export default Investor;