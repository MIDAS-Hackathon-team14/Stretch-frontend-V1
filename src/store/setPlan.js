import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setPlan: false,
  setUpdate: false,
};

export const getPlan = createSlice({
  name: "plan",
  initialState,
  reducers: {
    settingPlan: (state, props) => {
      state.setPlan = props.payload;
    },
    settingUpdate: (state, props) => {
      state.setUpdate = props.payload;
    },
  },
});

export const { settingPlan, settingUpdate } = getPlan.actions;

export default getPlan.reducer;
