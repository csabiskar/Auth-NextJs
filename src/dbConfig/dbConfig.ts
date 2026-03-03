import mongoose from "mongoose";

export async function connect () {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        console.log("mongoDb connected successfully ")
    } catch (error) {
        console.log(error)
    }
}