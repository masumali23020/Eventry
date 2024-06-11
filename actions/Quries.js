import { replaceMongoIdInArray, replaceMongoIdinfoOBject } from "@/utils/data-utils";

import { eventModel } from "@/models/events-model";
import { userModel } from "@/models/users-model";

async function getAllEvents(){
    const allEvents = await eventModel.find().lean()
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

export {
    createUser, foundUserByCredentials, getAllEvents,
    getEventById
};

