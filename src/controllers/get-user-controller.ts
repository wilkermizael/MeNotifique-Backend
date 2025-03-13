import { userService } from '../services/user-service';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export async function getUser(req: Request, res: Response, next: NextFunction) {
 console.log("controller")
  try {

    const response = await userService.getUser();

    res.status(httpStatus.CREATED).json(response);
  } catch (err) {
    
    next(err);
  }
}