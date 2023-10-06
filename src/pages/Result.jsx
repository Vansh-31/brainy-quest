import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Result = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const userAnswers = useSelector((state) => state.quiz.userAnswers);
	// const answers = useSelector((state) => state.quiz.answers);
	const isFinished = useSelector((state) => state.quiz.isFinished);
	useEffect(() => {
		if (!isFinished) {
			navigate("/");
		}
	});
    
	return ( <div>Results</div>);
};

export default Result;
