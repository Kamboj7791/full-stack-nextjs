"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-4 right-4">
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-bold rounded">
          Logout
        </button>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-bold mb-4">Complete your profile</h1>
        <hr className="mb-6" />
        <div className="mb-4">
          <label
            htmlFor="domain"
            className="block text-gray-700 text-sm font-bold mb-2">
            Domain
          </label>
          <input
            type="text"
            id="domain"
            placeholder="Enter your domain"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="institute"
            className="block text-gray-700 text-sm font-bold mb-2">
            Institute
          </label>
          <input
            type="text"
            id="institute"
            placeholder="Enter your institute"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
}
