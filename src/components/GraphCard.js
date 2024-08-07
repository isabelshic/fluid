import React from 'react';
import { Link } from 'react-router-dom';

const GraphCard = ({ image, title, description, items, link }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      
      <div className="bg-white rounded-sm overflow-hidden">
        <Link to={link}>
          <img src={image} alt={title} className="w-full h-70 object-cover border border-black" />
        </Link>
        <div className="pt-4">
          <Link to={link}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
          </Link>
          <p className="text-gray-700 mb-4 pb-4 border-b border-gray-200">{description}</p>
          <ul className="list-disc list-inside">
            {items.map((item, index) => (
              <li key={index} className="text-black">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
