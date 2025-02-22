
import {CreateUser } from '@/protocols';
import Joi from 'joi';

type CreateUserParams = Omit<CreateUser, 'id'>;

export const createUserSchema = Joi.object<CreateUserParams>({
  user: Joi.string().required(),
  password: Joi.string().min(6).required(),

});
