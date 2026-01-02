import { createSlice } from "@reduxjs/toolkit";
import type { ThemeState } from "./types";

const initialState: ThemeState = { isDarkMode: false };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
