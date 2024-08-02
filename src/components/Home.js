import React from 'react';
import backgroundImage from '../assets/hero-background.png';
import GraphCard from './GraphCard';
import weatherImage from '../assets/graph.png';

const Home = () => {
  const graphData = [
    {
      image: weatherImage,
      title: 'Weather Forecasts',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
        'Datagrams',
        'WxMaps',
        'Observing System Statistics',
        'Radiance Monitoring',
        'Observation Impacts',
      ],
    },
    {
      image: weatherImage,
      title: 'Aerosol & Gas Forecasts',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
        'Forward Processing (FP)',
        'Composition Forecast (CF)',
      ],
    },
    {
      image: weatherImage,
      title: 'Seasonal Prediction',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
        'Datagrams',
        'WxMaps',
        'Observing System Statistics',
        'Radiance Monitoring',
        'Observation Impacts',
      ],
    },
    {
      image: weatherImage,
      title: 'Reanalysis',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
        'Datagrams',
        'WxMaps',
        'Observing System Statistics',
        'Radiance Monitoring',
        'Observation Impacts',
      ],
    },
    {
      image: weatherImage,
      title: 'Mission Support',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
        'Datagrams',
        'WxMaps',
        'Observing System Statistics',
        'Radiance Monitoring',
        'Observation Impacts',
      ],
    },
  ];

  return (
    <div className="relative w-full">
      <div 
        className="relative h-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-32">
          <h1 className="text-white text-4xl font-semibold mb-8">What is FLUID?</h1>
          <p className="text-white text-lg mb-16 max-w-3xl">
            The Global Modeling and Assimilation Office (GMAO) Framework for Live User-Invoked Data (FLUID) is a powerful tool designed to make it easier to analyze and visualize climate data. FLUID offers interactive applications that support the GMAO mission by providing quick and intuitive access to experimental and climatological data.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-600 text-white px-5 py-1 rounded-sm text-base font-normal hover:bg-blue-500">Learn more</a>
            <a href="#" className="text-white px-5 py-1 rounded-sm text-base font-normal border border-white hover:bg-white hover:text-black">How to use FLUID →</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">Available Graphs</h2>
        <p className="text-lg mb-8 max-w-3xl">
          The Goddard Earth Observing System (GEOS) model is designed to study various Earth Science questions by connecting different model components flexibly.
        </p>
        <div className="flex flex-wrap -mx-4">
          {graphData.map((graph, index) => (
            <GraphCard
              key={index}
              image={graph.image}
              title={graph.title}
              description={graph.description}
              items={graph.items}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
