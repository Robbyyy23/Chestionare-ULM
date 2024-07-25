//Quiz data
const quizData=[
    {
        question: "6. Cum procedaţi în cazul intrării în vrie neintenţionată?",
        answers: {
          a: "a. motor în plin, manşa trasa, palonier invers rotirii, redresare",
          b: "b. motor redus, manşa în fata, palonier în sens invers rotirii pana la oprirea din rotaţie, redresare",
          c: "c. motor redus, manşa la neutru şi inversa rotirii, palonier invers rotirii, redresare"
        },
        correctAnswer: "b"
      },
      {
        question: "7. Cum procedaţi când va apropiaţi de un aerodrom aflat pe traiectul dvs. şi nu puteţi să-l contactaţi prin radio?",
        answers: {
          a: "a. vă continuaţi traiectul peste verticala aerodromului cu h = 150 m",
          b: "b. ocoliţi aerodromul la o distanţă de 10 km lateral şi 5 km faţă de prag",
          c: "c. ocoliţi pista la o distanţa de 10 km faţa de prag şi 5 km lateral"
        },
        correctAnswer: "c"
      },
      {
        question: "8. Condiţia minimă la decolare eşalonată este:",
        answers: {
          a: "a. aeronava din faţă a eliberat axul",
          b: "b. aeronava din faţă a atins înălţimea minimă de 50 m",
          c: "c. aeronava din faţă a atins înălţimea minimă de 100 m"
        },
        correctAnswer: "a"
      },
      {
        question: "9. Cum procedaţi când vă întâlniţi, în zbor, cu o aeronavă care vine din faţă sau aproximativ din faţă?",
        answers: {
          a: "a. urcaţi la înălţime superioara acesteia cu 150 m",
          b: "b. viraţi la stânga în urcare",
          c: "c. viraţi dreapta la orizontală"
        },
        correctAnswer: "c"
      },
      {
        question: "10. Cum procedaţi când o aeronava de interceptare executa în dreptul dvs. un viraj hotărât în urcare la cca. 90 grade, fără a va intersecta axul?",
        answers: {
          a: "a. balansaţi aeronava şi va continuaţi zborul",
          b: "b. balansaţi aeronava, comutaţi pe 121.500 MHz şi urmaţi instrucţiunile primite",
          c: "c. balansaţi aeronava, coboraţi la o înălţime de 150 m şi aterizaţi pe primul teren adecvat"
        },
        correctAnswer: "a"
      },
      {
        question: "11. Cum procedaţi când fiind în zbor în trafic de aerodrom şi pierzând legătura radio primiţi de la sol serii de lumini albe intermitente?",
        answers: {
          a: "a. părăsiţi zona şi va deplasaţi spre cel mai apropiat aerodrom pt. aterizare",
          b: "b. faceţi zona de aşteptare la verticală până se restabileşte legătura radio",
          c: "c. aterizaţi şi rulaţi la platformă"
        },
        correctAnswer: "c"
      },
      {
        question: "12. Cum executaţi virajele pentru aterizare şi după decolare când zburaţi într-o zonă de trafic de aerodrom dacă nu este prevăzut sau nu se solicită altfel?",
        answers: {
          a: "spre dreapta",
          b: "spre stânga",
          c: "la latitudinea dvs. deoarece nu se solicita o direcţie anume"
        },
        correctAnswer: "b"
      },
      {
        question: "13. Doriţi să zburaţi VFR / VMC, în spaţiul aerian de clasă G, din punctul A în punctul B la şes. Vizibilitatea este peste 8 km, plafon la 400 m. Cum procedaţi?",
        answers: {
          a: "a. zburaţi la o înălţime maximă de 250 m",
          b: "b. nu zburaţi",
          c: "c. zburaţi la o înălţime minimă de 150 m"
        },
        correctAnswer: "b"
      },
      {
        question: "14. Care este înălţimea maximă până la care puteţi zbura la verticala unui aerodrom situat la cota de 1300 m şi în spaţiu aerian de clasa G?",
        answers: {
          a: "a. 1850 m",
          b: "b. 2150 m",
          c: "c. 2500 m"
        },
        correctAnswer: "a"
      },
      {
        question: "15. Cum procedaţi în cazul unei pene de motor în decolare la înălţime de cca. 100 m?",
        answers: {
          a: "-se impinge de mansa pentru a asigura viteza de planare -se anunta conducatorul de zbor -se inchide robinetul de combustibil,se taie magnetourile,se teie intrerupatorul general -se aterizeaza in fata cu mici devieri de pe directie pentru evitarea eventualelor obstacole"
        },
        correctAnswer: "a"
      },
      {
        question: "16. Virajul nr. 1 al turului de pistă se execută la:",
        answers: {
          a: "a. la altitudinea minimă de 150 m, cu tracţiune maximă, IASmin = 110 km/h",
          b: "b. la înălţimea minimă de 150 m, IAS de manevrare, la orizontală",
          c: "c. la reperul stabilit de CZ şi la dispoziţia acestuia"
        },
        correctAnswer: "b"
      },
      {
        question: "17. Cum procedaţi când pe finală fiind la h = 200 ft la capătul opus al pistei staţionează o alta aeronavă:",
        answers: {
          a: "a. aterizaţi deoarece este spaţiu suficient de siguranţă",
          b: "b. motor în plin, flaps de decolare, pantă de urcare",
          c: "c. cereţi aprobarea CZ pentru procedura de ratare"
        },
        correctAnswer: "c"
      },
      {
        question: "18. Cum procedaţi când sunteţi aliniat iar pe pantă se afla o aeronava la înălţimea de cca. 100 m şi CZ vă dă permisiunea de decolare?",
        answers: {
          a: "a. decolaţi având grijă să vă eşalonaţi după aeronava din faţă pentru că are prioritate",
          b: "b. decolaţi după ce aeronava din faţă de pe pantă a eliberat axul",
          c: "c. atrageţi atenţia CZ asupra situaţiei şi dacă vă permite, decolaţi"
        },
        correctAnswer: "b"
      },
      {
        question: "19. Ce este cota unui aerodrom?",
        answers: {
          a: "Cota aerodrom: cota celui mai inalt punct al unei zone de aterizare."
        },
        correctAnswer: "a"
      },
      {
        question: "20. Care este semnificaţia luminii verzi intermitente semnalizată de către turnul de control unui avion aflat în zbor.",
        answers: {
          a: "a. aproba aterizarea",
          b: "b. întoarceţi-vă la acest aerodrom şi aşteptaţi aprobarea de aterizare",
          c: "c. aterizaţi imediat",
          d: "d. aveţi prioritate la aterizare"
        },
        correctAnswer: "b"
      },
      {
        question: "21. Când vedeţi pe un aerodrom un T mare alb înseamnă că:",
        answers: {
          a: "a. aterizarea trebuie efectuată pe T",
          b: "b. aterizarea trebuie făcută înaintea T",
          c: "c. aterizarea trebuie făcută în dreapta T",
          d: "d. aterizare trebuie făcută în stingă T"
        },
        correctAnswer: "c"
      },
      {
        question: "22. Sunteţi pe finala scurtă la aterizare şi de la turnul de control vi se aprinde lumina roşie continuu atunci veţi :",
        answers: {
          a: "a. continua apropierea şi aşteptaţi aprinderea luminii verzi",
          b: "b. nu aterizaţi, aeroportul este închis",
          c: "c. nu aterizaţi, rataţi aterizarea intraţi în tur de pistă",
          d: "d. nu aterizaţi, întoarceţi-vă la aerodromul de unde aţi plecat"
        },
        correctAnswer: "c"
      },
      {
        question: "23. Care este semnificaţia luminii roşii continuu când rulaţi cu avionul pe calea de rulaj ?",
        answers: {
          a: "a. întoarceţi-vă la hangar sau pe platformă",
          b: "b. îndepărtaţi-vă de zona de aterizare",
          c: "c. daţi prioritate avionului din faţă",
          d: "d. opriţi imediat"
        },
        correctAnswer: "d"
      },
      {
        question: "24. Care este semnificaţia luminii albe intermitent când rulaţi cu avionul pe calea de rulaj ?",
        answers: {
          a: "a. întoarceţi-vă la hangar sau platformă",
          b: "b. eliberaţi imediat zona de aterizare",
          c: "c. cedaţi trecerea avionului care se află în faţă",
          d: "d. stop"
        },
        correctAnswer: "a"
      },
      {
        question: "25. Sunteţi pe sol şi aveţi setat altimetru pe QNH 1021 raportat în ATIS atunci înseamnă ca altimetrul va indica :",
        answers: {
          a: "a. elevaţia aerodromului",
          b: "b. valoarea 0",
          c: "c. altitudinea aerodromului",
          d: "d. presiunea la nivelul mării"
        },
        correctAnswer: "c"
      },
      {
        question: "26. Dacă setaţi ......... la fereastra altimetrului, atunci altimetrul va indica altitudinea .",
        answers: {
          a: "a. QFE",
          b: "b. QNH",
          c: "c. QNE",
          d: "d. 1013.2mb"
        },
        correctAnswer: "b"
      },
      {
        question: "27. Dacă setaţi ......... la fereastra altimetrului, atunci altimetrul va indica înălţimea .",
        answers: {
          a: "a. QFE",
          b: "b. QNH",
          c: "c. QNE",
          d: "d. 1013.2mb"
        },
        correctAnswer: "a"
      },
      {
        question: "28. Dacă setaţi ......... la fereastra altimetrului, atunci altimetrul va indica flight level.",
        answers: {
          a: "a. QFE",
          b: "b. QNH",
          c: "c. QNE",
          d: "d. 1013,25 mb"
        },
        correctAnswer: "d"
      },
      {
        question: "29. Doriţi să decolaţi la ora 14 00 local luna mai, la ce ora cel mai târziu UTC trebuie să depuneţi planul de zbor",
        answers: {
          a: "a. la ora 10 :00 UTC",
          b: "b. la ora 10 :30 local",
          c: "c. la ora 09 30 UTC",
          d: "d. la orice ora cu condiţia să fie înainte de decolare"
        },
        correctAnswer: "a"
      },
      {
        question: "30 . În caz de urgenţă ce cod veţi seta la transponder ?",
        answers: {
          a: "a. 7600",
          b: "b. 7500",
          c: "c. 7700",
          d: "d. 9000"
        },
        correctAnswer: "c"
      },
      {
        question: "31. Dacă nu aţi decolat în maxim 30 min de când planul de zbor a fost depus aveţi obligaţia:",
        answers: {
          a: "a. depuneţi un alt plan de zbor",
          b: "b. cereţi un delay (întârziere) la briefing",
          c: "c. nu aveţi nici o obligaţie",
          d: "d. sunaţi la turn şi informaţi despre întârziere"
        },
        correctAnswer: "b"
      },
      {
        question: "32. Ce măsura se ia în situaţia unei pene de motor în timpul rulării pentru decolare?",
        answers: {
          a: "a. se execută viraje stânga-dreapta până la oprirea aparatului",
          b: "b. se aplica frâna astfel încât să se oprească aparatul pe porţiunea de pistă rămasă",
          c: "c. se iese cu aparatul de pe pistă"
        },
        correctAnswer: "b"
      },
      {
        question: "33. Ce măsură se ia în situaţia unei pene de motor pe panta de urcare, la o înălţime mai mică de 50m?",
        answers: {
          a: "a. se execută aterizare fără motor pe o direcţie în continuarea axului pistei, evitând eventualele obstacole",
          b: "b. se execută aterizare fără motor însoţită de întoarcerea pe pistă",
          c: "c. se încearcă executarea turului de pistă fără motor"
        },
        correctAnswer: "a"
      },
      {
        question: "34. Ce măsură se ia în situaţia unei pene de motor la o înălţime mai mare de 300m?",
        answers: {
          a: "a. se va încerca obligatoriu repornirea motorului",
          b: "b. se va încerca reîntoarcerea pe aerodrom fără motor",
          c: "c. se efectuează procedura aterizării de urgenta fără motor"
        },
        correctAnswer: "a"
      },
      {
        question: "35. Cum se execută atingerea apei în situaţia unei amerizări forţate?",
        answers: {
          a: "a. mai întâi partea din spate",
          b: "b. mai întâi partea din faţă",
          c: "c. pe cât posibil toate rotile trenului simultan"
        },
        correctAnswer: "a"
      },
      {
        question: "36. Cum se procedează în situaţia incendiului la motor?",
        answers: {
          a: "a. se părăseşte avionul cu paraşuta, indiferent de împrejurările în care a intervenit incendiul",
          b: "b. dacă situaţia permite, se opreşte motorul şi se execută procedura aterizării de urgenţă fără motor",
          c: "c. se intră în picaj pentru a mari viteza aparatului"
        },
        correctAnswer: "b"
      },
      {
        question: "37. Cum se compensează defectarea comenzii direcţiei?",
        answers: {
          a: "a. cu ajutorul comenzii eleroane şi profundor",
          b: "b. prin modificarea regimului motorului",
          c: "c. se acţionează obligatoriu paraşuta"
        },
        correctAnswer: "a"
      },
      {
        question: "38. Cum se compensează defectarea comenzii profundorului?",
        answers: {
          a: "a. cu ajutorul comenzii eleroane şi direcţie",
          b: "b. prin modificarea regimului motorului",
          c: "c. se acţionează obligatoriu paraşuta"
        },
        correctAnswer: "c"
      },
    {
    question: "39. Cum se procedează în situaţia în care manevrabilitatea avionului este incertă la o înălţime mai mică de 300 m?",
    answers: {
    a: "a. se opreşte motorul",
    b: "b. se încearcă aterizarea de urgenţă",
    c: "c. se acţionează sistemul de salvare cu paraşută"
    },
    correctAnswer: "b"
    },
    {
    question: "40. Cum se execută aterizarea cu o roata a trenului principal defectă?",
    answers: {
    a: "a. se face atingerea la o viteză cât mai mică, mai întâi cu roata bună, şi se ţine manşa spre aceasta",
    b: "b. se acţionează sistemul de salvare cu paraşută",
    c: "c. se face atingerea la o viteză cât mai mare, mai întâi cu roata defectă"
    },
    correctAnswer: "a"
    },
    {
    question: "41. Cum se procedează în situaţia defectării reductorului?",
    answers: {
    a: "a. se părăseşte avionul cu paraşută, indiferent de împrejurările în care a intervenit defecţiunea",
    b: "b. se opreşte imediat motorul şi se execută procedura aterizării de urgenţă fără motor",
    c: "c. se intră în picaj pentru a mari viteza aparatului"
    },
    correctAnswer: "b"
    },
    {
    question: "42. Care este ordinea acţiunilor care trebuie executate în cazul incendiului la motor în zbor:",
    answers: {
    a: "a. scaunele şi centurile siguranţate, flaps cum este necesar, viteza optimă, contactul cu solul pe 3 puncte, deblocarea cabinei înainte de coborârea din ULM",
    b: "b. viteza optimă, contactul cu solul pe 3 puncte, flaps cum este necesar, deblocarea cabinei înainte de coborârea din ULM, frânele acţionate puternic",
    c: "c. viteza optimă, robinet de benzină închis, maneta de gaz în plin, după oprirea motorului contact de aprindere închis, flaps cum este necesar, întrerupătorul general închis, uşile deblocate înainte de punctul de contact cu solul, contactul cu solul cu coada uşor lăsată, frânele acţionate puternic"
    },
    correctAnswer: "c"
    },
    {
    question: "43. Dacă creşte temperatura chiuloasei peste parametri normali:",
    answers: {
    a: "a. se opreşte motorul şi se aterizează forţat",
    b: "b. se execută glisadă",
    c: "c. se reduce puterea motorului şi se pune ULM pe panta de coborâre"
    },
    correctAnswer: "c"
    },
    {
    question: "44. Care este ordinea comenzilor în cazul penei de motor în timpul rulajului în vederea decolării:",
    answers: {
    a: "a. maneta de gaze la ralanti, flaps retras, întrerupător general închis contact aprindere închis, frânele acţionate",
    b: "b. maneta de gaze la ralanti, frânele acţionate, flaps retras, contact aprindere închis întrerupător general închis",
    c: "c. maneta de gaze la ralanti, contact aprindere închis, întrerupător general închis flaps retras, frânele acţionate"
    },
    correctAnswer: "c"
    },
    {
    question: "45. Când se raportează conducătorului de zbor cedarea motorului în panta de urcare:",
    answers: {
    a: "a. nu este obligatorie raportarea",
    b: "b. imediat după cedare",
    c: "c. după asigurarea vitezei de planare"
    },
    correctAnswer: "c"
    },
    {
    question: "46. Cum se procedează în cazul incendiului în cabină:",
    answers: {
    a: "a. se închid canalele de aerisire şi de încălzire, se acţionează extinctorul, după stingerea incendiului se aeriseşte cabina, se deschid canalele de aerisire/încălzire",
    b: "b. se acţionează extinctorul, după stingerea incendiului se aeriseşte cabina, se deschid canalele de aerisire/încălzire",
    c: "c. se deschide parţial cabina, se acţionează instinctorul după care se executa aterizarea forţată"
    },
    correctAnswer: "c"
    },
    {
    question: "47. În cazul incendiului la motor în zbor:",
    answers: {
    a: "a. se reduce viteza de zbor pentru stingerea incendiului",
    b: "b. se execută aterizarea la fel ca în condiţiile normale",
    c: "c. dacă incendiul nu se stinge, mărim viteza în limita vitezelor care pot furniza un amestec care nu este atât de combustibil"
    },
    correctAnswer: "c"
    },
    {
    question: "48. Pornirea motorului se poate efectua:",
    answers: {
    a: "a. pe suprafeţe cu pietriş",
    b: "b. pe orice suprafaţă",
    c: "c. pe suprafeţe de iarbă sau beton fără obiecte ce ar putea deteriora elicea"
    },
    correctAnswer: "c"
    },
    {
    question: "49. Cum se procedează în cazul apariţiei incendiului în zbor:",
    answers: {
    a: "a. se continuă zborul spre aerodromul de destinaţie",
    b: "b. se închide contactul general şi robinetul rezervorului de combustibil",
    c: "c. se caută un teren pentru aterizarea de urgenţă",
    d: "b+c"
    },
    correctAnswer: "d"
    },
    {
    question: "50. Ce controale se fac la avion în cadrul activităţii de zbor?",
    answers: {
    a: "a. controlul înainte de zbor",
    b: "b. controlul după zbor",
    c: "c. controlul medical"
    },
    correctAnswer: "a"
    },
    {
    question: "51. Pentru intrarea în zona de aerodrom se cere aprobarea turnului?",
    answers: {
    a: "a. nu, doar se informează",
    b: "b. nu",
    c: "c. da"
    },
    correctAnswer: "c"
    },
    {
    question: "52. Este necesară calcularea masei totale înainte de decolare?",
    answers: {
    a: "a. da, pentru a fi comparată cu masa maximă specificată în manualul de utilizare şi întreţinere",
    b: "b. nu este necesar la această clasă de aeronavă",
    c: "c. doar în zborurile de raid"
    },
    correctAnswer: "a"
    },
    {
    question: "53. Înainte de a porni motorul pilotul atenţionează prin folosirea expresiei:",
    answers: {
    a: "a. liber la elice?",
    b: "b. pot porni motorul?",
    c: "c. atenţie pornesc"
    },
    correctAnswer: "a"
    },
    {
    question: "54. La sol, cu motorul pornit, pilotul are voie să părăsească cabina?",
    answers: {
    a: "a. da",
    b: "b. nu",
    c: "c. doar în cazul când este solicitat de controlorul de trafic"
    },
    correctAnswer: "b"
    },
    {
    question: "55. Decolarea se face cu motorul:",
    answers: {
    a: "a. în plin",
    b: "b. la 80% din putere",
    c: "c. la regim de croazieră"
    },
    correctAnswer: "a"
    },
    {
    question: "56. Dacă avionul este echipat cu paraşută este indicată oprirea motorului după deschiderea acesteia?",
    answers: {
    a: "a. motorul trebuie să funcţioneze pentru a ateriza în zona dorită",
    b: "b. motorul se opreşte dar poate fi pornit pentru a frâna la aterizare",
    c: "c. oprirea motorului este obligatorie în astfel de situaţii"
    },
    correctAnswer: "c"
    },
    {
    question: "57. Dacă în timpul zborului apar vibraţii puternice care cresc în intensitate atunci:",
    answers: {
    a: "a. se caută un teren de aterizare, se opreşte motorul şi se aterizează",
    b: "b. se continuă zborul spre destinaţie",
    c: "c. se încearcă remedierea defecţiunii în timpul zborului"
    },
    correctAnswer: "a"
    },
    {
    question: "58. Cum procedaţi când vă întâlniţi, în zbor, cu o aeronavă care vine din faţă sau aproximativ din faţă?",
    answers: {
    a: "a. urcaţi la înălţime superioară acesteia cu 150 m",
    b: "b. viraţi la stânga în urcare",
    c: "c. viraţi dreapta la orizontală"
    },
    correctAnswer: "c"
    },
    {
    question: "59. Cum procedaţi când o aeronavă de interceptare execută în dreptul dvs. un viraj hotărât în urcare la cca. 90 grade, fără a vă intersecta axul?",
    answers: {
    a: "a. balansaţi aeronava şi vă continuaţi zborul",
    b: "b. balansaţi aeronava, comutaţi pe 121.5 şi urmaţi instrucţiunile primite",
    c: "c. balansaţi aeronava, coborâţi la o înălţime de 150m şi aterizaţi pe primul teren adecvat"
    },
    correctAnswer: "a"
    },
    {
    question: "60. Cum se procedează în cazul cedării bechiei?",
    answers: {
    a: "a. se aterizează întâi pe aceasta pentru ca viteza să scadă mai repede",
    b: "b. se aterizează pe 3 puncte cu viteza mică",
    c: "c. se face contactul pe 2 puncte menţinând coada sus maximum posibil"
    },
    correctAnswer: "c"
    },
    {
    question: "61. La o temperatură de 5 grade Celsius, după decolare scade regimul motorului, cum acţionaţi?",
    answers: {
    a: "a. măriţi regimul motorului",
    b: "b. reduceţi gazul",
    c: "c. acţionaţi complet încălzirea carburatoarelor"
    },
    correctAnswer: "c"
    },
    {
    question: "62. Într-un raid Ploieşti – Braşov, cu vânt puternic din Vest, pe Valea Prahovei constataţi turbulenţă puternică, cum procedaţi?",
    answers: {
    a: "a. reduceţi înălţimea deoarece turbulenţa scade la sol",
    b: "b. reduceţi înălţimea şi zburaţi pe partea de Vest deoarece zona de sub vânt este mai liniştită",
    c: "c. luaţi înălţime pe partea de est evitând curenţii rotorici"
    },
    correctAnswer: "c"
    },
    {
    question: "63. În cazul cedării jambei de bot veţi acţiona astfel:",
    answers: {
    a: "a. veţi ateriza pe 3 puncte acţionând frânele pentru a reduce daunele",
    b: "b. veţi ateriza pe 2 puncte acţionând frânele pentru a reduce daunele",
    c: "c. veţi ateriza pe 2 puncte fără frâne menţinând manşa trasă complet"
    },
    correctAnswer: "c"
    },
    {
    question: "64. În timpul frânării după o aterizare pe 3 puncte constataţi o deviere puternică:",
    answers: {
    a: "a. compensaţi furătura şi evitaţi să frânaţi",
    b: "b. compensaţi furătura şi frânaţi puternic pentru a opri aeronava cât mai rapid",
    c: "c. compensaţi furătura şi frânaţi puternic roata opusă"
    },
    correctAnswer: "c"
    },
    {
    question: "65. În rulaj pe un teren ales din aer constataţi cedarea comenzii bechiei:",
    answers: {
    a: "a. continuaţi cu viteza mică cu reprize de motor, acţionând diferenţial frânele şi direcţia",
    b: "b. măriţi viteza de rulaj pentru ca direcţia să aibă efect",
    c: "c. opriţi şi remorcaţi aeronava"
    },
    correctAnswer: "c"
    },
    {
    question: "66. Deasupra unui teren obstacolat:",
    answers: {
    a: "a. reduceţi înălţimea de zbor pentru a vedea mai detaliat eventualele terenuri de aterizare",
    b: "b. dacă nu puteţi evita zona creşteţi înălţimea de zbor pentru a vă asigura în caz de pană",
    c: "c. nu sunt necesare alte măsuri deoarece motorul are aprindere dublă şi aveţi paraşută"
    },
    correctAnswer: "b"
    },
    {
    question: "67. La un aeroport intraţi de pe bretea pe pistă urmând să decolaţi:",
    answers: {
    a: "a. veţi decola pe pista în serviciu ţinând cont de lungimea rulajului precizată de constructor",
    b: "b. veţi decola totdeauna de la capătul pistei în serviciu pentru a evita o pană de motor",
    c: "c. nu are nici o importanţă deoarece o pistă de aeroport e oricum foarte lungă"
    },
    correctAnswer: "b"
    },
    {
    question: "68. În cazul înrăutăţirii condiţiilor meteorologice pe traiect (ceaţă, ploaie, furtună, etc.):",
    answers: {
    a: "a. se continuă zborul, ULM-ul este dotat cu GPS",
    b: "b. se ocoleşte, se evită zona periculoasă şi se îndreaptă către zone mai sigure şi se aterizează pe aerodromul cel mai apropiat",
    c: "c. pilotul poate lua orice hotărâre, nefiind suspus nici unei reglementări în acest sens"
    },
    correctAnswer: "b"
    },
    {
    question: "70. Scoaterea din vrie involuntară:",
    answers: {
    a: "a. se pune motor şi se trage de manşa pentru redresare",
    b: "b. se reduce motorul, se împinge de manşă concomitent cu acţionarea palonierului în sens invers rotirii, se redresează",
    c: "c. se scoate din rotire, se reduce motorul şi se redresează"
    },
    correctAnswer: "b"
    },
    {
    question: "71. Cum se va corecta un bont de limită de viteză la aterizare ?",
    answers: {
    a: "a. se va împinge imediat manşa în faţă pentru a oprii înălţarea avionului",
    b: "b. se va rămâne cu manşa pe loc până la reaşezarea avionului pe pistă",
    c: "c. se ratează imediat aterizarea"
    },
    correctAnswer: "b"
    },
    {
    question: "72. Cum se va corecta un bont de aterizare la care contactul iniţial s-a efectuat prima oara pe roata de bot?",
    answers: {
    a: "a. se împinge imediat de manşă pentru a repune avionul pe pistă pe toate 3 roţile",
    b: "b. se ratează imediat aterizarea prin punere de motor",
    c: "c. se corectează greşeala prin modificarea regimului motor până când avionul îşi reia din nou poziţia de aterizare"
    },
    correctAnswer: "c"
    },
    {
    question: "73. Care sunt acţiunile corective când sa dat un bont de viteză la aterizare?",
    answers: {
    a: "a. se rămâne cu manşa pe loc până la reaşezarea avionului pe pistă",
    b: "b. se opreşte imediat înălţarea după care se reia aterizarea",
    c: "c. se ratează imediat prin ducerea manetei de gaze în plin"
    },
    correctAnswer: "b"
    },
    {
    question: "74. Cum se corectează apropierea de pistă sub panta de aterizare când avionul se află sub H=50 m?",
    answers: {
    a: "a. se slăbeşte manşa în faţă pentru a marii viteza şi a marii distanţa de planare până la pistă",
    b: "b. se va trage de manşă pentru a micşora rata de coborâre şi a putea ajunge la pistă",
    c: "c. se pune motor pentru a oprii coborârea şi se slăbeşte manşa către în faţa pentru a nu modifica poziţia botului până la reintrarea în profilul pantei"
    },
    correctAnswer: "c"
    },
    {
    question: "75. Cum se corectează apropierea de pistă deasupra pantei de aterizare ?",
    answers: {
    a: "a. se împinge de manşă până la înălţimea de redresare după care se efectuează aterizare normală.",
    b: "b. dacă până la înălţimea minima de 50 m avionul nu este stabilizat în parametri recomandaţi pentru aterizare atunci se ratează aterizarea",
    c: "c. se bagă flapsul pe poziţia 0 pentru a putea împinge de manşă ca să se zboare cu rata şi viteza mare de coborâre după care când s-a reintrat în panta se scoate flapsul din nou pe poziţia de aterizare şi se aterizează"
    },
    correctAnswer: "b"
    },
    {
    question: "76. Cum se executa manevra de glisadă?",
    answers: {
    a: "a. se reduce motorul se menţine direcţia de zbor cu ajutorul palonierului, inclinare constantă, pantă cu ajutorul manşei în profunzime",
    b: "b. se menţine direcţia de zbor cu ajutorul manşei lateral, inclinarea cu ajutorul palonierului panta cu ajutorul manşei fata spate, rata de coborâre cu ajutorul motorului.",
    c: "c. se reduce motoriul, direcţia cu manşa lateral, rata de coborâre cu manşa faţă spate"
    },
    correctAnswer: "a"
    },
    {
    question: "77. Care este tehnica de evitare a unui obstacol pe pistă când distanţa de oprire este mai mică decât distanţa necesară opririi avionului",
    answers: {
    a: "a. se vor aplica frânele la maxim şi se va încorda corpul pentru impact",
    b: "b. înainte de a ajunge la obstacol se va acţiona palonier şi frâna în partea cu degajament mai bun pentru efectuarea unei piruete",
    c: "c. se baga imediat motor în plin în încercarea de a redecola şi a trece peste obstacol"
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