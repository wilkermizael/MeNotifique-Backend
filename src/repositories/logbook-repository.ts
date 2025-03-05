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

async function updateBook(
  infoLogbook: LogBookType,
  id: number
) {
 
  return prisma.logBook.update({
    where: {
      id: id,
    },
    data: {
      note: infoLogbook.note,
      demand: infoLogbook.demand,
      date_note: infoLogbook.date_note,
      profissional: infoLogbook.profissional,
    },
  });
}

async function deleteBook(id:number){
  return prisma.logBook.delete({
      where: { id }
  })
}

export const logBookRepository = {
    createBook,
    getLogBook,
    updateBook,
    deleteBook,
}