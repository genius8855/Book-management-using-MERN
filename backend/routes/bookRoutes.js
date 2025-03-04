import express from "express";
import { addBook, deleteBook, getBook, getOneBook, updateBookDetails } from "../controllers/bookControllers.js";

const router = express.Router();

router.post('/add', addBook);
router.get('/get', getBook);
router.get('/get/:id', getOneBook);
router.put('/update/:id', updateBookDetails);
router.delete('/delete/:id', deleteBook);

export default router;