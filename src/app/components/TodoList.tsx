import { Task } from "@/types";
import React, { useEffect } from "react";
import Todo from "./Todo";

interface TodoListProps {
  todos: Task[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="space-y-3">
      {/* <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span className="text-gray-700">Task 1</span>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </li>
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span className="text-gray-700">Task 2</span>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </li> */}
      {todos.map((todo) => (
        // <li
        //   key={task.id}
        //   className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
        // >
        //   <span className="text-gray-700">{task.text}</span>
        //   <button className="text-red-500 hover:text-red-700">✖</button>
        // </li>
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
