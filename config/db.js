import mongoose from "mongoose";

import env from '../config/env.js'

const dbConnect = async () => {
    try{
        await mongoose.connect(env.dbpath);
        console.log("Connected to MongoDB")
    } catch(err) {
        console.log(err);
    }
}

export default dbConnect;