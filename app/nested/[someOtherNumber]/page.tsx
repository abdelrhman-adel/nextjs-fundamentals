export default function NestedPage({
  params: { someOtherNumber },
}: {
  params: { someOtherNumber: string };
}) {
  return (
    <div className="bg-gray-400 border-2 border-black m-2 p-5">
      <h1>{someOtherNumber} Nested Page ( this is the dynamic one ) </h1>
    </div>
  );
}
