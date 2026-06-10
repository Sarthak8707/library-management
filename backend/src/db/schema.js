import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  
  email: String,
  password: String,
  role: String,
  phoneNumber: Number,

});

export const User = mongoose.model("User", UserSchema);

const BookSchema = new mongoose.Schema({

    name: String,
    author: String,
    ISBN: Number,
    price: Number,
    quantity: Number,

})

export const Book = mongoose.model("Book", BookSchema);