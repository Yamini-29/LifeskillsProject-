import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://lifeskillsiittp:LIFESKILLS2025@cluster0.zzb4k.mongodb.net/course-app')
    console.log("DB Connected");
}