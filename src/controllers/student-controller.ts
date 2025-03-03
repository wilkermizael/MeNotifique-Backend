
import { cannotFindStudents } from '@/errors';
import { NewStudentProtocols, StudentWhitoutId } from '@/protocols';
import { studentService } from '../services/student-service';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
// Defina a interface para o corpo da requisição


interface MulterRequest extends Request {
    file?: Express.Multer.File; // Usa a tipagem correta
  }
export async function registerStudentController(
  req: MulterRequest, // Tipando o req.body corretamente
  res: Response,
  next: NextFunction
) {
  try {
    const infoStudent : StudentWhitoutId = req.body
    const imgPath = req.file ? `/uploads/${req.file.filename}` : null;
    const response = await studentService.createRegisterStudent(infoStudent,imgPath );
    res.status(httpStatus.CREATED).json({results:response});
  } catch (err) {
    next(err);
  }
}

export async function getStudent(
    req: Request,
    res: Response,
    next: NextFunction
){
    try {
        const getStudent = await studentService.getStudents()
        if(getStudent.length == 0){
            res.status(httpStatus.OK).json({message:"Ainda não há alunos na turma"})
        }
        res.status(httpStatus.OK).json({results:getStudent})
    } catch (error) {
        next(error)
    }
}
export async function getStudentByIdClass(
    req: Request<{"id":string}>,
    res: Response,
    next: NextFunction
){
    const id_class = Number(req.params.id)
    try {
        const getStudentById = await studentService.getStudentByIdClass(id_class)
        if(!getStudentById){
            throw cannotFindStudents("Aluno não encontrado na turma")
        }
        res.status(httpStatus.OK).json({results:getStudentById})
    } catch (error) {
        next(error)
    }
}

export async function updateStudent(
    req: Request | MulterRequest,
    res: Response,
    next: NextFunction
) {
    try {
        const id = Number(req.params.id);
        const { id_class, name_student, name_responsible, phone_responsible, qtd_faults } = req.body;
        const img_student = req.file ? req.file.path : undefined;
        // Parse manual para o objeto infoStudent
        const infoStudent: NewStudentProtocols = {
            id_class: Number(id_class),
            name_student: name_student,
            name_responsible: name_responsible,
            phone_responsible: phone_responsible,
            qtd_faults: Number(qtd_faults),
            img_student: req.file ? `/uploads/${req.file.filename}` : img_student,
        };


        const response = await studentService.updateStudent({ id, infoStudent });
        res.status(httpStatus.OK).json({ results: response });
    } catch (error) {
        console.error("Erro ao atualizar aluno:", error);
        next(error);
    }
}

export async function deleteStudentById(
    req: Request<{id:string}>,
    res: Response,
    next: NextFunction
){
    try{
        const id = Number(req.params.id)
        const response = await studentService.deleteStudent(id)
        res.status(httpStatus.OK).json(response)
    }catch(error){
        next(error)
    }
    
}
