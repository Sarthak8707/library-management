import mongoose from "mongoose";

export const connectDB = async () => {

    try{
     
    await mongoose.connect("mongodb+srv://qwerty:pass1234@cluster0.kk6j87g.mongodb.net/mydb");
    
    console.log("MongoDB connected")
    }
    catch(err){
        console.log(err)
    }


}