import { prisma } from "@/config";
import { LogBookType } from "@/protocols";

async function createBook(
  infoLogbook: LogBookType
) {
  
  return prisma.logBook.create({
    data: {
      id_class: Number(infoLogbook.id_class),
      id_student: Number(infoLogbook.id_student),
      note: infoLogbook.note,
      demand: infoLogbook.demand,
      date_note: infoLogbook.date_note,
      profissional: infoLogbook.profissional,
    },
  });
}
async function getLogBook(id:number){
    return prisma.logBook.findMany({
        where: { id_student: id }
    })
}
export const logBookRepository = {
    createBook,
    getLogBook
}