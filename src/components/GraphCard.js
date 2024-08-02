import React from 'react';

const GraphCard = ({ image, title, description, items }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-sm overflow-hidden">
        <img src={image} alt={title} className="w-full h-70 object-cover border border-black" />
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4 pb-4 border border-b-zinc-200 border-t-0 border-l-0 border-r-0 ">{description}</p>
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
