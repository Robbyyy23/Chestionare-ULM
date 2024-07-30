//Quiz data
const quizData=[
    {
        question: "6. Ce este avansul la aprindere al unui motor cu piston?",
        answers: {
          a: "intervalul de timp dintre momentul producerii scânteii şi PMI",
          b: "intervalul de timp dintre momentul producerii scânteii şi evacuare",
          c: "intervalul de timp dintre momentul producerii scânteii şi PMS"
        },
        correctAnswer: "c"
      },
      {
        question: "7. La înclinarea aeronavei spre stânga",
        answers: {
          a: "eleronul stâng coboară şi cel drept se ridică",
          b: "eleronul stâng se ridică şi cel drept coboară",
          c: "eleronul stâng coboară şi cel drept rămâne orizontal"
        },
        correctAnswer: "b"
      },
      {
        question: "8. Vitezometrul determina IAS prin",
        answers: {
          a: "măsurarea presiunii dinamice a aeronavei",
          b: "măsurarea diferenţei dintre presiunea statică şi cea dinamică",
          c: "măsurarea diferenţei dintre presiunea totală şi cea statică"
        },
        correctAnswer: "c"
      },
      {
        question: "9. Carterul unui motor Otto în 4 timpi poate fi",
        answers: {
          a: "plin cu ulei sub presiune",
          b: "uscat presurizat sau cu baie de ulei",
          c: "plin cu ulei la presiune atmosferică"
        },
        correctAnswer: "b"
      },
      {
        question: "10. Răcirea unui motor în 2 sau 4 timpi se poate face",
        answers: {
          a: "mixt, cu aer sau lichid",
          b: "cu aer",
          c: "forţat cu lichid"
        },
        correctAnswer: "a"
      },
      {
        question: "11. Compensatorul altimetric al carburatorului acţionează la",
        answers: {
          a: "creşterea presiunii atmosferice, asupra debitului de combustibil",
          b: "scăderea presiunii atmosferice, asupra debitului de combustibil",
          c: "variaţia altitudinii aeronavei, asupra debitului de carburant"
        },
        correctAnswer: "c"
      },
      {
        question: "12. Ce creşte regimul maxim continuu al unui motor OTTO?",
        answers: {
          a: "regimul în care durata de funcţionare este nelimitată ca timp",
          b: "regimul la care motorul nu se poate defecta",
          c: "regimul la care siguranţa funcţionării motorului este asigurată"
        },
        correctAnswer: "c"
      },
      {
        question: "13. Circuitul de răcire cu lichid al unui motor OTTO funcţionează",
        answers: {
          a: "la presiune atmosferică şi asigură parametrii de temperatură necesari funcţionării motorului",
          b: "presurizat sau la presiune atmosferică şi asigură parametrii de temperatură necesari funcţionării motorului",
          c: "presurizat sau la presiune atmosferică şi asigură răcirea chiulasei"
        },
        correctAnswer: "b"
      },
      {
        question: "14. Avansul la aprindere al unui motor OTTO poate fi",
        answers: {
          a: "reglabil",
          b: "fix sau reglabil",
          c: "nu se reglează el fiind reglat de producător"
        },
        correctAnswer: "c"
      },
      {
        question: "15. Ordinea aprinderii la motoarele OTTO este importantă deoarece",
        answers: {
          a: "asigură optimizarea funcţionării motorului",
          b: "vibraţiile sunt minime",
          c: "nu are nicio importanţă ordinea aprinderii"
        },
        correctAnswer: "a"
      },
      {
        question: "16. Ce este demarorul unui motor",
        answers: {
          a: "un motor electric necesar pornirii motorului",
          b: "poate fi şi un alt sistem decât un motor electric, manual sau nu",
          c: "este un motor electric care generează curentul electric necesar încărcării bateriei"
        },
        correctAnswer: "a"
      },
      {
        question: "17. Energia electrică necesară aprinderii la un motor OTTO este produsă de",
        answers: {
          a: "magnetouri sau sistemul baterie generator de curent",
          b: "bobinele de inducţie",
          c: "aprinderea electronică"
        },
        correctAnswer: "a"
      },
      {
        question: "18. La un motor OTTO care are carterul uscat presurizat uleiul circulă din carter în rezervor",
        answers: {
          a: "datorită pompei de ulei",
          b: "datorită presiunii gazelor din carter",
          c: "datorită depresiunii din carter"
        },
        correctAnswer: "b"
      },
      {
        question: "19. Compensatorul altimetric al carburatorului acţionează la",
        answers: {
          a: "creşterea presiunii atmosferice",
          b: "variaţia altitudinii aeronavei",
          c: "scăderea presiunii atmosferice"
        },
        correctAnswer: "b"
      },
      {
        question: "20. La un carburator se poate regla la rece",
        answers: {
          a: "turaţia de ralanti şi gradul de amestec",
          b: "turaţia de ralanti la 2000 rpm şi gradul de amestec la minim 75%",
          c: "numai turaţia de ralanti"
        },
        correctAnswer: "a"
      },
      {
        question: "21. Ce indică variometrul?",
        answers: {
          a: "altitudinea",
          b: "viteza de deplasare pe traiectorie",
          c: "viteza pe verticală"
        },
        correctAnswer: "c"
      },
      {
        question: "22. Ce este avansul la aprindere?",
        answers: {
          a: "intervalul de timp dintre momentul producerii scânteii şi PMI",
          b: "unghiul RAC dintre producerea scânteii şi PMI",
          c: "unghiul RAC dintre producerea scânteii şi PMS"
        },
        correctAnswer: "c"
      },
      {
        question: "23. O elice la care pasul palelor se poate regla numai la sol se numeşte elice cu pas:",
        answers: {
          a: "fix",
          b: "variabil",
          c: "reglabil"
        },
        correctAnswer: "c"
      },
      {
        question: "24. Ce este unghiul diedru al unei aripi?",
        answers: {
          a: "unghiul format de cele două planuri cu planul orizontal",
          b: "unghiul dintre cele două planuri",
          c: "unghiul de bracaj al eleroanelor"
        },
        correctAnswer: "a"
      },
      {
        question: "25. Ce este unghiul de săgeată al unei aripi?",
        answers: {
          a: "unghiul format de cele două planuri cu planul orizontal",
          b: "unghiul format de bordul de atac cu axa transversală",
          c: "unghiul de bracaj al flapsului"
        },
        correctAnswer: "b"
      },
      {
        question: "26. Ce este profundorul?",
        answers: {
          a: "partea mobilă a ampenajului vertical",
          b: "partea mobilă a ampenajului orizontal",
          c: "maneta de comandă a flapsului"
        },
        correctAnswer: "b"
      },
      {
        question: "27. Ce este amestecul carburant?",
        answers: {
          a: "amestecul aer/vapori de benzină care se aprinde în camera de ardere",
          b: "amestecul ulei/benzină care se foloseşte drept carburant la motoarele în doi timpi",
          c: "amestecul apă/antigel care se foloseşte la motoarele ce se răcesc cu lichid"
        },
        correctAnswer: "a"
      },
      {
        question: "28. Ce agregat al motorului realizează dozajul amestecului carburant?",
        answers: {
          a: "pompa de ulei",
          b: "magnetoul",
          c: "carburatorul"
        },
        correctAnswer: "c"
      },
      {
        question: "29. În ce unitate de măsură este etalonat un vitezometru pe a cărui scală scrie 'MPH'?",
        answers: {
          a: "kilometri/oră",
          b: "mile statutare/oră",
          c: "mile marine/oră"
        },
        correctAnswer: "c"
      },
      {
        question: "30. Ce rol are reductorul?",
        answers: {
          a: "multiplică turaţia ce se transmite elicei",
          b: "micşorează turaţia ce se transmite elicei",
          c: "măreşte puterea motorului, fără a modifica turaţia ce se transmite elicei"
        },
        correctAnswer: "b"
      },
      {
        question: "31. Scăderea înălţimii densimetrice are efect asupra carburaţiei, rezultând o scădere relativă a puterii motorului, datorită:",
        answers: {
          a: "îmbogăţirii excesive a amestecului carburant",
          b: "sărăcirea excesivă a amestecului carburant",
          c: "reducerea capacităţii de vaporizare a benzinei"
        },
        correctAnswer: "a"
      },
      {
        question: "32. Care din condiţiile următoare pot face ca motorului să funcţioneze defectuos:",
        answers: {
          a: "presiune mare de admisie",
          b: "temperatura mare de admisie",
          c: "supraîncălzire motor"
        },
        correctAnswer: "c"
      },
      {
        question: "33. Care este rezultatul operării unui motor la temperaturi ridicate cu folosirea unui ulei recomandat de fabricant pentru temperaturi mai joase şi vâscozitate mică, comparativ cu un ulei pentru temperaturi ridicate şi care are o vâscozitate mai mare:",
        answers: {
          a: "presiunea de ulei este mai mare",
          b: "temperatura şi presiunea de ulei este mai mare decât cea normală",
          c: "presiunea de ulei este mai mică decât cea normală"
        },
        correctAnswer: "c"
      },
      {
        question: "34. O aeronavă zboară în emisfera Nordică. Capul de compas este 360 grade. La executarea unui viraj spre dreapta compasul magnetic va indica iniţial:",
        answers: {
          a: "un viraj spre sud",
          b: "un viraj spre est",
          c: "un viraj spre vest"
        },
        correctAnswer: "c"
      },
      {
        question: "35. În cazul unui blocaj al prizei statice când avionul urcă, care dintre afirmaţiile de mai jos este corectă:",
        answers: {
          a: "vitezometrul va supraindica, altimetrul subindică, iar variometrul va rămâne la zero",
          b: "vitezometrul va subindica, altimetrul va rămâne la înălţimea din momentul blocajului iar variometrul va reveni la zero",
          c: "vitezometrul va subindica, altimetrul va subindica, iar variometrul va reveni la zero"
        },
        correctAnswer: "a"
      },
      {
        question: "36. Menţinerea aeronavei ultrauşoare motorizate în stare curată este:",
        answers: {
          a: "nu priveşte responsabilitatea pilotului de ULM",
          b: "neimportantă, deoarece atunci când se efectuează lucrări de întreţinere şi reparaţii ULM se spală şi se curată",
          c: "importantă, deoarece prin curăţare se face un prim control al stării tehnice generale, se reduce posibilitatea de coroziune şi se uşurează lucrările de întreţinere"
        },
        correctAnswer: "c"
      },
      {
        question: "37. În timpul verificărilor la sol motorul funcţionează cu trepidaţii, scăderea turaţiei pe magnetouri este normală şi nu se obţine turaţia maximă. Defecţiunea poate fi cauzată de:",
        answers: {
          a: "un cilindru nu funcţionează normal",
          b: "câteva bujii sunt defecte la diferiţi cilindrii",
          c: "neetanşeitatea la galeria de admisie a aerului în cilindrii"
        },
        correctAnswer: "a"
      },
      {
        question: "38. Atunci când contactul de aprindere magnetouri este oprit (off-tăiat), înseamnă că:",
        answers: {
          a: "circuitele primare ale ambelor magnetouri sunt puse la masă",
          b: "circuitele secundare ale ambelor magnetouri sunt puse la masă",
          c: "toate circuitele magnetourilor sunt automat deschise (tăiate)"
        },
        correctAnswer: "a"
      },
      {
        question: "39. Dacă filtrul de aer a motorului se înfundă complet/total, atunci:",
        answers: {
          a: "puterea motorului scade cu cca 3%",
          b: "puterea motorului scade cu cca 5%",
          c: "motorul se opreşte"
        },
        correctAnswer: "c"
      },
      {
        question: "40. La motoarele cu elice cu pas fix, givrarea carburatorului în timpul zborului produce:",
        answers: {
          a: "creşterea turaţiei",
          b: "scăderea turaţiei",
          c: "creşterea presiunii de admisie"
        },
        correctAnswer: "b"
      },
      {
        question: "41. Acţionând manşa în profunzime (înainte şi înapoi) acţionăm asupra:",
        answers: {
          a: "direcţiei",
          b: "profundorului",
          c: "eleronului"
        },
        correctAnswer: "b"
      },
      {
        question: "42. Dispozitivele de hipersustentaţie tip fante de bord de atac au rolul:",
        answers: {
          a: "măresc viteza fileurilor de aer pe extrados",
          b: "măresc viteza fileurilor de aer pe intrados",
          c: "micşorează viteza fileurilor de aer pe extrados"
        },
        correctAnswer: "a"
      },
      {
        question: "43. Oxidarea unei piese:",
        answers: {
          a: "îi degradează aspectul",
          b: "trădează o slăbire a caracteristicilor de rezistenţă ale acesteia",
          c: "scade doar preţul de vânzare al aparatului"
        },
        correctAnswer: "b"
      },
      {
        question: "44. Depăşirea masei maxime admise la decolare:",
        answers: {
          a: "are drept consecinţă doar diminuarea performanţelor aparatului",
          b: "este interzisă întrucât atrage depăşirea rezistenţei structurale",
          c: "nu are consecinţe"
        },
        correctAnswer: "b"
      },
      {
        question: "45. Pasul real al elicei este:",
        answers: {
          a: "diferenţa dintre pasul geometric şi alunecarea elicei",
          b: "diametrul cercului descris de vârfurile palelor",
          c: "distanţa parcursă de elice în aer, într-o singură rotaţie, pe direcţia axială"
        },
        correctAnswer: "a"
      },
      {
        question: "46. Rolul trimerilor este:",
        answers: {
          a: "de a reduce efortul (la manşă) depus asupra comenzilor",
          b: "nu se utilizează la avioane",
          c: "de a permite viraje cu viteză mică"
        },
        correctAnswer: "a"
      },
      {
        question: "47. Elementele structurii unei aripi sunt:",
        answers: {
          a: "săgeata, alungirea, profilul, anvergura",
          b: "lonjeroane, lise, nervuri, traverse, înveliş",
          c: "grinzi, conducte, racorduri, splint"
        },
        correctAnswer: "b"
      },
      {
        question: "48. Cuplul reactiv al elicei se manifestă prin:",
        answers: {
          a: "tendinţa avionului de a se înclina în partea opusa mişcării de rotaţie a elicei",
          b: "menţinerea aripii la orizontală",
          c: "tendinţa avionului de a se înclina în partea mişcării de rotaţie a elicei"
        },
        correctAnswer: "a"
      },
      {
        question: "49. Principiul de funcţionare al variometrului se bazează pe:",
        answers: {
          a: "viteza de variaţie a presiunii statice la creşterea/scăderea înălţimii",
          b: "viteza de variaţie a presiunii dinamice la creşterea/scăderea înălţimii",
          c: "principiul vaselor comunicante"
        },
        correctAnswer: "a"
      },
      {
        question: "50. La bordul avionului măsurarea (captarea) presiunilor statică şi dinamică se realizează cu: ",
        answers: {
          a: "fante de bord de atac",
          b: "instalaţia de presurizare ",
          c: "tub Pitot"
        },
        correctAnswer: "c"
      }
    ,
    {
      question: "51. Părţile fixe ale motorului sunt:",
      answers: {
        a: "cilindri, carterul",
        b: "piston, bielă, arbore cotit",
        c: "nici a), nici b)"
      },
      correctAnswer: "a"
    },
    {
      question: "52. Un motor cu puterea de 40 kW are:",
      answers: {
        a: "40 C.P.",
        b: "54,8 C.P.",
        c: "50 C.P."
      },
      correctAnswer: "b"
    },
    {
      question: "57. Carburantul utilizat la motoarele de aviaţie poate fi:",
      answers: {
        a: "benzină de aviaţie AVGAS 100 LL",
        b: "benzină auto cu plumb sau fără plumb având cifra octanică stabilită prin specificaţiile motorului",
        c: "benzină aviaţie CO 80"
      },
      correctAnswer: "b"
    },
    {
      question: "58. Consemnarea lucrărilor periodice regulamentare se face în:",
      answers: {
        a: "carnetul de zbor",
        b: "fişa de navigaţie",
        c: "livretul aeronavei"
      },
      correctAnswer: "c"
    },
    {
      question: "59. Ce reprezintă celula avionului?",
      answers: {
        a: "fuzelajul şi aripile",
        b: "avionul în întregime",
        c: "întregul ansamblu mai puţin motorul"
      },
      correctAnswer: "c"
    },
    {
      question: "60. Ce rol are compensatorul mobil de pe profundor (trimerul)?",
      answers: {
        a: "de a suplimenta cursa manşei faţă spate",
        b: "de a reduce efortul de pe manşe în zbor când avionul e greu sau uşor de bot",
        c: "de a regla centrajul avionului"
      },
      correctAnswer: "b"
    },
    {
      question: "61. O elice are pasul geometric 1.54. Aceasta înseamnă că:",
      answers: {
        a: "diametrul elicei este de 1,54 m",
        b: "la o rotaţie completă elicea înaintează teoretic 1.54 m",
        c: "elicea are un unghi de 1,54 grade"
      },
      correctAnswer: "b"
    },
    {
      question: "62. Ce este coarda unui profil aerodinamic?",
      answers: {
        a: "linia curbă care defineşte extradosul",
        b: "linia ce uneşte bordul de atac cu bordul de fugă",
        c: "unghiul de bracaj al eleroanelor"
      },
      correctAnswer: "b"
    },
    {
      question: "64. Un tren de aterizare triciclu are:",
      answers: {
        a: "roată de bot cu bechie",
        b: "tren principal şi roată de bot",
        c: "tren principal şi bechie"
      },
      correctAnswer: "b"
    },
    {
      question: "65. Încălzirea carburatorului în zbor are rol de:",
      answers: {
        a: "a preveni oprirea motorului iarna",
        b: "a preveni depunerea gheţii în carburator",
        c: "a preveni răcirea carburatorului sub valoarea la care îngheaţă benzina"
      },
      correctAnswer: "b"
    },
    {
      question: "66. Ce organ al avionului produce tracţiunea?",
      answers: {
        a: "aripa",
        b: "motorul",
        c: "elicea"
      },
      correctAnswer: "c"
    },
    {
      question: "67. Ce rol are torsionarea geometrică a elicei?",
      answers: {
        a: "reduce zgomotul elicei la capătul ei",
        b: "asigură pasul constant pe toată lungimea palei",
        c: "măreşte rezistenţa palelor elicei"
      },
      correctAnswer: "b"
    },
    {
      question: "68. Ce înţelegeţi prin raportul putere greutate?",
      answers: {
        a: "raportul dintre tracţiunea şi greutatea avionului",
        b: "raportul dintre greutatea echipajului şi puterea motorului",
        c: "raportul dintre greutatea motorului şi puterea acestuia"
      },
      correctAnswer: "a"
    },
    {
      question: "69. Într-un picaj cu maneta de gază în aceeaşi poziţie, ce va face turaţia motorului:",
      answers: {
        a: "va creşte iar viteza avionului va scădea",
        b: "va rămâne constantă indiferent de viteza avionului",
        c: "va creşte dacă se permite creşterea vitezei de zbor",
        d: "va descreşte atâta timp cât maneta de gaze rămâne neschimbată"
      },
      correctAnswer: "c"
    },
    {
      question: "70. Care din definiţiile de mai jos referitor la parametrii unei elicei sunt corecte?",
      answers: {
        a: "unghiul palei este unghiul dintre coarda profilului şi axul longitudinal al avionului",
        b: "viteza critică la vârful de pală este viteza la care decroşează fileul de aer de pe suprafaţa palei",
        c: "pasul geometric este distanţa teoretică parcursă de o elice la o rotaţie completă",
        d: "unghiul palei este unghiul dintre coarda profilului şi axa verticală a avionului"
      },
      correctAnswer: "c"
    },
    {
      question: "71. Aripa unui avion se angajează atunci când:",
      answers: {
        a: "viteza indicată este sub minim",
        b: "unghiul de atac critic a fost depăşit",
        c: "curgerea laminară de pe aripă devine turbulentă",
        d: "aripa este expusă unui factor de sarcină G prea mare"
      },
      correctAnswer: "b"
    },
    {
      question: "72. Un eleron poate fi compensat aerodinamic prin:",
      answers: {
        a: "realizând un unghi de bracare mai mare la eleronul care coboară",
        b: "ataşând o greutate în partea de jos şi puţin în faţa eleronului",
        c: "având balamalele eleronului în spatele bordului de atac al acestuia",
        d: "introducerea unor arcuri readucătoare pe circuitul cinematic al comenzii eleronului"
      },
      correctAnswer: "c"
    },
    {
      question: "73. Amplasarea flapsurilor la aripa avionului are rolul de:",
      answers: {
        a: "sa mărească portanţa, rezistenţa la înaintare şi viteză",
        b: "sa mărească portanţa, rezistenţa la înaintare şi concomitent reducerea vitezei de angajare",
        c: "sa mărească rezistenţa la înaintare, încărcătura pe aripa şi unghiul de angajare",
        d: "sa mărească portanţa, sa scadă rezistenţa la înaintare şi viteza de angajare"
      },
      correctAnswer: "b"
    },
    {
      question: "74. Care dintre următoarele organe asigură stabilitatea verticală a aeronavei?",
      answers: {
        a: "motorul",
        b: "aripa",
        c: "deriva",
        d: "stabilizatorul orizontal"
      },
      correctAnswer: "d"
    },
    {
      question: "75. Dacă viteza indicată la un avion creşte de la 50 la 100 km/h atunci rezistenţa la înaintare va creşte:",
      answers: {
        a: "de patru ori",
        b: "de şase ori",
        c: "de două ori",
        d: "de 3 ori"
      },
      correctAnswer: "a"
    },
    {
      question: "76. Când acţionaţi eleroanele în afara poziţiei neutre:",
      answers: {
        a: "eleronul care urcă cauzează o creştere a rezistenţei induse",
        b: "rezistenţa indusa rămâne aceeaşi, eleronul care urca cauzează o mica creştere a rezistentei la înaintare comparativ cu cel care coboară",
        c: "amândouă vor cauza o creştere a rezistenţei induse",
        d: "eleronul care coboare va cauza o creştere a rezistentei induse"
      },
      correctAnswer: "d"
    },
    {
      question: "77. Presiunea statica acţionează:",
      answers: {
        a: "paralel cu curgerea aerului",
        b: "paralel cu presiunea dinamică",
        c: "în toate direcţiile",
        d: "înspre suprafaţa Pământului"
      },
      correctAnswer: "c"
    },
    {
      question: "78. Dacă mărim unghiul de atac peste valorile unghiului de angajare:",
      answers: {
        a: "portanţa şi rezistenţa la înaintare scad",
        b: "portanţa va scădea şi rezistenţa la înaintare va creşte",
        c: "portanţa va creşte şi rezistenţa la înaintare va scădea",
        d: "portanţa şi rezistenţa la înaintare vor creşte"
      },
      correctAnswer: "b"
    },
    {
    question: "79. Unghiul de atac al unei elicei cu pas fix:",
    answers: {
    a: "este mai mic în decolare decât în zbor de croazieră",
    b: "este optim în zbor",
    c: "este optim în zbor de croazieră stabilizat",
    d: "scade odată cu scăderea vitezei la un regim de RPM constant"
    },
    correctAnswer: "c"
    },
    {
    question: "80. De ce unghiul de atac la o elice descreşte de la rădăcină la vârf?",
    answers: {
    a: "ca să compenseze schimbarea din secţiune groasă la rădăcină în secţiune subţire la vârf",
    b: "ca să mărească tracţiunea la rădăcină",
    c: "ca să compenseze viteza mare de la vârful palei",
    d: "pentru ca pe toată lungimea palei pasul geometric să fie acelaşi"
    },
    correctAnswer: "c"
    },
    {
    question: "81. La decolare, controlul pe direcţie a unui avion cu bechie va fi afectat de:",
    answers: {
    a: "efectul giroscopic şi efectul de tracţiune asimetrică al palelor",
    b: "cuplul reactiv al elicei şi efectul rotativ al fluxului de aer generat de elice",
    c: "ambele fenomene a) şi b)",
    d: "niciunul din fenomenele a) şi b)"
    },
    correctAnswer: "c"
    },
    {
    question: "82. În timpul rulajului pentru decolare, ce efect va avea cuplul reactiv al elicei când sensul de rotaţie este în sensul acelor de ceasornic (privit din cabină)?",
    answers: {
    a: "greutatea pe roata stângă descreşte iar pe roata dreaptă creşte",
    b: "greutatea pe roata stângă creşte iar pe roata dreaptă rămâne constantă",
    c: "greutatea pe roata stângă creşte iar pe roata dreaptă descreşte",
    d: "greutatea pe roata dreaptă creşte iar pe roate stângă descreşte"
    },
    correctAnswer: "c"
    },
    {
    question: "83. Odată cu accelerarea pentru decolare a unui avion cu elice constant speed:",
    answers: {
    a: "unghiul de atac al palelor va scădea iar turaţia RPM va rămâne constantă",
    b: "unghiul palelor creşte menţinând RPM-ul constant",
    c: "unghiul de atac al palelor rămâne constant şi RPM-ul creşte",
    d: "viteza periferică a vârfului de pală descreşte progresiv"
    },
    correctAnswer: "b"
    },
    {
    question: "84. Altimetrul:",
    answers: {
    a: "conţine o capsulă barometrică într-o carcasă conectată la o sursă de presiune statică care se contractă în timpul coborârii",
    b: "conţine o capsulă barometrică care se destinde în timpul coborârii",
    c: "constă într-un instrument cu carcasa sigilată care se conectează la o sursă de presiune statică",
    d: "conţine capsula parţial deschisă care se destinde în timpul coborârii"
    },
    correctAnswer: "a"
    },
    {
    question: "85. Dacă în timpul coborârii sursa de presiune statică se blochează, atunci:",
    answers: {
    a: "vitezometrul va indica mai mult iar altimetrul mai puţin",
    b: "vitezometrul va indica mai puţin iar altimetrul mai mult",
    c: "ambele instrumente vor indica mai mult",
    d: "ambele instrumente vor indica mai puţin"
    },
    correctAnswer: "c"
    },
    {
    question: "86. Dacă în timpul unei coborârii se blochează sursa de presiune statică, atunci variometrul va:",
    answers: {
    a: "continua să arate ultima indicaţie",
    b: "va indica urcare",
    c: "va indica coborâre",
    d: "va indica valoarea 0 în permanenţă"
    },
    correctAnswer: "d"
    },
    {
    question: "87. Profilul aerodinamic e conceput ca să producă portanţă rezultată din:",
    answers: {
    a: "depresiune pe intrados şi presiune pe extrados",
    b: "presiune pe intrados şi depresiune pe extrados",
    c: "vacuum dedesubtul aripii şi presiune mărită pe extrados",
    d: "presiune mărită pe bordul de atac şi depresiune pe bordul de fugă"
    },
    correctAnswer: "b"
    },
    {
    question: "88. Ce reprezintă ‘’S’’ şi ‘’q’’(ro) în ecuaţia portanţei?",
    answers: {
    a: "presiunea statică şi coarda medie aerodinamică",
    b: "anvergura aripii şi presiunea dinamică",
    c: "suprafaţa aripii şi presiunea dinamică",
    d: "suprafaţa aripii şi densitatea aerului"
    },
    correctAnswer: "d"
    },
    {
    question: "91. Se numeşte bord de atac:",
    answers: {
    a: "partea din faţă a celulei",
    b: "partea din spate a aripii",
    c: "partea din faţă a aripii"
    },
    correctAnswer: "c"
    },
    {
    question: "92. Se numeşte bord de scurgere/fugă:",
    answers: {
    a: "partea din spate a celulei",
    b: "partea din spate a aripii",
    c: "partea din faţă a aripii"
    },
    correctAnswer: "b"
    },
    {
    question: "93. Extradosul aripii este:",
    answers: {
    a: "partea din faţă a aripii",
    b: "partea superioară a aripii",
    c: "partea inferioară a aripii"
    },
    correctAnswer: "b"
    },
    {
    question: "94. Eleroanele sunt:",
    answers: {
    a: "două suprafeţe mobile aflate pe bordul de scurgere al aripii în apropierea extremităţilor acesteia",
    b: "constituite din ansamblul suprafeţelor verticale situate în parte posterioară al ULM-ului",
    c: "fixate pe bordul de scurgere al aripii aproape de centrul aparatului"
    },
    correctAnswer: "a"
    },
    {
    question: "95. Profundorul este o suprafaţă:",
    answers: {
    a: "mobilă şi în general situată în partea posterioară a unui ULM",
    b: "fixă şi orizontală situată în partea posterioară a unui ULM",
    c: "mobilă fixată pe bordul de scurgere al aripii"
    },
    correctAnswer: "a"
    },
    {
    question: "96. Pe un ULM multi-axe, comanda ce permite acţionarea profundorului este:",
    answers: {
    a: "manşa, deplasând-o în lateral",
    b: "manşa, deplasând-o faţă – spate",
    c: "palonierul"
    },
    correctAnswer: "b"
    },
    {
    question: "97. Apăsarea palonierului determină:",
    answers: {
    a: "bracarea direcţiei",
    b: "bracarea eleronului drept în sus",
    c: "bracarea profundorului"
    },
    correctAnswer: "a"
    },
    {
    question: "98. Asieta este unghiul cuprins între:",
    answers: {
    a: "traiectoria şi axa longitudinală a ULM-ului",
    b: "traiectoria şi coarda profilului",
    c: "axa longitudinală şi orizontală"
    },
    correctAnswer: "c"
    },
    {
    question: "99. Înclinarea este unghiul cuprins între:",
    answers: {
    a: "perpendiculara pe planul de simetrie şi orizontală",
    b: "perpendiculara pe planul de simetrie şi verticală",
    c: "traiectoria şi axa longitudinală"
    },
    correctAnswer: "b"
    },
    {
    question: "100. În schema de mai înainte, A reprezintă:",
    answers: {
    a: "anvergura",
    b: "coarda",
    c: "lungimea"
    },
    correctAnswer: "a"
    },
    {
    question: "101. Rodajul motorului:",
    answers: {
    a: "nu este indispensabilă pentru motoarele în doi timpi",
    b: "se face în acelaşi mod pentru toate motoarele",
    c: "este indispensabil să se facă urmând recomandările constructorului"
    },
    correctAnswer: "c"
    },
    {
    question: "102. Reglarea calităţii carburaţiei:",
    answers: {
    a: "permite doar diminuarea consumului de carburant",
    b: "este necesară pentru obţinerea puterii maxime a motorului",
    c: "nu influenţează performanţele unui ULM"
    },
    correctAnswer: "b"
    },
    {
    question: "103. Bujiile de aprindere:",
    answers: {
    a: "nu au caracteristici particulare",
    b: "au toate aceleaşi dimensiuni",
    c: "nu pot fi schimbate între ele tot timpul chiar dacă au aceleaşi dimensiuni"
    },
    correctAnswer: "c"
    },
    {
    question: "104. Întreţinerea unui ULM:",
    answers: {
    a: "nu se face decât prin verificări periodice",
    b: "nu poate fi efectuată de pilot",
    c: "se efectuează prin verificări periodice şi/ sau oricând necesitatea se face resimţită"
    },
    correctAnswer: "c"
    },
    {
    question: "105. Operaţiile de întreţinere:",
    answers: {
    a: "nu privesc motorul",
    b: "se efectuează pe întreaga aeronavă",
    c: "se efectuează doar asupra pieselor care se strică"
    },
    correctAnswer: "b"
    },
    {
    question: "106. Vibraţiile:",
    answers: {
    a: "nu sunt produse de motor",
    b: "pot fi amplificate de fenomenele de rezonanţă",
    c: "nu dăunează structurii"
    },
    correctAnswer: "b"
    },
    {
    question: "107. Toba de eşapament:",
    answers: {
    a: "nu este supusă vibraţiilor graţie fixării sale",
    b: "trebuie verificată frecvent",
    c: "nu poate provoca pagube în timpul pierderii"
    },
    correctAnswer: "b"
    },
    {
    question: "108. Dacă o piesă a fost supusă unui efort ce a depăşit limita de elasticitate:",
    answers: {
    a: "trebuie schimbată",
    b: "trebuie reparată",
    c: "putem continua să zburăm aşa"
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