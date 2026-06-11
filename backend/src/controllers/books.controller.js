import { addBookService, getAllBooksService } from "../services/books.service.js"


export const getAllBooksController = async (_, res ) => {

    const result = await getAllBooksService();
    res.status(200).json(result);

}

export const addBookController = async (req, res) => {

    const {name, author, ISBN, price, quantity} = req.body;

    const result = await addBookService({name, author, ISBN, price, quantity});

    res.status(201).json({msg: "New book added"});

}