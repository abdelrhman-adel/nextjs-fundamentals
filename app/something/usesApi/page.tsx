import { Todo } from "../somePath/route";

export default async function usesApi() {
  const y = await fetch("http://localhost:3000/something/somePath");
  const { data }: { data: Todo } = await y.json();
  return (
    <div className="bg-gray-400 border-2 border-black m-2 p-5">
      <h1>TODO</h1>
      <div>
        <ul>
          <li>title: {data.title}</li>
          <li>completed: {`${data.completed}`}</li>
        </ul>
      </div>
    </div>
  );
}
