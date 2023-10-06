import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Result = () => {
	const navigate = useNavigate();
	const userAnswers = useSelector((state) => state.quiz.userAnswers);
	const answers = useSelector((state) => state.quiz.answers);
	const dispatch = useDispatch();
	const total = answers.length;
	const [score, setScore] = useState(0);
	useEffect(() => {
		if (!isFinished) {
			// navigate("/");
		}
		setScore(getUserScore());
		console.log(userAnswers, answers);
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
	const isFinished = useSelector((state) => state.quiz.isFinished);

	return (
		<div className="w-full h-full max-h-[90vh] bg-gray-100 overflow-hidden">
			<div className="w-11/12 h-full max-w-6xl mx-auto bg-white flex flex-col justify-evenly items-center p-10">
				<h1 className="text-5xl font-bold text-[rgb(0,157,255)] text-center">
					Your Score :
				</h1>
				<div className="h-1/2">
					<CircularProgressbar
						value={(score / total) * 100}
						text={`${score}/${total}`}
						styles={buildStyles({
							// Colors
							pathColor: 'rgb(0, 157, 255)',
							textColor: "rgb(0, 157, 255)",
							trailColor: "#d6d6d6",
						})}
					></CircularProgressbar>
				</div>
				<div className="w-full flex flex-wrap gap-8 justify-center">
					<button className="btn-2">Retake The Quiz</button>
					<button className="btn-2">Take Another Quiz</button>
					<button className="btn-2">View Detailed Results</button>
				</div>
			</div>
		</div>
	);
};

export default Result;
