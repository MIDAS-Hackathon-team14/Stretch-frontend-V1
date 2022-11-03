import { configureStore } from "@reduxjs/toolkit";
import getPlan from "./setPlan";

export const store = configureStore({
  reducer: {
    plan: getPlan,
  },
});
