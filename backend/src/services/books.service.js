import { Book } from "../db/schema.js"

export const getAllBooksService = async () =>  {

    const data = await Book.find();
    return data;

}

export const addBookService = async ({name, author, ISBN, price, quantity}) => {

    const newBook = new Book({name, author, ISBN, price, quantity });
    await newBook.save();
    
}