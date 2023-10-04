import React from "react";
import { useSelector } from "react-redux";
import QuizSetUpCard from "../components/QuizSetUpCard";
import Loader from "../components/Loader";
const Quiz = ({ catagories }) => {
	const loading = useSelector((state) => state.loading);
	return (
		<div className="w-full h-full max-h-[90vh] bg-gray-100 overflow-hidden">
			{loading ? (
				<Loader></Loader>
			) : (
				<div className="w-11/12 h-full max-w-6xl mx-auto bg-white flex flex-col items-center p-6">
					{/* Quiz Configuration */}
					<div className="w-full h-1/3 flex justify-evenly items-center">
						<QuizSetUpCard
							heading="Catagories"
							values={Object.keys(catagories)}
						></QuizSetUpCard>
						<QuizSetUpCard
							heading="Total Questions"
							values={[5, 10, 15, 20, 25]}
						></QuizSetUpCard>
						<QuizSetUpCard
							heading="Difficulty Level"
							values={["Easy", "Medium", "Hard"]}
						></QuizSetUpCard>
					</div>
					<div className="w-full h-full flex justify-center items-center">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Start Quiz
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
