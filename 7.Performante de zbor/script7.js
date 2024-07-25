//Quiz data
const quizData=[
  {
    question: "7. Limitele centrajului sunt:",
    answers: {
      a: "plaja poziţiei centrului de greutate între limitele admise faţă – spate",
      b: "plaja poziţiei sarcinii utile faţă - spate funcţie de centrul de greutate",
      c: "plaja poziţiei MTOM faţă - spate funcţie de centrul CMA"
    },
    correctAnswer: "a"
  },
  {
    question: "8. O aeronavă cu centrajul către limita admisă spate şi în limitele admise, este:",
    answers: {
      a: "instabilă în zbor",
      b: "normală în zbor",
      c: "în pericol de vrie plată la oprirea motorului"
    },
    correctAnswer: "b"
  },
  {
    question: "9. Funcţionarea optimă a unui motor cu piston este la:",
    answers: {
      a: "turaţia cuplului maxim",
      b: "turaţia maxima nelimitată",
      c: "turaţia consumului minim de combustibil"
    },
    correctAnswer: "a"
  },
  {
    question: "10. Carenajul roţilor trenului de aterizare:",
    answers: {
      a: "măreşte fineţea aerodinamică a aripii",
      b: "măreşte Cx",
      c: "micşorează Cx"
    },
    correctAnswer: "c"
  },
  {
    question: "11. Prin mărirea unghiului atac al palelor unei elice, menţinând aceeaşi turaţie, se:",
    answers: {
      a: "măreşte cuplul motorului",
      b: "măreşte turaţia motorului",
      c: "măreşte puterea motorului"
    },
    correctAnswer: "a"
  },
  {
    question: "12. Performanţele de zbor ale unui aeronave cresc dacă:",
    answers: {
      a: "se măreşte Cz şi se scade Cx",
      b: "se măreşte Cx şi se scade Cz",
      c: "se măreşte Cx şi se scade IAS"
    },
    correctAnswer: "a"
  },
  {
    question: "13. Care este prima măsură pe care o luaţi în cazul opririi motorului la h>300 m ?",
    answers: {
      a: "încercaţi repornirea şi anunţaţi controlorul de trafic",
      b: "asiguraţi viteza de planare",
      c: "căutaţi un loc propice aterizării de urgenta şi anunţaţi controlorul de trafic"
    },
    correctAnswer: "b"
  },
  {
    question: "14. Prin plasarea centrajului în afara limitelor admise aeronava este:",
    answers: {
      a: "interzisă zborului",
      b: "grea în comanda profundorului",
      c: "instabilă în zbor"
    },
    correctAnswer: "a"
  },
  {
    question: "15. Cum se ia contact cu apa în cazul unei amerizări forţate?",
    answers: {
      a: "pe toate roţile simultan",
      b: "mai întâi cu partea din faţa",
      c: "mai întâi pe partea din spate"
    },
    correctAnswer: "c"
  },
  {
    question: "16. Înainte de începerea unui zbor VFR / VMC în spaţiul clasa G aveţi obligaţia de a:",
    answers: {
      a: "va informa asupra cerinţelor, limitărilor şi restricţiilor aplicabile publicate",
      b: "respecta cerinţele, limitările şi restricţiile aplicabile publicate",
      c: "a respecta regulile de zbor VFR / VMC"
    },
    correctAnswer: "a"
  },
  {
    question: "17. Calarea altimetrului în zbor după QFE local indică:",
    answers: {
      a: "altitudinea aeronavei",
      b: "înălţimea aeronavei",
      c: "nivelul de zbor"
    },
    correctAnswer: "b"
  },
  {
    question: "18. Bagajul în aeronavele neomologate se pune:",
    answers: {
      a: "în orice spaţiu disponibil fixat care să nu afecteze comenzile",
      b: "ţinând cont de MTOM şi de centraj",
      c: "este interzis zborul cu bagaj aeronavelor neomologate"
    },
    correctAnswer: "b"
  },
  {
    question: "19. Ce înseamnă abrevierea MTOM? Dar MAC (CMA)?",
    answers: {
      a: "MTOM= Maximum Take Off Mass",
      b: "CMA=Coarda Medie Aerodinamica",
      c: "yes"
    },
    correctAnswer: "c"
  },
  {
    question: "20. MTOM este definit ca fiind:",
    answers: {
      a: "Masa totală permisă înainte de rulaj",
      b: "Masa totală permisă înainte de decolare",
      c: "Masa maximă admisă la decolare",
      d: "Masa totală permisă în punctul în care se trage de manşă la decolare"
    },
    correctAnswer: "c"
  },
  {
    question: "21. Care consideraţi a fii cea mai corectă afirmaţie din cele 4 când ne referim la VNE",
    answers: {
      a: "zborul îndelungat cu aceasta viteza este nesigur",
      b: "zborul cu aceasta viteza este interzis",
      c: "zborul cu aceasta viteza este permis numai în atmosfera liniştita",
      d: "zborul cu aceasta viteza va crea deformări cu caracter permanent  în structura avionului"
    },
    correctAnswer: "c"
  },
  {
    question: "22. Când intraţi într-un viraj mult înclinat ca să menţineţi înălţimea şi viteza trebuie să:",
    answers: {
      a: "nu e nevoie sa măriţi unghiul de atac",
      b: "nu e nevoie sa măriţi puterea motorului",
      c: "creştere a puterii şi unghiului de atac e necesar",
      d: "unghiul de atac trebuie mărit dar nu e nevoie de mărire a puterii"
    },
    correctAnswer: "c"
  },
  {
    question: "23. Care este viteza care nu trebuie depăşită dacă doriţi să efectuaţi o tragere bruscă de manşă pentru creşterea unghiului de atac şi de ce?",
    answers: {
    a: "Vs, deoarece tragerea bruscă de manşă poate duce la pierderea controlului zborului",
    b: "Vne, deoarece tragerea bruscă de manşă poate duce la deformări structurale ale avionului",
    c: "Va, deoarece tragerea bruscă de manşă poate duce la deformări structurale ale avionului",
    d: "Vfe, deoarece tragerea bruscă de manşă poate duce la pierderea controlului zborului"
    },
    correctAnswer: "c"
    },
    {
    question: "24. Care este motivul principal pentru care se caută a se decola cu vânt de faţă?",
    answers: {
    a: "ca să reducem viteza de angajare",
    b: "ca să reducem viteza la sol şi astfel să reducem distanta de decolare",
    c: "ca să reducem TAS",
    d: "ca să reducem viteza indicată şi astfel să reducem distanţa de decolare"
    },
    correctAnswer: "b"
    },
    {
    question: "25. Care este efectul flapsului pe prima poziţie asupra performanţelor de decolare?",
    answers: {
    a: "scade distanţa de decolare şi descreşte unghiul de urcare iniţial",
    b: "creşte distanţa de decolare şi creşte unghiul de urcare iniţial",
    c: "creşte distanţa de decolare şi descreşte unghiul de urcare iniţial",
    d: "descreşte distanţa de decolare şi creşte unghiul de urcare iniţial"
    },
    correctAnswer: "a"
    },
    {
    question: "26. Dacă densitatea atmosferică este scăzută atunci distanţa de decolare va:",
    answers: {
    a: "creşte",
    b: "descreşte",
    c: "nu va fi afectată"
    },
    correctAnswer: "a"
    },
    {
    question: "27. Care este efectul vântului de faţa asupra unghiului de planare şi asupra distanţei de planare?",
    answers: {
    a: "unghiul de planare va rămâne la fel şi distanţa de planare la fel",
    b: "unghiul de planare va creşte şi distanţa de planare va creşte",
    c: "unghiul de planare va scădea şi distanţa de planare va descreşte",
    d: "unghiul de planare va creşte şi distanţa de planare va descreşte"
    },
    correctAnswer: "d"
    },
    {
    question: "28. Rezistenţa indusă de la capătul aripi:",
    answers: {
    a: "nu variază la modificările de viteză",
    b: "creşte odată cu creşterea vitezei",
    c: "scade odată cu creşterea vitezei",
    d: "scade odată cu creşterea greutăţii"
    },
    correctAnswer: "c"
    },
    {
    question: "29. Ce efect are un vânt de coadă asupra timpului de urcare la o înălţime dată:",
    answers: {
    a: "timpul de urcare se măreşte",
    b: "timpul de urcare se micşorează",
    c: "depinde de tipul aeronavei",
    d: "timpul de urcare nu se modifică"
    },
    correctAnswer: "a"
    },
    {
    question: "30. Plafonul practic reprezintă:",
    answers: {
    a: "înălţimea la care viteza verticală maxima este max. 0.5 m/s",
    b: "înălţimea la care viteza verticală devine practic 0 m/s",
    c: "înălţimea la care avionul începe să coboare"
    },
    correctAnswer: "a"
    },
    {
    question: "31. Plafonul static reprezintă:",
    answers: {
    a: "înălţimea la care viteza verticală maximă este de 0.5 m/s",
    b: "înălţimea la care viteza verticala devine practic 0 m/s",
    c: "înălţimea maximă calculată aerodinamic"
    },
    correctAnswer: "c"
    },
    {
    question: "32. Viteza indicată de angajare se măsoară în raport cu:",
    answers: {
    a: "vântul relativ",
    b: "faţă de sol",
    c: "faţă de direcţia şi intensitatea vântului"
    },
    correctAnswer: "a"
    },
    {
    question: "33. La pierderea legăturii radio într-un spaţiu controlat pilotul va:",
    answers: {
    a: "continua zborul pană la cel mai apropiat aerodrom şi după aterizare informează telefonic organul de trafic",
    b: "se întoarce de urgenţă la aerodromul de plecare",
    c: "aterizează de urgenţă pe cel mai apropiat teren"
    },
    correctAnswer: "a"
    },
    {
    question: "34. Cum se compensează defectarea comenzii profundorului dacă centrajul este către limita admisă spate?",
    answers: {
    a: "cu ajutorul comenzii eleroane şi direcţie",
    b: "prin modificarea regimului motorului",
    c: "se acţionează obligatoriu paraşuta"
    },
    correctAnswer: "c"
    },
    {
    question: "35. În România zborul VFR în zona de aerodrom se admite de la:",
    answers: {
    a: "răsăritul soarelui până la apus orele fiind luate din AIP după ora Bucureşti",
    b: "răsăritul soarelui până la apus luate din AIP după ora aerodromului unde vă desfăşuraţi activitatea de zbor",
    c: "30 min după răsărit până la 30 min înainte de apus după ora Bucureşti"
    },
    correctAnswer: "a"
    },
    {
    question: "36. Este obligatorie obţinerea unei aprobări de decolare?",
    answers: {
    a: "da",
    b: "se poate decola la discreţia pilotului dacă se decolează din afara CTR",
    c: "numai dacă se decolează de pe un alt aerodrom"
    },
    correctAnswer: "a"
    },
    {
    question: "37. O programare de zbor pe o anumită zonă de operare este valabilă:",
    answers: {
    a: "24 ore",
    b: "30 zile",
    c: "15 zile"
    },
    correctAnswer: "a"
    },
    {
    question: "38. Ce acţiune se cere efectuată când 2 avioane converg unul spre altul dar nu faţa în faţă.",
    answers: {
    a: "cel mai rapid îl va lăsa să treacă pe cel mai încet",
    b: "aeronava care vine din stânga va da drept de trecere celeilalte",
    c: "fiecare aeronavă va vira către dreapta"
    },
    correctAnswer: "b"
    },
    {
    question: "39. Ce reprezintă sectorul de culoarea galbena de pe vitezometru?",
    answers: {
    a: "viteza ce nu trebuie depăşită în atmosferă liniştită",
    b: "viteza de manevră",
    c: "viteza care nu poate fi depăşită decât în atmosferă liniştită",
    d: "viteza maximă cu flapsul scos"
    },
    correctAnswer: "c"
    },
    {
    question: "40. Ce reprezintă viteza albă marcată pe vitezometru",
    answers: {
    a: "viteza ce nu trebuie depăşită în atmosfera liniştită",
    b: "viteza de manevră",
    c: "viteza care nu poate fi depăşită decât în atmosferă liniştită",
    d: "viteza maximă cu flapsul scos"
    },
    correctAnswer: "d"
    },
    {
    question: "41. Ce reprezintă linia roşie marcată pe vitezometru",
    answers: {
    a: "viteza ce nu trebuie depăşită niciodată",
    b: "viteza de manevră",
    c: "viteza care nu poate fi depăşită decât în atmosferă liniştită",
    d: "viteza maximă cu flapsul scos"
    },
    correctAnswer: "a"
    },
    {
    question: "42. Ce reprezintă marcajul verde pe vitezometru",
    answers: {
    a: "viteza ce nu trebuie depăşită în atmosferă liniştită",
    b: "viteza de manevră VA",
    c: "viteza care nu poate fi depăşită decât în atmosferă liniştită",
    d: "viteza maximă cu flapsul scos"
    },
    correctAnswer: "b"
    },
    {
    question: "43. Ce se înţelege prin centraj?",
    answers: {
    a: "poziţia centrului de greutate faţă de focarul avionului",
    b: "sarcina utilă faţă de MTOW",
    c: "prin centrajul avionului se înţelege distanţa pe orizontală dintre centrul de greutate al avionului şi bordul de atac al aripii echivalente, exprimat în procente din coarda medie aerodinamică"
    },
    correctAnswer: "c"
    },
    {
    question: "44. Limitele de centraj sunt:",
    answers: {
    a: "domeniul permis al centrului de greutate faţă de limita admisă faţă şi limita admisa spate a centrajului",
    b: "factorul de sarcină maxim şi factorul de sarcina minim."
    },
    correctAnswer: "a"
    },
    {
    question: "45. Dacă centrajul este către limita admisă spate, zborul cu aeronava respectivă este periculos?",
    answers: {
    a: "nu",
    b: "da"
    },
    correctAnswer: "a"
    },
    {
    question: "46. Cum se execută atingerea apei în situaţia unei aterizări forţate?",
    answers: {
    a: "mai întâi partea din spate",
    b: "mai întâi partea din faţă",
    c: "pe cât posibil toate roţile trenului simultan"
    },
    correctAnswer: "a"
    },
    {
    question: "47. Dacă avionul se află cu centrajul către limita admisă faţa botul acestuia se ridica mai greu (la cele cu roata de bot) faţa de cazul unui centraj mediu?",
    answers: {
    a: "da",
    b: "nu",
    c: "se ridică la fel ca în cazul centrajului mediu"
    },
    correctAnswer: "a"
    },
    {
    question: "48. Înainte de decolarea pe o rută este necesar să cunoaştem condiţiile meteo pe aceasta (din momentul decolării şi cele prognozate)?",
    answers: {
    a: "da",
    b: "nu"
    },
    correctAnswer: "a"
    },
    {
    question: "49. În clasele de spaţiu aerian în care nu este obligatorie legătura radio dar traficul este intens se pot folosi comunicaţiile radio în banda de aviaţie?",
    answers: {
    a: "da",
    b: "nu, întrucât nu este alocata o frecvență radio pentru acel spaţiu aerian"
    },
    correctAnswer: "a"
    },
    {
    question: "50. Raportarea prin radio a poziţiei solicitată de organele de trafic competente este obligatorie?",
    answers: {
    a: "da",
    b: "nu"
    },
    correctAnswer: "a"
    },
    {
    question: "51. Regulile VFR reprezintă?",
    answers: {
    a: "regulile de zbor la vedere",
    b: "regulile de zbor care se aplică atunci când condiţiile meteo permit ca zborul să se efectueze la vedere"
    },
    correctAnswer: "a"
    },
    {
    question: "52. După cât timp un plan de zbor depus pe un aeroport pentru un zbor necontrolat va fi amendat?",
    answers: {
    a: "1 zi",
    b: "30 minute",
    c: "1 ora"
    },
    correctAnswer: "b"
    },
    {
    question: "53. Cine este răspunzător de centrajul ULM ?",
    answers: {
    a: "mecanicul de aeronavă",
    b: "pilotul comandant al aeronavei",
    c: "fabricantul."
    },
    correctAnswer: "b"
    },
    {
    question: "54. Ce grupe de informaţii se transmit pilotului la începutul apropierii finale?",
    answers: {
    a: "schimbări semnificative la pista în serviciu",
    b: "informaţii referitoare la direcţia şi viteza vântului",
    c: "nivelul de apropiere final"
    },
    correctAnswer: "b"
    },
    {
    question: "55. Ocolirea aerodromurilor în zbor VFR se execută obligatoriu la distanţe de cel puţin:",
    answers: {
    a: "10 km în sectoarele de decolare şi aterizare ale zonelor acestora",
    b: "5 km în sectoarele de decolare şi aterizare ale zonelor acestora",
    c: "3 km în sectoarele de decolare şi aterizare ale zonelor acestora"
    },
    correctAnswer: "a"
    },
    {
    question: "56. Când este necesară depunerea unui plan de zbor:",
    answers: {
    a: "la începutul fiecărei zi de zbor",
    b: "numai când se efectuează zboruri în afara zonei de control al aeroportului/aerodromului",
    c: "nu este necesară depunerea pentru ULM"
    },
    correctAnswer: "b"
    },
    {
    question: "57. Este posibilă modificarea planului de zbor atunci când ULM se află deja în zbor:",
    answers: {
    a: "da, dar numai în cazul executării procedurilor de urgenţa",
    b: "da",
    c: "nu este precizat în legislaţie"
    },
    correctAnswer: "b"
    },
    {
    question: "58. Care sunt clasele de spaţiu aerian în care nu sunt obligatorii comunicaţiile radio pentru zborurile VFR:",
    answers: {
    a: "A, F, G",
    b: "F, G",
    c: "E, F, G"
    },
    correctAnswer: "c"
    },
    {
    question: "59. Aeronavele care zboară în spaţiul aerian necontrolat sunt obligate să respecte înălţimile minime de siguranţa publicate în:",
    answers: {
    a: "AIP Romania",
    b: "RACR-RA",
    c: "Regimul de zbor în spaţial aerian al României"
    },
    correctAnswer: "b"
    },
    {
    question: "60. Pe ce parte se executa virajele în turul de pistă după apropierea de un aerodrom:",
    answers: {
    a: "pe partea stângă, dacă nu este prevăzut, nu s-a solicitat sau nu i s-a aprobat pilotului astfel",
    b: "întotdeauna pe partea dreaptă",
    c: "după cum consideră pilotul"
    },
    correctAnswer: "a"
    },
    {
    question: "61. Care este ordinea de prioritate la aterizare:",
    answers: {
    a: "paraşuta, planor, avion",
    b: "în funcţie de intrarea în turul de pistă",
    c: "care este mai aproape de virajul “3”, cu traficul la vedere"
    },
    correctAnswer: "a"
    },
    {
    question: "62. Cum este afectată distanţa de decolare când la bord sunt 2 persoane şi rezervorul de combustibil este plin?",
    answers: {
    a: "creşte",
    b: "scade",
    c: "nu se modifica"
    },
    correctAnswer: "a"
    },
    {
    question: "63. Temperatura afectează performanţa de urcare?",
    answers: {
    a: "da pentru că temperatura înconjurătoare ridicată scade performanţa de urcare deoarece densitatea aerului este mai mică",
    b: "doar în etapa de decolare când răcirea motorului este insuficientă"
    },
    correctAnswer: "a"
    },
    {
    question: "64. IAS reprezintă?",
    answers: {
    a: "viteza indicată la bord",
    b: "viteza aerodinamică",
    c: "viteza atmosferică"
    },
    correctAnswer: "a"
    },
    {
      question: "65. Vântul influenţează distanţa de aterizare astfel:",
      answers: {
        a: "vântul de faţă reduce distanţa",
        b: "vântul de faţă măreşte distanţa",
        c: "vântul de spate reduce distanţa"
      },
      correctAnswer: "a"
    },
    {
      question: "66. Factorii atmosferici care pot duce la givraj sunt:",
      answers: {
        a: "viteza vântului",
        b: "presiunea atmosferică scăzută",
        c: "temperatura scăzută şi umiditatea crescută"
      },
      correctAnswer: "c"
    },
    {
      question: "67. Dacă înainte de pornirea motorului pilotul nu verifică poziţia manetei de gaze (MG):",
      answers: {
        a: "este o greşeală gravă care poate duce la deteriorarea avionului",
        b: "nu este greşit dacă nu se specifică în Manualul de Întreţinere şi Exploatare"
      },
      correctAnswer: "a"
    },
    {
      question: "68. Dacă după pornirea motorului pilotul uită şocul tras ce se poate întâmpla în zbor?",
      answers: {
        a: "nimic deosebit dacă temperatura în atmosferă este sub zero grade",
        b: "nu sunt afectate performanţele motorului",
        c: "supraalimentarea motorului cu benzină şi înecarea acestuia"
      },
      correctAnswer: "c"
    },
    {
      question: "69. La decolare este indicat să se planifice o distanţă de rezervă?",
      answers: {
        a: "da, poate fi folosită pentru aterizare în caz de oprirea motorului",
        b: "nu, se ţine cont doar de lungimea de decolare specificată în Manualul de Întreţinere şi Exploatare"
      },
      correctAnswer: "a"
    },
    {
      question: "70. Neefectuarea lucrărilor regulamentare poate afecta performanţele zborului?",
      answers: {
        a: "nu",
        b: "da",
        c: "în unele cazuri"
      },
      correctAnswer: "b"
    },
    {
      question: "71. Creşterea vitezei de zbor duce la:",
      answers: {
        a: "creşterea rezistenţei la înaintare",
        b: "efort mai mare pe manşă",
        c: "solicitarea mai mare a structurii aripii"
      },
      correctAnswer: "a"
    },
    {
      question: "72. Un avion cu centrajul către limita admisă spate, dar în limitele admise, este:",
      answers: {
        a: "instabil în zbor",
        b: "normal în zbor",
        c: "în pericol de vrie plată la oprirea motorului"
      },
      correctAnswer: "b"
    },
    {
      question: "74. Prin plasarea centrajului în afara limitelor admise aeronava devine",
      answers: {
        a: "interzisă zborului",
        b: "grea în comanda profundorului",
        c: "instabilă în zbor"
      },
      correctAnswer: "a"
    },
    {
      question: "77. Ce reguli de zbor se aplică categoriei de aeronave din care face parte ULM?",
      answers: {
        a: "reguli de zbor IFR",
        b: "reguli de zbor VFR",
        c: "nu are importanţă"
      },
      correctAnswer: "b"
    },
    {
      question: "78. La plecarea în raid, pilotul este obligat să cunoască situaţia meteorologică pe traiect?",
      answers: {
        a: "da",
        b: "nu"
      },
      correctAnswer: "a"
    },
    {
      question: "79. Un avion care are centrajul limită faţă admis este:",
      answers: {
        a: "stabil",
        b: "instabil"
      },
      correctAnswer: "a"
    },
    {
      question: "81. „În” timpul zborului pe traiect, legătura bilaterală radio este obligatorie?",
      answers: {
        a: "da",
        b: "nu",
        c: "nu are importanţă"
      },
      correctAnswer: "a"
    },
    {
      question: "82. La ruperea comenzii direcţiei cum se face devierea dreapta – stânga?",
      answers: {
        a: "prin împingere şi tragere de manşă",
        b: "lucrând cu motorul",
        c: "prin înclinarea avionului stânga – dreapta"
      },
      correctAnswer: "c"
    },
    {
      question: "83. La scoaterea flapsului, ce face botul avionului?",
      answers: {
        a: "se ridică",
        b: "coboară",
        c: "rămâne în aceeaşi poziţie"
      },
      correctAnswer: "b"
    },
    {
      question: "84. De ce se scoate flapsul la decolare?",
      answers: {
        a: "avionul se menţine uşor pe direcţie",
        b: "avionul se desprinde de sol la viteza mică",
        c: "avionul se desprinde de sol la viteza mare"
      },
      correctAnswer: "b"
    },
    {
      question: "85. Pentru zborul de deplasare între doua aeroporturi este necesar:",
      answers: {
        a: "planificarea zborului şi planul de zbor",
        b: "nu este necesar planul de zbor",
        c: "pentru ULM  nu se impune aceasta obligaţie"
      },
      correctAnswer: "a"
    },
    {
      question: "87. Cum este factorul de sarcină resimţit de pilot în cazul intrării într-o rafală de faţă sau verticală de jos în sus (turbulenţă) cu o aeronavă având MTOM = 472,5 kg şi suprafaţa portantă S = 10 mp faţă de altă aeronavă cu aceiaşi MTOM dar având S = 14 mp care intră într-o turbulenţă identică?",
      answers: {
        a: "mai mare",
        b: "mai mic",
        c: "la fel"
      },
      correctAnswer: "b"
    },
{
    question: "88. Timpul de urcare de la 0 m la 1000 m în cazul zborului cu vânt de spate, comparativ cu zborul cu vânt de faţă este: ",
    answers: {
      a: "mai mare ",
      b: "mai mic",
      c: "la fel"
    },
    correctAnswer: "a"
}

];
function shuffleAnswers(question) {
  const answersArray = Object.entries(question.answers); // Convert answers object to array of [key, value] pairs
  for (let i = answersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answersArray[i], answersArray[j]] = [answersArray[j], answersArray[i]];
  }
  // Convert shuffled array back to object
  const shuffledAnswers = {};
  answersArray.forEach(([key, value]) => {
    shuffledAnswers[key] = value;
  });
  return shuffledAnswers;
}

