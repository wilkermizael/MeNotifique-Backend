"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendFaults = sendFaults;
async function sendFaults(students) {
    // Filtra os alunos que não compareceram e soma +1 às faltas
    const faults = students
        .filter(student => student.is_present === false)
        .map(student => ({
        id_student: student.id_student,
        qtd_faults: student.qtd_faults + 1 // Soma +1 à quantidade de faltas
    }));
    return faults; // Retorna o array atualizado com as novas quantidades de faltas
}
