"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

export const SignInOut = ()=> {
    const {auth, setAuth} = useAuth();
    const router = useRouter();

    const logOut = ()=> {
        setAuth(null);
        router.push('/login')
    }

    return(
        <div>
            {auth ? (
                <>
                <span className="mx-2">Hello</span>
                <span className="mx-1">|</span>
                <a className=" cursor-pointer" onClick={logOut}>{auth?.name} </a>
            
                </>
            ): (
                <Link href="/login" >Login</Link>
            )}
        </div>
    )
}