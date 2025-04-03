import { Task } from "../pages/types";
// import React, { useEffect } from "react";
import Todo from "./Todo";

interface TodoListProps {
  tasks: Task[];
}

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}

      {/* <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span> 散歩</span>
        <div>
        <button className="text-green-500 mr-3">edit</button>
        <button className="text-red-500">Delete</button>
        </div>
      </li>
      <li className="flex justfy-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"></li>  */}
    </ul>
  );
};
