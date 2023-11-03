import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "../redux/slices/quizSlice";
import Question from "./Question";
import SubmitOverlay from "./SubmitOverlay";
const QuizQuestions = () => {
	const quizQuestions = useSelector((state) => state.quiz.questions);
	const quizOptions = useSelector((state) => state.quiz.options);
	const currentIndex = useSelector((state) => state.quiz.currentIndex);
	const userAnswers = useSelector((state) => state.quiz.userAnswers);
	const [submitOverlayVisiblity, setSubmitOverlayVisiblity] = useState(false);
	const dispatch = useDispatch();
	return (
		<>
			<SubmitOverlay
				submitOverlayVisiblity={submitOverlayVisiblity}
				setSubmitOverlayVisiblity={setSubmitOverlayVisiblity}
			></SubmitOverlay>
			<div className="w-11/12 h-full max-w-6xl mx-auto  flex flex-col justify-between items-center p-10 min-h-[650px]">
				<Question
					questionNumber={currentIndex}
					question={quizQuestions[currentIndex]}
					options={quizOptions[currentIndex]}
					userAnswers={userAnswers}
				></Question>
				<div className="w-full flex justify-between">
					<button
						disabled={currentIndex === 0}
						onClick={() => {
							dispatch(setQuiz({ currentIndex: currentIndex - 1 }));
						}}
						className="btn"
					>
						Prev
					</button>
					{currentIndex === quizQuestions.length - 1 ? (
						<button
							onClick={() => {
								setSubmitOverlayVisiblity(true);
							}}
							className="btn"
						>
							Submit
						</button>
					) : (
						<button
							onClick={() => {
								dispatch(setQuiz({ currentIndex: currentIndex + 1 }));
							}}
							className="btn"
						>
							Next
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default QuizQuestions;
