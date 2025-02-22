import { StudentWhitoutId } from "@/protocols"
import { studentRepository } from "@/repositories"
import { Student } from "@prisma/client"
import { AxiosResponse } from "axios"

export async function createRegisterStudent(infoStudent:StudentWhitoutId, imgPath:string):Promise<Student>{
    const createClass = await studentRepository.createStudent(infoStudent, imgPath)
    return createClass
  }
export async function getStudents():Promise<Student[]>{
    const findStudents = await studentRepository.getStudents()
    return findStudents
}
export async function getStudentByIdClass(id_class:number):Promise<Student[] | null>{
    const findStudent = await studentRepository.getStudentByIdClass(id_class)
    return findStudent
}
export async function updateStudent({ id, infoStudent}: { id: number; infoStudent: StudentWhitoutId }):Promise<Student> {
    const update = await studentRepository.updateStudent({ id, infoStudent});
    return update;
  }
export async function deleteStudent(id:number):Promise<Student>{
    const promise = await studentRepository.deleteStudent(id)
    return promise
}
export async function sendMessage(phoneNumber:string,message:string):Promise<AxiosResponse>{
    const send = await studentRepository.sendMessage(phoneNumber,message)
    console.log(send)
    return send
}  
export const studentService = {
    createRegisterStudent,
    getStudents,
    getStudentByIdClass,
    updateStudent,
    deleteStudent,
    sendMessage,
}