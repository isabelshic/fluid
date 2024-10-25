import React, { useState, useEffect } from "react";
import DropdownWithSearch from "../../components/DropdownWithSearch"; // Import the component

function WeatherForecasts() {
  const [dropdownData, setDropdownData] = useState({
    fields: { label: "Fields", all: [], selected: "" },
    regions: { label: "Regions", all: [], selected: "" },
    initialTimes: { label: "Forecast Initial Time", all: [], selected: "" },
    leadHours: { label: "Forecast Lead Hour", all: [], selected: "" },
  });

  const [selectedValues, setSelectedValues] = useState({
    fields: "",
    regions: "",
    initialTimes: "",
    leadHours: "",
  });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDropdownData({
          fields: data.fields || { label: "Fields", all: [], selected: "" },
          regions: data.regions || { label: "Regions", all: [], selected: "" },
          initialTimes: data.initialTimes || { label: "Forecast Initial Time", all: [], selected: "" },
          leadHours: data.leadHours || { label: "Forecast Lead Hour", all: [], selected: "" },
        });

        setSelectedValues({
          fields: data.fields?.selected || "",
          regions: data.regions?.selected || "",
          initialTimes: data.initialTimes?.selected || "",
          leadHours: data.leadHours?.selected || "",
        });
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const handleSelect = (key, value) => {
    setSelectedValues((prevSelected) => ({
      ...prevSelected,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row container mx-auto py-10 px-4">
      {/* SIDE BAR */}
      <aside className="md:w-1/3 lg:w-1/4 bg-gray-100 border border-black p-4 mr-8 rounded-sm mb-6 md:mb-0">
        {Object.keys(dropdownData).map((key) => (
          <DropdownWithSearch
            key={key}
            label={dropdownData[key].label}
            options={dropdownData[key].all}
            selectedOption={selectedValues[key]}
            onSelect={(value) => handleSelect(key, value)}
          />
        ))}

        <button className="w-full bg-blue-600 text-white py-1 rounded-sm hover:bg-blue-500">
          Generate graph
        </button>
      </aside>
      {/* END SIDE BAR */}

      {/* CONTENT */}
      <main className="md:w-2/3 lg:w-3/4 p-4">
        <nav className="mb-4">
          <a href="/weather-forecasts" className="text-blue-600 underline">
            &lt; Weather Forecasts
          </a>
        </nav>
        <h1 className="text-2xl font-bold mb-4">Weather Maps</h1>
        <p className="text-gray-700 mb-6">
          The Goddard Earth Observing System (GEOS) model is designed to study
          various Earth Science questions by connecting different model
          components flexibly.
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
        <img
          src={`${process.env.PUBLIC_URL}/assets/graph.png`}
          alt="Weather Graph"
          className="w-full rounded-sm border border-black"
        />
      </main>
    </div>
  );
}

export default WeatherForecasts;
