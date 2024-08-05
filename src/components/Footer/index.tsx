import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch('/data/homepage.json')
      .then(response => response.json())
      .then(data => setFooterData(data.footer))
      .catch(error => console.error('Error fetching footer data:', error));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img src={footerData.logo} alt="Logo" className="h-8" />
          <p className="ml-4 text-gray-400">{footerData.description}</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {footerData.socialLinks.map((link, index) => (
            <a key={index} href={link.url} aria-label={link.ariaLabel} className="text-gray-400 hover:text-white">
              <span dangerouslySetInnerHTML={{ __html: link.svg }} />
            </a>
          ))}
        </div>
        <p className="text-gray-400 mt-4 md:mt-0">
          &copy; {footerData.copyright.replace('{year}', new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
