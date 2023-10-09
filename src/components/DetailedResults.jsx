import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
const DetailedResults = ({ setShowDetailedResults }) => {
	const questions = useSelector((state) => state.quiz.questions);
	const answers = useSelector((state) => state.quiz.answers);
	const userAnswers = useSelector((state) => state.quiz.userAnswers);
	const options = useSelector((state) => state.quiz.options);
	const formatString = (text) => {
		let doc = new DOMParser().parseFromString(text, "text/html");
		return doc.documentElement.textContent;
	};
	const navigate = useNavigate();
	// console.log(userAnswers);
	// console.log(answers);
	return (
		<div className="w-full h-max  flex flex-col justify-evenly items-center p-10 relative">
			<button
				className="absolute top-4 left-4 text-2xl text-primary flex justify-center items-center"
				onClick={() => {
					setShowDetailedResults(false);
				}}
			>
				<span>Go Back</span>{" "}
				<IoIosArrowRoundBack className="inline-block text-3xl font-bold" />
			</button>
			<button
				className="absolute bottom-4 right-4 text-2xl text-primary flex justify-center items-center"
				onClick={() => {
					navigate("/quiz");
				}}
			>
				<span>Take Another Quiz</span>{" "}
				<IoIosArrowRoundForward className="inline-block text-3xl font-bold" />
			</button>
			{questions.map((question, questionNumber) => {
				return (
					<div
						className="h-full w-full flex justify-center"
						key={questionNumber}
					>
						<div className="w-max max-w-full p-6">
							<h2 className="text-2xl font-bold text-center">
								{formatString(question)}
							</h2>
							<div className="flex flex-col mt-12 items-center gap-10">
								{options[questionNumber].map((option, index) => {
									return (
										<div className="h-max flex" key={index}>
											<label
												className={`w-max relative flex items-center gap-3 shadow-md rounded-lg text-black text-lg px-6 py-4  ${
													answers[questionNumber] === index &&
													userAnswers[questionNumber] === index
														? "bg-green-300 shadow-secondary"
														: userAnswers[questionNumber] === index
														? "bg-red-300 shadow-secondary"
														: answers[questionNumber] === index
														? "bg-green-300 shadow-secondary"
														: "bg-blue-100"
												}`}
											>
												<input
													className="hidden"
													id={`${questionNumber}${index}`}
													type="radio"
													name="option"
													value={option}
													disabled
												/>
												{formatString(option)}
											</label>
											<div className="flex justify-center items-center mx-2">
												{answers[questionNumber] === index &&
												userAnswers[questionNumber] === index ? (
													<TiTick className="text-green-500 text-3xl" />
												) : userAnswers[questionNumber] === index ? (
													<RxCross2 className="text-red-600 text-3xl"></RxCross2>
												) : answers[questionNumber] === index &&
												  userAnswers[questionNumber] !== null ? (
													<TiTick className="text-green-500 text-3xl" />
												) : (
													<></>
												)}
											</div>
										</div>
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
