import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
	name: "quiz",
	initialState: {
        questions: [],
        options: [],
        answers: [],
        userAnswers: [],
        currentIndex: 0,
        isOnGoing: false,
        isFinished: false,
    },
	reducers: {
		setQuiz: (state, action) => {
            return {...state,...action.payload}
        }
	},
});

export const { setQuiz } = quizSlice.actions;
export default quizSlice.reducer;