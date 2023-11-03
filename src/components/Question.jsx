import React from "react";
import { useDispatch } from "react-redux";
import { setQuiz } from "../redux/slices/quizSlice";
const Question = ({ questionNumber, question, options, userAnswers }) => {
	const dispatch = useDispatch();
	const formatString = (text) => {
		let doc = new DOMParser().parseFromString(text, "text/html");
		return doc.documentElement.textContent;
	};
	return (
		<div className="h-full w-full flex justify-center min-h-[650px]">
			<div className="w-max max-w-full p-6">
				<h2 className="text-xl font-bold text-center md:text-2xl">
					{formatString(question)}
				</h2>
				<div className="flex flex-col mt-12 items-center gap-10">
					{options.map((option, index) => {
						return (
							<label
								className={`w-max flex items-center gap-3 shadow-md rounded-lg text-black text-lg px-6 py-4 cursor-pointer hover:bg-blue-300 hover:shadow-secondary transition-all duration-100 ease-in-out  ${
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
};

export default Question;
