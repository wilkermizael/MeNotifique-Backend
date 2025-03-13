const fs = require('fs');

const students = [
    {
      "id_class": 8,
      "name_student": "ANA CLARA ALMEIDA TEMPO",
      "name_responsible": "MARIA NILZA DE A. COSTA",
      "phone_responsible": "31988566942",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "ANA LUIZA OLIVEIRA SOUZA DE JESUS",
      "name_responsible": "ANA P. OLIVEIRA DE S. SILVA",
      "phone_responsible": "31988816579",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "CAIQUE JUNIO GOMES DE SOUZA",
      "name_responsible": "ELEN CRISTINA DE SOUZA REIS",
      "phone_responsible": "31988988450",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "CLAUDIO AUGUSTO OLIVEIRA SILVA",
      "name_responsible": "CLAUDIO ALESSANDRO S.SANTOS",
      "phone_responsible": "31984906091",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "DAVI AGUIAR PADILHA GODINHO",
      "name_responsible": "ANDREA AGUIAR DOS SANTOS",
      "phone_responsible": "31997553935",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "EDUARDO HENRIQUE DOS A. ROBERTO",
      "name_responsible": "SHEILA RAYAANE M.DOS A ROBERTO",
      "phone_responsible": "31985130231",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "ELIEL HERNANE FERREIRA DA SILVA",
      "name_responsible": "ANGELO FERREIRADA SILVA",
      "phone_responsible": "31986648101",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "ESTHER FFERREIRA ROCHA",
      "name_responsible": "ALISSON ROCHA FERREIRA",
      "phone_responsible": "31991463940",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "FELIPE DE OLIVEIRA LINHARES",
      "name_responsible": "TAINARA EMANUELE DE OLIVEIRA",
      "phone_responsible": "31987969548",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "GIOVANNA MOREIRA DE FARIA SILVA",
      "name_responsible": "WANDERSON MOREIRA DA SILVA",
      "phone_responsible": "31987094534",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "GIOVANNA NUNES F. DOS SANTOS",
      "name_responsible": "ADRIANA NUNES LOPES",
      "phone_responsible": "31988493288",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "HELLEN NICOLE PRADO PADILHA",
      "name_responsible": "JÉSSICA PRADO MARTINS",
      "phone_responsible": "31988073232",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "JOSÉ MISAEL NASCIMENTO MENDES",
      "name_responsible": "FÁTIMA APARECIDA N.O.MENDES",
      "phone_responsible": "31999288196",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "KAUA PIRES DA SILVA",
      "name_responsible": "FERNANDO PIRES DE SOUZA",
      "phone_responsible": "31987958048",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "LIVIA Mª DE P. RODRIGUES MONTEIRO",
      "name_responsible": "ELIANE DE PAULA MONTEIRO",
      "phone_responsible": "31987864198",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "LUANA CELESTINO DAS GRAÇAS",
      "name_responsible": "VALÉRIA CELESTINO",
      "phone_responsible": "31985352267",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "LUANA EDUARDO ROCHA",
      "name_responsible": "LUCIANA APARECIDA E.C. ROCHA",
      "phone_responsible": "31992617730",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "MARCELA FERNANDES GONZAGA",
      "name_responsible": "MARIA ISABEL F. PALHARES",
      "phone_responsible": "31989063374",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "MARCOS ANDRÉ LOPES DOS SANTOS",
      "name_responsible": "SIMONE LOPES DOS SANTOS",
      "phone_responsible": "31991413896",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "MARIA EDUARDA ALVES DE CARVALHO",
      "name_responsible": "VIVIANE T. ALVES MACHADO",
      "phone_responsible": "31987577899",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "MARIA EDUARDA SILVA SANTOS",
      "name_responsible": "MARIA APARECIDA I. DA SILVA",
      "phone_responsible": "31987353964",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "MARIA HELLENA FERREIRA CARVALHO",
      "name_responsible": "KETHELEN RUBIA F. DO NASCIMENTO",
      "phone_responsible": "31982433416",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "NAYLLA LEMES DE OLIVEIRA",
      "name_responsible": "CRISTIANY APARECIDA DE OLIVEIRA",
      "phone_responsible": "31987134506",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "OTÁVIO CALEB DA SILVA COELHO",
      "name_responsible": "MARIA LUIZA COELHO SANTOS",
      "phone_responsible": "31982005420",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "PAULO SERGIO ALMEIDA MORATO",
      "name_responsible": "MATEUS MORATO",
      "phone_responsible": "31992448793",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "PIETRO COELHO MARQUES",
      "name_responsible": "BEATRIZ DO ROSARIO COELHO",
      "phone_responsible": "31995621835",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "RAQUEL LUIZ DO CARMO",
      "name_responsible": "MARCILENE P. LUIZ DO CARMO",
      "phone_responsible": "31987034345",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "RAYLLA PIETRA SANTANA FERNANDES",
      "name_responsible": "ROSILENE ALVES DA S. FERNANDES",
      "phone_responsible": "31985169796",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "REBECA LUIZ DO CARMO",
      "name_responsible": "MARCILENE P. LUIZ DO CARMO",
      "phone_responsible": "31987034345",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "SARAH BEATRIZ DA SILVA SILVEIRA",
      "name_responsible": "SANDRA BEATRIZ DA SILVA",
      "phone_responsible": "31985171541",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "TAINÁ GABRIELLY SANTOS DE MACEDO",
      "name_responsible": "MARINA TEIXEIRA DOS SANTOS",
      "phone_responsible": "31991189420",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "VALENTINA K. DOS SANTOS SILVA",
      "name_responsible": "LOURIVAL DAS GRAÇAS SILVA",
      "phone_responsible": "31985140681",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "VICTOR DOS SANTOS ANGELINO",
      "name_responsible": "KENIA CLARA DOS SANTOS",
      "phone_responsible": "31987164296",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    },
    {
      "id_class": 8,
      "name_student": "VICTOR PIERRE XAVIER DOS SANTOS",
      "name_responsible": "JAEL LORENA SIMÃO PINTO",
      "phone_responsible": "31984712251",
      "img_student": "https://imgstudent.com",
      "qtd_faults": 0
    }
  ]
  fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
    } else {
      console.log('Arquivo students.json salvo com sucesso!');
    }
  });
