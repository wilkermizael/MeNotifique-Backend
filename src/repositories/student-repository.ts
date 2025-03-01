import { prisma } from "@/config";
import { NewStudentProtocols, StudentWhitoutId } from "@/protocols";
import axios from "axios";

async function createStudent(
  infoStudent: NewStudentProtocols,
  imgPath: string | null
) {
  const classExists = await prisma.class.findUnique({
    where: { id: Number(infoStudent.id_class) },
  });
  if (!classExists) throw new Error("Turma não encontrada.");

  return prisma.student.create({
    data: {
      id_class: Number(infoStudent.id_class),
      name_student: infoStudent.name_student,
      img_student: imgPath,
      name_responsible: infoStudent.name_responsible,
      phone_responsible: infoStudent.phone_responsible,
      qtd_faults: Number(infoStudent.qtd_faults),
    },
  });
}

async function getStudents() {
  return prisma.student.findMany();
}

async function getStudentByIdClass(id_class: number) {
  return prisma.student.findMany({ where: { id_class: id_class } });
  
}
async function updateStudent({ id, infoStudent}: { id: number; infoStudent: NewStudentProtocols}) {
    if (!infoStudent.id_class || !infoStudent.name_student) {
      throw new Error("Dados obrigatórios faltando.");
    }
    
    return prisma.student.update({
      where: { id },
      data: {
        class: { connect: { id: Number(infoStudent.id_class) } },
        name_student: infoStudent.name_student,
        name_responsible: infoStudent.name_responsible ?? "",
        phone_responsible: infoStudent.phone_responsible ?? "",
        qtd_faults: Number(infoStudent.qtd_faults) || 0,
        img_student: infoStudent.img_student
      },
    });
  }
  
async function deleteStudent(id: number) {
  return prisma.student.delete({
    where: { id },
  });
}


export const studentRepository = {
  createStudent,
  getStudents,
  getStudentByIdClass,
  updateStudent,
  deleteStudent,
  
};
