import { createSlice } from "@reduxjs/toolkit";
import { initStateUserAnswera } from "../../Types/types";

const initialState: initStateUserAnswera = {
  userAnswera: [],
  timer: 0,
  step: true,
  finishStep: false,
  numberQuetion: 0,
};

const ProgressTestSlice = createSlice({
  name: "answera",
  initialState,
  reducers: {
    addUserAnswere: (state, action) => {
      state.userAnswera.push(action.payload);
    },
    addTimer: (state, action) => {
      state.timer = action.payload;
    },
    addStep: (state, action) => {
      state.step = action.payload;
    },
    addFinishStep: (state, action) => {
      state.finishStep = action.payload;
    },
    addNumberQuetion: (state, action) => {
      state.numberQuetion = action.payload;
    },
  },
});

const { actions, reducer } = ProgressTestSlice;
export const {
  addUserAnswere,
  addTimer,
  addStep,
  addNumberQuetion,
  addFinishStep,
} = actions;
export default reducer;
