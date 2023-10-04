import React from "react";
import "../styles/Loader.css";
const Loader = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="loader">
				<div className="justify-content-center jimu-primary-loading"></div>
			</div>
		</div>
	);
};

export default Loader;
