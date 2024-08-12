import React from 'react';
import GraphCard from '../components/GraphCard';

const Home = () => {
  const graphData = [
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Impacts of new atmospheric physics in the updated GEOS FP system (Version 5.25)',
      description: 'The January 2020 upgrade included major changes to the atmospheric component of the GEOS model.',
      items: [],
      link: '/impacts-of-new-atmospheric-physics'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Transition to the RRTMG Shortwave Radiation Code in GEOS Models',
      description: 'In January 2020, the GMAO introduced the shortwave component of the radiative transfer.',
      items: [],
      link: '/transition-to-rrtmg'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/graph.png`,
      title: 'Ozone Data from Ultraviolet Satellite Measurements in GEOS Products',
      description: 'Atmospheric ozone is a critically important component of the Earth system.',
      items: [],
      link: '/ozone-data'
    },
  ];

  const backgroundImage = `${process.env.PUBLIC_URL}/assets/hero-background.png`;

  return (
    <div className="relative w-full">

      {/* HERO SECTION */}
      <div
        className="relative h-50 bg-cover bg-center bg-slate-950"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-32">
          <h1 className="text-white text-4xl font-semibold mb-8">About GMAO FLUID</h1>
          <p className="text-white text-lg mb-16 max-w-3xl">
            The Global Modeling and Assimilation Office (GMAO) Framework for Live User-Invoked Data (FLUID) is a powerful tool designed to make it easier to analyze and visualize climate data. FLUID offers interactive applications that support the GMAO mission by providing quick and intuitive access to experimental and climatological data.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-600 text-white px-5 py-1 rounded-sm text-base font-normal hover:bg-blue-500">Learn about GMAO</a>
            <a href="#" className="text-white px-5 py-1 rounded-sm text-base font-normal border border-white hover:bg-white hover:text-black">How to use FLUID →</a>
          </div>
        </div>
      </div>
      {/* END HERO SECTION */}

      {/* WHY FLUID SECTION */}
      <div className="container mx-auto py-16">
        <h2 className="text-2xl font-bold mb-4">Why FLUID?</h2>
        <p className="text-lg mb-10">
          Modern data analysis demands more efficient and user-friendly tools. FLUID steps up to this challenge by delivering data "as-needed," ensuring scalability and ease of access. With the vast amount of GMAO data stored on the NASA Center for Climate Simulation (NCCS) systems, our tools are optimized for diverse research needs and are accessible from various devices for both internal and public use.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-start outline outline-gray-200 p-4 rounded-md">
            <div className="text-2xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Quick Data Access</h3>
            <p>FLUID provides instantaneous access to vast amounts of climate data, ensuring timely progress in research.</p>
          </div>
          <div className="text-start outline outline-gray-200 p-4 rounded-md">
            <div className="text-2xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Adaptable Solutions</h3>
            <p>FLUID scales to meet the needs of both individual researchers and large teams, handling diverse data requests seamlessly.</p>
          </div>
          <div className="text-start outline outline-gray-200 p-4 rounded-md">
            <div className="text-2xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
            <p>FLUID's design allows easy navigation and utilization of applications from any device, regardless of technical expertise.</p>
          </div>
        </div>
      </div>
      {/* END WHY FLUID SECTION */}

      {/* HOW DOES FLUID WORK SECTION */}
      <div className="container mx-auto p-12 bg-slate-950 rounded-md">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-6 text-white">How does FLUID work?</h2>
            <p className="text-lg mb-4 text-white">
              GMAO FLUID is built where the data resides, seamlessly connecting GMAO experimental data with the needs of scientists at GMAO and other NASA organizations.
            </p>
            <p className="text-lg text-white mb-8">
              It operates in a virtual environment on the NCCS development DataPortal and is powered by Python. The backend uses the Grid Analysis and Display System (GrADS) software for efficient image processing.
            </p>
            <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-sm text-base font-normal hover:bg-blue-500">Learn about GMAO</a>
          </div>
          <div className="md:w-1/2">
            <img src={`${process.env.PUBLIC_URL}/assets/graph.png`} alt="How FLUID works" className="w-full rounded-sm border border-black pl-8" />
          </div>
        </div>
      </div>
      {/* END HOW DOES FLUID WORK SECTION */}

      {/* WHO CAN BENEFIT SECTION */}
      <div className="container mx-auto py-16">
        <h2 className="text-2xl font-bold mb-4">Who can benefit?</h2>
        <p className="text-lg mb-10">
          Modern data analysis demands more efficient and user-friendly tools. FLUID steps up to this challenge by delivering data "as-needed," ensuring scalability and ease of access. With the vast amount of GMAO data stored on the NASA Center for Climate Simulation (NCCS) systems, our tools are optimized for diverse research needs and are accessible from various devices for both internal and public use.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-start outline outline-gray-200 p-4 rounded-md">
            <div className="text-2xl mb-4">👨‍🔬</div>
            <h3 className="text-xl font-semibold mb-2">Scientists and Researchers</h3>
            <p>Access experimental data and visualizations quickly and efficiently.</p>
          </div>
          <div className="text-start outline outline-gray-200 p-4 rounded-md">
            <div className="text-2xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Public Users</h3>
            <p>Explore climatological data with user-friendly applications.</p>
          </div>
          <div className="text-start outline outline-gray-200 p-4 rounded-md">
            <div className="text-2xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">NASA Organizations</h3>
            <p>Benefit from integrated data products and enhanced scalability.</p>
          </div>
        </div>
      </div>
      {/* END WHO CAN BENEFIT SECTION */}

      {/* HOW IS FLUID USED SECTION */}
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">How is FLUID used?</h2>
        <p className="text-lg mb-8">
          Research in the GMAO emphasizes the use of satellite observations in global modeling systems, comprised of atmosphere, ocean, land-surface, and biogeochemistry model components. These components are integrated for assimilation and forecast systems to address questions about climate variability, water and energy budgets, composition, and weather and climate prediction; to form an integrated Earth system analysis; and to contribute to the design of future satellite missions.
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
      {/* END HOW IS FLUID USED SECTION */}
    </div>
  );
};

export default Home;
