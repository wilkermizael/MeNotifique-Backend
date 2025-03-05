import { LogBookType } from "@/protocols";
import { logBookRepository } from "@/repositories";

export async function createBook(
  infoLogBook: LogBookType
): Promise<LogBookType> {
  const createClass = await logBookRepository.createBook(infoLogBook);
  return createClass;
}
export async function getLogBook(id: number):Promise<LogBookType[]>{
    const logBook = await logBookRepository.getLogBook(id);
    return logBook;
}

type LogBookTypeWithId = LogBookType & { id: number };

export async function updateBook(
  infoLogBook: LogBookType,
  id:number
): Promise<LogBookTypeWithId> {
  const createClass = await logBookRepository.updateBook(infoLogBook, id);
  return createClass;
}

export async function deleteBook(
  id:number
):Promise<LogBookTypeWithId> {
  const createClass = await logBookRepository.deleteBook(id);
  return createClass;
}

export const logBookService = {
    createBook,
    getLogBook,
    updateBook,
    deleteBook,

  };