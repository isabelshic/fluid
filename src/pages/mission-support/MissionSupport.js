import React from 'react';
import GraphCard from '../../components/GraphCard';

const Home = () => {
  const graphData = [
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'ARCSIX',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/mission-support/ARCSIX'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'BLUEFLUX',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/mission-support/BLUEFLUX'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'PACE-PAX',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/mission-support/PACE-PAX'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'SARP',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/mission-support/SARP'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'SARP-EAST',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/mission-support/SARP-EAST'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'SARP-WEST',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/mission-support/SARP-WEST'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'SCOAPE-II',
      description: 'The Goddard Earth Observing System model is designed to study various Earth Science questions.',
      items: [
      ],
      link: '/mission-support/SCOAPE-II'
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
        <h2 className="text-2xl font-bold mb-4">Mission Support</h2>
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
