import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Contact Us', href: '/contact' },
];

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(({ label, href }) => (
        <Link
          key={label}
          to={href}
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;