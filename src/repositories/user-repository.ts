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

  export const userRepository = {
    create, findByUser
  };