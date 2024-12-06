
import React from 'react';

const TestDropdown = () => {
  return (
    <div className="relative">
      <details className="group">
        <summary className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
          Dropdown
        </summary>
        <div className="mt-2 space-y-2 bg-white shadow-lg">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
        </div>
      </details>
    </div>
  );
};

export default TestDropdown;
