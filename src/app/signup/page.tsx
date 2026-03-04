"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Signuppage() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();


  useEffect(()=>{
   handleGetUser() 
  })
  async function handleSubmit() {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log(res.data);
      router.push("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const handleGetUser = async () => {
    try {
      const res = await axios.get("/api/users/signup");
      console.log(res.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center font-sans">
        <div className="bg-white text-black w-3xl h-fit flex flex-col p-12 gap-3">
          <h1 className="text-center text-2xl font-bold ">sign up Page</h1>
          <label htmlFor="username" className="">
            UserName
          </label>
          <input
            type="text"
            placeholder=" enter userName..."
            value={user.userName}
            className="border rounded py-3"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
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
          <button
            onClick={handleSubmit}
            className="text-white cursor-pointer py-3 mt-3 bg-red-300 "
          >
            submit
          </button>
          <Link href="/login" className="text-center text-blue-400 underline">
            vist to Login Page
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signuppage;
