"use server"

import { redirect } from "next/navigation";
import { createUser, foundUserByCredentials } from "./Quries";

const registerAction = async(formData)=> {
    const user = Object.fromEntries(formData)
    const created = await createUser(user);

    redirect("/login")
    return created

}

async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await foundUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}

export {
    performLogin, registerAction
};

