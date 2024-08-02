import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-base font-bold mb-4">About</h2>
            <p className="mb-2">Global Modeling and Assimilation Office (GMAO)</p>
            <p>Framework for Live-User Invoked Data (FLUID)</p>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-base font-bold mb-4">Contact</h2>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              Web Curator: Callum Wayman
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" />
              NASA Official: Alexey Shiklomanov
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
