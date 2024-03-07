// "use client";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-500 border-2 border-black m-2 p-5">
      {/* <h1>Nested Template {Math.random()}</h1> */}
      <h1>Nested Template</h1>
      {children}
    </div>
  );
}