let currentIndex = 0; // Start with the first question
const incorrectQuestions = []; // Array to store incorrect questions
let correctCount = 0; // Counter for correct answers
let incorrectCount = 0;

function displayQuestionCounter(index) {
  const questionCounter = document.getElementById('question-counter');
  questionCounter.textContent = `Question ${index + 1} of ${quizData.length}`;
}

displayQuestion(currentIndex);

function displayQuestion(index) {
  displayQuestionCounter(index); // Update question counter
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const question = quizData[index];
  questionElement.textContent = question.question;

  answersElement.innerHTML = ''; // Clear previous answers

  const shuffledAnswers = shuffleAnswers(question);
  for (const option in shuffledAnswers) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const answerDiv = document.createElement('div');
    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    label.textContent = question.answers[option];
    answerDiv.classList.add('answer-option'); // Add class to answer div
    answerDiv.appendChild(input);
    answerDiv.appendChild(label);
    answersElement.appendChild(answerDiv);

    // Trigger click event on radio button when the answer div is clicked
    answerDiv.addEventListener('click', function () {
      input.checked = true;
      // Remove "selected" class from all answer divs
      const allAnswerDivs = document.querySelectorAll('.answer-option');
      allAnswerDivs.forEach(div => {
        div.classList.remove('selected');
      });
      // Add "selected" class to clicked answer div
      answerDiv.classList.add('selected');
    });
  }
}

