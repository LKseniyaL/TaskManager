import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "Alex", lastname: "Alexeew" },
    { id: 2, name: "Max", lastname: "Musterman" },
    { id: 3, name: "Mark", lastname: "Markow" },
    { id: 4, name: "David", lastname: "Schmid" },
  ],
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.list.push({ ...payload, id: Date.now() });
    },
  },
});

export default usersSlice.reducer;
export const { addUser, addTask } = usersSlice.actions;
