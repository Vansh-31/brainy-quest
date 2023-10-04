import React, { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/slices/darkModeSlice";
import logo from "../assets/logo.png";
const SmallNav = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.darkMode);
	const [navOpen, setNavOpen] = useState(false);
	return (
		<>
			<div className="relative w-full min-h-[10vh] h-20 bg-secondary flex justify-between items-center px-4 z-20">
				<NavLink
					to="/"
					className="h-full p-2 flex gap-x-2 justify-center items-center"
				>
					<img className="h-4/5" src={logo} alt="" />
					<div className="h-full flex flex-col justify-center items-center">
						<p className="font-bold text-white text-xl">Brainy Quest</p>
						<p className="text-white">Test Your Brain</p>
					</div>
				</NavLink>
				<div className="flex h-full items-center justify-center">
					<button
						className="mr-6 text-2xl text-white"
						onClick={() => {
							dispatch(toggleDarkMode());
						}}
					>
						{darkMode ? <BsSunFill></BsSunFill> : <BsMoonFill></BsMoonFill>}
					</button>
					<button
						className="text-white text-3xl"
						onClick={() => {
							setNavOpen(!navOpen);
						}}
					>
						<GiHamburgerMenu></GiHamburgerMenu>
					</button>
				</div>
			</div>
			<nav
				className={`overflow-hidden fixed h-screen z-10 w-2/5 -bottom-[10vh] right-0 bg-primaryDark ${
					navOpen ? "" : "translate-x-full"
				} transition-transform duration-400 ease-in-out`}
			>
				<div className="h-full w-full flex flex-col gap-y-4 py-10 items-center text-center text-xl">
					<NavLink to="/" className="w-full py-12 hover:bg-blue-950">
						<p className="text-white text-2xl">Home</p>
					</NavLink>
					<NavLink to="/quiz" className="w-full py-12 hover:bg-blue-950">
						<p className="text-white text-2xl">Take a QUIZ</p>
					</NavLink>
					<NavLink to="/" className="w-full py-12 hover:bg-blue-950">
						<p className="text-white text-2xl">Results</p>
					</NavLink>
				</div>
			</nav>
			<Outlet></Outlet>
		</>
	);
};

export default SmallNav;
