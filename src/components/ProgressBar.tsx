import React from "react";

const ProgressBar = ({ skill = "Tailwind", percent = 90 }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]  p-5 max-w-full ">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-700 font-medium">{skill}</div>
          <div className="text-gray-600">{percent}%</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className="bg-blue-600 h-3 rounded-full transition-all duration-300" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
