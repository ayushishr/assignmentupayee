import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    AllTasks: localStorage.getItem("AllTasks")
      ? JSON.parse(localStorage.getItem("AllTasks"))
      : [],
  },
  reducers: {
    setAllTasks(state, action) {
        state.AllTasks = action.payload;
        localStorage.removeItem("AllTasks");
        localStorage.setItem("AllTasks", JSON.stringify(action.payload));
      },
  },
});

export const { setAllTasks } = taskSlice.actions;

export default taskSlice.reducer;
