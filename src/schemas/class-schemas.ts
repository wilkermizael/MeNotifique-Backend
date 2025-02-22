import { CreateClass } from "@/protocols";
import Joi from "joi";

export const createClassesSchema = Joi.object<CreateClass>({
    nameClass: Joi.string().required(),
    turn: Joi.string().required(),
    year: Joi.number().required
  });