import { prisma } from "@/config";
import { Attendance } from "@/protocols";

export async function isMessageSend(id_class: number) {
    const result: Attendance | null = await prisma.attendance.findFirst({
      where: {id_class,
      send_notification: true,
    }
    });
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    const dateFromDB = new Date(result.date_call);
  
    // Função para "zerar" a hora das datas para comparar apenas o dia
    const formatDate = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
    if (formatDate(today).getTime() === formatDate(dateFromDB).getTime()) {
      return true; // A data é igual e a mensagem ja foi enviada
    }
  
    return false; // A data é diferente e a mensagem nao foi enviada
  }