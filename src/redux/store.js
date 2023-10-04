import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import quizQuestionReducer from "./slices/quizQuestionsSlice";
import loadingReducer from "./slices/loadingSlice";
export const store = configureStore({
	reducer: {
		darkMode: darkModeReducer,
		quizQuestions: quizQuestionReducer,
		loading: loadingReducer,
	},
});
