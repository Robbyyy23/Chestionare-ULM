//Quiz data
const quizData = [
    {
      question: "1. Zborul în ceată este interzis pentru că:",
      answers: {
        a: "se poate opri motorul din cauza umezelii",
        b: "se murdăreşte parbrizul şi scade vizibilitatea",
        c: "dispare orientarea"
      },
      correctAnswer: "c"
    },
    {
      question: "2. Acceleraţii gravitaţionale de +3 g şi peste produc:",
      answers: {
        a: "solicitarea aeronavei peste limitele ei",
        b: "scăderea fluxului sanguin în zona capului",
        c: "creşterea fluxului sanguin în zona capului"
      },
      correctAnswer: "b"
    },
    {
      question: "3. În timpul zborului, la temperaturi negative:",
      answers: {
        a: "se pot consuma cantităţi mici de băuturi alcoolice pentru încălzire",
        b: "se poate consuma alcool de până la maxim 0,8 mg/l",
        c: "este interzis consumul de alcool"
      },
      correctAnswer: "c"
    },
    {
      question: "5. Vălul negru apare la:",
      answers: {
        a: "acceleraţii gravitaţionale negative",
        b: "acceleraţii gravitaţionale peste -2 g",
        c: "acceleraţii gravitaţionale pozitive"
      },
      correctAnswer: "c"
    },
    {
      question: "6. În cazul inhalării gazelor de eşapament poate apare:",
      answers: {
        a: "intoxicaţia cu bioxid de carbon",
        b: "intoxicaţia cu oxid de carbon",
        c: "intoxicaţia cu dioxid de carbon"
      },
      correctAnswer: "b"
    },
    {
      question: "7. În cazul urmării unui tratament medicamentos:",
      answers: {
        a: "vă este interzis zborul",
        b: "nu sunt restricţii la zbor",
        c: "puteţi zbura numai cu avizul medicului care a prescris tratamentul"
      },
      correctAnswer: "c"
    },
    {
      question: "8. În cazul apariţiei durerilor în timpane la variaţii de altitudine veţi:",
      answers: {
        a: "continua zborul si veţi înghiţi de câteva ori sau veţi mesteca gumă de mestecat",
        b: "întrerupe zborul",
        c: "continua zborul şi veţi înghiţii un analgezic"
      },
      correctAnswer: "a"
    },
    {
      question: "9. Pentru evitarea apariţiei crampelor şi durerilor abdominale în timpul zborului:",
      answers: {
        a: "se fac exerciţii fizice abdominale cca. 15 minute înainte de zbor",
        b: "nu se consumă alimente care fermentează pe traiectul intestinal",
        c: "se înghite cu 15 - 20 minute înainte de zbor medicaţie adecvată"
      },
      correctAnswer: "b"
    },
    {
      question: "10. Zborul în nori este interzis pentru că:",
      answers: {
        a: "dispare orientarea",
        b: "reglementările impun acest lucru",
        c: "acest zbor poate efectuat doar după regulile IFR"
      },
      correctAnswer: "a"
    },
    {
      question: "11. În timpul zborului, la temperaturi negative:",
      answers: {
        a: "veţi fi echipat corespunzător",
        b: "este interzis consumul de alcool",
        c: "se poate consuma alcool în limita permisă de lege"
      },
      correctAnswer: "b"
    },
    {
      question: "12. Cum procedaţi când aveţi ca pasager o persoana care nu a mai zburat şi constataţi că există posibilitatea ca în curând să i se facă rău (senzaţii de vomă/vomă, transpitraţie, panică etc.)?",
      answers: {
        a: "evitaţi să zburaţi când este cald şi/sau atmosfera este turbulentă",
        b: "daţi pasagerului o pungă de plastic şi pilotaţi foarte lin acordându-i atenţie sporită",
        c: "zburaţi în apropierea aerodromului pentru a putea ateriza cât mai repede posibil atunci când constataţi faptul respectiv"
      },
      correctAnswer: "b"
    },
    {
      question: "13. Vârsta pentru zbor este:",
      answers: {
        a: "nelimitată pentru orice calificare",
        b: "nelimitată pentru calificarea de pilot",
        c: "60 ani pentru calificarea de instructor de zbor"
      },
      correctAnswer: "a"
    },
    {
      question: "14. Ce este Hipoxia?",
      answers: {
        a: "lipsa de oxigen datorată creşterii înălţimii",
        b: "creşterea presiunii arteriene datorată creşterii înălţimii",
        c: "lipsa de oxigen datorată scăderii temperaturii exterioare"
      },
      correctAnswer: "a"
    },
    {
      question: "15. Hipoglicemia poate apărea:",
      answers: {
        a: "datorită stresului",
        b: "prea mult zahăr în sânge",
        c: "somnolenţă",
        d: "alimentaţie neregulata sau pe fugă"
      },
      correctAnswer: "d"
    },
    {
      question: "16. Alcoolul este eliminat din organism cu o rată de …. miligrame per …. mililitri per oră:",
      answers: {
        a: "10      50",
        b: "10      100",
        c: "10      120",
        d: "15      100"
      },
      correctAnswer: "d"
    },
    {
      question: "17. Umiditatea confortabilă a corpului omenesc îmbrăcat este de:",
      answers: {
        a: "40% - 50%",
        b: "30% - 40%",
        c: "20% - 50%",
        d: "40% - 60%"
      },
      correctAnswer: "d"
    },
    {
      question: "18. Timpul de rămânere treaz fără oxigen la  o altitudine de 10000 m este de:",
      answers: {
        a: "1 min",
        b: "12 sec",
        c: "30 sec",
        d: "45 sec"
      },
      correctAnswer: "c"
    },
    {
        question: "19. O valvă tip robinet trebuie deschisă:",
        answers: {
          a: "învârtită în sensul acelor de ceasornic",
          b: "învârtită în sensul invers acelor de ceasornic",
          c: "depinde de sistemul de operare"
        },
        correctAnswer: "b"
      },
      {
        question: "20. Body language (limbajul corpului) este:",
        answers: {
          a: "comunicare non verbală",
          b: "limbajul semnelor",
          c: "semene de agresiune"
        },
        correctAnswer: "a"
      },
      {
        question: "21. De la ce înălţime apar efectele hipoxiei fără oxigen suplimentar?",
        answers: {
          a: "2000 m",
          b: "3000 m",
          c: "4000 m",
          d: "5000 m"
        },
        correctAnswer: "b"
      },
      {
        question: "22. Puteţi zbura dacă suferiţi de narcolepsie?",
        answers: {
          a: "numai dimineaţa",
          b: "peste 40 ani",
          c: "niciodată",
          d: "numai sub directa supraveghere medicală"
        },
        correctAnswer: "c"
      },
      {
        question: "23. Ce efect poate avea consumul de alcool consumat înainte de culcare?",
        answers: {
          a: "o cantitate mica (o bere) ajuta corpul să se relaxeze şi îndulceşte somnul",
          b: "lungeşte în timp durata de somn",
          c: "scurtează în timp durata de somn",
          d: "nu are nici un efect"
        },
        correctAnswer: "b"
      },
      {
        question: "24. Acumulări semnificative de monoxid de carbon în organism pot genera:",
        answers: {
          a: "dureri de cap la nivelul creierului parietal (în zona frunţii şi tâmplă)",
          b: "senzaţie de pierdere a forţei muşchilor",
          c: "o stare de euforie generala şi agitaţie"
        },
        correctAnswer: "a"
      },
      {
        question: "25. Care din afirmaţiile de mai jos definesc cel mai corect hipoxia?",
        answers: {
          a: "deficienţa de oxigen în corp",
          b: "o creştere anormală a volumului de aer respirat",
          c: "situaţia apariţiei bulelor de gaz în sânge"
        },
        correctAnswer: "a"
      },
      {
        question: "26. În atmosfera terestră cum variază proporţia de oxigen odată cu creşterea înălţimii?",
        answers: {
          a: "odată cu creşterea înălţimii cantitatea de oxigen scade",
          b: "odată cu creşterea înălţimii cantitatea de oxigen creste",
          c: "cantitatea de oxigen rămâne constantă odată cu creşterea înălţimii",
          d: "în troposferă proporţia de oxigen descreşte odată cu creşterea înălţimii dar rămâne constantă în stratosferă"
        },
        correctAnswer: "a"
      },
      {
        question: "27. Răspundeţi la următoarea afirmaţie: Dacă presiunea atmosferică scade, atunci presiunea oxigenului din atmosferă:",
        answers: {
          a: "creşte",
          b: "scade",
          c: "rămâne aceeaşi",
          d: "presiunea oxigenului nu este afectata fiind independentă de presiunea atmosferică"
        },
        correctAnswer: "b"
      },
      {
        question: "28. Odată cu urcarea la înălţime a unui avion cantitatea de oxigen existentă de care dispune pilotul scade deoarece:",
        answers: {
          a: "scade presiunea atmosferică",
          b: "scade temperatura atmosferică",
          c: "scade proporţia de oxigen în atmosferă",
          d: "creşte proporţia de hidrogen în atmosferă"
        },
        correctAnswer: "a"
      },
      {
        question: "29. Finalizaţi următoarea afirmaţie: Celulele creierului care nu mai sunt oxigenate încep să moara după:",
        answers: {
          a: "2 sec",
          b: "2 min",
          c: "30 min",
          d: "2 ore"
        },
        correctAnswer: "b"
      },
      {
        question: "30. Un pilot sănătos poate opera în condiţii normale fără a beneficia de oxigen suplimentar până la o înălţime de:",
        answers: {
          a: "2000 m",
          b: "3000 m",
          c: "2500 m",
          d: "4000 m"
        },
        correctAnswer: "b"
      },
      {
        question: "31. Care sistem al corpului este responsabil pentru distribuţia oxigenului în întreg corpul?",
        answers: {
          a: "sistemul nervos",
          b: "sistemul respirator",
          c: "sistemul circulator",
          d: "sistemul oxidant"
        },
        correctAnswer: "c"
      },
      {
        question: "32. Dacă un pilot suferă de lipsa de oxigen atunci el suferă de:",
        answers: {
          a: "hiperventilaţie",
          b: "anoxia",
          c: "hipsigiena",
          d: "hipoxie"
        },
        correctAnswer: "d"
      },
      {
        question: "33. Răspundeţi la următoarea întrebare. Nivelul de zgomot se măsoară în:",
        answers: {
          a: "Hertz",
          b: "Pascali",
          c: "Joule",
          d: "Decibeli"
        },
        correctAnswer: "d"
      },
      {
        question: "34. Unul dintre factorii principali care contribuie la răul de mişcare este:",
        answers: {
          a: "înclinarea rapidă într-un viraj",
          b: "efectuarea de manevre cu factor de sarcină mare",
          c: "neconcordanta dintre percepţia vizuală si reacţia senzorilor vestibulari",
          d: "angajarea avionului"
        },
        correctAnswer: "c"
      },
      {
        question: "35. Care este funcţia tubului lui Eustachio?",
        answers: {
          a: "permite lichidelor acumulate să se scurgă din urechea internă",
          b: "permite detectarea sunetelor",
          c: "conectează urechea internă cu canalele semicirculare",
          d: "permite ca presiunea din urechea internă să se egaleze cu presiunea ambientală"
        },
        correctAnswer: "d"
      },
      {
        question: "36. Cât timp îi este necesar unui pilot să nu zboare după ce a luat anestezice?",
        answers: {
          a: "12 ore",
          b: "2 ore",
          c: "24 ore",
          d: "48 ore"
        },
        correctAnswer: "c"
      },
      {
        question: "37. Suferiţi de o răceală cu blocare parţială a sinusurilor, aveţi nasul înfundat şi trebuie să zburaţi, ce veţi face?",
        answers: {
          a: "luaţi un decongestionant cu o jumătate de oră înainte de zbor",
          b: "puteţi zbura normal",
          c: "zburaţi normal dar cu condiţia să nu urcaţi sau coborâţi cu rate mari",
          d: "se recomandă să nu zburaţi"
        },
        correctAnswer: "d"
      },
      {
        question: "38. Care afirmaţie e corectă:",
        answers: {
          a: "consumul de alimente creşte rata de disipare a alcoolului",
          b: "odată cu creşterea altitudinii de zbor efectele alcoolului se diminuează",
          c: "dacă consumaţi cafea neagră va creşte rata de eliminare a alcoolului din sânge",
          d: "alcoolul este un stimulent"
        },
        correctAnswer: "c"
      },
      {
        question: "39. Un pilot se apropie de o pistă care este foarte lată comparabil cu cea pe care a învăţat să zboare, care va fi percepţia vizuală pe care o va avea faţă de această pistă?",
        answers: {
          a: "pista îi va părea mai departe decât este",
          b: "pista îi va părea mai aproape decât este",
          c: "distanţa e uşor de apreciat în aceste condiţii",
          d: "o altă tehnică de apropiere va fi adoptată"
        },
        correctAnswer: "b"
      },
      {
        question: "40. Dacă zburaţi mai mult timp într-o atmosferă poluată, cu vizibilităţi reduse, după care veţi continua să zburaţi într-o atmosferă clară:",
        answers: {
          a: "reperele îndepărtate vor părea mai îndepărtate decât sunt",
          b: "reperele îndepărtate vor părea mai aproape decât sunt",
          c: "reperele din apropiere pot fi mai puţin vizibile decât cele îndepărtate",
          d: "reperele din apropiere pot apărea mai departe decât sunt"
        },
        correctAnswer: "b"
      },
      {
        question: "41. Pentru păstrarea întregii capacitaţi a aptitudinilor de zbor este interzis:",
        answers: {
          a: "consumul de alcool în cantitate mare",
          b: "consumul de alcool oricare ar fi cantitatea şi cauza",
          c: "a nu se respecta programul de odihnă regulamentar, în timpul aşteptării pentru zbor precum şi în timpul zborului"
        },
        correctAnswer: "b"
      },
      {
        question: "42. Situaţii necorespunzătoare ale organismului din punct de vedere al efortului cerut de zbor:",
        answers: {
          a: "deficienţa de rezistenţă provocată de neodihnă",
          b: "alimentaţie insuficientă",
          c: "somnolenţă",
          d: "toate"
        },
        correctAnswer: "d"
      },
      {
        question: "43. Factorii care pot dăuna organismului omenesc în zbor, intervin:",
        answers: {
          a: "la înălţimi mari de zbor",
          b: "când echipajul nu este protejat împotriva zgomotului şi trepidaţiilor aeronavei",
          c: "nu este cazul"
        },
        correctAnswer: "a"
      },
      {
        question: "44. Evitarea efectelor acceleraţiilor pe care corpul omenesc nu le poate suporta se face prin:",
        answers: {
          a: "se interzice zborul cu personal insuficient controlat medical",
          b: "se interzice zborul când atmosfera este foarte umedă",
          c: "se interzice orice bruscare inutilă a aeronavei"
        },
        correctAnswer: "c"
      },
      {
        question: "45. Condiţiile psiho-fizice ale pilotului de ULM:",
        answers: {
          a: "se supun aceloraşi standarde medicale prevăzute personalului navigant din aviaţia sportivă",
          b: "există reglementări specifice",
          c: "nu este cazul"
        },
        correctAnswer: "a"
      },
      {
        question: "46. Echiparea cu paraşută este obligatorie:",
        answers: {
          a: "în zborurile experimentale tehnice",
          b: "indiferent de înălţime",
          c: "nu este obligatorie, rămâne la hotărârea comandantului de aeronavă"
        },
        correctAnswer: "a"
      },
      {
        question: "47. Înainte de zbor este obligatoriu:",
        answers: {
          a: "un timp de odihnă regulamentar",
          b: "nu este cazul la acest tip de aeronavă",
          c: "program de pregătire fizică"
        },
        correctAnswer: "a"
      },
      {
        question: "48. La zborurile la înălţimi peste 2000 m:",
        answers: {
          a: "aeronava va fi echipată cu instalaţie de oxigen",
          b: "nu se zboară la această înălţime cu un aeronavele ultrauşoare",
          c: "personalul de la bord va fi echipat corespunzător",
          d: "depinde de anotimp"
        },
        correctAnswer: "c"
      },
      {
        question: "49. Vârsta maximă se limitează astfel:",
        answers: {
          a: "la 40 ani",
          b: "la 60 ani",
          c: "este nelimitată dacă există aptitudine medicală"
        },
        correctAnswer: "c"
      },
      {
        question: "50. Există medicamente care pot afecta capacităţile psiho-fizice ale pilotului?",
        answers: {
          a: "da",
          b: "nu",
          c: "depinde de medicament"
        },
        correctAnswer: "a"
      },
      {
        question: "51. În lipsa reperelor vizuale externe, decelerarea în condiţiile zborului rectiliniu va crea senzaţia:",
        answers: {
          a: "ridicării botului avionului",
          b: "pierderii de înălţime",
          c: "coborârii botului avionului"
        },
        correctAnswer: "a"
      },
      {
        question: "52. Rolul aparatului vestibular este de:",
        answers: {
          a: "realizare a orientării spaţiale",
          b: "control a bolii de mişcare",
          c: "a spori capacitatea auditivă, îndeosebi pentru frecvenţe înalte"
        },
        correctAnswer: "a"
      },
      {
        question: "53. Care este iluzia creată de apropierea de o pistă care este mai lată ca de obicei?",
        answers: {
          a: "de iniţiere tardivă a manevrelor de aterizare",
          b: "de iniţiere precoce a manevrelor de aterizare",
          c: "de apropiere la aterizare cu o viteză mult prea mică"
        },
        correctAnswer: "b"
      },
      {
        question: "54. Care este numărul maxim de puncte care poate fi acumulat în sistemul de “credit-somn” şi care este necesarul de timp pentru acumularea lor:",
        answers: {
          a: "16 puncte credit în 8 ore",
          b: "24 puncte credit în 12 ore",
          c: "8 puncte credit în 16 ore"
        },
        correctAnswer: "a"
      },
      {
        question: "55. Prima regulă a unui pilot bun este:",
        answers: {
          a: "să zboare pe orice condiţie meteo",
          b: "să ştie când să renunţe să decoleze",
          c: "să zboare cât mai mult"
        },
        correctAnswer: "b"
      },
      {
        question: "56. Ce anume poate compromite un zbor?",
        answers: {
          a: "graba la decolare fără efectuarea verificărilor aeronavei",
          b: "neatenţia pilotului în zbor la observarea spaţiului aerian",
          c: "zborul pe vânt laminar"
        },
        correctAnswer: "a"
      },
      {
        question: "57. Zborul fără o alimentaţie adecvată şi odihnă suficientă poate fi periculos pentru pilot deoarece:",
        answers: {
          a: "poate intra în hipoglicemie",
          b: "poate avea senzaţia de foame în aer",
          c: "nu poate intra în hipoglicemie"
        },
        correctAnswer: "a"
      },
      {
        question: "58. Zborul la temperaturi în jur de zero grade Celsius cu aeronave ce au cabina deschisă este periculos deoarece:",
        answers: {
          a: "efortul pilotării aeronavei este mai mare",
          b: "curentul de aer răceşte continuu temperatura corpului pilotului",
          c: "există tendinţa de bruscare a aeronavei"
        },
        correctAnswer: "b"
      },
      {
        question: "59. Purtarea ochelarilor de protecţie în zborul cu aeronave ce au cabina deschisă este recomandată deoarece:",
        answers: {
          a: "împiedică pătrunderea corpurilor străine (fulgi, insecte, …) în ochi",
          b: "împiedică scăderea vederii periferice datorate umidităţii crescute a ochilor atunci când se zboară fără ochelari",
          c: "pilotul vede mai bine aparatele de bord"
        },
        correctAnswer: "a"
      },
      {
        question: "60. Stresul acumulat în urma unor evenimente negative poate fi o premisă de accident?",
        answers: {
          a: "da",
          b: "nu",
          c: "numai la zborul în atmosferă turbulentă"
        },
        correctAnswer: "a"
      },
      {
        question: "61. Apariţia insuficienţei respiratorii şi scăderea oxigenării vaselor sanguine (hipoxia) se poate manifesta:",
        answers: {
          a: "la 1000 metri",
          b: "posibil mai jos de 3000 metri la diabetici şi fumători",
          c: "la înălţimi cuprinse între 3000 – 5000 metri"
        },
        correctAnswer: "c"
      },
      {
        question: "62. Simptomele apariţiei hipoxiei sunt:",
        answers: {
          a: "stare de euforie",
          b: "confuzii şi incapacitatea de a lua decizii corecte",
          c: "slăbirea auzului"
        },
        correctAnswer: "a"
      },
      {
        question: "63. Verificarea aeronavei înainte de zbor este responsabilitatea?",
        answers: {
          a: "mecanicului de aeronavă",
          b: "conducătorului de zbor",
          c: "pilotului"
        },
        correctAnswer: "c"
      },
      {
        question: "64. Cum procedaţi când aveţi pasager o persoană care nu a mai zburat?",
        answers: {
          a: "pilotaţi în manieră sportivă pentru a demonstra calităţile avionului",
          b: "efectuaţi o evaluare prealabilă a pasagerului prin diverse întrebări, inclusiv dacă a mai zburat cu astfel de aeronave, prezentaţi acestuia aeronava, prezentaţi modul în care trebuie să se echipeze şi cum trebuie să procedeze în cabină, modul în care va fi efectuat zborul (începând de la pornirea motorului), ce va simţi şi modul în care trebuie să procedeze (inclusiv la variaţia presiunii atmosferice), observaţi comportamentul acestuia şi decideţi dacă continuaţi, în timpul zborului vorbiţi cu acesta pentru a-i îndrepta atenţia şi curiozitatea asupra fascinaţiei zborului, observaţi modul de comportament al acestuia pentru a putea decide corespunzător şi pilotaţi aeronava foarte lin acordându-i atenţie sporită pasagerului",
          c: "vă concentraţi numai asupra zborului"
        },
        correctAnswer: "b"
      },
      {
        question: "65. În cazul apariţiei senzaţiei de înfundare a urechilor/scăderea capacităţii auditive cum procedaţi?",
        answers: {
          a: "continuaţi zborul şi veţi înghiţi în sec de câteva ori sau veţi mesteca guma de mestecat sau efectuaţi câteva mişcări stînga – dreapta ale maxilarului (ţinând gura deschisă)",
          b: "întrerupe zborul",
          c: "continuaţi zborul şi veţi înghiţi un analgezic"
        },
        correctAnswer: "a"
      },
      {
        question: "66. Care sunt simptomele răului de zbor?",
        answers: {
          a: "oboseală, senzaţia de vomă, transpiraţia, respiraţia accelerată, apatie",
          b: "agitaţie, dureri de cap, nervozitate",
          c: "stare de suprapresiune în urechea medie, ameţeală, dureri ale timpanului"
        },
        correctAnswer: "a"
      },
      {
        question: "67. Care este cauza apariţiei hipoxiei?",
        answers: {
          a: "creşterea cantităţii de dioxid de carbon din atmosferă",
          b: "scăderea cantităţii de oxigen pe metrul cub de aer",
          c: "creşterea conţinutului de azot în aer la înălţimi mari"
        },
        correctAnswer: "b"
      },
      {
        question: "68. Ce organ îndeplineşte funcţia de menţinere a echilibrului corpului?",
        answers: {
          a: "aparatul vestibular",
          b: "ochiul",
          c: "muşchii"
        },
        correctAnswer: "a"
      },
      {
        question: "69. Care este definiţia termenului stres?",
        answers: {
          a: "tensiune nervoasă",
          b: "stare plăcuta determinată de acţiunea unor factori exteriori organismului",
          c: "răspunsul nespecific al organismului la orice solicitare"
        },
        correctAnswer: "c"
      },
      {
        question: "70. Ce măsuri se iau pentru a preveni apariţia barotraumei?",
        answers: {
          a: "alimentaţia corespunzătoare",
          b: "deglutiţii repetate, masticare şi căscat",
          c: "a nu se consuma alcool înainte de zbor"
        },
        correctAnswer: "b"
      },
      {
        question: "71. Prezenţa la zbor în cazul bolilor contagioase este:",
        answers: {
          a: "permisă cu acordul medicului",
          b: "contraindicată",
          c: "la latitudinea pilotului"
        },
        correctAnswer: "b"
      },
      {
        question: "72. Cum variază cantitatea radiaţiei solare cu înălţimea?",
        answers: {
          a: "scade",
          b: "creşte",
          c: "rămâne constantă"
        },
        correctAnswer: "b"
      },
      {
        question: "73. Peste ce înălţime apare hipoxia (boala de înălţime)?",
        answers: {
          a: "1000m",
          b: "3000m",
          c: "5000m"
        },
        correctAnswer: "b"
      },
      {
        question: "74. Odată cu creşterea înălţimii gazele:",
        answers: {
          a: "îşi măresc volumul",
          b: "îşi micşorează volumul",
          c: "rămân constante în volum"
        },
        correctAnswer: "a"
      },
      {
        question: "75. Corpul omenesc este adaptat vieţii terestre la nivelul solului unde cantitatea de oxigen este de aproximativ:",
        answers: {
          a: "23%",
          b: "12%",
          c: "21%"
        },
        correctAnswer: "c"
      },
      {
        question: "76. Iniţial la apariţia hipoxiei se instalează:",
        answers: {
          a: "o senzaţie de confort, de putere care da o stare euforica",
          b: "o stare de voma",
          c: "vălul gri"
        },
        correctAnswer: "a"
      },
      {
        question: "77. Hiperventilaţia reprezintă o:",
        answers: {
          a: "supraoxigenare",
          b: "suboxigenare",
          c: "nimic"
        },
        correctAnswer: "a"
      },
      {
        question: "78. Câmpul vizual al ochiului în plan vertical este de:",
        answers: {
          a: "160 grd.",
          b: "120 grd.",
          c: "145 grd."
        },
        correctAnswer: "c"
      },
      {
        question: "79. Câmpul vizual desemnează acea porţiune din mediul extern pe care o putem cuprinde cu privirea:",
        answers: {
          a: "fără a întoarce capul",
          b: "întorcând capul maxim dreapta",
          c: "întorcând capul maxim dreapta – stânga"
        },
        correctAnswer: "a"
      },
      {
        question: "80. Acuitate vizuală este:",
        answers: {
          a: "capacitatea ochiului de a vedea clar şi precis noaptea",
          b: "utilizarea ambilor ochi",
          c: "capacitatea ochiului de a vedea clar şi precis"
        },
        correctAnswer: "c"
      },
      {
        question: "81. Activitatea de zbor se poate face dacă de la consumul de alcool au trecut minim:",
        answers: {
          a: "6 ore",
          b: "8 ore",
          c: "12 ore"
        },
        correctAnswer: "c"
      },
      {
        question: "82. Este considerat în stare de ebrietate personalul care are o îmbibaţie alcoolica în sânge de:",
        answers: {
          a: "0,5 - 1 mg. la mie",
          b: "1 mg. la mie",
          c: "2 mg. la mie"
        },
        correctAnswer: "a"
      },
      {
        question: "83. Refuzul de acceptare a testării alcoolscopice solicitată de către personalul abilitat înseamnă:",
        answers: {
          a: "recunoaşterea implicită",
          b: "nimic",
          c: "refuzul recunoaşterii autorităţii"
        },
        correctAnswer: "a"
      },
      {
        question: "84. Monoxidul de carbon este:",
        answers: {
          a: "un gaz inodor",
          b: "un gaz incolor, inodor şi fără gust specific",
          c: "un gaz fără gust specific"
        },
        correctAnswer: "b"
      },
      {
        question: "85. O persoană normală are nevoie de:",
        answers: {
          a: "8 ore de somn",
          b: "6 ore de somn",
          c: "10 ore de somn"
        },
        correctAnswer: "a"
      },
      {
        question: "86. Care este motivul pentru care dispare orientarea la zborul în ceaţă?",
        answers: {
          a: "La zborul in ceata , intrucat reperele de pe sol nu mai sunt vizibile, apare o neconcordanta între analizatorul vizual si cel vestibular ceea ce duce la dezorientare."
        },
        correctAnswer: "a"
      },
      {
        question: "87. Radiaţiile cosmice sunt mai intense:",
        answers: {
          a: "la nivelul solului",
          b: "sub plafonul de nori",
          c: "peste plafonul de nori, intensitatea crescând odată cu înălţimea"
        },
        correctAnswer: "c"
      },
      {
        question: "88. Pentru ca o aeronavă să poată fi utilizată pentru zboruri şcoală acesta trebuie să fie prevăzută cu comenzile primare:",
        answers: {
          a: "duble şi dispuse normal, similar în ambele posturi de pilotaj, astfel încât să fie asigurată ergonomia pilotajului (controlului) aeronavei (în cazul avioanelor manşa trebuie ţinută cu mâna dreaptă iar maneta de gaze cu mâna stângă)",
          b: "duble dar nu are importanţă dispunerea acestora",
          c: "nu este necesară dublarea comenzilor"
        },
        correctAnswer: "b"
      },
      {
        question: "89. În cazul zborului cu vânt lateral apar senzaţii false în timpul zborului legate de deplasarea şi poziţia aeronavei. Cum trebuie pilotatată aceasta?",
        answers: {
          a: "zburând cu contraderivă",
          b: "zburând cu aeronava înclinată către partea din care bate vântul",
          c: "efectuând viraje către partea din care bate vântul, ori de câte ori vântul ne deplasează de la LDO"
        },
        correctAnswer: "a"
      },
      {
        question: "90. Pentru a nu apare senzaţia de vomă/vomă în timpul zborului trebuie:",
        answers: {
          a: "să avem o alimentaţie normală",
          b: "înainte de zbor să mâncăm cât mai puţin",
          c: "nu are importanţă cât mâncăm, important este să fim odihniţi"
        },
        correctAnswer: "a"
      },
      {
        question: "91. Un pilot bine pregătit poate străpunge plafonul de nori cu o aeronavă care nu este echipată pentru zbor IMC/IFR, efectuând zborul în urcare/coborâre în condiţii de siguranţă (presupunem că nu se mai află alte aeronave în zbor)?",
        answers: {
          a: "da",
          b: "nu",
          c: "numai cu aeronave performante"
        },
        correctAnswer: "b"
      },
      {
        question: "92. Firele reţelelor de transport al curentului electric (sau de orice altă natură) se observă în general mult mai greu dacă zburăm:",
        answers: {
          a: "deasupra lor având ca fundal solul",
          b: "se observă mai bine de sub nivelul lor dar un astfel de zbor nu este permis întrucât înălţimea minimă de siguranţă este de 150 m (cu excepţia etapelor de decolare şi aterizare)",
          c: "la acelaşi nivel cu ele, plasându-le chiar pe orizont"
        },
        correctAnswer: "a"
      },
      {
        question: "93. Care este direcţia predominantă în care trebuie să ne orientăm privirea astfel încât o aeronavă să poată fi pilotată (controlată) cât mai bine în condiţii de siguranţă?",
        answers: {
          a: "predominant către faţă obsevând în permanenţă spaţiul aerian",
          b: "în timpul virajului către interiorul acestuia",
          c: "în timpul virajului către exteriorul acestuia"
        },
        correctAnswer: "a"
      },
      {
        question: "94. Un pilot poate pilota (controla) o aeronavă care nu este echipată pentru zbor IMC/IFR în condiţii de vizibilitate redusă, fără a se vedea orizontul şi solul, (presupunem că nu se mai află alte aeronave în zbor)?",
        answers: {
          a: "numai un pilot cu experienţă",
          b: "nu, întrucât acesta îşi pierde orientarea spaţială, situaţia fiind similară zborului în ceaţă sau în nori",
          c: "este extrem de periculos, după foarte puţin timp va constata că şi-a pierdut orientarea spaţială"
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