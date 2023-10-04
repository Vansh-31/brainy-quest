import React from "react";

const QuizSetUpCard = ({ heading, values }) => {
  return (
    <div className="w-1/4 p-4 bg-white shadow-lg shadow-primary rounded-lg">
      <div className="text-2xl font-bold text-primaryDark text-center uppercase mb-4">
        {heading}
      </div>
      <select className="w-full p-2 border border-gray-300 rounded">
        {values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuizSetUpCard;
