import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "../redux/slices/quizSlice";
const DetailedResults = () => {
	const questions = useSelector((state) => state.quiz.questions);
	// const answers = useSelector((state) => state.quiz.answers);
	const userAnswers = useSelector((state) => state.quiz.userAnswers);
	const options = useSelector((state) => state.quiz.options);
	const dispatch = useDispatch();
	const formatString = (text) => {
		let doc = new DOMParser().parseFromString(text, "text/html");
		return doc.documentElement.textContent;
	};
	return (
		<div className="w-full h-max bg-white flex flex-col justify-evenly items-center p-10">
			{questions.map((question, questionNumber) => {
				return (
					<div className="h-full w-full flex justify-center" key={questionNumber}>
						<div className="w-max max-w-full p-6">
							<h2 className="text-2xl font-bold text-center">
								{formatString(question)}
							</h2>
							<div className="flex flex-col mt-12 items-center gap-10">
								{options[questionNumber].map((option, index) => {
									return (
										<label
											className={`w-max flex items-center gap-3 shadow-md rounded-lg text-lg px-6 py-4 cursor-pointer hover:bg-blue-300 hover:shadow-secondary transition-all duration-100 ease-in-out  ${
												userAnswers[questionNumber] === index
													? "bg-blue-300 shadow-secondary"
													: "bg-blue-100"
											}`}
											key={index}
										>
											<input
												className="hidden"
												id={`${questionNumber}${index}`}
												type="radio"
												name="option"
												value={option}
												checked={userAnswers[questionNumber] === index}
												onChange={() => {
													const newAnswers = [...userAnswers];
													newAnswers[questionNumber] = index;
													dispatch(setQuiz({ userAnswers: newAnswers }));
												}}
											/>
											{formatString(option)}
										</label>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DetailedResults;
