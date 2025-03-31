import Image from "next/image";
import AddTask from "./components/AddTask";
import Todolist from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-sceen py-2 bg-gray- 200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Nextjs 13 Todo App
      </h1>
      <div className="w-full max-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <Todolist />
        </div>
      </div>
    </main>
  );
}
