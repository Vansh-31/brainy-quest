import React from "react";
const Question = ({ question }) => {
	const formatString = (text) => {
		let doc = new DOMParser().parseFromString(text, "text/html");
		return doc.documentElement.textContent;
	};
	return <div>{formatString(question)}</div>;
};

export default Question;
