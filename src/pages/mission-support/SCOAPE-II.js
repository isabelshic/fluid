import React, { useState } from 'react';
import { FaCaretDown, FaSearch } from 'react-icons/fa';

const DropdownWithSearch = ({ label, options }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-6">
      <p className="text-base font-bold mb-2">{label}</p>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-2 py-1 border border-gray-300 rounded-sm bg-white text-left flex items-center justify-between"
        >
          <span>{searchTerm || 'Select...'}</span>
          <FaCaretDown />
        </button>
        {isOpen && (
          <div className="absolute w-full bg-white border border-gray-300 rounded-sm mt-1 z-10">
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 border-b border-gray-300 pl-10"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <ul className="max-h-48 overflow-y-auto">
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSearchTerm(option);
                    setIsOpen(false);
                  }}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const WeatherForecasts = () => {
  
  const fields = ['Abs EPV', 'Temperature', 'Vert Velocity', 'Humidity', 'T2M', 'Vorticity', 'Wind Speed'];
  const regions = ['Africa', 'Australia', 'Global', 'Mid Atlantic', 'North America', 'North Polar', 'Pacific', 'South America', 'Seven Seas', 'South Polar'];
  const initialTimes = ['17Jul2024 00z', '17Jul2024 00z'];
  const leadHours = ['000h 17Jul2024 00z', '000h 17Jul2024 00z'];

  const [selectedField, setSelectedField] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedInitialTime, setSelectedInitialTime] = useState('');
  const [selectedLeadHour, setSelectedLeadHour] = useState('');
  const [graphUrl, setGraphUrl] = useState('');

  return (
    <div className="flex flex-col md:flex-row container mx-auto py-10 px-4">
      {/* SIDE BAR */}
      <aside className="md:w-1/3 lg:w-1/4 bg-gray-100 border border-black p-4 mr-8 rounded-sm mb-6 md:mb-0">
        <DropdownWithSearch label="Fields" options={fields} />
        <DropdownWithSearch label="Regions" options={regions} />
        <DropdownWithSearch label="Forecast Initial Time" options={initialTimes} />
        <DropdownWithSearch label="Forecast Lead Hour" options={leadHours} />
        <button className="w-full bg-blue-600 text-white py-1 rounded-sm hover:bg-blue-500">
          Generate graph
        </button>
      </aside>
      {/* END SIDE BAR */}

      {/* CONTENT */}
      <main className="md:w-2/3 lg:w-3/4 p-4">
        <nav className="mb-4">
          <a href="/mission-support" className="text-blue-600 underline">&lt; Mission Support</a>
        </nav>
        <h1 className="text-2xl font-bold mb-4">SCOAPE-II</h1>
        <p className="text-gray-700 mb-6">
          The Goddard Earth Observing System (GEOS) model is designed to study various Earth Science questions by connecting different model components flexibly.
        </p>

        {/* buttons */}
        <div className="flex mb-8">
          <select className="mr-4 px-2 py-1 border border-gray-300 rounded-sm">
            <option>4k</option>
            <option>5k</option>
            <option>6k</option>
            {/* more options here */}
          </select>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-sm hover:bg-blue-500">
            Download imagery
          </button>
        </div>

        {/* graph */}
        <img src={`${process.env.PUBLIC_URL}/assets/graph.png`} alt="Weather Graph" className="w-full rounded-sm border border-black" />
      </main>
      {/* END CONTENT */}
    </div>
  );
};

export default WeatherForecasts;
