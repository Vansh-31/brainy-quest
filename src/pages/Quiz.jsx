import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../redux/slices/loadingSlice";
import { setQuizQuestions } from "../redux/slices/quizQuestionsSlice";
import QuizSetUpCard from "../components/QuizSetUpCard";
import QuizQuestions from "../components/QuizQuestions";
import Loader from "../components/Loader";
const Quiz = ({ catagories }) => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);
	const [quizConfig, setQuizConfig] = useState({
		category: "General Knowledge",
		totalQuestions: 10,
		difficulty: "Easy",
	});
	const [onGoingQuiz, setOnGoingQuiz] = useState(false);
	const startQuiz = async () => {
		dispatch(setLoading(true));
		setOnGoingQuiz(true);
		const response = await fetch(
			`https://opentdb.com/api.php?amount=${
				quizConfig.totalQuestions
			}&category=${
				catagories[quizConfig.category]
			}&difficulty=${quizConfig.difficulty.toLowerCase()}&type=multiple`
		);
		const data = await response.json();
		dispatch(setQuizQuestions(data.results));
		dispatch(setLoading(false));
	};
	return (
		<div className="w-full h-full max-h-[90vh] bg-gray-100 overflow-hidden">
			{loading ? (
				<Loader></Loader>
			) : onGoingQuiz ? (
				<QuizQuestions></QuizQuestions>
			) : (
				<div className="w-11/12 h-full max-w-6xl mx-auto bg-white flex flex-col items-center p-6">
					{/* Quiz Configuration */}
					<div className="w-full h-1/3 flex justify-evenly items-center">
						<QuizSetUpCard
							quizConfig={quizConfig}
							setQuizConfig={setQuizConfig}
							config="category"
							heading="Categories"
							values={Object.keys(catagories)}
						></QuizSetUpCard>
						<QuizSetUpCard
							quizConfig={quizConfig}
							setQuizConfig={setQuizConfig}
							config="totalQuestions"
							heading="Total Questions"
							values={[5, 10, 15, 20, 25]}
						></QuizSetUpCard>
						<QuizSetUpCard
							quizConfig={quizConfig}
							setQuizConfig={setQuizConfig}
							config="difficulty"
							heading="Difficulty Level"
							values={["Easy", "Medium", "Hard"]}
						></QuizSetUpCard>
					</div>
					<div className="w-full h-full flex justify-center items-center">
						<button
							onClick={startQuiz}
							className="btn"
						>
							Start Quiz
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
