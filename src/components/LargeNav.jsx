import React from "react";
import { NavLink } from "react-router-dom";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/slices/darkModeSlice";

const LargeNav = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.darkMode);
	return (
		<div className="w-full min-h-[10vh] h-20 bg-secondary">
			<nav className="w-10/12 h-full max-w-6xl mx-auto flex justify-between items-center">
				<NavLink
					to="/"
					className="h-full p-2 flex gap-x-2 justify-center items-center"
				>
					<img className="h-4/5" src={logo} alt="" />
					<div className="h-full flex flex-col justify-center items-center" >
						<p className="font-bold text-white text-xl">Brainy Quest</p>
						<p className="text-white">Test Your Brain</p>
					</div>
				</NavLink>
				<div className="h-4/5 p-2 flex justify-center items-center text-white font-semibold text-lg overflow-hidden">
					<NavLink className="px-8 py-5 hover:bg-primary" to="/">
						Home
					</NavLink>
					<NavLink className="px-8 py-5 hover:bg-primary" to="/">
						Take a QUIZ
					</NavLink>
					<NavLink className="px-8 py-5 hover:bg-primary" to="/">
						Results
					</NavLink>
					<button
						className="mx-4 text-2xl"
						onClick={() => {
							dispatch(toggleDarkMode());
						}}
					>
						{darkMode ? <BsSunFill></BsSunFill> : <BsMoonFill></BsMoonFill>}
					</button>
				</div>
			</nav>
		</div>
	);
};

export default LargeNav;
