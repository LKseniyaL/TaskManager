import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, title: "Task #1", price: 279, user: 1, done: false },
    { id: 2, title: "Task #2", price: 234, user: 2, done: true },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.list.push({ ...payload, id: Date.now(), done: false });
    },

    toggleDone: (state, { payload }) => {
      const todo = state.list.find(({ id }) => id === payload);
      todo.done = !todo.done;
    },
  },
});

export default taskSlice.reducer;
export const { addTask, toggleDone } = taskSlice.actions;
