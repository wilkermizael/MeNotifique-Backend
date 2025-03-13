import { userRepository } from '@/repositories';
import { userService } from '../services/user-service';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';


export async function deleteUSer(req: Request, res: Response, next: NextFunction) {
  
    try {
        const { user, password } = req.body;
        console.log(user, password);
    
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