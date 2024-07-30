//Quiz data
const quizData=[
  {
    question: "12. Coeficientul de fineţe aerodinamică a unei aripi este",
    answers: {
    a: "F = Fx / Fz",
    b: "C = S / A",
    c: "K = Cz / Cx"
    },
    correctAnswer: "c"
    },
    {
    question: "13. Centrul de presiune este:",
    answers: {
    a: "punctul în care acţionează FTA",
    b: "punctul în care acţionează Fx",
    c: "punctul în care acţionează Fz"
    },
    correctAnswer: "a"
    },
    {
    question: "14. Prin centraj se înţelege",
    answers: {
    a: "poziţia centrului de presiune pe CMA faţă de bordul de fugă",
    b: "poziţia centrului de greutate pe CMA faţă de bordul de atac",
    c: "poziţia sarcinii utile pe CMA faţă de bordul de atac"
    },
    correctAnswer: "b"
    },
    {
    question: "15. Unghiul de incidenţă critic se manifestă prin:",
    answers: {
    a: "creşterea efortului pe manşă",
    b: "creşterea turaţiei motorului",
    c: "trepidaţii caracteristice"
    },
    correctAnswer: "c"
    },
    {
    question: "16. Prin scoaterea flapsului la zborul planat (motor la ralanti), pentru a menţine aceeaşi viteză pe panta de aterizare ca şi în situaţia cu flapsul introdus, se:",
    answers: {
    a: "măreşte fineţea aerodinamica",
    b: "măreşte distanţa de aterizare",
    c: "măreşte unghiul pantei"
    },
    correctAnswer: "c"
    },
    {
    question: "17. Prin acţionarea manşei spre spate",
    answers: {
    a: "scade IAS şi creşte unghiul de incidenţă",
    b: "scade IAS şi scade unghiul de incidenţă",
    c: "creşte IAS şi scade unghiul de incidenţă"
    },
    correctAnswer: "a"
    },
    {
    question: "18. Distanţa de decolare cu vânt lateral în raport cu o decolare cu vânt de faţă:",
    answers: {
    a: "se măreşte",
    b: "se micşorează",
    c: "rămâne neschimbată deoarece componenta de faţă a vântului este 0"
    },
    correctAnswer: "a"
    },
    {
    question: "19. Care este ordinea corectă a acţiunilor în cazul cedări de motor în zbor la 150 m:",
    answers: {
    a: "asigură viteza, identifică-ţi poziţia, informează turnul (după caz), caută teren, pe cât posibil aterizează cu vânt de faţă, încearcă repornirea",
    b: "asigură viteza, identifică-ţi poziţia, informează turnul (după caz), încearcă repornirea, caută teren, pe cât posibil aterizează cu vânt de faţă",
    c: "asigură viteza, identifică-ţi poziţia încearcă repornirea, informează turnul (după caz), caută teren, pe cât posibil aterizează cu vânt de faţă"
    },
    correctAnswer: "b"
    },
    {
    question: "20. Sunteţi în viraj (viteză constantă) cu 45º înclinare în coborâre. Pentru a opri coborârea şi a menţine viteza constantă veţi :",
    answers: {
    a: "trage de manşe pană când avionul revine la orizontală în viraj cu 45º",
    b: "mării turaţia motorului şi veţi trage de manşă până când avionul revine la orizontală",
    c: "micşoraţi înclinarea cu 10º - 15˚ apoi trageţi de manşe pană când avionul revine pe orizontală după care se înclină din nou 45º"
    },
    correctAnswer: "b"
    },
    {
    question: "21. Unghiul de atac (incidenţă) reprezintă:",
    answers: {
    a: "unghiul format între coarda profilului aripii şi vântul relativ",
    b: "între unghiul de urcare şi linia orizontului",
    c: "unghiul format între axul longitudinal al avionului şi coarda aripii"
    },
    correctAnswer: "a"
    },
    {
    question: "22. Ce manevră normală poate mări factorul de sarcină (g-force) în zbor ?",
    answers: {
    a: "virajul cu 45º",
    b: "urcarea",
    c: "angajarea (stall)"
    },
    correctAnswer: "a"
    },
    {
    question: "23. Când sunt cele 4 forţe care acţionează asupra avionului în echilibru?",
    answers: {
    a: "în zbor rectiliniu neaccelerat",
    b: "când avionul se află la sol",
    c: "când avionul accelerează"
    },
    correctAnswer: "a"
    },
    {
    question: "24. Care este relaţia între portanţă, greutate, tracţiune, rezistenţa la înaintare în timpul unui zbor rectiliniu stabilizat ?",
    answers: {
    a: "portanţa egalează greutatea, tracţiunea egalează rezistenţa la înaintare",
    b: "portanţa, tracţiunea şi rezistenţa la înaintare egalează greutatea",
    c: "portanţa şi greutatea egalează tracţiunea şi rezistenţa la înaintare"
    },
    correctAnswer: "a"
    },
    {
    question: "25. Cele 4 forţe care acţionează asupra avionului în timpul zborului sunt :",
    answers: {
    a: "portanţa, rezistenţa la înaintare, frecarea, greutatea",
    b: "greutatea, tracţiunea, rezistenţa la înaintare, portanţa",
    c: "gravitaţia, portanţa, rezistenţa la înaintare, tracţiunea"
    },
    correctAnswer: "b"
    },
    {
    question: "26. Ce forţă face ca avionul să vireze :",
    answers: {
    a: "componenta pe orizontală a forţei portante",
    b: "componenta pe verticală a forţei portante",
    c: "forţa centrifugă"
    },
    correctAnswer: "a"
    },
    {
    question: "27. Dacă tracţiunea disponibilă depăşeşte tracţiunea necesară menţinerii avionului în zbor orizontal",
    answers: {
    a: "menţinând avionul la orizontală acesta se va accelera",
    b: "avionul coboară dacă viteza este menţinută",
    c: "avionul se decelerează dacă se menţine zborul orizontal"
    },
    correctAnswer: "a"
    },
    {
    question: "28. Cum influenţează masa avionului distanţă de planare ?",
    answers: {
    a: "avionul mai greu va plana o distanţă mai mare",
    b: "avionul mai greu va plana o distanţă mai mică",
    c: "distanţa de planare nu se modifică cu variaţia greutăţii"
    },
    correctAnswer: "c"
    },
    {
    question: "29. Cum este influenţată viteza verticala de coborâre în funcţie de masă?",
    answers: {
    a: "cu cât e mai greu avionul cu atât viteza verticala de coborâre este mai mare",
    b: "viteza verticală de coborâre este aceeaşi în cazul modificării greutăţii",
    c: "cu cât e mai greu avionul cu atât viteza verticală de coborâre este mai mică"
    },
    correctAnswer: "a"
    },
    {
    question: "30. Unghiul de calaj reprezintă:",
    answers: {
    a: "unghiul format între coarda profilului aripii şi vântul relativ",
    b: "între unghiul de urcare şi linia orizontului",
    c: "unghiul format între axul longitudinal al avionului şi coarda aripii"
    },
    correctAnswer: "c"
    },
    {
    question: "31. Cum se modifică timpul de planare pe aceeaşi distanţă în funcţie de masă?",
    answers: {
    a: "avionul mai greu va plana într-un timp mai scurt aceeaşi distanţă",
    b: "avionul mai greu va plana într-un timp mai lung aceeaşi distanţă",
    c: "timpul de planare nu este afectat odată cu modificarea greutăţii"
    },
    correctAnswer: "a"
    },
    {
    question: "32. La un avion stabil static poziţia centrul de presiune faţă de centrul de greutate se află întotdeauna:",
    answers: {
    a: "în spatele centrului de greutate",
    b: "în faţă centrului de greutate",
    c: "în aceeaşi poziţie cu centrul de greutate"
    },
    correctAnswer: "a"
    },
    {
    question: "33. la mărirea unghiului de atac centrul de presiune se deplasează către :",
    answers: {
    a: "bordul de atac",
    b: "bordul de fugă",
    c: "nu se deplasează el rămâne întotdeauna în aceeaşi poziţie"
    },
    correctAnswer: "a"
    },
    {
    question: "34. În care faza a zborului normal portanţa are cea mai mare valoare",
    answers: {
    a: "la aterizare",
    b: "la decolare",
    c: "în zbor orizontal"
    },
    correctAnswer: "b"
    },
    {
    question: "35. Când zburam cu viteze mici şi unghiuri de atac mari rezistenţa de forma comparativ cu rezistenţa indusa este mai:",
    answers: {
    a: "mică",
    b: "mare",
    c: "au aceeaşi valoare"
    },
    correctAnswer: "b"
    },
    {
    question: "36. Care este soluţia constructiva care duce la scăderea rezistenţei induse ?",
    answers: {
    a: "profile aerodinamice mai subţiri",
    b: "wingleturi la capăt de aripă",
    c: "aripa sus"
    },
    correctAnswer: "b"
    },
    {
    question: "38. Distanţa maximă de planare este atinsă dacă se zboară cu viteză tangenta la polară care se numeşte viteza:",
    answers: {
    a: "optimă de planare (viteza la fineţea maximă)",
    b: "minimă",
    c: "maximă"
    },
    correctAnswer: "a"
    },
    {
    question: "39. Ce înţelegeţi prin stabilitatea statică de ruliu?",
    answers: {
    a: "Stabilitatea transversal (in jurul axei de ruliu) este propietatea avionului de a reveni la pozitia initiala fara interventia pilotului, dupa incetarea actiunii unei forte perturbatoare externe, care determina inclinarea avionului pe aripa (a fost stricat echilibrul transversal).",
    b: "Existenta simultana a stabilitatii transversale si de directie."
    },
    correctAnswer: "a"
    },
    {
    question: "40. Ce înţelegeţi prin stabilitate statică laterala?",
    answers: {
    a: "Existenta simultana a stabilitatii transversale si de directie."
    },
    correctAnswer: "a"
    },
    {
    question: "41. Ce înţelegeţi prin stabilitate statică longitudinala?",
    answers: {
    a: "Stabilitatea longitudinala este propietatea avionului de a-si reface singur, fara interventia pilotului, echilibrul longitudinal, dupa incetarea actiunii unor factori pertubatori externi, care au stricat echilibrul longitudinal."
    },
    correctAnswer: "a"
    },
    {
    question: "42. Explicaţi de ce se angajează o aripă?",
    answers: {
    a: "O aripa se angajeaza deoarece la depasirea ungiului de incidenta critic , curgerea fileurilor de aer nu mai este laminara si apare desprinderea lor."
    },
    correctAnswer: "a"
    },
    {
      question: "43. Angajarea apare întotdeauna la:",
      answers: {
      a: "acelaşi unghi de incidenta",
      b: "aceeaşi viteză",
      c: "numai în zilele pare"
      },
      correctAnswer: "a"
      },
      {
      question: "44. Explicaţi de ce constructiv se torsionează geometric o aripă pe toată lungimea ei?",
      answers: {
      a: "O aripa se torsioneaza geometric pentru a scadea Cz care se regaseste in formula lui Cxi, deci implicit pentru a reduce rezistenta indusa",
      b: "Pentru a creşte eficienţa flapsului",
      c: "Pentru a scădea efectul eleroanelor la viteze mari",
      d: "Pentru a induce mai devreme angajarea parţii de aripă de lângă fuselaj"
      },
      correctAnswer: "a"
      },
      {
      question: "45. Explicaţi de ce constructiv se torsionează geometric elicea pe toată lungimea ei?",
      answers: {
      a: "O elice se torsioneaza geometric pentru a mentine cel mai eficient unghi de atac de-a lungul intregii pale in timpul rotatiei elicii. Unghiul descreste de la coif spre varful palei pentur a mentine unghiul de atac optim.",
      b: "Pentru a creşte portanţa aripii",
      c: "Pentru a scădea rezistenţa la înaintare",
      d: "Pentru a reduce zgomotul produs de elice"
      },
      correctAnswer: "a"
      },
      {
      question: "46. Descrieţi pe scurt ce înţelegeţi prin angajare dinamică (accelerated stall).",
      answers: {
      a: "Angajarea dinamica apare cant zburand pe o traiectorie circulara micsoram raza de viraj si , deoarece avem nevoie de mai multa portanta pentru a echilibra greutatea si forta centrifugala marim unghiul de atac. Cand se depaseste unghiul critic de atac apare angajarea dinamica, chiar daca viteza nu a suferit modificari.",
      b: "Este o pierdere bruscă de portanţă datorată unei schimbări bruşte a unghiului de atac, care apare în timpul virajelor sau manevrelor bruste",
      c: "Este o formă de angajare care apare doar la aeronavele ultrauşoare",
      d: "Este o formă de angajare care apare doar la viteze mari de zbor"
      },
      correctAnswer: "a"
      },
      {
      question: "47. Care este principalul avantaj al flapsului pe panta de aterizare?",
      answers: {
      a: "permite venirea pe panta de aterizare cu unghi mai accentuat şi cu viteză mică",
      b: "permite venirea la aterizare cu viteză mare şi cu portantă mare",
      c: "permite venirea la aterizare cu viteza mică şi cu motorul redus"
      },
      correctAnswer: "a"
      },
      {
      question: "48. Viteza de angajare variază în funcţie de modificarea următorilor parametri:",
      answers: {
      a: "masă, altitudine, flaps",
      b: "masă, viteza vântului, flaps",
      c: "altitudine, poziţia manşei, flaps"
      },
      correctAnswer: "b"
      },
      {
      question: "49. Viteza de angajare este influenţată de modificarea masei avionului?",
      answers: {
      a: "da",
      b: "nu",
      c: "niciodată"
      },
      correctAnswer: "a"
      },
      {
      question: "50. Când este efectul de furătură mai puternic?",
      answers: {
      a: "când avionul zboară cu unghiuri de atac mari",
      b: "când avionul zboară cu unghiuri de atac mici",
      c: "la viteze mari de zbor"
      },
      correctAnswer: "a"
      },
      {
      question: "51. Ce determină stabilitatea longitudinala a unui avion?",
      answers: {
      a: "poziţia CG în raport cu poziţia centrului de presiune",
      b: "eficienţa stabilizatorului orizontal, a direcţiei şi a trimerului de direcţie",
      c: "relaţia dintre tracţiune - portanţă – greutate şi rezistenţa la înaintare"
      },
      correctAnswer: "a"
      },
      {
      question: "52. În timpul vriei pe partea stângă care aripă este angajată (stall)?",
      answers: {
      a: "ambele aripi sunt angajate (stall)",
      b: "nici o aripă nu e angajată (stall)",
      c: "numai aripa stângă e angajată (stall)"
      },
      correctAnswer: "a"
      },
      {
      question: "53. Dacă greutatea în zbor orizontal (forţa corespunzătoare suprasarcinii de 1 g) a unui avion este 450 kgf, atunci cât va fi forţa la care va fi supusă structura acelui avion într-un viraj cu înclinare de 60˚ pentru a menţinere aceleaşi înălţime?",
      answers: {
      a: "850 kg",
      b: "800 kg",
      c: "900 kg"
      },
      correctAnswer: "c"
      },
      {
      question: "54. Motivul pentru care o aripă este torsionată geometric este ca să:",
      answers: {
      a: "inducă mai devreme angajarea capătului de aripă",
      b: "crească eficienţa flapsului",
      c: "scadă efectul eleroanelor la viteze mari",
      d: "inducă mai devreme angajarea parţii de aripă de lângă fuselaj"
      },
      correctAnswer: "d"
      },
      {
      question: "55. În zbor orizontal un avion ultrauşor are o viteză de angajare de 64 km /h, atunci care va fi viteza de angajare într-un viraj cu suprasarcină de n = 1,5 g",
      answers: {
      a: "78 km/h",
      b: "82 km/h",
      c: "68 km/h",
      d: "75 km/h"
      },
      correctAnswer: "a"
      },
      {
      question: "56. În zbor orizontal un avion ultrauşor are o viteză de angajare de 72 km /h, atunci care va fi viteza de angajare într-un viraj cu suprasarcină de n = 1,5 g",
      answers: {
      a: "90 km/h",
      b: "88 km/h",
      c: "70 km/h",
      d: "75 km/h"
      },
      correctAnswer: "b"
      },
      {
      question: "57. Viteza de angajare normală a unui avion este de 60 km/h. Într-un viraj cu 45 grade înclinare cu înălţime constantă viteza de angajare va fi?",
      answers: {
      a: "71 km/h",
      b: "85 km/h",
      c: "50 km/h",
      d: "105 km/h"
      },
      correctAnswer: "a"
      },
      {
      question: "58. Rolul unui compensator aerodinamic mobil (trimmer) este de a:",
      answers: {
      a: "asista pilotul când acesta începe să mişte de comenzi în zbor",
      b: "reduce efortul pe comenzi la 0 în toate fazele zborului",
      c: "ajuta pilotul să simtă efortul pe comenzi la viteze mari",
      d: "mari eficacitatea comenzilor în toate fazele zborului"
      },
      correctAnswer: "b"
      },
      {
      question: "59. Bracarea diferenţiata a eleroanelor ajuta la diminuarea:",
      answers: {
      a: "stabilităţii în jurul axei longitudinale",
      b: "momentului de giraţie în partea efectuării virajului",
      c: "stabilităţii pozitive a avionului",
      d: "momentului de giraţie în partea opusă efectuării virajului"
      },
      correctAnswer: "d"
      },
      {
      question: "60. Când se brachează eleroanele din poziţia neutră:",
      answers: {
      a: "eleronul care se ridică cauzează creşterea rezistenţei induse",
      b: "rezistenţa indusă rămâne neschimbată, deoarece eleronul care se ridică cauzează creşterea nesemnificativă a rezistenţei de forma în comparaţie cu eleronul care coboară",
      c: "ambele eleroane cauzează o creştere a rezistenţei induse",
      d: "eleronul care coboară cauzează creşterea rezistenţei induse"
      },
      correctAnswer: "d"
      },
      {
      question: "61. Aripa avionului este construită cu unghi diedru pentru a crea:",
      answers: {
      a: "stabilitate laterală în jurul axei longitudinale",
      b: "stabilitate longitudinală în jurul axei transversale",
      c: "stabilitate laterală în jurul axei verticale",
      d: "stabilitate de direcţie în jurul axei verticale"
      },
      correctAnswer: "a"
      },
      {
      question: "62. Când se zboară cu flapsul scos viteza de angajare va:",
      answers: {
      a: "scădea",
      b: "creşte",
      c: "creşte dar la un unghi de atac mai mare",
      d: "rămâne neschimbată"
      },
      correctAnswer: "a"
      },
      {
      question: "63. Asupra unei aeronave multiax, rolul ampenajului orizontal este:",
      answers: {
      a: "de a provoca variaţii ale incidenţei în timp ce pilotul mişcă manşa din faţa în spate",
      b: "de a asigura stabilitatea ULM, adică de a aplica rezultanta aerodinamica în centrul de greutate şi de a asigura stabilitatea aeronavei"
      },
      correctAnswer: "a"
      },
      {
      question: "64. Care este principala caracteristică a unui ULM multiax al cărui centru de greutate se situează în spatele limitei spate admise a acestuia?",
      answers: {
      a: "este greu de manevrat",
      b: "este instabil şi nu prezintă siguranţă",
      c: "este foarte stabil"
      },
      correctAnswer: "b"
      },
      {
      question: "65. Care este principala caracteristică a unui ULM multiax al cărui centru de greutate se situează în faţă limitei faţă admise a centrajului?",
      answers: {
      a: "nu are deloc maniabilitate şi nu prezintă siguranţă",
      b: "este instabil şi nu prezintă siguranţă",
      c: "este foarte manevrabil"
      },
      correctAnswer: "a"
      },
      {
      question: "66. Asupra unui ULM, unghiul diedru pozitiv:",
      answers: {
      a: "ameliorează stabilitatea în ruliu",
      b: "îmbunătăţeşte în principal stabilitatea longitudinală",
      c: "creşte fineţea aeronavei"
      },
      correctAnswer: "a"
      },
      {
      question: "67. La viteza constantă, când înclinarea creşte:",
      answers: {
      a: "raza de viraj creşte",
      b: "raza de viraj scade",
      c: "nu se modifică raza de viraj"
      },
      correctAnswer: "b"
      },
      {
      question: "68. Executarea palierului după desprinderea la decolare se face în principal pentru:",
      answers: {
      a: "creşterea capacitaţii portante a aripii ",
      b: "scurtarea lungimii de rulare la aterizare ",
      c: "reducerea rezistentei la înaintare "
      },
      correctAnswer: "a"
      },
      {
      question: "69.  La scoaterea flapsului, centrul de presiune:",
      answers: {
      a: "nu depinde de acţionarea flapsului ",
      b: "se deplasează în faţă",
      c: "se deplasează în spate  ",
      },
      correctAnswer: "a"
      },
      {
        question: "70. Dacă se menţine manşă pe aceeaşi poziţie în profunzime odată cu mărirea regimului motorului, avionul:",
        answers: {
        a: "rămâne pe aceeaşi traiectorie, dar îşi măreşte viteza",
        b: "urcă sau coboară în funcţie de centraj ( % CMA ) simultan cu mărirea vitezei",
        c: "urcă simultan cu mărirea vitezei"
        },
        correctAnswer: "a"
        },
        {
        question: "71. Unghiul de pantă în urcarea cu motor creşte odată cu:",
        answers: {
        a: "creşterea excedentului de putere şi de scădere a greutăţii",
        b: "creşterea excedentului de tracţiune şi de creştere a greutăţii",
        c: "scăderea greutăţii şi scaderea excedentului de tracţiune"
        },
        correctAnswer: "a"
        },
        {
        question: "72. Într-un curent descendent puternic, ce viteză de zbor se recomandă?",
        answers: {
        a: "viteza minimă",
        b: "viteza optimă",
        c: "viteza economică"
        },
        correctAnswer: "b"
        },
        {
        question: "73. În zborurile normale, flapsul este utilizat:",
        answers: {
        a: "ca mijloc de hipersustentaţie",
        b: "ca mijloc de îmbunătăţire a unor proceduri de zbor",
        c: "ca mijloc de frânare aerodinamică"
        },
        correctAnswer: "a"
        },
        {
        question: "74. La executarea zborurilor în zona vitezelor reduse, cu un avion la care centrajul se află la limita admisa faţă:",
        answers: {
        a: "scade rezerva de cursă a manşei spre în faţă şi simptomele de viteză limită nu se mai obţin",
        b: "creşte rezerva de cursă a manşei spre în faţă şi simptomele de viteză limită apar mai devreme",
        c: "creşte rezerva de cursă a manşei spre faţă şi nu se mai obţin simptome de viteză limită"
        },
        correctAnswer: "c"
        },
        {
        question: "75. Forţa portantă poate fi exprimată cu formula:",
        answers: {
        a: "Fz = 1/2CxrSV²",
        b: "Fz = 1/2CmrSV²",
        c: "Fz = 1/2CzrSV²"
        },
        correctAnswer: "c"
        },
        {
        question: "76. Forţa portantă se exprimă prin formula:",
        answers: {
        a: "V2SpCz/2",
        b: "V2SpCx/2",
        c: "V2/2"
        },
        correctAnswer: "a"
        },
        {
        question: "77. Unghiul de incidenţă al aripii este format de:",
        answers: {
        a: "direcţia curentului de aer şi orizontală",
        b: "direcţia curentului de aer şi coarda profilului",
        c: "forţa de tracţiune şi orizontală"
        },
        correctAnswer: "b"
        },
        {
        question: "78. Stratul limita este:",
        answers: {
        a: "stratul de aer din imediata vecinătate a aeronavei în care viteza creşte de la zero la viteza de zbor",
        b: "stratul de aer format când avionul este în limita de viteză",
        c: "stratul de aer când incidenţa este la limită"
        },
        correctAnswer: "a"
        },
        {
        question: "79. Creşterea vitezei generează:",
        answers: {
        a: "o creştere a presiunii statice",
        b: "o scădere a presiunii statice",
        c: "o creştere a fineţii"
        },
        correctAnswer: "b"
        },
        {
        question: "80. Grosimea unui profil aerodinamic este:",
        answers: {
        a: "media grosimilor secţiunilor profilului",
        b: "cea mai mare distanţă dintre extrados şi intrados",
        c: "constantă"
        },
        correctAnswer: "b"
        },
        {
        question: "81. Linia de coardă este:",
        answers: {
        a: "linia dreapta care uneşte bordul de atac şi bordul de fugă",
        b: "linia ce uneşte corzile medii aerodinamice",
        c: "linia dintre capetele de aripă"
        },
        correctAnswer: "a"
        },
        {
        question: "82. Rezultanta forţelor aerodinamice asupra profilului acţionează în:",
        answers: {
        a: "centrul aerodinamic",
        b: "centrul de greutate",
        c: "centrul de presiune"
        },
        correctAnswer: "c"
        },
        {
        question: "83. Forţa portantă este perpendiculară pe:",
        answers: {
        a: "direcţia vectorului viteză",
        b: "orizontală",
        c: "coarda medie"
        },
        correctAnswer: "a"
        },
        {
        question: "84. Unghiul de calaj al aripii unei aeronave este:",
        answers: {
        a: "unghiul dintre planul CMA şi planul orizontal",
        b: "unghiul la care aripa se angajează",
        c: "unghiul dintre CMA şi axa fuselajului"
        },
        correctAnswer: "c"
        },
        {
        question: "93. Distanţa pe care o străbate un corp în mişcare, se numeşte:",
        answers: {
        a: "timp",
        b: "spaţiu",
        c: "drum"
        },
        correctAnswer: "b"
        },
        {
        question: "94. Raportul dintre densitatea aerului la o anumita înălţime şi densitatea aerului la sol, reprezintă:",
        answers: {
        a: "densitate relativă",
        b: "densitate absolută",
        c: "densitate medie"
        },
        correctAnswer: "a"
        },
        {
        question: "95. Acceleraţia corpurilor în cădere liberă, este egală, în medie cu:",
        answers: {
        a: "7,8 m/s la pătrat",
        b: "8,9 m/s la pătrat",
        c: "9,8 m/s la pătrat"
        },
        correctAnswer: "c"
        },
        {
        question: "96. Suma dintre rezistenţa de forma şi rezistenţa de frecare, se numeşte:",
        answers: {
        a: "rezistenţă indusă",
        b: "rezistenţă relativă",
        c: "rezistenţă de profil"
        },
        correctAnswer: "c"
        },
        {
        question: "97. În timpul zborului, pe partea de deasupra aripii (extrados) se formează:",
        answers: {
        a: "presiune",
        b: "depresiune",
        c: "rezistenţă"
        },
        correctAnswer: "b"
        },
        {
        question: "98. Unghiul cuprins între coarda profilului şi curentul de aer ce loveşte profilul în partea lui superioară (extrados), se numeşte:",
        answers: {
        a: "unghi de incidenţă pozitiv",
        b: "unghi de incidenţă negativ",
        c: "unghi de incidenţă neutru"
        },
        correctAnswer: "b"
        },
        {
        question: "99. Însuşirea avionului de a reveni singur la poziţia de echilibru de direcţie fără intervenţia pilotului:",
        answers: {
        a: "compensare de direcţie",
        b: "maniabilitate de direcţie",
        c: "stabilitate de direcţie"
        },
        correctAnswer: "c"
        },
        {
        question: "100. Ce viteză se foloseşte la traversarea unei zone puternic descendentă?",
        answers: {
        a: "viteza optimă",
        b: "viteza economică",
        c: "viteza maximă"
        },
        correctAnswer: "a"
        },
        {
        question: "101. Care sunt manifestările avionului la atingerea unghiului de incidenţă critic?",
        answers: {
        a: "vibraţii",
        b: "creşterea portanţei",
        c: "scăderea turaţiei motorului"
        },
        correctAnswer: "a"
        },
        {
        question: "110. Vântul relativ ce acţionează asupra unui ULM în zbor:",
        answers: {
        a: "este de valoare egală şi de direcţie opusă vitezei aeronavei",
        b: "este de valoare egală şi acelaşi sens cu viteza aeronavei",
        c: "nu depinde de condiţiile meteorologice"
        },
        correctAnswer: "a"
        },
        {
        question: "111. Portanţa este componenta rezultantei aerodinamice:",
        answers: {
        a: "paralelă cu vântul relativ",
        b: "perpendiculară pe vântul relativ",
        c: "paralelă cu rezistenţa la înaintare"
        },
        correctAnswer: "b"
        },
        {
        question: "112. Rezistenţa la înaintare este componenta rezultantei aerodinamice:",
        answers: {
        a: "paralelă cu vântul relativ",
        b: "perpendiculară pe vântul relativ",
        c: "paralelă cu portanţa"
        },
        correctAnswer: "a"
        },
        {
        question: "113. Forma profilului aripii şi suprafaţa aripii:",
        answers: {
        a: "sunt studiate fiecare în funcţie de performanţele căutate",
        b: "au foarte puţină influenţă asupra performanţelor, doar forma fuselajului putând să le influenţeze",
        c: "au o influenţă majoră asupra performanţelor aerodinamice ale aeronavei"
        },
        correctAnswer: "a"
        },
        {
        question: "114. Dacă un ULM urmează o traiectorie în linie dreaptă la viteză constantă, fiind în zbor orizontal:",
        answers: {
        a: "portanţa echilibrează tracţiunea",
        b: "greutatea echilibrează rezistenţa la înaintare",
        c: "portanţa echilibrează greutatea"
        },
        correctAnswer: "c"
        },
        {
        question: "115. Portanţa se datorează:",
        answers: {
        a: "doar depresiunii extradosului",
        b: "doar suprapresiunii exercitate pe intrados",
        c: "ambelor de mai sus"
        },
        correctAnswer: "c"
        },
        {
        question: "116. Fie un ULM în zbor cu motorul oprit, greutatea este echilibrată de:",
        answers: {
        a: "portanţă",
        b: "forţa totală aerodinamică",
        c: "rezistenţa la înaintare"
        },
        correctAnswer: "a"
        },
        {
        question: "117. Forţele aerodinamice (portanţa şi rezistenţa la înaintare) sunt influenţate:",
        answers: {
        a: "doar de incidenţă",
        b: "doar de viteza vântului relativ",
        c: "de incidenţă şi de viteza vântului relativ"
        },
        correctAnswer: "c"
        },
        {
        question: "118. Unghiul de incidenţă pe un profil este unghiul format de:",
        answers: {
        a: "coarda profilului şi axa fuselajului",
        b: "intradosul şi extradosul aripii la bordul de scurgere",
        c: "coarda profilului şi direcţia vântului relativ"
        },
        correctAnswer: "c"
        },
        {
        question: "119. La viteză constantă creşterea unghiului de incidenţă al unui profil va avea drept rezultat:",
        answers: {
        a: "o diminuare a rezistenţei la înaintare",
        b: "o creştere a portanţei oricare ar fi incidenţa atinsă",
        c: "o creştere a portanţei, apoi o diminuare brutală a acesteia odată cu atingerea incidenţei de angajare (critice)"
        },
        correctAnswer: "b"
        },
        {
        question: "120. Pentru a menţine portanţa constantă în timp ce mărim viteza trebuie să acţionăm pentru:",
        answers: {
        a: "a crea o creştere a incidenţei",
        b: "a crea o diminuare a incidenţei",
        c: "a conserva aceeaşi incidenţă"
        },
        correctAnswer: "b"
        },
        {
        question: "121. Ce semnifică VNE?",
        answers: {
        a: "viteza ce nu trebuie niciodată depăşită",
        b: "calaj altimetric ce permite cunoaşterea înălţimii unui ULM deasupra unui punct dat",
        c: "viteza minimală de zbor"
        },
        correctAnswer: "a"
        },
        {
        question: "122. Din ce document vă puteţi informa asupra limitelor ULM-ului dv. (viteza de angajare, VNE):",
        answers: {
        a: "manualul de utilizare şi întreţinere",
        b: "reglementările în vigoare",
        c: "livretul aeronavei"
        },
        correctAnswer: "a"
        },
        {
        question: "123. De ce constructorul aeronavei a introdus o viteză maximă ce nu trebuie depăşită niciodată (VNE)?",
        answers: {
        a: "1.structura nu este prevăzută pentru efortul pe care ar urma să îl suporte la această viteză",
        b: "2.caracteristicile aerodinamice ale aeronavei riscă să se deterioreze",
        c: "3.motorul riscă să intre în supraregim",
        d: "4.elicea riscă să se rupă",
        e: "1 şi 2",
        f: "2 şi 3 ",
        g: "3 şi 4 "
        },
        correctAnswer: "e"
        },
        {
        question: "124. Fie un ULM dat, angajarea are loc:",
        answers: {
        a: "la viteza de angajare, dar aceasta variază în funcţie de masă şi înclinare",
        b: "mereu la aceeaşi viteză, indiferent de masa aeronavei"
        },
        correctAnswer: "a"
        },
        {
        question: "125. Informaţiile următoare înştiinţează pilotul asupra vitezei în aer a aeronavei:",
        answers: {
        a: "1.zgomotele aerodinamice",
        b: "2.indicaţiile vitezometrului",
        c: "3.poziţia manetei de accelerare",
        d: "4.eforturile asupra comenzilor",
        e: "1, 2, 3 şi 4",
        f: "1, 2, şi 3 ",
        g: "1, 2, şi 4"
        },
        correctAnswer: "g"
        },
        {
        question: "127. O aeronavă este bine compensată dacă viteza de compensare (viteza ce corespunde în aer calm unui efort nul pe comenzi):",
        answers: {
        a: "corespunde cu VNE",
        b: "corespunde cu viteza de angajare",
        c: "corespunde cu viteza de croazieră"
        },
        correctAnswer: "c"
        },
        {
        question: "128. La viteză constantă, pentru a trece de la zbor în palier la zbor în urcare, trebuie să:",
        answers: {
        a: "diminuaţi puterea motorului",
        b: "creşteţi puterea motorului",
        c: "menţineţi constantă puterea motorului "
        },
        correctAnswer: "b"
        },
        {
        question: "129. La viteză constantă, pentru a trece de la zbor în palier la zbor în coborâre, trebuie să:",
        answers: {
        a: "creşteţi puterea motorului",
        b: "diminuaţi puterea motorului",
        c: "menţineţi constantă puterea motorului "
        },
        correctAnswer: "b"
        },
        {
question: "130. Dispuneţi de un ULM a cărui fineţe, motor tăiat, este 6. Pentru a parcurge o distanţă de 6km în aer calm, vă vor trebuii:",
answers: {
a: "600m",
b: "1000m",
c: "750m"
},
correctAnswer: "b"
},
{
question: "131. Pentru o aeronavă la care centrajul este în limitele admise dar către faţă veţi constata că pentru a zbura în palier la viteza de croazieră, trebuie să:",
answers: {
a: "trageţi în permanenţă de manşă",
b: "lăsaţi manşa liberă",
c: "împingeţi în permanenţă dee manşă"
},
correctAnswer: "a"
},
{
question: "132. Care sunt caracteristicile unei aeronave la care centrajul este în limitele admise dar către spate?",
answers: {
a: "pilotul trebuie să depună în croazieră, un efort permanent de cabrare",
b: "aeronava are tendinţă să se cabreze, chiar să se angajeze dacă pilotul lasă comanda liberă",
c: "performanţele sunt ameliorate"
},
correctAnswer: "b"
},
{
question: "133. Stabilitatea longitudinală a unei aeronave este asigurată de:",
answers: {
    a: "1.geometria aripii",
    b: "2.poziţia joasă a centrului de greutate",
    c: "3.poziţia şi geometria ampenajului orizontal ",
    d: "4.acţiunea pilotului în zbor",
    e: "1 şi 4",
    f: "2 şi 3",
    g: "1, 2 şi 3"
},
correctAnswer: "f"
},
{
question: "134. Pe un avion, rolul ampenajului orizontal şi al profundorului este:",
answers: {
a: "de a provoca variaţii ale incidenţei atunci când pilotul acţionează manşa (sau volanul) faţă/spate",
b: "de a asigura echilibrul ULM-ului, cu alte cuvinte, de a aplica rezultanta aerodinamică a portanţei centrului de gravitaţie al ULM-ului şi de a asigura stabilitatea sa",
c: "cele două propoziţii de mai sus sunt exacte"
},
correctAnswer: "c"
},
{
question: "135. Care este caracteristica principală a unui ULM al cărui centraj se situează în afara limitelor admise, dar către limita spate?",
answers: {
a: "este greu de pilotat",
b: "este instabil şi periculos",
c: "este foarte stabil"
},
correctAnswer: "b"
},
{
question: "136. Care este principala caracteristică a unui ULM al cărui centraj se situează în afara limitelor admise, dar către limita faţă.",
answers: {
a: "nu are nici o maniabilitate, deci este periculos",
b: "este instabil şi periculos",
c: "este foarte maniabil"
},
correctAnswer: "a"
},
{
question: "137. Faptul de a înclina ULM-ul:",
answers: {
a: "face să apară o forţă deviatoare care provoacă un viraj",
b: "nu modifică cu nimic traiectoria sa",
c: "deviază traiectoria pentru un scurt moment, timp în care apare forţa centrifugă"
},
correctAnswer: "a"
},
{
question: "138. La viteză constantă, pentru a trece de la zborul în linie dreaptă în palier la un viraj în palier trebuie să:",
answers: {
a: "creşteţi incidenţă",
b: "diminuaţi incidenţă",
c: "nu schimbaţi incidenţă"
},
correctAnswer: "a"
},
{
question: "139. La viteză constantă, pentru a trece de la zborul în linie dreaptă în palier la un viraj în palier trebuie să:",
answers: {
a: "creşteţi puterea motorului",
b: "să diminuaţi puterea motorului"
},
correctAnswer: "a"
},
{
    question: "140. În cursul unui viraj cu înclinare mare, aeronava se angajează la:",
    answers: {
    a: "aceeaşi viteză ca şi în linie dreaptă",
    b: "viteză mai mare decât cea în linie dreaptă",
    c: "viteză mai redusă decât cea în linie dreaptă"
    },
    correctAnswer: "b"
    },
    {
    question: "141. Viteza de angajare a aeronavei dv. în palier şi în linie dreaptă este egală cu 40 km/h. Viteza de angajare în palier la 60º înclinare:",
    answers: {
    a: "este de 40 km/h",
    b: "este mai mică de 40 km/h, căci în viraj creşteţi puterea motorului",
    c: "este de ordinul a 60 km/h"
    },
    correctAnswer: "c"
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
      if(document.getElementById('submitBtn').disabled){
        return;
      }
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

  document.getElementById('submitBtn').disabled = true;
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.disabled = true;
  });
  
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
    document.getElementById('submitBtn').disabled = false;
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