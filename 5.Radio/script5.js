//Quiz data
const quizData=[
    {
        question: "6. Folosirea staţiei radio la bord se face în baza:",
        answers: {
          a: "Certificatului general de operator radiotelefonist",
          b: "Licenţei de pilot şi a CI",
          c: "Licenţei staţiei de aeronavă şi certificatului restrâns de operator radiotelefonist"
        },
        correctAnswer: "a"
      },
      {
        question: "7. Pe ce frecvenţa comunicaţi cu o aeronava care vă interceptează?",
        answers: {
          a: "123.45",
          b: "129.40",
          c: "121.50"
        },
        correctAnswer: "c"
      },
      {
        question: "8. La defectarea staţiei radio în zbor în spaţiul aerian de clasă G",
        answers: {
          a: "aterizaţi de urgenţă pe cel mai adecvat teren situate în spaţiu clasa G",
          b: "va continuaţi zborul in spaţiu clasa G",
          c: "va întoarceţi imediat la locul de decolare prin spaţiul clasa G"
        },
        correctAnswer: "b"
      },
      {
        question: "9. Mesajul către organul de trafic care controlează spaţiul aerian în care doriţi sa intraţi conţine :",
        answers: {
          a: "cerere, salut, indicativ, CC, planificare, poziţie",
          b: "salut, indicativ, cerere, apelare, planificare, poziţie",
          c: "apel, indicativ, poziţie, CC, planificare, cerere"
        },
        correctAnswer: "c"
      },
      {
        question: "10. Distanţa maximă până la care aveţi obligaţia de a menţine legătura radio cu organul de trafic prin spaţiul aerian controlat de acesta prin care vă deplasaţi către spaţiul aerian de clasă G este :",
        answers: {
          a: "până la ieşirea din zona controlată",
          b: "până la limita audibilităţii",
          c: "până când organul de trafic va ordona schimbarea frecvenţei"
        },
        correctAnswer: "a"
      },
      {
        question: "11. Care este semnalul de urgentă în caz de necesitate şi pe ce frecvenţă se emite?",
        answers: {
          a: "HELP, HELP / 121.25",
          b: "MAY DAY, MAY DAY / 121.50",
          c: "PAN, PAN / 121.50"
        },
        correctAnswer: "c"
      },
      {
        question: "12. Frecvenţa radio a TWR de la LRAR este publicată în:",
        answers: {
          a: "AIP Romania",
          b: "Regulamentul Circulaţiei Aeriene din România",
          c: "HG 912/2010 - Anexa 1"
        },
        correctAnswer: "a"
      },
      {
        question: "13. Frecvenţa radio a TWR de la LROD este?",
        answers: {
          a: "111.20",
          b: "140.30",
          c: "120.20"
        },
        correctAnswer: "c"
      },
      {
        question: "14. Sunteţi parcat pe platforma unui aeroport din Ungaria cu aeronava YR-XXXX. Scrieţi în ordine primele 4 mesaje către TWR în vederea decolării.",
        answers: {
          a: "Tower YR-XXXX radio check",
          b: "YR-XXXX request start up",
          c: "YR-XXXX request taxi runway xx",
          d: "YR-XXXX request line up"
        },
        correctAnswer: "b"
      },
      {
        question: "15. Ce fază de acţiune specială se declanşează în cazul în care după 2 minute de la primirea şi confirmarea autorizării de aterizare nu aţi aterizat / nu aţi intrat în raza vizuala a organului de trafic / nu răspundeţi la apelul radio?",
        answers: {
          a: "ALERFA"
        },
        correctAnswer: "a"
      },
      {
        question: "16. Montarea şi folosirea staţiei radio la bord se face în baza:",
        answers: {
          a: "Certificatului general de operator radiotelefonist",
          b: "AAF şi certificatului general de operator radiotelefonist",
          c: "Licenţei staţiei de aeronava şi certificatului restrâns de operator radiotelefonist"
        },
        correctAnswer: "a"
      },
      {
        question: "17. Sunteţi parcat pe platforma unui aeroport a cărui limba naţională nu o cunoaşteţi la comanda aeronavei YR-XXXX. Scrieţi în ordine primele 5 mesaje către TWR în vederea decolării.",
        answers: {
          a: "Tower YR-XXXX radio check",
          b: "YR-XXXX request start up",
          c: "YR-XXXX request taxi runway xx",
          d: "YR-XXXX request line up",
          e: "YR-XXXX ready for departure"
        },
        correctAnswer: "b"
      },
      {
        question: "18. Folosind scala de audibilitate “te aud cu 4 “înseamnă?",
    answers: {
    a: "a. te aud bine",
    b: "b. te aud cu dificultate",
    c: "c. te aud cu zgomot de fond",
    d: "d. nu te aud deloc."
    },
    correctAnswer: "a"
    },
    {
    question: "19. Rămâi pe recepţie înseamnă:",
    answers: {
    a: "a. selectează stand by la transponder",
    b: "b. menţine-ţi poziţia",
    c: "c. continua pe direcţie până la noi instrucţiuni",
    d: "d. aşteaptă până te rechem"
    },
    correctAnswer: "d"
    },
    {
    question: "20. Ordinea corectă şi conţinutul unui raport de poziţie este:",
    answers: {
    a: "a. indicativul, poziţia, înălţimea, capul compas, estima",
    b: "b. indicativul, poziţia, timpul, capul compas, următoarea poziţie, estima",
    c: "c. indicativul, ruta, poziţia, înălţimea, solicitări"
    },
    correctAnswer: "b"
    },
    {
    question: "21. Autorizarea de decolare se solicită de la:",
    answers: {
    a: "a. turnul de control",
    b: "b. dispecerat",
    c: "c. serviciul de trafic",
    d: "d. briefing"
    },
    correctAnswer: "a"
    },
    {
    question: "22. Abrevierea HJ înseamnă că programul serviciului de trafic al aerodromului respectiv este:",
    answers: {
    a: "a. între răsărit şi apus",
    b: "b. între apus şi răsărit",
    c: "c. 24 de ore",
    d: "d. la cerere."
    },
    correctAnswer: "a"
    },
    {
    question: "23. Raza maximă de emisie a unei staţii VHF de la bordul avionului la 2500 m poate fi de:",
    answers: {
    a: "a. 180 km",
    b: "b. 220 km",
    c: "c. 300 km"
    },
    correctAnswer: "b"
    },
    {
    question: "24. Când un mesaj nu a fost înţeles se poate solicita repetarea acestuia?",
    answers: {
    a: "a. da, prin “repetaţi”",
    b: "b. da prin “nu am înţeles“",
    c: "c. nu."
    },
    correctAnswer: "a"
    },
    {
    question: "25. Abrevierea pentru o zonă de control este :",
    answers: {
    a: "a. CTR",
    b: "b. CTA",
    c: "c. CTZ"
    },
    correctAnswer: "a"
    },
    {
    question: "26. Aţi intrat în legătură cu turnul de control al unui aeroport şi recepţionaţi mesajul “RAMANETI PE RECEPTIE “, veţi răspunde înapoi:",
    answers: {
    a: "a. rămân pe recepţie",
    b: "b. ok.",
    c: "c. nu răspundeţi nimic, aşteptaţi să fiţi rechemaţi.",
    d: "d. confirm"
    },
    correctAnswer: "c"
    },
    {
    question: "27. Cuvântul “ROGER” însemnă",
    answers: {
    a: "a. corect",
    b: "b. mesaj recepţionat şi înţeles",
    c: "c. am recepţionat ultima transmisie"
    },
    correctAnswer: "c"
    },
    {
    question: "28. Ce măsură se ia în situaţia pierderii legăturii radio la zborul de deplasare între două aerodromuri",
    answers: {
    a: "a. se continuă zborul conform planului de zbor şi se aterizează pe cel mai apropiat aerodrom de pe traiect",
    b: "b. nu este necesară legătura radio",
    c: "c. se ia legătura pe frecvenţa de urgentă"
    },
    correctAnswer: "a"
    },
    {
    question: "29. Pentru utilizarea unei staţii radio sunt necesare:",
    answers: {
    a: "a. certificatul de radiotelefonist, aflat în termen de valabilitate",
    b: "b. licenţa de pilot aflată în termen de valabilitate",
    c: "c. autorizaţia de zbor a aeronavei"
    },
    correctAnswer: "a"
    },
    {
    question: "30. Aflaţi în zbor, atunci când TWR ne comunică prin radio o informaţie, este necesar să confirmăm faptul că am recepţionat corect mesajul respectiv?",
    answers: {
    a: "a. da, prin răspunsul “confirm”",
    b: "b. este suficient să confirmăm prin răspunsul “am înţeles”",
    c: "c. trebuie să fim întotdeauna pe recepţie când ne aflăm într-o categorie de spaţiu aerian în care legătura radio este obligatorie"
    },
    correctAnswer: "a"
    },
    {
    question: "31. Datele meteo la aerodromul de aterizare le putem afla de la :",
    answers: {
    a: "a. tower",
    b: "b. volmet",
    c: "c. ground"
    },
    correctAnswer: "b"
    },
    {
    question: "32. Când nu se poate stabili în zbor legătura radio pe frecvenţa indicată de organele competente cum se procedează?",
    answers: {
    a: "a. se încearcă stabilirea legăturii radio pe o altă frecvenţă corespunzătoare rutei de urmat",
    b: "b. se încearcă stabilirea legăturii cu o altă aeronavă pe frecvenţa corespunzătoare rutei",
    c: "c. dacă nu se reuşeşte stabilirea legăturii prin metodele de la punctele a) sau b) se transmite mesajul “transmisie fără recepţie“ urmată de transmiterea de două ori a acestuia"
    },
    correctAnswer: "c"
    },
    {
    question: "33. În ce reglementare se află regulile de radiotelefonie specifice pentru aviaţie?",
    answers: {
    a: "a. Regulamentul circulaţiei aeriene şi serviciilor de trafic aerian",
    b: "b. Regulamentul staţiilor de telecomunicaţii.",
    c: "c. Regulile Aerului"
    },
    correctAnswer: "b"
    },
    {
    question: "34. La întreruperea comunicaţiei radio în spaţiul aerian în care transponderul este obligatoriu pilotul setează transponderul în:",
    answers: {
    a: "a. squak 7500",
    b: "b. squak 7600",
    c: "c. squak 7700"
    },
    correctAnswer: "b"
    },
    {
    question: "35. Daca sunteţi în legătură cu un organ de trafic şi vi s-a oprit motorul în zbor veţi declara:",
    answers: {
    a: "a. MAY DAY",
    b: "b. PAN PAN",
    c: "c. EMERGENCY"
    },
    correctAnswer: "a"
    },
    {
    question: "36. Pentru rulajul aeronavei la intrarea pe pistă se utilizează frazeologia:",
    answers: {
    a: "a. indicativul aeronavei startul (nume aerodrom) permiteţi rulajul şi alinierea",
    b: "b. startul (nume aerodrom) (indicativul aeronavei) aprobaţi rulajul şi alinierea",
    c: "c. aprobaţi rulajul"
    },
    correctAnswer: "b"
    },
    {
    question: "37. În situaţia când aeronava se găseşte într-o situaţie gravă mesajul de pericol se lansează către:",
    answers: {
    a: "a. frecvenţa organului de dirijare şi control cu care este în legătură radio",
    b: "b. la nevoie pe frecvenţele internaţionale de pericol: 121,5 MHz",
    c: "c. organizaţiile de intervenţie la dezastre"
    },
    correctAnswer: "a"
    },
    {
    question: "38. Transferul dirijării se consideră făcut când:",
    answers: {
    a: "a. s-a stabilit legătura radio bilaterală cu organul de trafic primitor",
    b: "b. s-a obţinut autorizaţia de intrare în porţiunea repartizată organul de trafic primitor",
    c: "c. când schimbam frecvenţa, chiar fără a lua legătura"
    },
    correctAnswer: "a"
    },
    {
    question: "39. Staţiile radio de aviaţie au un domeniu de frecvenţă de:",
    answers: {
    a: "a. domeniul de frecvenţa se schimbă la fiecare 6 luni;",
    b: "b. 115000 MHz la 155000 MHz;",
    c: "c. 118.000 MHz la 135.975 MHz cu un ecart între canalele de 25 kHz."
    },
    correctAnswer: "c"
    },
    {
        question: "40. Când calitatea transmisiei şi a recepţiei scade datorită distanţei, atunci se mai poate creşte calitatea transmisiei din:",
        answers: {
          a: "butonul squelch",
          b: "din butonul ANL",
          c: "prin repornirea staţiei"
        },
        correctAnswer: "a"
      },
      {
        question: "41. Organele de trafic aerian au scopurile să:",
        answers: {
          a: "prevină abordajele aeronavelor",
          b: "furnizeze avizele şi informaţiile necesare zborurilor",
          c: "alarmeze organele abilitate pentru a acorda ajutor aeronavelor aflate în dificultate",
          d: "toate"
        },
        correctAnswer: "d"
      },
      {
        question: "42. La defectarea staţiei radio în zbor în spaţiu clasa G",
        answers: {
          a: "aterizaţi de urgenţă pe cel mai adecvat teren situat în spaţiu clasa G",
          b: "va continuaţi zborul în spaţiu clasa G",
          c: "va întoarceţi imediat la locul de decolare prin spaţiul clasa G"
        },
        correctAnswer: "b"
      },
      {
        question: "43. Mesajul către organul de trafic care controlează spaţiul în care doriţi să intraţi conţine:",
        answers: {
          a: "cerere, salut, indicativ, CC, planificare, poziţie",
          b: "salut, indicativ, cerere, apelare, planificare, poziţie",
          c: "apel, indicativ, poziţie, CC, planificare, cerere"
        },
        correctAnswer: "c"
      },
      {
        question: "44. Ce semnifica termenul UTC?",
        answers: {
          a: "ceasul timpului universal",
          b: "timpul universal standard",
          c: "timpul universal coordonat"
        },
        correctAnswer: "c"
      },
      {
        question: "45. Unitatea de măsură a frecventei este:",
        answers: {
          a: "Hertzul",
          b: "Newtonul",
          c: "VHF"
        },
        correctAnswer: "a"
      },
      {
        question: "46. 1 MHz reprezintă:",
        answers: {
          a: "1000 Hz",
          b: "1000 kHz",
          c: "100 kHz"
        },
        correctAnswer: "b"
      },
      {
        question: "47. Este recomandat ca după ce s-a făcut un apel unei staţii aeronautice să se lase un interval de… pana la următorul apel",
        answers: {
          a: "10 sec",
          b: "20 sec",
          c: "0 sec"
        },
        correctAnswer: "a"
      },
      {
        question: "48. Informaţii privind audiţia se transmit cu numere care indică calitatea recepţiei semnificaţia cifrei '1' este:",
        answers: {
          a: "inaudibil",
          b: "audibil cu dificultate",
          c: "audibil cu întreruperi"
        },
        correctAnswer: "a"
      },
      {
        question: "49. Informaţii privind audiţia se transmit cu numere care indică calitatea recepţiei semnificaţia cifrei '2' este:",
        answers: {
          a: "inaudibil",
          b: "audibil cu dificultate",
          c: "audibil cu întreruperi"
        },
        correctAnswer: "c"
      },
      {
        question: "50. Informaţii privind audiţia se transmit cu numere care indică calitatea recepţiei semnificaţia cifrei '3' este:",
        answers: {
          a: "audibil",
          b: "audibil cu dificultate",
          c: "perfect audibil"
        },
        correctAnswer: "b"
      },
      {
        question: "51. Informaţii privind audiţia se transmit cu numere care indică calitatea recepţiei semnificaţia cifrei '4' este:",
        answers: {
          a: "audibil",
          b: "audibil cu dificultate",
          c: "perfect audibil"
        },
        correctAnswer: "a"
      },
      {
        question: "52. Informaţii privind audiţia se transmit cu numere care indică calitatea recepţiei semnificaţia cifrei '5' este:",
        answers: {
          a: "audibil",
          b: "audibil cu dificultate",
          c: "perfect audibil"
        },
        correctAnswer: "c"
      },
      {
        question: "53. La transmiterea numerelor se foloseşte frazeologia:",
        answers: {
          a: "UNU ZERO",
          b: "ZECE",
          c: "Oricum"
        },
        correctAnswer: "a"
      },
      {
        question: "54. La transmiterea numerelor se foloseşte frazeologia:",
        answers: {
          a: "585 cinci opt cinci",
          b: "585 cinci sute opt zeci şi cinci",
          c: "585 cinci sute opt cinci"
        },
        correctAnswer: "a"
      },
      {
        question: "55. La transmiterea numerelor se foloseşte frazeologia:",
        answers: {
          a: "7600 şapte şase zero zero",
          b: "7600 şapte mii şase sute",
          c: "7600 şapte zeci şase zero zero"
        },
        correctAnswer: "b"
      },
      {
        question: "56. La întreruperea comunicaţiei radio în condiţiile meteorologice de zbor la vedere, aeronava trebuie:",
        answers: {
          a: "să aterizeze la aerodromul de destinaţie",
          b: "să aterizeze pe cel mai apropiat aerodrom convenabil",
          c: "nu are nici o obligaţie"
        },
        correctAnswer: "b"
      },
      {
        question: "57. Semnificaţia mesajului 'ALERFA' este:",
        answers: {
          a: "termenul codificat care indică o faza de alarmă",
          b: "termenul codificat care indică o faza de pericol",
          c: "termenul codificat care indică o faza de incertitudine"
        },
        correctAnswer: "a"
      },
      {
        question: "58. Abrevierea pentru o zonă terminală de control este:",
        answers: {
          a: "TMA",
          b: "CTA",
          c: "CTZ"
        },
        correctAnswer: "a"
      },
      {
        question: "59. Abrevierea  HX înseamnă că programul serviciului de trafic al aerodromului respectiv este:",
        answers: {
          a: "între răsărit şi apus",
          b: "între apus şi răsărit",
          c: "24 de ore",
          d: "la cerere"
        },
        correctAnswer: "d"
      },
      {
        question: "60. Care este semnalul de pericol în caz de necesitate şi pe ce frecvenţă se emite ?",
        answers: {
          a: "HELP, HELP / 121.25",
          b: "MAY DAY, MAY DAY / 121.50",
          c: "PAN, PAN / 121.50"
        },
        correctAnswer: "b"
      },
     {
        question: "61. Pe ce bază, conform legii, se instalează şi poate fi operată o staţie de radiocomunicaţii pe o aeronavă?",
        answers: {
          a: "o staţie de radiocomunicatii se instaleaza pe o aeronava si poate fi operata pe baza licentei statiei de aeronava si a certificatului general de operator radiotelefonist"
        },
        correctAnswer: "a"
      },
      {
        question: "62. Până unde aveţi obligaţia legală să menţineţi legătura radio cu organul de control al traficului aerian al unui spaţiu aerian de clasa C pe care îl intersectaţi în deplasarea către spaţiul aerian de clasa G?",
        answers: {
          a: "pana la iesirea din zona controlata"
        },
        correctAnswer: "a"
      },
      {
        question: "63. Frecvenţele radio ale turnului de control ale aeroporturilor din Romania se publică în :",
        answers: {
          a: "AIP Romania",
          b: "serviciul de trafic aerian naţional",
          c: "HG 912//2010 - Anexa 1"
        },
        correctAnswer: "a"
      },
      {
        question: "64.  Abrevierea 'NOTAM' reprezintă:",
        answers: {
          a: "notificare către aviatori",
          b: "notificare către pasageri",
          c: "mesaj special de observaţii meteo pentru cei interesaţi:"
        },
        correctAnswer: "a"
      },
      {
        question: "65. Abrevierea 'QFE' reprezintă:",
        answers: {
          a: "Presiunea atmosferica raportată la cota aerodromului",
          b: "Mesaj regulat de observaţii meteo pentru aviaţie",
          c: "Mesaj regulat de observaţii meteo pentru aviaţie"
        },
        correctAnswer: "a"
      },
      {
        question: "66. Faza de pericol se înştiinţează atunci când:",
        answers: {
          a: "în continuarea fazei de incertitudine când în continuare nu s-a reuşit luarea legăturii cu aeronava",
          b: "în continuarea fazei de alarmare când în continuare nu s-a reuşit luarea legăturii cu aeronava",
          c: "la 30 min. după faza de alarmare"
        },
        correctAnswer: "b"
      },
      {
        question: "67. Frazeologia standard pentru pornirea motorului:",
        answers: {
          a: "YR..... solicit pornirea",
          b: "YR..... vă solicit pornirea motorului",
          c: "YR..... pornesc motorul"
        },
        correctAnswer: "a"
      },
      {
        question: "68. Frazeologia standard pentru rulajul la pistă:",
        answers: {
          a: "YR..... solicit rulajul",
          b: "YR..... vă solicit rulajul",
          c: "nu se cere rulajul ci numai intrarea la pistă"
        },
        correctAnswer: "a"
      },
      {
        question: "69. În vederea prelungirii valabilităţii Certificatului general de operator radiotelefonist, titularul:",
        answers: {
          a: "va înainta o cerere în cursul ultimului an de valabilitate al certificatului",
          b: "se va emite automat un nou certificat de către autoritate",
          c: "nu se precizează"
        },
        correctAnswer: "a"
      },
      {
        question: "70. Calea aeriană reprezintă:",
        answers: {
          a: "un spaţiu aerian controlat",
          b: "proiecţia pe sol a unui spaţiu aerian controlat sau o porţiune din acesta",
          c: "un spaţiu aerian controlat sau o porţiune din acesta definită sub forma unui culoar aerian"
        },
        correctAnswer: "c"
      },
      {
        question: "71. Zburaţi cu un avion care nu este echipat cu transponder, cum veţi raporta organului de trafic când acesta va cere să afişaţi un SQUAK ?",
        answers: {
          a: "no transponder",
          b: "negativ transponder",
          c: "i don't have transponder"
        },
        correctAnswer: "b"
      },
      {
        question: "72. Denumirea organului de dirijare a cărui responsabilitate este controlul aeronavelor si vehiculelor din zona de manevra este:",
        answers: {
          a: "TOWER",
          b: "GROUND",
          c: "DISPECER",
          d: "APRON"
        },
        correctAnswer: "b"
      },
     {
        question: "73. Care din următoarele instrucţiuni sunt instrucţiuni condiţionate ?",
        answers: {
          a: "YR .......aprob alinierea şi aşteptarea",
          b: "YR........aprob decolarea la discreţia dumneavoastră",
          c: "YR........chemaţi-mă pe finala, trafic în aterizare",
          d:"YR........după traficul de pe finală aprob alinierea pe pista 23 "
        },
        correctAnswer: "d"
      },
      {
        question: "74. Cum veţi solicita repetarea unui mesaj neînţeles?",
        answers: {
          a: "vă rog repetaţi mesajul",
          b: "repetaţi vă rog",
          c: "repetaţi mesajul"
        },
        correctAnswer: "c"
      },
      {
        question: "75. Frecvenţa 121.725 va fi transmisă astfel:",
        answers: {
          a: "o suta doua zeci şi unu virgula şapte doi cinci",
          b: "unu doi unu cu şapte doi cinci",
          c: "unu doua zeci si unu point şapte doi cinci"
        },
        correctAnswer: "b"
      },
      {
        question: "76. ''Go around'' înseamnă:",
        answers: {
          a: "depăşeşte avionul din fata ta",
          b: "executa imediat un viraj de 360 grade",
          c: "degajează pista imediat",
          d: "executa imediat ratarea aterizării"
        },
        correctAnswer: "d"
      },
      {
        question: "77. În comunicarea sol aer dintre un controlor de trafic şi aeronava, controlorul întotdeauna va spune :",
        answers: {
          a: "mesajul apoi indicativul aeronavei",
          b: "indicativul prima oara apoi mesajul",
          c: "numai indicativul"
        },
        correctAnswer: "b"
      },
      {
        question: "78. Care din următoarele mesaje are prioritate maximă?",
        answers: {
          a: "atenţie se lucrează pe pistă",
          b: "chemaţi-mă pe finală de aterizare",
          c: "rulaţi către zona de alimentare",
          d: "solicit un cap compas către aerodrom"
        },
        correctAnswer: "d"
      },
      {
        question: "79. Daca un pilot primeşte o instrucţiune pe care nu poate să o îndeplinească, va spune controlorului:",
        answers: {
          a: "negativ instrucţiunea",
          b: "nu pot urma instrucţiunea",
          c: "nu pot",
          d: "anulaţi instrucţiunea"
        },
        correctAnswer: "b"
      },
      {
        question: "80. Când efectuaţi o transmisie pentru a verifica funcţionalitatea staţiei atunci veţi folosi următoarea frazeologie:",
        answers: {
          a: "Turnul.......YR......... CUM MĂ AUZITI?",
          b: "Turnul.......YR.........CONTROL RADIO",
          c: "Turnul.......YR..........MĂ AUZITI?"
        },
        correctAnswer: "b"
      },
      {
        question: "81. Sunteţi la poziţia de aşteptare şi aveţi toate check – urile făcute care va fi formula de adresare către turnul de control?",
        answers: {
          a: "ready for departure",
          b: "ready for take off",
          c: "ready to proceed",
          d: "ready for line up"
        },
        correctAnswer: "d"
      },
      {
        question: "82.  Frecvenţa pe care veţi face prima transmisie atunci când aveţi o situaţie de urgentă este:",
        answers: {
          a: "121.5",
          b: "frecvenţa curentă",
          c: "frecvenţa 125.1"
        },
        correctAnswer: "b"
      },
      {
        question: "83. Când transmiteţi un mesaj de urgenta aveţi obligaţia să furnizaţi următoarele informaţii:",
        answers: {
          a: "poziţia curentă sau ultima poziţie ştiută împreună cu înălţimea şi capul compas",
          b: "poziţia după GPS",
          c: "distanţa şi poziţia fată de aerodromul de plecare"
        },
        correctAnswer: "a"
      },
      {
        question: "84. Ce veţi spune într-o situaţie de DISTRESS?",
        answers: {
          a: "MAY DAY, MAY DAY, MAY DAY",
          b: "PAN PAN",
          c: "MAY DAY",
          d: "PAN"
        },
        correctAnswer: "a"
      },
      {
        question: "85. Care sunt cele 2 clasificări ale situaţiilor de urgenţă?",
        answers: {
          a: "PAN PAN and emergency",
          b: "DISTRESS and URGENCY",
          c: "MAY DAY and PAN PAN",
          d: "Emergency and security"
        },
        correctAnswer: "b"
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