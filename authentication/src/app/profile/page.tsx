"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

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
  const [data, setData] = useState("blank");
  const getUserData = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data._id);
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
      <h1 className="text-black">ProfilePage</h1>
      <p className="text-black bg-blue-500">
        {data === "blank" ? (
          "nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </p>
      <button
        onClick={getUserData}
        className="bg-green-500 hover:bg-blue-700 text-white px-4 py-2 font-bold rounded">
        getInfo
      </button>
    </div>
  );
}
