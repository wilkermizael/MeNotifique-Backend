// import { PresentStudent } from "@/protocols";
// import axios from "axios";

// export async function sendMessageWhatsApp(students: PresentStudent[]): Promise<{ phone: string; status: string; error?: string }[]> {
//   const API_KEY = process.env.API_KEY;
//   const API_URL = process.env.API_URL;

//   const results: { phone: string; status: string; error?: string }[] = [];

//   try {
//     const promises = students.map(async (student: PresentStudent) => {
//       //const isPresent = student.is_present === true || student.is_present === "true";
//       const phoneNumber = `55${student.phone_responsible}`; // Prefixo do Brasil

//       const body = {
//         number: phoneNumber,
//         textMessage: {
//           text: student.is_present
//             ? `Olá ${student.name_responsible}, seu filho(a) ${student.name_student} está presente hoje! Muito obrigado pela cooperação!`
//             : `Olá ${student.name_responsible}, seu filho(a) ${student.name_student} *NÃO* compareceu hoje!\nVocê pode entrar em contato com a escola no número (31) 3344-5566 para mais informações.`,
//         },
//       };

//       try {
//         await axios.post(API_URL, body, {
//           headers: {
//             "Content-Type": "application/json",
//             apikey: API_KEY,
//           },
//           timeout: 5000,
//         });

//         results.push({ phone: phoneNumber, status: "success" });
//       } catch (error) {
//         console.error("Erro ao enviar mensagem para:", phoneNumber, error.response?.data || error.message);
//         results.push({ phone: phoneNumber, status: "error", error: error.message });
//       }
//     });

//     await Promise.all(promises); // Aguarda todas as requisições terminarem
//   } catch (error) {
//     console.error("Erro geral na requisição à API:", error.response?.data || error.message);
//   }

//   return results;
// }
import { PresentStudent } from "@/protocols";
import axios from "axios";

export async function sendMessageWhatsApp(students: PresentStudent[]): Promise<{ phone: string; status: string; error?: string }[]> {
  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  try {
    const promises = students.map(async (student: PresentStudent) => {
      const phoneNumber = `55${student.phone_responsible}`;
      const body = {
        number: phoneNumber,
        textMessage: {
          text: student.is_present
            ? `Olá ${student.name_responsible}, seu filho(a) ${student.name_student} está presente hoje! Muito obrigado pela cooperação!`
            : `Olá ${student.name_responsible}, seu filho(a) ${student.name_student} *NÃO* compareceu hoje!\nVocê pode entrar em contato com a escola no número (31) 3344-5566 para mais informações.`,
        },
      };

      try {
        await axios.post(API_URL, body, {
          headers: {
            "Content-Type": "application/json",
            apikey: API_KEY,
          },
          timeout: 5000,
        });

        return { phone: phoneNumber, status: "success" };
      } catch (error) {
        console.error("Erro ao enviar mensagem para:", phoneNumber, error.response?.data || error.message);
        return { phone: phoneNumber, status: "error", error: error.message };
      }
    });

    const results = await Promise.allSettled(promises);
    return results.map((result) =>
      result.status === "fulfilled" ? result.value : { phone: "desconhecido", status: "error", error: "Erro inesperado" }
    );
  } catch (error) {
    console.error("Erro geral na requisição à API:", error.response?.data || error.message);
    return [];
  }
}
