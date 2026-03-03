"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit() {

    console.log(user)
  }
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center font-sans">
        <div className="bg-white text-black w-3xl h-fit flex flex-col p-12 gap-3">
          <h1 className="text-center text-2xl font-bold ">Login Page</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder=" enter email..."
           className="border rounded py-3"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder=" enter password..."
           className="border rounded py-3"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleSubmit} className="text-white cursor-pointer py-3 mt-3 bg-red-300 ">submit</button>
        </div>
      </div>
    </>
  );
}

export default page;
