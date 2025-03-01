import { createAttendance } from "@/controllers";
import { Attendance, AttendanceWithoutId, PresentStudent } from "@/protocols";
import { attendanceRepository, studentRepository } from "@/repositories";
import { existAttendance, isMessageSend, sendFaults } from "@/utils";
import { sendMessageWhatsApp } from "@/utils/send-message";
import { Student } from "@prisma/client";
import { AxiosResponse } from "axios";

export async function createAttendanceRegister(
  attendance: PresentStudent[]
): Promise<Student | string | boolean>  {
  //Verificar se a chamada foi enviada para o whatsapp
  const exist_attendance = await existAttendance(attendance[0].id_class);
  if (exist_attendance) {
    return "turma_ja_chamada";
   
  }
  const sendWhatsApp = await sendMessageWhatsApp(attendance); // Envia mensagens para o whatsapp dos responsáveis
  // Verifica se alguma mensagem falhou
  const hasErrors = sendWhatsApp.some((result) => result.status === "error");
  if (hasErrors) {
    return "Erro ao enviar mensagens. Chamada não registrada!";
  }
  //Lança +1 falta ao aluno faltoso
  const faults = await sendFaults(attendance);
  //Atualiza as faltas
  if(faults.length > 0){
    await attendanceRepository.updateFaults(faults);
  }
  
  //Registra no banco de dados a presença ou falta do aluno
  const createAttendance = await attendanceRepository.createAttendance(attendance);
  if(createAttendance){
    return true
  }
}

export async function sendMessage(
  phoneNumber: string,
  message: string
): Promise<AxiosResponse> {
  const send = await attendanceRepository.sendMessage(phoneNumber, message);
  console.log(send);
  return send;
}
export const attendanceService = {
  createAttendanceRegister,
  sendMessage,
};
