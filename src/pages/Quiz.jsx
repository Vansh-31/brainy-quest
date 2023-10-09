import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../redux/slices/loadingSlice";
import { setQuiz } from "../redux/slices/quizSlice";
import QuizSetUpCard from "../components/QuizSetUpCard";
import QuizQuestions from "../components/QuizQuestions";

import Loader from "../components/Loader";
const BASE_URL = "https://opentdb.com/api.php";
const triviaCategoriesUrl = "https://opentdb.com/api_category.php";
const Quiz = () => {
	const loading = useSelector((state) => state.loading);
	const onGoingQuiz = useSelector((state) => state.quiz.isOnGoing);
	const dispatch = useDispatch();
	const [catagories, setCatetories] = useState({});
	const [quizConfig, setQuizConfig] = useState({
		category: "General Knowledge",
		totalQuestions: 10,
		difficulty: "Easy",
	});
	useEffect(() => {
		getTriviaCategories();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	const startQuiz = async () => {
		dispatch(setLoading(true));
		dispatch(setQuiz({ isOnGoing: true, isFinished: false }));
		let url = `${BASE_URL}?amount=${quizConfig.totalQuestions}&category=${
			catagories[quizConfig.category]
		}&difficulty=${quizConfig.difficulty.toLowerCase()}&type=multiple`;
		// First try to fetch questions with token if not enough questions are fetched then fetch without token
		let results = await getData(
			`${url}&token=${localStorage.getItem("triviaSessionToken")}`
		);
		if (results.length < quizConfig.totalQuestions) {
			results = await getData(url);
		}
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		function shuffleArray(arr) {
			const shuflled = [...arr];
			for (let i = 0; i < arr.length; i++) {
				const randomIdx = getRandomInt(arr.length);
				[shuflled[i], shuflled[randomIdx]] = [shuflled[randomIdx], shuflled[i]];
			}
			return shuflled;
		}
		// console.log(results);
		const questions = results.map((data) => {
			return data.question;
		});
		const options = results.map((data) => {
			return shuffleArray([...data.incorrect_answers, data.correct_answer]);
		});
		const answers = results.map((data) => {
			return data.correct_answer;
		});
		for (let index = 0; index < options.length; index++) {
			answers[index] = options[index].indexOf(answers[index]);
		}
		// console.log(options);
		// console.log(answers);
		dispatch(
			setQuiz({
				questions: questions,
				options: options,
				answers: answers,
				userAnswers: Array(quizConfig.totalQuestions).fill(null),
				currentQuestion: 0,
			})
		);
		dispatch(setLoading(false));
	};
	async function getTriviaCategories() {
		dispatch(setLoading(true));
		const response = await fetch(triviaCategoriesUrl);
		const data = await response.json();
		const { trivia_categories } = data;
		const fetched_categories = {};
		trivia_categories.forEach((category) => {
			fetched_categories[category.name] = category.id;
		});
		setCatetories(fetched_categories);
		dispatch(setLoading(false));
	}
	async function getData(url) {
		const response = await fetch(url);
		const data = await response.json();
		return data.results;
	}
	return (
		<>
			{loading ? (
				<Loader></Loader>
			) : onGoingQuiz ? (
				<QuizQuestions></QuizQuestions>
			) : (
				<div className="w-11/12 h-full max-w-6xl mx-auto bg-white flex flex-col items-center p-10">
					{/* Quiz Configuration */}
					<div className="w-full flex justify-evenly items-center flex-wrap gap-y-8">
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
					<div className="w-full h-4/5 flex justify-center items-center">
						<button onClick={startQuiz} className="btn">
							Start Quiz
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Quiz;
