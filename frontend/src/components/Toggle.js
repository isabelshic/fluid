import React, { useState } from "react";

const Toggle = ({ 
  label = "",
  initialState = false,
}) => {
  const [isOn, setIsOn] = useState(initialState);
  
  return (
    <div className="mb-4">
      {label && <p className="text-base font-bold mb-2">{label}</p>}  
      <div className="flex items-center gap-2">
        <div
          role="switch"
          aria-checked={isOn}
          onClick={() => setIsOn(!isOn)}
          className={`
            relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
            ${isOn ? 'bg-blue-600' : 'bg-gray-300'}
          `}
        >
          <div 
            className={`
              absolute top-1 left-1 bg-white h-4 w-4 rounded-full shadow-md 
              transform transition-transform duration-200 ease-in-out
              ${isOn ? 'translate-x-6' : 'translate-x-0'}
            `}
          />
        </div>
        <span className="text-sm text-gray-600">
          {isOn ? "On" : "Off"}
        </span>
      </div>
    </div>
  );
};

export default Toggle;