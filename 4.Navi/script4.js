//Quiz data
const quizData=[
  {
      question: "12. Zborul după compasul magnetic direct se face pe:",
      answers: {
        a: "ortodroma",
        b: "LDR",
        c: "Loxodroma"
      },
      correctAnswer: "c"
    },
    {
      question: "13. Prin CC se înţelege:",
      answers: {
        a: "unghiul dintre nordul compas şi axa longitudinală a aeronavei partea din faţa",
        b: "unghiul dintre nordul adevărat şi axa aeronavei",
        c: "unghiul dintre nordul magnetic şi axa aeronavei"
      },
      correctAnswer: "a"
    },
    {
      question: "14. Unghiul dintre LDO şi LDR se numeşte:",
      answers: {
        a: "ALU",
        b: "VPA",
        c: "ALL"
      },
      correctAnswer: "a"
    },
    {
      question: "16. Declinaţia magnetică este:",
      answers: {
        a: "unghiul dintre CC şi NM",
        b: "distanţa dintre NM şi NA",
        c: "unghiul dintre NM şi NG"
      },
      correctAnswer: "c"
    },
    {
      question: "17. Deviaţia compas este:",
      answers: {
        a: "unghiul dintre CC şi LDO",
        b: "unghiul dintre NC şi NM",
        c: "unghiul dintre NC şi NA"
      },
      correctAnswer: "b"
    },
    {
      question: "27. Pe hărţile de navigaţie VFR linia curbă întreruptă de culoare mov reprezintă:",
      answers: {
        a: "deviaţia magnetică",
        b: "declinaţia magnetică",
        c: "declinaţie compas"
      },
      correctAnswer: "b"
    },
    {
      question: "28. Deriva reprezintă unghiul format:",
      answers: {
        a: "între direcţia vântului şi deplasarea pe sol a avionului",
        b: "între axul longitudinal partea din faţă şi linia deplasării pe sol",
        c: "între axul longitudinal şi direcţia vântului"
      },
      correctAnswer: "b"
    },
    {
      question: "29. Viteza de zbor este 120 km /h CAS, vântul 4 m/s din sud, iar direcţia de zbor este 359º, care este viteza la sol ?",
      answers: {
        a: "139 km/h",
        b: "134 km/h",
        c: "130 km/h"
      },
      correctAnswer: "b"
    },
    {
      question: "30. Pe o hartă 1:500 000 linia neagra între localităţi reprezintă:",
      answers: {
        a: "drum de ţară",
        b: "şosea naţională",
        c: "cale ferată"
      },
      correctAnswer: "c"
    },
    {
      question: "31. Unghiul format între nordul geografic şi nordul magnetic se numeşte:",
      answers: {
        a: "declinaţia magnetică",
        b: "derivă",
        c: "abatere magnetică"
      },
      correctAnswer: "a"
    },
    {
      question: "32. La reperul de control pe rută constataţi că aţi ajuns mai târziu cu 10 min, motivul este:",
      answers: {
        a: "puterea motorului a scăzut",
        b: "direcţia vântului s-a schimbat",
        c: "vântul şi-a sporit intensitatea considerabil"
      },
      correctAnswer: "c"
    },
    {
      question: "33. Direcţia vântului ca sens indică:",
      answers: {
        a: "din ce direcţie bate vântul",
        b: "către ce direcţie bate vântul",
        c: "sensul se indică prin notarea alături de valoare a direcţiilor N,E,V,S."
      },
      correctAnswer: "a"
    },
    {
      question: "34. Altitudinea se măsoară faţă de:",
      answers: {
        a: "nivelul mării",
        b: "sol",
        c: "cel mai jos punct de pe glob."
      },
      correctAnswer: "a"
    },
    {
      question: "35. Condiţiile atmosferei standard sunt:",
      answers: {
        a: "15º, 760 mm Hg",
        b: "25º,1013 Hpa",
        c: "30º,675 mm HG"
      },
      correctAnswer: "a"
    },
    {
      question: "36. Pentru estimarea timpului necesar de deplasare între două puncte sunt minim necesare următoarele elemente:",
      answers: {
        a: "viteza proprie adevărată, viteza vântului şi viteza la sol",
        b: "viteza vântului, direcţia vântului, viteza proprie adevărată",
        c: "viteza la sol, viteza vântului"
      },
      correctAnswer: "b"
    },
    {
      question: "37. Capul compas reprezintă:",
      answers: {
        a: "direcţia indicată de busolă faţă de nordul magnetic;",
        b: "unghiul format de direcţia nordului compas şi axul longitudinal al aeronavei partea din faţă",
        c: "unghiul format de direcţia nordului magnetic şi axul longitudinal al aeronavei partea din faţă."
      },
      correctAnswer: "b"
    },
    {
      question: "38. Amplasarea unei busole la bordul unei aeronave determină anumite corecţii ce trebuie făcute valorilor pe care aceasta le indică. Cum se numeşte unghiul cu care se face corecţia valorilor indicate?",
      answers: {
        a: "deviaţie compas",
        b: "declinaţie compas",
        c: "declinaţie magnetică"
      },
      correctAnswer: "a"
    },
    {
      question: "39. Înălţimea de zbor este :",
      answers: {
        a: "distanţa pe verticală măsurată de la nivelul mării până la aeronavă",
        b: "distanţa pe verticală de la sol până la aeronavă",
        c: "înălţimea de zbor se mai numeşte şi altitudine şi se măsoară de la nivelul corespunzător presiunii standard de 760 mm Hg şi până la aeronavă"
      },
      correctAnswer: "b"
    },
    {
      question: "40. Direcţia vântului se măsoară faţă de:",
      answers: {
        a: "nordul geografic",
        b: "nordul magnetic",
        c: "nordul compas"
      },
      correctAnswer: "a"
    },
    {
      question: "41. Nivelul de zbor este:",
      answers: {
        a: "distanţa pe verticală măsurată în sute de picioare între nivelul corespunzător presiunii STD=1013mb Hg şi aeronavă",
        b: "nivelul la care se află aeronava",
        c: "distanţa măsurată în metri de la nivelul mării până la aeronavă"
      },
      correctAnswer: "a"
    },
    {
      question: "42. Dacă vă deplasaţi cu o aeronava către E şi vântul bate din N adică perfect din 90 de grade faţă de direcţia în care vă deplasaţi va fi modificată viteza faţă de sol?",
      answers: {
        a: "da",
        b: "nu",
        c: "depinde de tăria vântului"
      },
      correctAnswer: "a"
    },
    {
      question: "43. În aviaţie, viteza vântului se măsoară în:",
      answers: {
        a: "m/s",
        b: "km/h",
        c: "kts",
        d: "toate"
      },
      correctAnswer: "d"
    },
    {
      question: "44. La decolare am “calat” scala presiunilor pe QFE şi acele altimetrului pe 0”. Daca nu am umblat în timpul zborului la altimetru, la aterizare pe alt aerodrom acesta va arata:",
      answers: {
        a: "cota aerodromului de sosire",
        b: "diferenţa între QFE plecare şi QFE sosire",
        c: "diferenţa între QNH sosire şi QFE plecare"
      },
      correctAnswer: "b"
    },
    {
      question: "45. Se numeşte “cap compas”:",
      answers: {
        a: "unghiul format între direcţia de referinţa (NA, NM, NC) şi traiectul real urmat",
        b: "unghiul format între direcţia de referinţa (NA, NM, NC) şi axa longitudinală a aeronavei (partea din faţă)",
        c: "unghiul format între meridianul locului şi LDR"
      },
      correctAnswer: "b"
    },
    {
      question: "46. Direcţia vântului (DV) este:",
      answers: {
        a: "unghiul format între meridianul geografic şi vectorul vânt (la aterizare)",
        b: "unghiul format între vectorul vânt şi meridianul geografic",
        c: "unghiul format între NM şi vectorul vânt (la aterizare)"
      },
      correctAnswer: "c"
    },
    {
      question: "47. Direcţia vântului formează cu LDO un unghi numit:",
      answers: {
        a: "UVD (unghiul vântului cu drumul)  şi se măsoară de la vectorul vânt la LDO în sens orar (semn +)",
        b: "UVD şi se măsoară de la vectorul vânt la LDO în sens invers orar (semn -)",
        c: "UDV (unchiul drumului cu vântul) şi se măsoară de la LDO la vectorul vânt în sens orar (semn +) şi antiorar (semn -)"
      },
      correctAnswer: "c"
    },
    {
      question: "48. Semnul derivei este pozitiv când:",
      answers: {
        a: "vântul “bate“ din stânga",
        b: "vântul “bate” din dreapta",
        c: "se măsoară de la ALA la LDR"
      },
      correctAnswer: "a"
    },
    {
      question: "49. Triunghiul de navigaţie (al vitezelor)",
      answers: {
        a: "este o construcţie grafică cu rolul de a vizualiza toate direcţiile de referinţă, traiectul, unghiurile (drumuri-capuri) şi de a stabili astfel corect poziţia aeronavei într-un moment oarecare",
        b: "are rolul de a permite (prin compunerea vectorilor) numai determinarea vectorului VPA",
        c: "are rolul de a permite (prin compunerea vectorilor) numai determinarea unghiului Dv"
      },
      correctAnswer: "a"
    },
    {
      question: "50. Care este relaţia de calcul între DA şi DM şi care este valoarea DM dacă DA este 70° şi DM este 5°?",
      answers: {
        a: "DM = DA+(+/-Dm) = 65°",
        b: "DM = DA –(+/-DM) = 65°",
        c: "DM = DA –Dm = 65°"
      },
      correctAnswer: "b"
    },
    {
      question: "51. Abaterea laterală unghiulară (notata ALU) este:",
      answers: {
        a: "unghiul format între direcţia celui mai apropiat meridian geografic şi LDO",
        b: "lungimea perpendicularei dusă din punctul unde se află aeronava pe LDR la LDO",
        c: "unghiul format între linia drumului obligat LDO şi linia drumului real LDR"
      },
      correctAnswer: "c"
    },
    {
      question: "52. Ce este loxodroma?",
      answers: {
        a: "arcul mic din cercul mare care trece prin punctul de plecare PIT şi cel de sosire PFT al unui traiect de pe suprafaţa pământului",
        b: "linia de poziţie care intersectează meridianele sub acelaşi unghi",
        c: "linia de poziţie care intersectează paralele sub acelaşi unghi"
      },
      correctAnswer: "c"
    },
    {
      question: "53. În navigaţia aeriana ce semnifică abrevierea PFT?",
      answers: {
        a: "punctul de aplicaţie al Forţei de Tracţiune",
        b: "punctul Final al Traiectului",
        c: "nu se foloseşte această abreviere"
      },
      correctAnswer: "b"
    },
    {
      question: "54. Căile aeriene interne ale României au o lăţime de:",
      answers: {
        a: "în funcţie de nivelul de zbor",
        b: "3 km stânga/dreapta faţă de axa lor",
        c: "5 km stânga/dreapta faţă de axa lor"
      },
      correctAnswer: "c"
    },
    {
      question: "55. Valoarea ZZZZ din Planul de Zbor se utilizează când:",
      answers: {
        a: "viteza de zbor este mai mare de 40 km/h",
        b: "nu există codificare ICAO pentru valoarea respectivă",
        c: "sunt necesare informaţii suplimentare"
      },
      correctAnswer: "b"
    },
    {
      question: "56. Drumul adevărat (DA) reprezintă:",
      answers: {
        a: "drumul format de direcţia nordului meridianului geografic şi traiect",
        b: "drumul format de direcţia nord a meridianului magnetic şi traiect",
        c: "drumul format de direcţia nord indicată de compas şi traiect"
      },
      correctAnswer: "a"
    },
    {
      question: "57. Hidrografia înfăţişează pe hartă:",
      answers: {
        a: "zonele cu umiditate mai mare 50%",
        b: "cursurile şi suprafeţele de apă",
        c: "totalitatea obstacolelor hidrologice de pe teren"
      },
      correctAnswer: "b"
    },
    {
      question: "58. Înălţimea se defineşte ca fiind:",
      answers: {
        a: "distanţa pe verticală a unui punct în raport cu o suprafaţă de referinţă",
        b: "distanţa pe verticală a unui punct în raport cu suprafaţa mării",
        c: "distanţa pe verticală a unui punct în raport cu suprafaţa izobară de 1000 mb"
      },
      correctAnswer: "a"
    },
    {
      question: "59. Elementele de navigaţie care determină direcţia zborului sunt:",
      answers: {
        a: "drumul, capul de zbor",
        b: "abaterea laterală unghiulară",
        c: "deriva aeronavei"
      },
      correctAnswer: "a"
    },
    {
      question: "60. Unghiul de deriva se datorează:",
      answers: {
        a: "fluctuaţiilor presiunii atmosferice la diferite nivele de zbor",
        b: "tracţiunii variabile a motorului în timpul deplasării pe traiect ",
        c: "deplasării masei de aer în care zboară avionul  "
      },
      correctAnswer: "c"
    },
    {
  question: "61. În Planul de Zbor, câmpul numărul 10 “EQUIPMENT” completat cu valorile “S/N” reprezintă?",
      answers: {
        a: "standard / Fără Transponder",
        b: "situaţie Normală",
        c: "stare de Necesitate"
      },
      correctAnswer: "a"
    },
    {
      question: "62. Declinaţia magnetică este:",
      answers: {
        a: "unghiul dintre CC şi NM",
        b: "distanţa dintre NM şi NA",
        c: "unghiul dintre NM şi NG"
      },
      correctAnswer: "c"
    },
    {
      question: "63. QFE reprezintă:",
      answers: {
        a: "presiunea la pragul pistei",
        b: "presiunea la nivelul mării",
        c: "presiunea standard"
      },
      correctAnswer: "a"
    },
    {
      question: "64. Distanţa pe verticală dintre două planuri a căror diferenţă de presiune este egală cu un mb (h/Pa):",
      answers: {
        a: "nivel",
        b: "altitudine",
        c: "treaptă barică"
      },
      correctAnswer: "c"
    },
    {
      question: "65. Linia de poziţie care intersectează meridianele sub acelaşi unghi constant, se numeşte:",
      answers: {
        a: "ortodroma",
        b: "loxodroma",
        c: "secanta"
      },
      correctAnswer: "b"
    },
    {
      question: "66. Dacă ruta se află în dreapta axei avionului, deriva va avea valori:",
      answers: {
        a: "pozitive",
        b: "negative",
        c: "atât a. cat şi b."
      },
      correctAnswer: "a"
    },
    {
      question: "67. Mila marină (NM) reprezintă:",
      answers: {
        a: "1562 m",
        b: "760 m",
        c: "1852 m"
      },
      correctAnswer: "c"
    },
    {
      question: "68. La sosirea pe aerodromul de destinaţie altimetrul se calează pe:",
      answers: {
        a: "QNH",
        b: "QFE",
        c: "QNE"
      },
      correctAnswer: "b"
    },
    {
      question: "69. Drumul se măsoară în sens:",
      answers: {
        a: "orar",
        b: "antiorar",
        c: "nu contează"
      },
      correctAnswer: "a"
    },
    {
      question: "70. În navigaţia aeriana ca ştiinţa aplicată, Pământul se considera a fi:",
      answers: {
        a: "o sfera",
        b: "un 'elipsoid de rotaţie' (obţinut prin rotirea unei elipse in jurul axei mici)",
        c: "un corp matematic neregulat"
      },
      correctAnswer: "b"
    },
    {
      question: "71. Axa terestră sau 'de rotaţie' se considera a fi:",
      answers: {
        a: "diametrul în jurul căruia se roteşte Pământul în 24 ore",
        b: "linia convenţionala care 'trece' prin 'centrul' Pământului şi faţă de care acesta se roteşte",
        c: "semiaxa mică a secţiunii elipsoidului de rotaţie"
      },
      correctAnswer: "a"
    },
    {
      question: "72. Polii tereştri (geografici) se considera a fi:",
      answers: {
        a: "'punctele' în care axa terestră intersectează suprafaţa globului terestru",
        b: "'punctele' determinate prin intersectarea semiaxei mici a Pământului cu suprafaţa sa",
        c: "'locurile' din care daca ar fi privita rotaţia Pământului, aceasta ar apare în sens antiorar, respectiv orar"
      },
      correctAnswer: "a"
    },
    {
      question: "73. Meridian se consideră a fi:",
      answers: {
        a: "o linie convenţională care 'uneşte' polii tereştri",
        b: "un cerc mare determinat pe suprafaţa terestră prin intersectarea Pământului cu un plan care conţine punctul de origine al sferei",
        c: "oricare semicerc determinat pe suprafaţa terestra prin intersectarea Pământului cu un plan care 'conţine' axa terestră"
      },
      correctAnswer: "c"
    },
    {
      question: "74. Antemeridianul se considera a fi:",
      answers: {
        a: "semicercul opus al oricărui meridian",
        b: "jumătatea unui cerc mic",
        c: "oricare meridian"
      },
      correctAnswer: "a"
    },
    {
      question: "75. Numărul maxim al meridianelor este:",
      answers: {
        a: "infinit (în realitate se poate 'trasa' cate un meridian care sa poată trece prin fiecare punct de pe suprafaţa terestra)",
        b: "360",
        c: "180"
      },
      correctAnswer: "a"
    },
    {
      question: "76. Paralela se consideră a fi:",
      answers: {
        a: "oricare cerc determinat pe suprafaţa terestra de un plan care 'trece' prin 'originea' elipsoidului de rotaţie",
        b: "cercul mare determinat pe suprafaţa terestra de un plan care 'trece' prin 'originea' elipsoidului de rotaţie şi este perpendicular pe axa terestra",
        c: "oricare cerc determinat de intersecţia Pământului cu planuri perpendiculare pe axa terestră"
      },
      correctAnswer: "c"
    },
    {
      question: "77. Numărul (maximal) al paralelelor este:",
      answers: {
        a: "360",
        b: "180",
        c: "infinit (putându-se trasa câte o paralela care să treacă prin orice punct de pe suprafaţa globului terestru)"
      },
      correctAnswer: "c"
    },
    {
      question: "78. Ecuatorul se consideră a fi:",
      answers: {
        a: "cea mai mare paralela",
        b: "oricare cerc determinat pe suprafaţa terestră",
        c: "semicercul care divide globul terestru în emisfera nordică şi emisfera sudică"
      },
      correctAnswer: "a"
    },
    {
      question: "79. Coordonatele geografice sunt:",
      answers: {
        a: "latitudinea şi longitudinea",
        b: "fiecare dintre cele doua numere (valori) care precizează poziţia unui punct în raport cu un sistem de referinţă",
        c: "meridian, paralelă şi azimut"
      },
      correctAnswer: "a"
    },
    {
      question: "80. Latitudinea unui punct oarecare este:",
      answers: {
        a: "valoarea unghiului (cercului de meridian) dintre planul ecuatorului şi verticala punctului",
        b: "valoarea unghiului (arcului de ecuator) dintre planul meridianului '0' şi planul meridianului punctului",
        c: "valoarea distantei (în Km sau NM) dintre planul ecuatorului şi planul paralelei punctului respectiv"
      },
      correctAnswer: "a"
    },
    {
      question: "81. Latitudinea se măsoară în:",
      answers: {
        a: "km sau NM",
        b: "grade sexagesimale",
        c: "grade centezimale"
      },
      correctAnswer: "b"
    },
    {
      question: "82. Valorile maxime ale latitudinii pot varia între:",
      answers: {
        a: "0 - 90 º",
        b: "0 - 180º",
        c: "0 - 360º"
      },
      correctAnswer: "a"
    },
    {
      question: "83. Latitudinea (de) +90o corespunde:",
      answers: {
        a: "punctului cardinal E daca deplasarea are loc pe ecuator",
        b: "meridianului cu numărul 90",
        c: "polului nord"
      },
      correctAnswer: "c"
    },
    {
      question: "84. Punctul care are latitudinea (de) 0o este:",
      answers: {
        a: "polul nord",
        b: "pe ecuator",
        c: "polul sud"
      },
      correctAnswer: "b"
    },
    {
      question: "85. Toate punctele de pe aceeaşi paralelă:",
      answers: {
        a: "au aceeaşi latitudine",
        b: "au latitudine diferită",
        c: "se afla la aceeaşi distantă de meridianul '0'"
      },
      correctAnswer: "a"
    },
    {
      question: "86. Longitudinea unui punct oarecare este:",
      answers: {
        a: "valoarea unghiului (arcului de meridian) cuprins între planul ecuatorului şi verticala punctului",
        b: "valoarea unghiului (arcului de ecuator) cuprins între planul meridianului '0' şi planul meridianului punctului",
        c: "valoarea distanţei (în Km sau NM) între planul ecuatorului şi planul paralelei punctului respectiv"
      },
      correctAnswer: "b"
    },
    {
      question: "87. Longitudinea unui punct se măsoară în:",
      answers: {
        a: "km sau NM",
        b: "grade centezimale",
        c: "grade sexagesimale"
      },
      correctAnswer: "c"
    },
    {
      question: "88. Valorile maxime ale longitudinii pot varia între:",
      answers: {
        a: "0 - 90˚",
        b: "0 - 180˚",
        c: "0 - 360˚"
      },
      correctAnswer: "b"
    },
    {
      question: "89. Toate punctele de pe acelaşi meridian au:",
      answers: {
        a: "aceeaşi longitudine",
        b: "aceeaşi latitudine",
        c: "longitudini diferite"
      },
      correctAnswer: "a"
    },
    {
      question: "90. Toate punctele de pe meridianul Greenwich au:",
      answers: {
        a: "latitudine = 0°(360°)",
        b: "longitudine =  0°",
        c: "latitudine = 180°"
      },
      correctAnswer: "b"
    },
    {
      question: "91. Punctul care are longitudinea (de) 180o este:",
      answers: {
        a: "pe meridianul '0'",
        b: "numai pe ecuator",
        c: "pe polul nord"
      },
      correctAnswer: "c"
    },
    {
      question: "92. Punctul care are longitudinea (de) 0o este:",
      answers: {
        a: "pe meridianul Greenwich",
        b: "numai pe ecuator",
        c: "numai la polul sud"
      },
      correctAnswer: "a"
    },
    {
      question: "93. Latitudinea şi longitudinea constituie:",
      answers: {
        a: "coordonatele polare ale unui punct",
        b: "coordonatele geografice ale unui punct",
        c: "linia de poziţie a unui punct"
      },
      correctAnswer: "b"
    },
    {
      question: "94. NM (nautical mile) reprezintă:",
      answers: {
        a: "lungimea arcului de 1' al meridianului terestru",
        b: "lungimea arcului de 1' al ecuatorului terestru",
        c: "a 40.000.000-a parte a circumferinţei terestre"
      },
      correctAnswer: "a"
    },
  {
      question: "96. Declinaţia magnetică variază odată cu",
      answers: {
        a: "altitudinea",
        b: "ora zilei",
        c: "locul"
      },
      correctAnswer: "c"
    },
    {
      question: "97. Este ora 18. Zburaţi în linie dreaptă, cu soarele din faţă. Compasul vă indică 080º. Deduceţi că:",
      answers: {
        a: "este exact",
        b: "este fals",
        c: "nu putem deduce nimic"
      },
      correctAnswer: "b"
    },
    {
      question: "98. Pentru a vă modifica capul compas trebuie:",
      answers: {
        a: "să urmăriţi compasul pe timpul virajului",
        b: "să luaţi un reper la sol înainte de intrarea în viraj în noua direcţie de luat",
        c: "să opriţi virajul în momentul în care capul ales trece în faţa liniei compasului"
      },
      correctAnswer: "b"
    },
    {
      question: "99. Regimul de zbor IFR este:",
      answers: {
        a: "rezervat aeronavelor ce dispun de anumite echipamente speciale",
        b: "regimul dvs. de zbor dacă evoluaţi în condiţii de vizibilitate proastă",
        c: "aplicabil doar avioanelor care zboară peste nivelul de zbor 196"
      },
      correctAnswer: "a"
    },
    {
      question: "100. Regulile de zbor premise pentru aeronavele ULM sunt:",
      answers: {
        a: "fie regulile IFR, fie cele VFR, în funcţie de condiţiile de vizibilitate",
        b: "exclusiv regulile VFR",
        c: "exclusiv regulile IFR"
      },
      correctAnswer: "b"
    },
    {
      question: "101. Baza norilor este la 1500 m  deasupra terenului. Pentru a respecta condiţiile meteo minimale de zbor la vedere, nu urcaţi la o înălţime superioară la:",
      answers: {
        a: "1500 m",
        b: "900 m",
        c: "1200 m"
      },
      correctAnswer: "c"
    },
    {
      question: "102. Exceptând obstacolele artificiale şi persoanele, înălţimea minimă de zbor (de siguranţă) este de:",
      answers: {
        a: "50 m (170 ft)",
        b: "150 m (500 ft)",
        c: "300 m (1000 ft)"
      },
      correctAnswer: "b"
    },
    {
      question: "103.  FIR este:",
      answers: {
        a: "o regiune de informare a zborului",
        b: "un spaţiu aerian controlat",
        c: "un spaţiu aerian asociat unui aerodrom"
      },
      correctAnswer: "a"
    },
    {
      question: "104. Pătrunderea întru-un spaţiu aerian de clasă C este supusă autorizărilor ATC date de către unitatea de trafic aerian care are în responsabilitate acest spaţiu:",
      answers: {
        a: "adevărat",
        b: "fals",
        c: "doar pentru VFR",
        d: "nu ştiu"
      },
      correctAnswer: "a"
    },
    {
      question: "105. În cursul pregătirii unui zbor, constataţi că trebuie să traversaţi un spaţiu aerian cu regim special, semnalat cu D 573. Deduceţi imediat că este o zonă:",
      answers: {
        a: "interzisă",
        b: "periculoasă",
        c: "reglementată"
      },
      correctAnswer: "b"
    },
    {
      question: "106. Zonele interzise sunt semnalate pe hartă prin litera:",
      answers: {
        a: "D",
        b: "R",
        c: "P"
      },
      correctAnswer: "c"
    },
    {
      question: "107. TMA şi AWY sunt spaţii aeriene controlate a căror utilizare este:",
      answers: {
        a: "rezervată zborului IFR",
        b: "interzis pentru aeronavele ULM fără autorizaţie specială",
        c: "rezervată zborului VFR"
      },
      correctAnswer: "a"
    },
    {
      question: "108. Nivelul de zbor 55, corespunde cu:",
      answers: {
        a: "o altitudine de 5500 m",
        b: "o altitudine de 5500 ft",
        c: "5500 ft citiţi pe un altimetru fixat la 1013,2 mb"
      },
      correctAnswer: "c"
    },
  {
      question: "111. Este ora 18. Zburaţi în linie dreaptă, cu faţa în soare. Compasul vă indică 080º. Deduceţi că:",
      answers: {
        a: "este exact",
        b: "este fals",
        c: "nu putem deduce nimic"
      },
      correctAnswer: "b"
    },
    {
      question: "112. Indicaţia 3 pe roza compasului corespunde cu:",
      answers: {
        a: "003º",
        b: "030º",
        c: "300º"
      },
      correctAnswer: "b"
    },
    {
      question: "113. Survolul unei zone/aşezări dens populate se efectuează numai la o înălţime minimă reglementată:",
      answers: {
        a: "adevărat",
        b: "survolul este interzis"
      },
      correctAnswer: "a"
    },
    {
      question: "114. Până la ce nivel de zbor sunt autorizate ULM-urile să urce?",
      answers: {
        a: "4 000 m",
        b: "nivel de zbor 195 (5959 m pe un altimetru fixat la 1013mb)",
        c: "nu depinde decât de limitele fizice ale pilotului, care ar trebuii în prealabil să îşi evalueze limitele în cheson de decompresie"
      },
      correctAnswer: "a"
    },
    {
      question: "115. TMA şi AWY sunt spaţii aeriene controlate a cărui utilizare este:",
      answers: {
        a: "rezervată zborului IFR",
        b: "interzis pentru ULM fără autorizaţie specială",
        c: "rezervată zborului VFR"
      },
      correctAnswer: "a"
    },
    {
      question: "116. Nivelul de zbor 55, corespunde cu:",
      answers: {
        a: "altitudine de 5500 m",
        b: "altitudine de 5 500 ft",
        c: "5 500 ft citiţi pe un altimetru fixat la 1013,2 mb"
      },
      correctAnswer: "c"
    },
    {
      question: "117. Atunci când aveţi un cap de 030º afişat pe compas, fără vânt, ruta dv. reală este sensibil orientată spre:",
      answers: {
        a: "vest",
        b: "nord-vest",
        c: "est"
      },
      correctAnswer: "c"
    },
    {
      question: "118. Pe o hartă aeronautică scara 1:500000 ce distanţă reală corespunde unei distanţe de 10 cm pe hartă?",
      answers: {
        a: "25 km",
        b: "50 km",
        c: "75 km"
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