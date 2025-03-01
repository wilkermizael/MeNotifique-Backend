
import { Router } from "express";
import { createAttendance, sendMessageController } from "@/controllers";

const attendanceRouter = Router();

attendanceRouter.post("/", createAttendance);
//attendanceRouter.post('/whats', sendMessageController)//Envio de mensagem para o WhatsApp


export { attendanceRouter };
