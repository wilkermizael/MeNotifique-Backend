import * as Joi from 'joi';
import { CreateUserParams } from '../protocols';

export const createUserSchema = Joi.object<CreateUserParams>({
  user: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
