"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>signup</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        className="p-2"
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
        className="p-2"
        value={user.password}
        id="password"
        type="password"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password"
      />
      <button onClick={onLogin} className="p-2 border border-gray-300 mt-4">
        login here
      </button>
      <Link href="/signup">visit signup</Link>
    </div>
  );
}
