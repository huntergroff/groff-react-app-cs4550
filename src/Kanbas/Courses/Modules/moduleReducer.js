import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
  module: {
    name: "New Module",
    description: "New Description",
  },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState: initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((m) => {
        if (m._id === action.payload._id) {
          return action.payload;
        } else {
          return m;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
