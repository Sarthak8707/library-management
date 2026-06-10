import express from "express";
import { addBookController, getAllBooksController } from "../controllers/books.controller";
const router = express.Router();


// Get all books route

router.get("/", getAllBooksController);

// Add a book

router.post("/", addBookController);