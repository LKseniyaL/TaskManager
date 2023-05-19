import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import TaskContainer from "../TaskContainer/index";

export default function UserItem({ name, id, lastname }) {
  const tasks = useSelector(({ task }) =>
    task.list.filter(({ user }) => user === id)
  );
  const totalSum = tasks.reduce((acc, { price }) => acc + price, 0);
  return (
    <div className={s.item}>
      <p className={s.user_name_p}>
        {lastname} {name}
      </p>
      <TaskContainer tasks={tasks} />
      <p className={s.total_price}>Price: {totalSum}$</p>
    </div>
  );
}
