import { prisma } from "@/config";
import { StudentWhitoutId } from "@/protocols";
import axios from "axios";

async function createStudent(
  infoStudent: StudentWhitoutId,
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
async function updateStudent({ id, infoStudent}: { id: number; infoStudent: StudentWhitoutId}) {
    console.log("Dados recebidos para atualização:", infoStudent);
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

async function sendMessage(phoneNumber: string, message: string): Promise<any> {
  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  const body = {
    number: phoneNumber,
    textMessage: { text: message },
  };

  try {
    return await axios.post(API_URL, body, {
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
      },
      timeout: 5000,
    });
  } catch (error) {
    console.error(
      "Erro na requisição à Evolution API:",
      error.response?.data || error.message
    );
    throw error;
  }
}
export const studentRepository = {
  createStudent,
  getStudents,
  getStudentByIdClass,
  updateStudent,
  deleteStudent,
  sendMessage,
};
