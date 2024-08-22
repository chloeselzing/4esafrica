import React from 'react';

const Textarea = ({ label, id, placeholder, rows, onChange, value }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-blackBackground text-sm font-bold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Textarea;
