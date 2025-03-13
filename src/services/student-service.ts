import { prisma } from "@/config";
import { NewStudentProtocols, StudentWhitoutId } from "@/protocols";
import { studentRepository } from "@/repositories";
import { Student } from "@prisma/client";
import * as path from "path";
import * as fs from "fs";

export async function createRegisterStudent(
  infoStudent: NewStudentProtocols[],
  imgPath: string
): Promise<{ count: number }> {
  const createClass = await studentRepository.createStudent(
    infoStudent,
    imgPath
  );
  return createClass;
}
export async function getStudents(): Promise<Student[]> {
  const findStudents = await studentRepository.getStudents();
  return findStudents;
}
export async function getStudentByIdClass(
  id_class: number
): Promise<Student[] | null> {
  const findStudent = await studentRepository.getStudentByIdClass(id_class);
  return findStudent;
}
export async function updateStudent({
  id,
  infoStudent,
}: {
  id: number;
  infoStudent: NewStudentProtocols;
}): Promise<Student> {
  if (!infoStudent.id_class || !infoStudent.name_student) {
    throw new Error("Dados obrigatórios faltando.");
  }

  // Busca o aluno existente no banco
  const existingStudent = await prisma.student.findUnique({ where: { id } });

  if (!existingStudent) {
    throw new Error("Aluno não encontrado.");
  }

  // 🧹 Apaga a imagem antiga se uma nova imagem foi enviada
  if (infoStudent.img_student && existingStudent.img_student) {
    const sanitizedImageName = existingStudent.img_student.replace(
      /^\/?uploads\/?/,
      ""
    );
    const oldImagePath = path.resolve(
      __dirname,
      "..",
      "..",
      "uploads",
      sanitizedImageName
    );
 
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath); // Apaga a imagem antiga
     
    } else {
      console.warn(`Imagem antiga não encontrada: ${oldImagePath}`);
    }
  }

  const update = await studentRepository.updateStudent({ id, infoStudent });
  return update;
}
export async function deleteStudent(id: number): Promise<Student> {
  const promise = await studentRepository.deleteStudent(id);
  return promise;
}

export const studentService = {
  createRegisterStudent,
  getStudents,
  getStudentByIdClass,
  updateStudent,
  deleteStudent,
};
