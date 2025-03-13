"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRepository = void 0;
const config_1 = require("../config");
// async function createStudent(
//   infoStudent: NewStudentProtocols[],
//   imgPath: string | null
// ) {
//   const classExists = await prisma.class.findUnique({
//     where: { id: Number(infoStudent.id_class) },
//   });
//   if (!classExists) throw new Error("Turma não encontrada.");
//   return prisma.student.create({
//     data: {
//       id_class: Number(infoStudent.id_class),
//       name_student: infoStudent.name_student,
//       img_student: imgPath,
//       name_responsible: infoStudent.name_responsible,
//       phone_responsible: infoStudent.phone_responsible,
//       qtd_faults: Number(infoStudent.qtd_faults),
//     },
//   });
// }
async function createStudent(students, imgPath) {
    if (!students.length)
        throw new Error("Lista de alunos vazia.");
    const classId = Number(students[0].id_class); // Como todos pertencem à mesma turma, pegamos o ID do primeiro
    // Verifica se a turma existe
    const classExists = await config_1.prisma.class.findUnique({
        where: { id: classId },
    });
    if (!classExists)
        throw new Error("Turma não encontrada.");
    // Faz o cadastro de todos os alunos da mesma turma
    return config_1.prisma.student.createMany({
        data: students.map(student => ({
            id_class: classId, // Todos pertencem à mesma turma
            name_student: student.name_student,
            img_student: imgPath ?? student.img_student, // Usa imgPath se existir, senão mantém a do aluno
            name_responsible: student.name_responsible,
            phone_responsible: student.phone_responsible,
            qtd_faults: Number(student.qtd_faults),
        })),
        skipDuplicates: true, // Evita erro caso tente cadastrar alunos repetidos
    });
}
async function getStudents() {
    return config_1.prisma.student.findMany();
}
async function getStudentByIdClass(id_class) {
    return config_1.prisma.student.findMany({ where: { id_class: id_class } });
}
async function updateStudent({ id, infoStudent }) {
    if (!infoStudent.id_class || !infoStudent.name_student) {
        throw new Error("Dados obrigatórios faltando.");
    }
    return config_1.prisma.student.update({
        where: { id },
        data: {
            class: { connect: { id: Number(infoStudent.id_class) } },
            name_student: infoStudent.name_student,
            name_responsible: infoStudent.name_responsible ?? "",
            phone_responsible: infoStudent.phone_responsible ?? "",
            qtd_faults: Number(infoStudent.qtd_faults) || 0,
            img_student: infoStudent.img_student
        },
    });
}
async function deleteStudent(id) {
    return config_1.prisma.student.delete({
        where: { id },
    });
}
exports.studentRepository = {
    createStudent,
    getStudents,
    getStudentByIdClass,
    updateStudent,
    deleteStudent,
};
