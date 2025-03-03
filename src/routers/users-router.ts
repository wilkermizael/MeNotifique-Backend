import { Router } from 'express';
import { validateBody } from '../middlewares';
import { usersController, login } from '@/controllers';
import { createUserSchema } from '@/schemas/users-schemas';

//validateBody(createUserSchema),
const usersRouter = Router();

usersRouter.post('/register',validateBody(createUserSchema), usersController);
usersRouter.post('/login', validateBody(createUserSchema),login)
export { usersRouter };
