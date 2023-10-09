import React from "react";
import quizLogo from "../assets/quiz_logo.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="w-11/12 h-full max-w-6xl mx-auto bg-white flex flex-col items-center">
				<img className="h-96" src={quizLogo} alt="" />
				<h1 className="text-5xl font-bold mb-4 text-primary text-center">
					Welcome to Brainy Quest
				</h1>
				<p className="text-lg text-center mb-8">
					Test your knowledge with our challenging quizzes! See how much you
					really know.
				</p>
				<NavLink to="/quiz">
					<div className="btn text-center">
						Take a Quiz
					</div>
				</NavLink>
			</div>
		</>
	);
};

export default Home;
