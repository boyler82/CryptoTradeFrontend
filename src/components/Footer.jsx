import React from 'react';

const Footer = () => {
  return (
<footer className="bg-black text-gray-400 text-center p-4 text-sm border-t border-gray-700">
  &copy; {new Date().getFullYear()} MyApp. All rights reserved.
</footer>
  );
};

export default Footer;