import express from "express";
import { addBookController, getAllBooksController } from "../controllers/books.controller.js";

const router = express.Router();


// Get all books route

router.get("/", getAllBooksController);

// Add a book

router.post("/", addBookController);

export {router as booksRouter}