import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/index";
import taskSlice from "./slice/taskSlice";

export const store = configureStore({
  reducer: {
    user: usersSlice,
    task: taskSlice,
  },
});
