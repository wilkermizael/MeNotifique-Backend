import { registerLogBook, getLogBook } from "@/controllers";
import { Router } from "express";

const bookRouter = Router();

bookRouter.post('/', registerLogBook)
bookRouter.get('/:id', getLogBook)

export {bookRouter};