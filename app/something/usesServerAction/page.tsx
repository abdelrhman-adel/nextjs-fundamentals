"use client";
import { useEffect, useState } from "react";
import { Todo, fetchTodosWithServerAction } from "../someServerAction";

export default function UsesApi() {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    (async function () {
      const { data } = await fetchTodosWithServerAction();
      setTodo(data);
    })();
  }, []);

  return (
    <div className="bg-gray-400 border-2 border-black m-2 p-5">
      <h1>TODO</h1>
      <div>
        {todo && (
          <ul>
            <li>title: {todo.title}</li>
            <li>completed: {`${todo.completed}`}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
