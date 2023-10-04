import React from "react";

const Question = ({ question }) => {
    const formatString = (str) => {
        let x = Array.from(str);
        while (x.includes("&") && x.includes(";")) {
            let i = x.indexOf("&");
            let j = x.indexOf(";");
            console.log(String.fromCharCode( x.join(x.slice(i + 1, j))));
            x = x.slice(0, i) + x.slice(j + 1);
        }
        return str;
    };
	return <div>{formatString(question)}</div>;
};

export default Question;
