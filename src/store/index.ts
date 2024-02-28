// ** REACT
import { configureStore } from "@reduxjs/toolkit";

// ** STORES
import auth from "./api/auth";

export const store = configureStore({
	reducer: {
		auth,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false,
		});
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
