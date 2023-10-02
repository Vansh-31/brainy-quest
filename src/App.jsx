import "./App.css";
import { Routes, Route } from "react-router-dom";
import LargeNav from "./components/LargeNav";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={LargeNav}>
					<Route index element={<Home></Home>}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
