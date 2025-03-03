import { 
    deleteStudentById,
    getStudentByIdClass, 
    getStudent, 
    registerStudentController, 
    updateStudent,
    } from "@/controllers";
//import { validateBody } from "@/middlewares";
//import { createStudentSchema } from "@/schemas";
import upload from "@/middlewares/multer";
import { Router } from "express";

const studentRouter = Router();

studentRouter.post("/",upload.single('img_student'), registerStudentController);
studentRouter.get('/',getStudent)//Rota nao usada
studentRouter.get('/:id', getStudentByIdClass)
studentRouter.put('/:id', upload.single('img_student'), updateStudent)
studentRouter.delete('/:id', deleteStudentById)
//studentRouter.post('/whats', sendMessageController)//Envio de mensagem para o WhatsApp


//url:https://evolution.winikii.com/message/sendText/Salaobel
//Api_key_evolution: 9qkitfwfsnji55vl3ruv8
export { studentRouter };
