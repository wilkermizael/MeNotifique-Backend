-- DropForeignKey
ALTER TABLE "logbook" DROP CONSTRAINT "logbook_id_class_fkey";

-- DropForeignKey
ALTER TABLE "logbook" DROP CONSTRAINT "logbook_id_student_fkey";

-- AddForeignKey
ALTER TABLE "logbook" ADD CONSTRAINT "logbook_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logbook" ADD CONSTRAINT "logbook_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
