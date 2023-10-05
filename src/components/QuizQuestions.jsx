import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "../redux/slices/quizSlice";
import Question from "./Question";
const QuizQuestions = () => {
	const quizQuestions = useSelector((state) => state.quiz.questions);
	const currentQuestion = useSelector((state) => state.quiz.currentQuestion);
	const dispatch = useDispatch();
	return (
		<div className="w-11/12 h-full max-w-6xl mx-auto bg-white flex flex-col justify-between items-center p-6">
			<Question question={quizQuestions[currentQuestion]}></Question>
			<div className="w-full flex justify-between">
				<button
					disabled={currentQuestion === 0}
					onClick={() => {
						dispatch(setQuiz({ currentQuestion: currentQuestion - 1 }));
					}}
					className="btn"
				>
					Prev
				</button>
				<button
					disabled={currentQuestion === quizQuestions.length - 1}
					onClick={() => {
						dispatch(setQuiz({ currentQuestion: currentQuestion + 1 }));
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
