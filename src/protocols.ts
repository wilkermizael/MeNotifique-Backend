export type ApplicationError = {
  name: string;
  message: string;
};
export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type CreateUser = {
  id: number;
  user: string;
  password: string;
  token: string;
};
export type User = Omit<CreateUser, "id" | "token">;

export type CreateUserParams = {
  user: string;
  password: string;
};
export type CreateClass = {
  id: number;
  nameClass: string;
  turn: string;
  year: string;
};
export type CreateClassWihoutId = {
  nameClass: string;
  turn: string;
  year: string;
};
export type Student = {
  id: number;
  id_class: number;
  name_student: string;
  img_student?: string;
  name_responsible: string;
  phone_responsible: string;
  qtd_faults: number;
};
export type StudentWhitoutId = Omit<Student, "id">