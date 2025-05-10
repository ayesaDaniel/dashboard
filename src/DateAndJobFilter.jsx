import { useState } from 'react';

 export default function JobFilters() {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showJobDropdown, setShowJobDropdown] = useState(false);

  return (
    <div className="relative flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Search for Jobs"
        className="border px-4 py-2 rounded-md w-full sm:w-auto flex-2"
      />

      {/* Filter Button */}
      <button className="border px-4 py-2 rounded-md text-sm text-[#1f2a56]">
        Filter
      </button>

      {/* Date Dropdown */}
      <div className="relative">
        <button
          onClick={() => {
            setShowDateDropdown(!showDateDropdown);
            setShowJobDropdown(false);
          }}
          className="border px-4 py-2 rounded-md text-sm text-[#1f2a56] bg-white"
        >
          Date
        </button>
        {showDateDropdown && (
          <div className="absolute z-10 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 text-sm">
            {['Last 1 Week', 'Last 2 Weeks', 'Last Month', 'Last 5 Months'].map(option => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Jobs Dropdown */}
      <div className="relative">
        <button
          onClick={() => {
            setShowJobDropdown(!showJobDropdown);
            setShowDateDropdown(false);
          }}
          className="border px-4 py-2 rounded-md text-sm text-[#1f2a56] bg-white"
        >
          Jobs
        </button>
        {showJobDropdown && (
          <div className="absolute z-10 mt-2 w-44 bg-white rounded-lg shadow-lg py-2 text-sm">
            {['Technological jobs', 'Business jobs', 'Handy jobs', 'Scientific jobs'].map(option => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
