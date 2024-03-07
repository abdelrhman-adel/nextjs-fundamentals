// "use client";

export default async function NestedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const x = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });
  return (
    <div className="bg-gray-400 border-2 border-black m-2 p-5">
      {/* <h1>Nested Layout {Math.random()}</h1> */}
      <h1>Nested Layout</h1>
      {children}
    </div>
  );
}
