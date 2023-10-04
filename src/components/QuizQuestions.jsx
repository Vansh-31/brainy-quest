import React, { useState } from "react";
import { useSelector } from "react-redux";
import Question from "./Question";
const QuizQuestions = () => {
	const quizQuestions = useSelector((state) => state.quizQuestions);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	console.log(quizQuestions[currentQuestion]);
	return (
		<div className="w-11/12 h-full max-w-6xl mx-auto bg-white flex flex-col justify-between items-center p-6">
			<Question {...quizQuestions[currentQuestion]}></Question>
			<div className="w-full flex justify-between">
				<button
					disabled={currentQuestion === 0}
					onClick={() => {
						setCurrentQuestion((prev) => prev - 1);
					}}
					className="btn"
				>
					Prev
				</button>
				<button
					disabled={currentQuestion === quizQuestions.length - 1}
					onClick={() => {
						setCurrentQuestion((prev) => prev + 1);
					}}
					className="btn"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default QuizQuestions;
