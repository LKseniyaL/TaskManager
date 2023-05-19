import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import { addTask } from "../../store/slice/taskSlice";
import { useDispatch } from "react-redux";

export default function AddTaskUser() {
  const users = useSelector((state) => state.user.list);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = +e.target.price.value;
    const user = +e.target.user.value;
    dispatch(addTask({ title, price, user }));
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className={s.add_task}>
      <input type="text" name="title" placeholder="Task" />
      <input type="number" name="price" placeholder="Price" />
      <select name="user">
        {users.map(({ id, name, lastname }) => (
          <option key={id} value={id}>
            {name} {lastname}
          </option>
        ))}
      </select>
      <button>Hinzufügen</button>
    </form>
  );
}
