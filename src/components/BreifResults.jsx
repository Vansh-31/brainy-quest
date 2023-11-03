import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "../redux/slices/quizSlice";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const BreifResults = ({ setShowDetailedResults }) => {
	const navigate = useNavigate();
	const userAnswers = useSelector((state) => state.quiz.userAnswers);
	const answers = useSelector((state) => state.quiz.answers);
	const isFinished = useSelector((state) => state.quiz.isFinished);
	const dispatch = useDispatch();
	const total = answers.length;
	const [score, setScore] = useState(0);
	useEffect(() => {
		if (!isFinished) {
			navigate("/");
		}
		setScore(getUserScore());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	function getUserScore() {
		let score = 0;
		for (let index = 0; index < total; index++) {
			score += userAnswers[index] === answers[index] ? 1 : 0;
		}
		// console.log(score);
		// console.log((score/total)*100)
		return score;
	}
	return (
		<div className="h-full  flex flex-col justify-evenly items-center p-10">
			<h1 className="text-5xl font-bold text-[rgb(0,157,255)] text-center">
				Your Score :
			</h1>
			<div className="h-1/2 m-5">
				<CircularProgressbar
					value={(score / total) * 100}
					text={`${score}/${total}`}
					styles={buildStyles({
						// Colors
						pathColor: "rgb(0, 157, 255)",
						textColor: "rgb(0, 157, 255)",
						trailColor: "#d6d6d6",
					})}
				></CircularProgressbar>
			</div>
			<div className="w-full flex flex-wrap gap-8 justify-center">
				<button
					onClick={() => {
						dispatch(
							setQuiz({
								userAnswers: Array(answers.length).fill(null),
								currentQuestion: 0,
								isOnGoing: true,
								isFinished: false,
							})
						);
						navigate("/quiz");
					}}
					className="btn-2"
				>
					Retake The Quiz
				</button>
				<button
					onClick={() => {
						dispatch(
							setQuiz({
								isOnGoing: false,
							})
						);
						navigate("/quiz");
					}}
					className="btn-2"
				>
					Take Another Quiz
				</button>
				<button
					onClick={() => {
						setShowDetailedResults(true);
					}}
					className="btn-2"
				>
					View Detailed Results
				</button>
			</div>
		</div>
	);
};

export default BreifResults;
