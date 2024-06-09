import { replaceMongoIdInArray, replaceMongoIdinfoOBject } from "@/utils/data-utils";

import { eventModel } from "@/models/events-model";

async function getAllEvents(){
    const allEvents = await eventModel.find().lean()
    return replaceMongoIdInArray(allEvents)
}

async function getEventById (eventId){
    const event = await eventModel.findById(eventId)
    return replaceMongoIdinfoOBject(event)
}

export {
    getAllEvents,
    getEventById
};

