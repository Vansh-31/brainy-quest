import { createSlice } from "@reduxjs/toolkit";

const quizQuestionsSlice = createSlice({
	name: "quizQuestions",
	initialState: [],
	reducers: {
		setQuizQuestions: (state, action) => action.payload,
	},
});

export const { setQuizQuestions } = quizQuestionsSlice.actions;
export default quizQuestionsSlice.reducer;