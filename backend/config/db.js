import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mishra:7905667557@cluster0.xfpji4v.mongodb.net/Food-del').then(()=>console.log("DB Connect"));
}