"use client"

import { performLogin } from "@/actions";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginFrom = () => {
  const [error, setError] = useState("");
  const {setAuth} = useAuth()

  // const { setAuth } = useAuth();
  const router = useRouter();

  async function LoginFromSubmit(event) {
      event.preventDefault();
      try {
          const formData = new FormData(event.currentTarget);
          const found = await performLogin(formData)

          if (found) {
              setAuth(found);
              router.push('/');
          } else {
              setError('Please provide a valid login credential');
          }
      } catch (err) {
          setError(err.message);
      }
  }

  return (
 <>
 <div className="my-2 text-red-500">
    {error}
 </div>
    <form className="login-form" onSubmit={LoginFromSubmit}>
           
           <div>
             <label htmlFor="email">Email Address</label>
             <input type="email" name="email" id="email" />
           </div>
          
           <div>
             <label htmlFor="password">Password</label>
             <input type="password" name="password" id="password" />
           </div>

           <button
             type="submit"
             className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
           >
             Login
           </button>
    </form>
 </>
  )
}

export default LoginFrom
