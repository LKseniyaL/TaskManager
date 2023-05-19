import React from "react";
import s from "./style.module.css";
import { toggleDone } from "../../store/slice/taskSlice";
import { useDispatch } from "react-redux";

export default function TaskItem({ title, price, done, id }) {
  const dispatch = useDispatch();
  return (
    <div className={s.task_item_container}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => dispatch(toggleDone(id))}
      />
      <p>{title}</p>
      <p>{price}$</p>
    </div>
  );
}
