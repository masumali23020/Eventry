"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createUser, foundUserByCredentials, getEventById, updateGoing, updateInterst } from "./Quries";
import { Resend } from "resend";
import EmailTemplate from "@/components/payments/EmailTemplate";

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

async function addInterstedEvent(eventID, authId){
    try {
        await updateInterst(eventID, authId)
        
    } catch (error) {
        throw error
        
    }
    revalidatePath('/')
}

async function addGoingEvent(eventId, user){
    try {
        await updateGoing(eventId, user?.id)
        await sendEmails(eventId, user)
        
    } catch (error) {
        throw error
        
    }
    revalidatePath("/");
    redirect("/")
}

async function sendEmails(eventId, user){
    const event = await getEventById(eventId);
    const resend = new Resend(process.env.RESEND_APIKEY);
     const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`
     const sent = await resend.emails.send({
        from: "noreply@noreply.tapascript.io",
        to: user?.email,
        subject: "Successfully Registered for the event!",
        react: EmailTemplate({ message })
     })
}

export { addGoingEvent, addInterstedEvent, performLogin, registerAction };

