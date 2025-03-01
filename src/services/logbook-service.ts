import { LogBookType } from "@/protocols";
import { logBookRepository } from "@/repositories";
import { get } from "http";

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
export const logBookService = {
    createBook,
    getLogBook,

  };