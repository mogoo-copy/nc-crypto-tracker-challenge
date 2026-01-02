import { configureStore } from "@reduxjs/toolkit";

import cpdbApi from "../api/cpdbApi";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    [cpdbApi.reducerPath]: cpdbApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cpdbApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