// Function to enable the Next button when a radio button is selected
function enableNextButton() {
  document.getElementById('nextBtn').disabled = false;
}

// Function to check the selected answer
function submitAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert("Please select an answer");
    return;
  }

  const currentQuestion = quizData[currentIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedAnswer.value === correctAnswer) {
    currentQuestion.answeredCorrectly = true;
    correctCount++; // Increment correct answer counter
    selectedAnswer.parentElement.classList.add('correct'); // Apply correct class to selected answer
  } else {
    selectedAnswer.parentElement.classList.add('incorrect'); // Apply incorrect class to selected answer
    document.querySelector('input[value="' + correctAnswer + '"]').parentElement.classList.add('correct'); // Highlight correct answer
    incorrectCount++;
    incorrectQuestions.push(currentQuestion); // Store incorrect question
  }

  // Enable the Next button after submitting an answer
  enableNextButton();
  displayResults();
}

// Function to move to the next question
function nextQuestion() {
  // Remove all answer classes
  const answerDivs = document.querySelectorAll('.answer-option');
  answerDivs.forEach(answerDiv => {
    answerDiv.classList.remove('correct');
    answerDiv.classList.remove('incorrect');
  });

  // Move to the next question
  currentIndex++;
  if (currentIndex < quizData.length) {
    displayQuestion(currentIndex);
    // Disable the Next button until the next question is answered
    document.getElementById('nextBtn').disabled = true;
    displayQuestionCounter(currentIndex);
    
  } else {
    alert("Quiz completed!");
  }
}

// Function to display the results
function displayResults() {
  const resultContainer = document.getElementById('incorrect-questions');

  resultContainer.innerHTML = `
    <h1>Quiz Results</h1>
    <h2>Correct Answers: ${correctCount}</h2>
    <h2>Incorrect Answers: ${incorrectCount}</h2>
    <h3>Questions you got wrong:</h3>
  `;

  incorrectQuestions.forEach(question => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('incorrect-question');
    questionElement.innerHTML = `<br><h3>${question.question}</h3>`;
    
    const answersElement = document.createElement('div');
    for (const [key, value] of Object.entries(question.answers)) {
      const answerElement = document.createElement('p');
      answerElement.textContent = `${key}: ${value}`;
      if (key === question.correctAnswer) {
        answerElement.style.fontWeight = 'bold'; // Highlight correct answer
      }
      answersElement.appendChild(answerElement);
    }
    
    questionElement.appendChild(answersElement);
    resultContainer.appendChild(questionElement);
  });
}