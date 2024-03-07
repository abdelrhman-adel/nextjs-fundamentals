"use server";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const isTodo = (obj: any): obj is Todo => {
  return (
    obj.userId !== undefined &&
    obj.id !== undefined &&
    obj.title !== undefined &&
    obj.completed !== undefined
  );
};

export async function fetchTodosWithServerAction() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return { data: isTodo(data) ? data : null };
}
