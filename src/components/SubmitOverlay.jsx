import React from "react";
import { useDispatch } from "react-redux";
import { setQuiz } from "../redux/slices/quizSlice";
import { useNavigate } from "react-router-dom";
const SubmitOverlay = ({
	submitOverlayVisiblity,
	setSubmitOverlayVisiblity,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		submitOverlayVisiblity && (
			<div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 z-50">
				<div className="absolute top-[50%] left-[50%] p-8 h-max  bg-white -translate-x-[50%] -translate-y-[50%] flex justify-center items-center flex-col">
					<p className="text-black text-xl font-bold">
						{" "}
						Do you want to submit the quiz?
					</p>
					<div className="flex flex-wrap justify-evenly">
						<button
							onClick={() => {
								setSubmitOverlayVisiblity(false);
							}}
							className="btn"
						>
							Cancel
						</button>
						<button
							onClick={() => {
								dispatch(
									setQuiz({
										isFinished: true,
										isOnGoing: false,
										currentIndex: 0,
									})
								);
								navigate("/result");
							}}
							className="btn"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default SubmitOverlay;
