export default function NestedPage({
  params: { multipleNumbers },
}: {
  params: { multipleNumbers?: string[] };
}) {
  return (
    <div className="bg-gray-400 border-2 border-black m-2 p-5">
      <h1>
        {multipleNumbers && multipleNumbers.join("/")} Nested Page ( this is the
        dynamic one )
      </h1>
    </div>
  );
}
