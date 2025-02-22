import { CreateClass, StudentWhitoutId } from "@/protocols";
import Joi from "joi";

export const createStudentSchema = Joi.object<StudentWhitoutId>({
  id_class: Joi.number().required(),
  name_student: Joi.string().required(),
  img_student: Joi.string().allow(null, "").optional(),
  name_responsible: Joi.string().required(),
  phone_responsible: Joi.string().required(),
  qtd_faults: Joi.number().required(),
});
