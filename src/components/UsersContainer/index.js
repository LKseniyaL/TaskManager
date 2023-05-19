import React from "react";
import { useSelector } from "react-redux";
import UserItem from "../UserItem/index";
import s from "./style.module.css";

export default function UsersContainer() {
  const users = useSelector((state) => state.user.list);
  return (
    <div className={s.item_container}>
      {users.map((item) => <UserItem key={item.id} {...item} />)}
    </div>
  );
}
