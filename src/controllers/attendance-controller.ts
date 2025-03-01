import { AttendanceWithoutId, PresentStudent } from '@/protocols';
import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';
import { attendanceService } from '@/services';

export async function createAttendance(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      
      const attendance : PresentStudent[] = req.body
      const response = await attendanceService.createAttendanceRegister(attendance);
      res.status(httpStatus.CREATED).json({results:response});
    } catch (err) {
      next(err);
    }
  }

  export async function sendMessageController(req: Request, res:Response):Promise<void> {
    const { phoneNumber, message} = req.body;

    if (!phoneNumber || !message) {
        res.status(httpStatus.BAD_REQUEST).json({ message: "Número de telefone e mensagem são obrigatórios." });
    }

    try {
        const response = await attendanceService.sendMessage(phoneNumber, message);
        res.status(httpStatus.OK).json(response.data);
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error.response?.data || error.message);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao enviar mensagem.', error: error.response?.data });
    }
}