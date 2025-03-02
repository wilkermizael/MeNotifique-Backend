-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_id_class_fkey";

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
