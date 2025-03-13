
import { duplicatedUserError, notFoundUser } from "@/errors";
import { CreateClass, CreateUser, CreateUserParams } from "@/protocols";
import { userRepository } from "@/repositories";
import * as bcrypt from "bcryptjs";


export async function createUser({ user, password }: CreateUserParams): Promise<CreateUser> {
  
    await validateUniqueUserOrFail(user);
  
    const hashedPassword = await bcrypt.hash(password, 12);
     return userRepository.create({
       user,
       password: hashedPassword,
     });
  }
  async function validateUniqueUserOrFail(user: string) {
    const userWithSameEmail = await userRepository.findByUser(user);
     if (userWithSameEmail) {
       throw duplicatedUserError();
     }
  }
export async function login({user, password}:CreateUserParams): Promise<CreateUser>{
    const existingUser = await userRepository.findByUser(user);
    if (!existingUser) {
        throw notFoundUser("Esse usuário não existe")
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        throw notFoundUser("Senha inválida");
    }
    return existingUser
}

export async function getUser():Promise<CreateUser[]>{
  const getuser = await userRepository.getUser()
  return getuser
}
  export const userService = {
    createUser,
    login,
    getUser,
  }