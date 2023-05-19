import React from "react";
import TaskItem from "../TaskItem";

export default function TaskContainer({ tasks }) {
  return (
    <div>
      {tasks.map((item) => <TaskItem key={item.id} {...item} />)}
    </div>
  );
}
