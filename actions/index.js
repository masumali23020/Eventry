"use server"

import { redirect } from "next/navigation";
import { createUser } from "./Quries";

const registerAction = async(formData)=> {
    const user = Object.fromEntries(formData)
    const created = await createUser(user);

    redirect("/login")
    return created

}

export {
    registerAction
};

