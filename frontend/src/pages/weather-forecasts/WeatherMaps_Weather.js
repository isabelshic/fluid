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
        {/* Rest of your content here */}
      </main>
    </div>
  );
}

export default WeatherForecasts;
