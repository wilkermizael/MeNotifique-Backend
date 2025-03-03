
import { cannotDelete } from '@/errors';
import { CreateClassWihoutId } from '@/protocols';
import { classService } from '../services/class-service';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

// Defina a interface para o corpo da requisição

export async function createClassController(
  req: Request<{}, {}, CreateClassWihoutId>, // Tipando o req.body corretamente
  res: Response,
  next: NextFunction
) {
  try {
    const {nameClass,turn,year} = req.body

    // Aqui você deve chamar um service específico para classes, não userService
    const response = await classService.createClass({ nameClass, turn,year });

    res.status(httpStatus.CREATED).send({
      response
    });
  } catch (err) {
    next(err);
  }
}


export async function findClassController(
  req: Request<{ id?: number }>, 
  res: Response,
  next: NextFunction
): Promise<void> { 
  try {
    const { id } = req.params;

    if (id) {
      const classData = await classService.findById(Number(id)); // 🔹 Convertendo id corretamente
      if (!classData) {
        res.status(httpStatus.NOT_FOUND).json({ message: "Turma não encontrada" });
        return
      }
      res.status(httpStatus.OK).json(classData);
      return
    }

    const allClasses = await classService.findAll();
    res.status(httpStatus.OK).json(allClasses);
    return
  } catch (error) {
    next(error)
  }
}

export async function updateClassController(
  req: Request<{id:string},{},CreateClassWihoutId>, 
  res: Response, 
  next: NextFunction)
  :Promise<void>{
  try {
    const id = Number(req.params.id);
    const {nameClass,turn, year} = req.body
    const updateClass = await classService.update({id,nameClass,turn, year})
    res.status(httpStatus.OK).json(updateClass)
    return
  } catch (error) {
    next(error);
  }

}

export async function deleteClassController(
  req: Request<{id: string}>,
  res: Response,
  next: NextFunction
): Promise<void> {
  try{
  const id = Number(req.params.id);
  await classService.deleteClass(id)
  res.status(httpStatus.ACCEPTED).json("Turma deletada permanentemente")
}catch(error){
  if(error){
    throw cannotDelete("Não existe turma para ser apagada")
  }
}
}