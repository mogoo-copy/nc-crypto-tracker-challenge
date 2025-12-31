import { configureStore } from "@reduxjs/toolkit";

import cpdbApi from "../api/cpdbApi";

export const store = configureStore({
  reducer: {
    [cpdbApi.reducerPath]: cpdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cpdbApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
