export default async function Home() {
  const x = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

  return (
    <div className="bg-gray-300 border-2 border-black m-2 p-5">
      <h1>Home Page</h1>
    </div>
  );
}
