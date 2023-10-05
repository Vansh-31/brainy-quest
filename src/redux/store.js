import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import loadingReducer from "./slices/loadingSlice";
import quizReducer from "./slices/quizSlice";
export const store = configureStore({
	reducer: {
		darkMode: darkModeReducer,
		loading: loadingReducer,
		quiz: quizReducer,
	},
});
