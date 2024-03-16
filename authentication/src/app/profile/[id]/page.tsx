export default function UserProfile({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <h1>profile</h1>
      <hr />
      <h1 className="text-4xl">
        profile page{" "}
        <span className="bg-orange-500 text-black p-2 rounded">
          {params.id}
        </span>{" "}
      </h1>
    </div>
  );
}
