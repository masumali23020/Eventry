import { replaceMongoIdInArray, replaceMongoIdinfoOBject } from "@/utils/data-utils";

import { eventModel } from "@/models/events-model";
import { userModel } from "@/models/users-model";
import mongoose from "mongoose";

async function getAllEvents(query){
     let allEvents = []

 
    if(query){
      const regs = new RegExp(query, "i")
      allEvents = await eventModel.find({name: {$regs:regs}}).lean()
    }else{
        allEvents = await getAllEvents()
    }
    return replaceMongoIdInArray(allEvents)
}

async function getEventById (eventId){
    const event = await eventModel.findById(eventId)
    return replaceMongoIdinfoOBject(event)
}

async function createUser (user){
    return await userModel.create(user)
}
async function foundUserByCredentials (credentials){
    const user = userModel.findOne(credentials).lean();
    return user
}

async function updateInterst (eventId, authId){
    const event = await eventModel.findById(eventId);

    if (event) {
        const foundUsers = event.interested_ids.find(id => id.toString() === authId);

        if(foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId));
        }

        event.save();
    }



}

async function updateGoing(eventId, authId){
    const event = await eventModel.findById(eventId);
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    event.save();

}

export {
    createUser, foundUserByCredentials, getAllEvents,
    getEventById, updateGoing, updateInterst
};

