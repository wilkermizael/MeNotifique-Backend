import { prisma } from "@/config";
import { CreateClass, CreateClassWihoutId } from "@/protocols";

async function createClass({nameClass, turn, year}:CreateClassWihoutId) {
    return prisma.class.create({
      data:{
        nameClass,
        turn,
        year
    }
    });
  }

  async function findById(id: number) {
    return prisma.class.findUnique({
      where: { id },
    });
  }
  
  async function findAll() {
    return prisma.class.findMany();
  }
  async function updateClass({ id, nameClass, turn, year }: CreateClass) {
    const existingClass = await prisma.class.findUnique({ where: { id } });
    
    if (!existingClass) {
        throw new Error("Turma não encontrada");
    }

    return prisma.class.update({
        where: { id },
        data: { nameClass, turn, year },
    });
}

    async function deleteClass(id:number ) {
    const existingClass = await prisma.class.findUnique({ where: { id } });
    console.log(existingClass)
    if (!existingClass) {
        throw new Error("Turma não encontrada");
    }
    return await prisma.class.delete({ where: { id } });
}

  export const classRepository = {
    createClass,
    findById,
    findAll,
    updateClass,
    deleteClass,
  };