import { 
    deleteStudentById,
    getStudentByIdClass, 
    getStudent, 
    registerStudentController, 
    updateStudent,
    sendMessageController} from "@/controllers";
import { validateBody } from "@/middlewares";
import { createStudentSchema } from "@/schemas";
import upload from "@/middlewares/multer";
import { Router } from "express";

const studentRouter = Router();

studentRouter.post("/",upload.single('img_student'), registerStudentController);
studentRouter.get('/',getStudent)
studentRouter.get('/:id', getStudentByIdClass)
studentRouter.put('/:id', updateStudent)
studentRouter.delete('/:id', deleteStudentById)
studentRouter.post('/whats', sendMessageController)


//url:https://evolution.winikii.com/message/sendText/Salaobel
//Api_key_evolution: 9qkitfwfsnji55vl3ruv8
export { studentRouter };
