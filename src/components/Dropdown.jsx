'use client'
import React, { useState } from "react";

const Dropdown = ({ title, items, onSelect,index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="text-whiteBackground font-bold text-[15px] hover:text-gray-200"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="absolute bg-gray-900 shadow-md rounded top-full left-0 py-2 w-[200px]">
          {items.map((item) => (
            <li
              key={index} 
              className="hover:bg-gray-700 px-2 py-1"
              onClick={() => handleItemClick(item)}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
