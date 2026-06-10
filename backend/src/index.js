import express from "express";
import { connectDB } from "./db/index.js";
import cors from "cors";
import { booksRouter } from "./routes/books.route.js";
import { authRouter } from "./routes/auth.route.js";

const app = express();


app.use(cors());
app.use(express.json());

connectDB();

// Routes


app.use("/books", booksRouter);

app.use("/auth", authRouter);


app.listen(3000, () => {
    console.log("Server is running");
})