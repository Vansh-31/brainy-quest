import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LargeNav from "./components/LargeNav";
import SmallNav from "./components/SmallNav";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const triviaSessionTokenUrl =
	"https://opentdb.com/api_token.php?command=request";

function App() {
	useEffect(() => {
		gettriviaSessionToken();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	
	async function gettriviaSessionToken() {
		const storedToken = localStorage.getItem("triviaSessionToken");

		if (storedToken) {
			const expirationTime = parseInt(localStorage.getItem("tokenExpiration"));
			const currentTime = Date.now();

			if (currentTime < expirationTime) {
				// Token is still valid, return it
				return storedToken;
			}
		}

		// Update local storage with new token and expiration time
		const response = await fetch(triviaSessionTokenUrl);
		const data = await response.json();
		const { token } = data;
		const expirationTime = Date.now() + 6 * 60 * 60 * 1000; // 6 hours in milliseconds
		localStorage.setItem("triviaSessionToken", token);
		localStorage.setItem("tokenExpiration", expirationTime);
	}
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 712px)",
	});
	return (
		<div className="h-screen w-screen overflow-x-hidden overflow-y-auto">
			<Routes>
				<Route
					path="/"
					element={
						isLargeScreen ? <LargeNav></LargeNav> : <SmallNav></SmallNav>
					}
				>
					<Route index element={<Home></Home>}></Route>
					<Route
						path="/quiz"
						element={<Quiz></Quiz>}
					></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
