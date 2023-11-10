import React from "react";

const DateTimeDisplay = ({ value, type, className }) => {
  return (
    <div className="bg-[#11998E] text-white rounded-md">
      <div
        className={`w-[40px] h-[40px] flex justify-center items-center ${className}`}>
        <p>{value}</p>
        {/* <span>{type}</span> */}
      </div>
    </div>
  );
};

export default DateTimeDisplay;
