import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    job: String
});

export default userSchema = mongoose.model('User', userSchema);