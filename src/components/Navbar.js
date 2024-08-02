import React, { useState } from 'react';
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/nasa-logo.png';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? '' : dropdown));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-black pt-6 pb-2 border-b border-white z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="NASA Logo" className="h-10 mr-3" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 text-white font-helvetica text-sm ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <li><a href="#" className="hover:text-blue-400 block md:inline-block">Home</a></li>
          <li className="relative">
            <button onClick={() => toggleDropdown('weather')} className="flex items-center hover:text-blue-400 w-full md:w-auto">
              Weather Forecasts <FaCaretDown className="ml-1" />
            </button>
            {openDropdown === 'weather' && (
              <ul className="bg-black mt-1 p-4 space-y-2 w-full md:w-52 md:absolute md:bg-black md:p-4 md:space-y-2">
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Datagrams</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">WxMaps</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Observing System Statistics</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Radiance Monitoring</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Observation Impacts</a></li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => toggleDropdown('aerosol')} className="flex items-center hover:text-blue-400 w-full md:w-auto">
              Aerosol & Gas Forecasts <FaCaretDown className="ml-1" />
            </button>
            {openDropdown === 'aerosol' && (
              <ul className="bg-black mt-1 p-4 space-y-2 w-full md:w-64 md:absolute md:bg-black md:p-4 md:space-y-2">
                <li className="text-gray-400 whitespace-nowrap">Forward Processing</li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Datagrams (Aerograms)</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">2D Chem (Atmospheric Composition)</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">3D Chem (Atmospheric Composition)</a></li>
                <li className="text-gray-400 whitespace-nowrap">Composition Forecast</li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Surface Concentrations</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Total Column</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="hover:text-blue-400 block md:inline-block">Seasonal Prediction</a></li>
          <li className="relative">
            <button onClick={() => toggleDropdown('reanalysis')} className="flex items-center hover:text-blue-400 w-full md:w-auto">
              Reanalysis <FaCaretDown className="ml-1" />
            </button>
            {openDropdown === 'reanalysis' && (
              <ul className="bg-black mt-1 p-4 space-y-2 w-full md:w-48 md:absolute md:bg-black md:p-4 md:space-y-2">
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">MERRA-2</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Wx Maps</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Chem Maps</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Anomalies</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Climate Statistics</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Carbon</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Spatial Maps</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">Datagrams</a></li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => toggleDropdown('mission')} className="flex items-center hover:text-blue-400 w-full md:w-auto">
              Mission Support <FaCaretDown className="ml-1" />
            </button>
            {openDropdown === 'mission' && (
              <ul className="bg-black mt-1 p-4 space-y-2 w-full md:w-48 md:absolute md:bg-black md:p-4 md:space-y-2">
                <li className="text-gray-400 whitespace-nowrap">Active</li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">AGEST</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">BLUEFLUX</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">PACE-PAX</a></li>
                <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">SARP-EAST</a></li>
                <li className="relative">
                  <button onClick={() => toggleDropdown('nonactive')} className="flex items-center hover:text-blue-400 w-full md:w-auto">
                    Non-active <FaCaretDown className="ml-1" />
                  </button>
                  {openDropdown === 'nonactive' && (
                    <ul className="bg-black mt-1 p-4 space-y-2 w-full md:w-48 md:absolute md:bg-black md:p-4 md:space-y-2">
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">ABOVE</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">ACCLIP</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">ACE-ENA</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">AEOLUS-CALVAL</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">ASIA-AQ</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">ATOM</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">CAMP2EX</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">DCOTSS</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">EPOCH</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">MOSAIC</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">ORACLES</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">PRDUST</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">SCOPE</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">SOCRATES</a></li>
                      <li><a href="#" className="hover:text-blue-400 whitespace-nowrap">TRACER-AQ</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
