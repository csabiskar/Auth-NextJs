import mongoose from "mongoose";

export default async function connect () {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        console.log("mongoDb connected successfully ")
    } catch (error) {
        console.log(error)
    }
}