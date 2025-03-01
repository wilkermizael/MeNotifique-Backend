import { prisma } from "@/config";
import { Attendance } from "@/protocols";

export async function existAttendance(id_class: number) {
  const results: Attendance[] = await prisma.attendance.findMany({
    where: { id_class }
  });
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );

  // Função para "zerar" a hora das datas para comparar apenas o dia
  const formatDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

  const todayFormatted = formatDate(today);

  // Verifica se existe algum item com a data de hoje
  const attendanceExists = results.some(
    (item) =>
      formatDate(new Date(item.date_call)) === todayFormatted);

  return attendanceExists; // true ou false
}
