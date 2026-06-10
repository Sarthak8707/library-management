import express from "express";
import { connectDB } from "./db/index.js";
import cors from "cors";

const app = express();


app.use(cors());
app.use(express.json());

connectDB();

// Routes




app.listen(3000, () => {
    console.log("Server is running");
})