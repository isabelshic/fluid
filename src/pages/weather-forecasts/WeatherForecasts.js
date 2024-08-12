import React from 'react';
import GraphCard from '../../components/GraphCard';

const Home = () => {
  const graphData = [
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Datagrams',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/weather-forecasts/weather-maps'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Weather Maps',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/weather-forecasts/weather-maps'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Seasonal Prediction',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/weather-forecasts/weather-maps'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Reanalysis',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/weather-forecasts/weather-maps'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Mission Support',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/weather-forecasts/weather-maps'
    },
  ];

  const backgroundImage = `${process.env.PUBLIC_URL}/assets/hero-background.png`;

  return ( 
    <div className="relative w-full"> 

      {/* AVAILABLE GRAPHS SECTION */}
      <div className="container mx-auto py-16">
        <nav className="mb-4">
          <a href="/" className="text-blue-600 underline">&lt; Home</a>
        </nav>
        <h2 className="text-2xl font-bold mb-4">Weather Analyses and Forecasts</h2>
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
              link={graph.link}
            />
          ))}
        </div>
      </div>
      {/* END AVAILABLE GRAPHS SECTION */}
    </div>
  );
};

export default Home;
