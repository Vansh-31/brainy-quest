import React, { useState } from "react";
import BreifResults from "../components/BreifResults";
import DetailedResults from "../components/DetailedResults";
const Result = () => {
	const [showDetailedResults, setShowDetailedResults] = useState(false);
	return (
		<div className="w-11/12 h-full min-h-max max-w-6xl mx-auto bg-white">
			{showDetailedResults ? (
				<DetailedResults
					showDetailedResults={showDetailedResults}
				></DetailedResults>
			) : (
				<BreifResults
					setShowDetailedResults={setShowDetailedResults}
				></BreifResults>
			)}
		</div>
	);
};

export default Result;
