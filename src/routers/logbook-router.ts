import { registerLogBook, getLogBook, updateLogBook, deleteLogBook } from "@/controllers";
import { Router } from "express";

const bookRouter = Router();

bookRouter.post('/', registerLogBook)
bookRouter.get('/:id', getLogBook)
bookRouter.put('/update/:id', updateLogBook)
bookRouter.delete('/delete/:id', deleteLogBook)

export {bookRouter};