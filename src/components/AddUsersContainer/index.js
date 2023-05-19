import React from "react";
import { addUser } from "../../store/slice";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

export default function AddUsersContainer() {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const lastname = e.target.lastname.value;
    dispatch(addUser({ name, lastname }));
    e.target.reset();
  };
  return (
    <form onSubmit={submit} className={s.add_user}>
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Lastname" name="lastname" />
      <button>Hinzufügen</button>
    </form>
  );
}
