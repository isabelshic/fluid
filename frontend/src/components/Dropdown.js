import React, { useState } from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";


const Dropdown = ({
  options = [],
  selectedOption = "",
  onSelect = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 py-1 border border-gray-300 rounded-sm bg-white text-left flex items-center justify-between min-w-[80px]"
      >
        <span>{selectedOption || "Select..."}</span>
        <span className="text-gray-500 ml-2"><FaCaretDown /></span>
      </button>
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-sm mt-1 z-10">
          <ul className="max-h-48 overflow-y-auto">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;