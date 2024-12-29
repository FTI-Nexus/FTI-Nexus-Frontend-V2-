import React from 'react';
import SocialIcons from './SocialIcons';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <FooterLinks />
          <SocialIcons />
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FTI Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;