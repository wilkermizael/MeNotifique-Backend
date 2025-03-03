import { userService } from '../services/user-service';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { user, password } = req.body;

    const response = await userService.login({ user, password });

    res.status(httpStatus.OK).json({
      id: response.id,
      user: response.user,
      token: response.token
    });
  } catch (err) {
    
    next(err);
  }
}