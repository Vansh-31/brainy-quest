import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LargeNav from "./components/LargeNav";
import SmallNav from "./components/SmallNav";
import Home from "./pages/Home";

function App() {
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 712px)",
	});
	return (
		<div className="min-h-screen w-screen overflow-x-hidden overflow-y-auto" >
			<Routes>
				<Route
					path="/"
					element={
						isLargeScreen ? <LargeNav></LargeNav> : <SmallNav></SmallNav>
					}
				>
					<Route index element={<Home></Home>}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
