import { CreateClass, CreateClassWihoutId } from "@/protocols"
import { classRepository } from "@/repositories"

export async function createClass({nameClass, turn, year}:CreateClassWihoutId):Promise<CreateClass>{
    const createClass = await classRepository.createClass({nameClass, turn, year})
    return createClass
  }
  
export async function findById(id:number) {
    const findClass= await classRepository.findById(id)
    return findClass
  }
export async function findAll(){
  const allClass = await classRepository.findAll()
  return allClass
}

export async function update({id, nameClass, turn, year}:CreateClass){
  const updateClass = await classRepository.updateClass({id, nameClass, turn,year})
  return updateClass
}
export async function deleteClass(id:number){
  await classRepository.deleteClass(id)
  
}
export const classService = {
    
    createClass,
    findById,
    findAll,
    update,
    deleteClass, 
  }
