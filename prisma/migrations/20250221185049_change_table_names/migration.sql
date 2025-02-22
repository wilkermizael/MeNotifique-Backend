/*
  Warnings:

  - You are about to drop the column `name_responsible01` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `name_responsible02` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `phone_responsible01` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `phone_responsible02` on the `students` table. All the data in the column will be lost.
  - Added the required column `name_responsible` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_responsible` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" DROP COLUMN "name_responsible01",
DROP COLUMN "name_responsible02",
DROP COLUMN "phone_responsible01",
DROP COLUMN "phone_responsible02",
ADD COLUMN     "name_responsible" TEXT NOT NULL,
ADD COLUMN     "phone_responsible" TEXT NOT NULL;
