
import { userService } from '@/services';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export async function usersController(req: Request, res: Response, next: NextFunction) {
  try {
    const { user, password } = req.body;

    const response = await userService.createUser({ user, password });

    res.status(httpStatus.CREATED).json({
      id: response.id,
      user: response.user,
      token: response.token
    });
  } catch (err) {
    
    next(err);
  }
}