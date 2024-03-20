"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [disableButton, setdisableButton] = React.useState(false);
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setdisableButton(false);
    } else {
      setdisableButton(true);
    }
  }, [user]);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user);
      console.log("login successfull", response.data);
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
      console.log("login failed ", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "processing" : "login"}</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        className="p-2 text-black"
        value={user.email}
        id="email"
        type="text"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 text-black"
        value={user.password}
        id="password"
        type="password"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password"
      />
      <button onClick={onLogin} className="p-2 border border-gray-300 mt-4">
        {disableButton ? "No login" : "Login"}
      </button>
      <Link href="/signup">visit signup</Link>
    </div>
  );
}
