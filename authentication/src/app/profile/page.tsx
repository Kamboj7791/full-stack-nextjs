"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");

      router.push("/login");
    } catch (error: any) {
      toast.success("logout successfully");
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <h1>profile</h1>
      <hr />
      <h1>profile page</h1>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-bold rounded">
        Logout
      </button>
    </div>
  );
}
