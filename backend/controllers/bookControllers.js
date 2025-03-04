import Book from "../models/bookModel.js";

export const addBook = async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send("One or more fields are missing");
        }
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    }catch(error) {
        res.status(500).send("Error while saving the book data");
    }
}

export const getBook = async(req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            count: books.length,
            books: books
        });
    }catch(error) {
        res.status(500).send("Backend error");
    }
}

export const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const books = await Book.findById(id);
        res.status(200).json({
            books: books
        });
    }catch(error) {
        res.status(500).send("Backend error");
    }
}

export const updateBookDetails = async (req, res) => {
    try {
        console.log(req.params.id);
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book) {
            return res.status(404).send("Not found");
        }
        res.status(200).json(book);
    }catch(error) {
        res.status(500).send("Error while updating");
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) {
            return res.status(404).send("Not found");
        }
        res.status(200).json(book);
    }catch(error) {
        res.status(500).send("Error while deleting");
    }
}