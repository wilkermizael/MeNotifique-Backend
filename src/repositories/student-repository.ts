import { prisma } from "@/config";
import { NewStudentProtocols, StudentWhitoutId } from "@/protocols";
import axios from "axios";

// async function createStudent(
//   infoStudent: NewStudentProtocols[],
//   imgPath: string | null
// ) {
//   const classExists = await prisma.class.findUnique({
//     where: { id: Number(infoStudent.id_class) },
//   });
//   if (!classExists) throw new Error("Turma não encontrada.");

//   return prisma.student.create({
//     data: {
//       id_class: Number(infoStudent.id_class),
//       name_student: infoStudent.name_student,
//       img_student: imgPath,
//       name_responsible: infoStudent.name_responsible,
//       phone_responsible: infoStudent.phone_responsible,
//       qtd_faults: Number(infoStudent.qtd_faults),
//     },
//   });
// }
async function createStudent(
  students: NewStudentProtocols[], 
  imgPath: string | null
) {
  if (!students.length) throw new Error("Lista de alunos vazia.");

  const classId = Number(students[0].id_class); // Como todos pertencem à mesma turma, pegamos o ID do primeiro

  // Verifica se a turma existe
  const classExists = await prisma.class.findUnique({
    where: { id: classId },
  });
  if (!classExists) throw new Error("Turma não encontrada.");

  // Faz o cadastro de todos os alunos da mesma turma
  return prisma.student.createMany({
    data: students.map(student => ({
      id_class: classId, // Todos pertencem à mesma turma
      name_student: student.name_student,
      img_student: imgPath ?? student.img_student, // Usa imgPath se existir, senão mantém a do aluno
      name_responsible: student.name_responsible,
      phone_responsible: student.phone_responsible,
      qtd_faults: Number(student.qtd_faults),
    })),
    skipDuplicates: true, // Evita erro caso tente cadastrar alunos repetidos
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
