import { Prisma } from '@prisma/client';
import { prisma } from '@/config';
import { User } from '@/protocols';

async function findByUser(user: string, select?: Prisma.UserSelect) {
    const params: Prisma.UserFindUniqueArgs = {
      where: {
        user,
      },
    };
    if (select) {
        params.select = select;
      }
    
      //return prisma.user.findUnique(params);
      return prisma.user.findUnique(params)
}

async function create(data: User) {
    return prisma.user.create({
      data,
    });
  }
  async function getUser() {
    
    const results = prisma.user.findMany();
    console.log(results)
    return results
  }

  export const userRepository = {
    create, findByUser, getUser
  };