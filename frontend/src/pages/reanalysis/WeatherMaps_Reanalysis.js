import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaSearch } from 'react-icons/fa';
import CalendarSelect from '../../components/CalendarSelect';
import Dropdown from '../../components/Dropdown';
import Toggle from '../../components/Toggle';
import DropdownWithSearch from '../../components/DropdownWithSearch';

const WeatherForecasts = () => {
  const [configData, setConfigData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fields: '',
    regions: '',
    initialTimes: '',
    leadHours: '',
    showCycloneTracks: false
  });
  const [graphUrl, setGraphUrl] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('');

  // Fetch configuration data
  useEffect(() => {
    fetch('/data.json') 
      .then(response => response.json())
      .then(data => {
        setConfigData(data);
        setFormData({
          fields: data.fields.selected,
          regions: data.regions.selected,
          initialTimes: data.initialTimes.selected,
          leadHours: data.leadHours.selected,
          showCycloneTracks: false
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
        setLoading(false);
      });
  }, []);

  // URL parameter mappings
  const regionMap = {
    'Africa': 'afr',
    'Australia': 'aus',
    'Global': 'global',
    'Mid Atlantic': 'matl',
    'North America': 'nam',
    'North Polar': 'npol',
    'Pacific': 'pac',
    'South America': 'sam',
    'Seven Seas': 'seas',
    'South Polar': 'spol'
  };

  const fieldMap = {
    'Abs EPV': 'epv',
    'Temperature': 'temp',
    'Vert Velocity': 'vvel',
    'Humidity': 'humid',
    'T2M': 't2m',
    'Vorticity': 'vort',
    'Wind Speed': 'wind'
  };

  const handleGenerateGraph = () => {
    const baseUrl = 'https://fluid.nccs.nasa.gov/reanalysis/classic_merra2/';
    const params = new URLSearchParams({
      stream: 'MERRA2',
      field: fieldMap[formData.fields] || formData.fields.toLowerCase(),
      region: regionMap[formData.regions] || 'global',
      fcst: formData.initialTimes?.replace(/[^0-9]/g, '') || '',
      one_click: '1',
      tau: formData.leadHours?.split(' ')[0] || '00',
      track: formData.showCycloneTracks ? 'tropical' : ''
    });

    setGraphUrl(`${baseUrl}?${params.toString()}`);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!configData) {
    return <div className="flex items-center justify-center h-screen">Error loading configuration</div>;
  }

  return (
    <div className="flex flex-col md:flex-row container mx-auto py-10 px-4">
      {/* SIDE BAR */}
      <aside className="md:w-1/3 lg:w-1/4 bg-gray-100 border border-black p-4 mr-8 rounded-sm mb-6 md:mb-0">
        <DropdownWithSearch 
          label={configData.fields.label}
          options={configData.fields.all}
          selectedOption={formData.fields}
          onSelect={(value) => setFormData(prev => ({ ...prev, fields: value }))}
        />
        <DropdownWithSearch 
          label={configData.regions.label}
          options={configData.regions.all}
          selectedOption={formData.regions}
          onSelect={(value) => setFormData(prev => ({ ...prev, regions: value }))}
        />
        <CalendarSelect
          label="Analysis Date"
          onSelectDate={(date) => setFormData(prev => ({ ...prev, initialTimes: date }))}
        />
        <DropdownWithSearch 
          label={configData.leadHours.label}
          options={configData.leadHours.all}
          selectedOption={formData.leadHours}
          onSelect={(value) => setFormData(prev => ({ ...prev, leadHours: value }))}
        />
        <Toggle 
          label="Tropical Cyclone Tracks"
          initialState={formData.showCycloneTracks}
          onChange={(value) => setFormData(prev => ({ ...prev, showCycloneTracks: value }))}
        />
        <button 
          className="w-full bg-blue-600 text-white py-1 rounded-sm hover:bg-blue-500"
          onClick={handleGenerateGraph}
        >
          Generate graph
        </button>
      </aside>

      {/* CONTENT */}
      <main className="md:w-2/3 lg:w-3/4 p-4">
        <nav className="mb-4">
          <a href="/reanalysis" className="text-blue-600 underline">&lt; Reanalysis</a>
        </nav>
        <h1 className="text-2xl font-bold mb-4">Weather Maps</h1>
        <p className="text-gray-700 mb-6">
          The Goddard Earth Observing System (GEOS) model is designed to study various Earth Science questions by connecting different model components flexibly.
        </p>

        {/* buttons */}
        <div className="flex mb-8">
          <Dropdown
            options={['4k', '5k', '6k']}
            value={selectedQuality}
            onChange={setSelectedQuality}
          />
          <button className="bg-blue-600 text-white px-4 py-1 ml-2 rounded-sm hover:bg-blue-500">
            Download imagery
          </button>
        </div>

        {/* graph */}
        {graphUrl ? (
          <img 
            src={graphUrl} 
            alt="Weather Graph" 
            className="w-full rounded-sm border border-black" 
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-sm border border-black">
            <p className="text-gray-500">Select parameters and generate graph</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default WeatherForecasts;