import { Router } from 'express';
import { validateBody } from '@/middlewares';
import { createUserSchema } from '@/schemas';
import { usersController, login } from '@/controllers';

//validateBody(createUserSchema),
const usersRouter = Router();

usersRouter.post('/register',validateBody(createUserSchema), usersController);
usersRouter.post('/login', validateBody(createUserSchema),login)
export { usersRouter };
