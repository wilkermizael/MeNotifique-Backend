-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_id_class_fkey";

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
