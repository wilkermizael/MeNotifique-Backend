-- CreateTable
CREATE TABLE "owners" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "owner" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "nameClass" TEXT NOT NULL,
    "turn" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "id_class" INTEGER NOT NULL,
    "name_student" TEXT NOT NULL,
    "name_responsible01" TEXT NOT NULL,
    "name_responsible02" TEXT NOT NULL,
    "phone_responsible01" TEXT NOT NULL,
    "phone_responsible02" TEXT NOT NULL,
    "img_student" TEXT NOT NULL,
    "qtd_faults" INTEGER NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendances" (
    "id" SERIAL NOT NULL,
    "id_class" INTEGER NOT NULL,
    "id_student" INTEGER NOT NULL,
    "is_present" BOOLEAN NOT NULL,
    "date_call" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "send_notification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logbook" (
    "id" SERIAL NOT NULL,
    "id_class" INTEGER NOT NULL,
    "id_student" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "date_note" TIMESTAMP(3) NOT NULL,
    "demand" TEXT NOT NULL,
    "profissional" TEXT NOT NULL,

    CONSTRAINT "logbook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logbook" ADD CONSTRAINT "logbook_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logbook" ADD CONSTRAINT "logbook_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
