import React from "react";

const QuizSetUpCard = ({ heading, values,quizConfig,setQuizConfig,config }) => {
  return (
    <div className="w-1/4 min-w-[256px] px-4 py-8  shadow-lg shadow-primary rounded-lg">
      <div className="text-2xl font-bold text-primaryDark text-center uppercase mb-4">
        {heading}
      </div>
      <select className="w-full p-2 border border-gray-300 rounded"
      value={quizConfig[config]}
      onChange={(e)=>{
        setQuizConfig((prev)=>{
            return {...prev,[config]:e.target.value}
        })
      }}>
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
