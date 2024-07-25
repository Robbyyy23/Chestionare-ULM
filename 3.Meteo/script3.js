//Quiz Data
const quizData=[
    
        {
          question: "6. Prin CAVOK se înţelege:",
          answers: {
            a: "vizibilitate min. 10 km, baza norilor min. 1,5 km, fără fenomene meteo semnificative",
            b: "vizibilitate min. 10 km, cer senin",
            c: "vizibilitate min. 5 km, plafon la minim 500m, fără ploaie sau ninsoare"
          },
          correctAnswer: "a"
        },
        {
          question: "7. Când temperatura aerului este identică cu temperatura de rouă:",
          answers: {
            a: "se depune roua",
            b: "apare ceaţa",
            c: "începe ploaia"
          },
          correctAnswer: "b"
        },
        {
          question: "8. În condiţii unui vânt de faţă, exceptând orice eroare instrumentală, ce indică vitezometrul? O viteză:",
          answers: {
            a: "egală cu viteza faţă de sol",
            b: "inferioară vitezei faţă de sol",
            c: "superioară vitezei faţă de sol"
          },
          correctAnswer: "c"
        },
        {
          question: "10. Când zburaţi de la o zonă cu aer rece spre o zona cu aer cald cum va fi înălţimea indicată de altimetru fată de cea reală (presupunem că menţinem acelaşi nivel de zbor)?",
          answers: {
            a: "mai mare",
            b: "mai mică",
            c: "identică"
          },
          correctAnswer: "a"
        },
        {
          question: "11. Prin ce mod se încălzeşte atmosfera?",
          answers: {
            a: "prin radiaţie",
            b: "prin convecţie",
            c: "prin unde calorice de la soare"
          },
          correctAnswer: "b"
        },
      
        {
            question: "12. Pâcla este",
            answers: {
              a: "o suspensie de particule solide în aer umed în proces de evaporare",
              b: "o suspensie de particule solide în aer antrenate de vânt",
              c: "o degajare de praf antrenat de curenţii termici ascendenţi"
            },
            correctAnswer: "a"
          },
          {
            question: "14. Condiţiile cele mai grele de zbor în prezenţa undelor orografice se întâlnesc",
            answers: {
              a: "în partea de sub vânt a obstacolului orografic",
              b: "în faţa obstacolului orografic, pe direcţia vântului",
              c: "la cca. 1000 m deasupra vârfului munţilor"
            },
            correctAnswer: "a"
          },
          {
            question: "16. Gradientul vântului la aterizare:",
            answers: {
              a: "nu depinde de starea suprafeţei solului",
              b: "nu influenţează incidenţa",
              c: "depinde de forţa vântului",
              d: "depinde de starea suprafeţei"
            },
            correctAnswer: "d"
          },
          {
            question: "17. Temperatura minimă şi maximă a zilei se atinge",
            answers: {
              a: "la ora locală 05.00 şi ora locală 14.00",
              b: "la 1 ora după răsăritul soarelui şi la 2 ore după trecerea soarelui de meridianul local",
              c: "depinde de anotimp şi zona geografică"
            },
            correctAnswer: "b"
          },
          {
            question: "20. Factorii care pot conduce la apariţia givrajului carburatoarelor în zbor, conf. diagramei de givraj, sunt:",
            answers: {
              a: "umiditatea atmosferică, temperatura atmosferică, temperatura punctului de rouă",
              b: "umiditatea atmosferica, temperatura atmosferica, FL, IAS",
              c: "temperatura atmosferică, IAS, FL"
            },
            correctAnswer: "a"
          },
          {
            question: "22. Cum se numeşte stratul dintre Troposferă şi Stratosferă?",
            answers: {
              a: "ionosferă",
              b: "atmosferă",
              c: "tropopauză"
            },
            correctAnswer: "c"
          },
          {
            question: "23. Jumătate din greutatea totală a atmosferei se află în primii:",
            answers: {
              a: "3 km",
              b: "5 km",
              c: "8 km",
              d: "11 km"
            },
            correctAnswer: "b"
          },
          {
            question: "24. Umezeala relativă măsurată pe un eşantion de aer (1m³) este de 99%. Această masă de aer spunem că este:",
            answers: {
              a: "masă de aer uscat",
              b: "masă de aer umed",
              c: "masă de aer parţial umedă",
              d: "masă de aer neutră"
            },
            correctAnswer: "a"
          },
          {
            question: "25. O masă de aer devine saturată când umezeala relativă devine :",
            answers: {
              a: "99%",
              b: "30%",
              c: "100%",
              d: "50 %"
            },
            correctAnswer: "c"
          },
          {
            question: "26. Atmosfera devine instabilă odată cu apropierea unui:",
            answers: {
              a: "front cald",
              b: "front oclus",
              c: "front rece",
              d: "cumulonimbus"
            },
            correctAnswer: "c"
          },
          {
            question: "27. Frontul atmosferic este:",
            answers: {
              a: "linia de nori care apare când se răceşte vremea",
              b: "zona de demarcaţie între ploaie şi timp frumos",
              c: "zona de contact între două mase de aer cu caracter termic diferit"
            },
            correctAnswer: "c"
          },
          {
            question: "28. Când o masă de aer rece întâlneşte una caldă atunci se formează un:",
            answers: {
              a: "front rece",
              b: "front cald",
              c: "front oclus",
              d: "nu este un front"
            },
            correctAnswer: "a"
          },
          {
            question: "29. La apropierea unui front rece :",
            answers: {
              a: "vântul se roteşte brusc spre dreapta, temperatura scade, vizibilitatea creşte, presiunea creşte",
              b: "vântul se roteşte brusc spre stânga, temperatura scade, vizibilitatea creşte, presiunea scade",
              c: "vântul se roteşte brusc spre dreapta, temperatura scade, vizibilitatea scade, presiunea creşte"
            },
            correctAnswer: "b"
          },
          {
            question: "30. Cu care tip de nori sunt asociate furtunile?",
            answers: {
              a: "nori de tip Cirus",
              b: "nori de tip Cumulus",
              c: "nori de tip Altocumulus",
              d: "nori de tip Cumulonimbus"
            },
            correctAnswer: "d"
          },
          {
            question: "31. Previziunea de tip METAR se eliberează la fiecare:",
            answers: {
              a: "15 min",
              b: "45 min",
              c: "60 min",
              d: "30 min"
            },
            correctAnswer: "d"
          },
          {
            question: "32. Inversiunea termică este",
            answers: {
              a: "o descreştere a presiunii cu înălţimea",
              b: "o descreştere a temperaturii cu înălţimea",
              c: "o creştere a temperaturii cu înălţimea"
            },
            correctAnswer: "c"
          },
          {
            question: "33. Care sunt factorii atmosferici care determină schimbările în atmosferă?",
            answers: {
              a: "temperatura",
              b: "mareele, temperatura, mişcările aerului",
              c: "presiunea, temperatura, umiditatea, vântul"
            },
            correctAnswer: "c"
          },
          {
            question: "34. Temperatura punctului de rouă este definită ca fiind:",
            answers: {
              a: "temperatura la care se depune roua",
              b: "temperatura la care aerul devine saturat",
              c: "temperatura la care umezeala din atmosfera a ajuns la un maxim şi începe să plouă"
            },
            correctAnswer: "b"
          },
          {
            question: "35. Nivelul de condensare reprezintă:",
            answers: {
              a: "înălţimea la care umezeala relativă devine 100%",
              b: "înălţimea până la care urcă aerul uscat",
              c: "înălţimea până la care urcă norii"
            },
            correctAnswer: "a"
          },
          {
            question: "36. Ciclonul este:",
            answers: {
              a: "centrul de presiune minimă caracterizat prin descreşterea presiunii către centrul sistemului",
              b: "centrul de presiune maximă în care presiunea descreşte către centrul sistemului",
              c: "centrul de presiune în care presiunea creşte spre centrul sistemului"
            },
            correctAnswer: "a"
          },
          {
            question: "37. În anticiclon vântul bate (în emisfera nordică):",
            answers: {
              a: "în sensul acelor de ceasornic, de la centru spre exteriorul sistemului",
              b: "în sensul acelor de ceasornic de la Est spre Vest",
              c: "în sens invers acelor de ceasornic de la centru spre exteriorul sistemului"
            },
            correctAnswer: "a"
          },
          {
            question: "38. La ce temperatură va ajunge o masă de aer uscat cu temperatura de 20 grade care se răceşte adiabatic până la 800 m?",
            answers: {
              a: "16 grade C",
              b: "8 grade C",
              c: "12 grade C"
            },
            correctAnswer: "c"
          },
          {
            question: "39. Norii de formaţie verticală sunt:",
            answers: {
              a: "nori de tip Cirus",
              b: "nori de tip Cumulus",
              c: "nori de tip Altocumulus"
            },
            correctAnswer: "b"
          },
          {
            question: "40. Tipurile de precipitaţii asociate cu norii SC sunt:",
            answers: {
              a: "în cea mai mare parte sub formă de picături de apa, care pot fi suprarăcite dacă temperatura este suficient de scăzută",
              b: "sub forma de ace de gheaţă",
              c: "numai picături de apă suprarăcite"
            },
            correctAnswer: "b"
          },
          {
            question: "41. Condiţiile de formare ale ceţii de radiaţie sunt:",
            answers: {
              a: "masa de aer cald în advecţie peste o suprafaţă rece",
              b: "cer acoperit, umiditate relativă mare",
              c: "umiditate relativă ridicată, cer senin, vânt slab"
            },
            correctAnswer: "c"
          },
          {
            question: "42. Care fenomen indică începutul stadiului matur al unui oraj?",
            answers: {
              a: "apariţia nicovalei",
              b: "debutul precipitaţiilor",
              c: "rata maximă de dezvoltare a norilor"
            },
            correctAnswer: "a"
          },
          {
            question: "43. Vântul catabatic poate determina:",
            answers: {
              a: "fenomene orajoase vara",
              b: "nori ST",
              c: "ceaţă în vale pe timpul nopţii"
            },
            correctAnswer: "c"
          },
          {
            question: "44. Una din cele mai importante caracteristici ale atmosferei este:",
            answers: {
              a: "densitatea este constantă peste 10.000 ft",
              b: "aerul este slab conductor de căldură",
              c: "gradientul de temperatură depăşeşte frecvent temperatura de 3 °C / 1000 ft"
            },
            correctAnswer: "b"
          },
          {
            question: "45. Ce reprezintă înălţimea bazei (plafonul) norului?",
            answers: {
              a: "distanţa de la suprafaţa solului până la baza norului",
              b: "distanţa de la baza la vârful norului",
              c: "partea cea mai înaltă a norului"
            },
            correctAnswer: "a"
          },
          {
            question: "46. Nori formaţi din particule solide (cristale de gheaţă, fulgi de zăpadă) sunt:",
            answers: {
              a: "stratus, stratocumulus, cumulus",
              b: "cirus",
              c: "cirostratus, cirocumulus",
              d: "cirus, cirostratus, cirocumulus"
            },
            correctAnswer: "d"
          },
          {
            question: "47. Briza de mare şi de uscat iau naştere ca urmare a:",
            answers: {
              a: "încălzireii diferite a uscatului şi a mării",
              b: "mareelor",
              c: "umidităţii mai mari din zona litorală"
            },
            correctAnswer: "a"
          },
          
            {
              question: "48. Anticiclonul este:",
              answers: {
                a: "centrul de presiune minimă caracterizat prin descreşterea presiunii către centrul sistemului",
                b: "centrul de presiune maximă caracterizat prin creşterea presiunii către centrul sistemului",
                c: "centrul de presiune în care presiunea descreşte spre centrul sistemului"
              },
              correctAnswer: "b"
            },
            {
              question: "49. În ciclon vântul bate (în emisfera nordică):",
              answers: {
                a: "în sensul acelor de ceasornic, de la centru spre exteriorul sistemului",
                b: "în sensul acelor de ceasornic de la Est spre Vest",
                c: "în sens invers acelor de ceasornic de la exterior spre centrul sistemului"
              },
              correctAnswer: "c"
            },
            {
              question: "50. Curenţii de convecţie sunt:",
              answers: {
                a: "curenţi ce transportă aerul pe orizontală",
                b: "curenţi verticali ascendenţi şi descendenţi",
                c: "mase de aer cu umiditate mare"
              },
              correctAnswer: "b"
            },
            {
              question: "51. Care din următoarele specii de nori sunt de natură orografică:",
              answers: {
                a: "nori de tip Cirus",
                b: "nori de tip Cumulus",
                c: "nori de tip Altocumulus lenticularis"
              },
              correctAnswer: "c"
            },
            {
              question: "52. O aeronavă tocmai efectuează decolarea, iar dv. sunteţi la start, vântul este calm:",
              answers: {
                a: "decolaţi imediat",
                b: "întârziaţi suficient decolarea pentru a evita turbulenţele de siaj ale aeronavei care a decolat",
                c: "puteţi decola imediat dacă este vorba despre un avion cu reacţie, întrucât acestea, spre deosebire de avioanele cu elice, nu provoacă turbulenţe de siaj"
              },
              correctAnswer: "b"
            },
            {
              question: "53. Când temperatura aerului este identică cu temperatura de rouă:",
              answers: {
                a: "se depune roua",
                b: "apare ceaţa",
                c: "începe ploaia"
              },
              correctAnswer: "b"
            },
            {
              question: "54. Fineţea, în condiţiile unui vânt de faţă:",
              answers: {
                a: "este identică cu fineţea în condiţii de vânt nul",
                b: "este mai mică faţă de situaţia unui vânt nul",
                c: "este mai mare faţă de situaţia unui vânt nul"
              },
              correctAnswer: "b"
            },
            {
              question: "55. Prin ce mod se încălzeşte atmosfera?",
              answers: {
                a: "prin radiaţie",
                b: "prin convecţie",
                c: "prin conducţie"
              },
              correctAnswer: "b"
            },
            {
              question: "56. Pâcla este",
              answers: {
                a: "o suspensie de particule solide în aer umed  în  proces de evaporare",
                b: "o suspensie de particule solide în aer antrenate de vânt",
                c: "o degajare de praf antrenat de curenţii termici ascendenţi"
              },
              correctAnswer: "a"
            },
            {
              question: "57. Liniile care unesc punctele cu aceiaşi presiune atmosferică, se numesc:",
              answers: {
                a: "izocore",
                b: "izobare",
                c: "izocline"
              },
              correctAnswer: "b"
            },
            {
              question: "58. Norii cu o mare extindere pe verticală, sunt de tip:",
              answers: {
                a: "cirocumulus",
                b: "cumulonimbus",
                c: "nimbostratus"
              },
              correctAnswer: "b"
            },
            {
              question: "59. Înălţimea bazei norilor la verticala locului, reprezintă:",
              answers: {
                a: "plafon",
                b: "nebulozitate",
                c: "vizibilitate"
              },
              correctAnswer: "a"
            },
            {
              question: "60. Ceata este considerată densă, atunci când vizibilitatea este între:",
              answers: {
                a: "0 – 50 m",
                b: "50 – 200 m",
                c: "200 – 400 m"
              },
              correctAnswer: "b"
            },
            {
              question: "61. Frontul în care aerul cald în deplasare îl înlocuieşte pe cel rece se numeşte:",
              answers: {
                a: "front rece",
                b: "front oclus",
                c: "front cald"
              },
              correctAnswer: "c"
            },
            {
              question: "62. Givrajul afectează aeronavele, prin:",
              answers: {
                a: "scăderea vitezei de angajare",
                b: "creşterea portanţei",
                c: "reducerea portanţei"
              },
              correctAnswer: "c"
            },
            {
              question: "63. Un centru de maximă presiune se mai numeşte:",
              answers: {
                a: "anticiclon",
                b: "ciclon",
                c: "oraj"
              },
              correctAnswer: "a"
            },
            {
              question: "64. Avionul care pătrunde într-o zonă turbulentă, suferă un impact a cărui violenţă este cu atât mai mare cu cât:",
              answers: {
                a: "avionul zboară mai încet",
                b: "viteza avionului este mai mare",
                c: "avionul este mai mic"
              },
              correctAnswer: "b"
            },
            {
              question: "65. Care element din compoziţia aerului este determinant în schimbarea condiţiilor meteo?",
              answers: {
                a: "oxigenul",
                b: "bioxidul de carbon",
                c: "vaporii de apă"
              },
              correctAnswer: "c"
            },
            {
              question: "66. În ce ordine putem enumera straturile atmosferei?",
              answers: {
                a: "troposferă, stratosferă, mezosferă, termosferă",
                b: "stratosferă, mezosferă, termosferă, troposferă",
                c: "atmosfera, troposfera, stratosfera"
              },
              correctAnswer: "a"
            },
            {
              question: "67. După trecerea unui front oclus în emisfera nordică vântul:",
              answers: {
                a: "slăbeşte",
                b: "se roteşte",
                c: "creşte"
              },
              correctAnswer: "b"
            },
            {
              question: "68. După trecerea unui front oclus în emisfera nordică temperatura",
              answers: {
                a: "se stabilizează",
                b: "coboară sau urcă",
                c: "creşte rapid"
              },
              correctAnswer: "b"
            },
            {
              question: "69. După trecerea unui front oclus în emisfera nordică precipitaţiile",
              answers: {
                a: "se reduc în intensitate",
                b: "cresc în intensitate",
                c: "continuă"
              },
              correctAnswer: "a"
            },
            {
              question: "70. Un front oclus are caracter de front cald când:",
              answers: {
                a: "aerul cald forţează aerul rece să urce peste aerul rece",
                b: "aerul rece forţează aerul cald să urce peste aerul rece",
                c: "aerul rece presează aerul rece în jos"
              },
              correctAnswer: "a"
            },
            {
              question: "71. Ceaţa de advecţie se formează când:",
              answers: {
                a: "aerul umed se deplasează peste o suprafaţă rece şi temperatura este puţin peste punctul de rouă",
                b: "aerul cald şi umed se deplasează peste o suprafaţă rece şi temperatura scade puţin sub punctul de rouă",
                c: "aerul uscat se deplasează peste o suprafaţă îngheţată şi temperatura scade mult sub punctul de rouă"
              },
              correctAnswer: "b"
            },
            {
              question: "72. Ceaţă de radiaţie se formează mai degrabă:",
              answers: {
                a: "într-un anticiclon în timpul iernii",
                b: "pe dealuri în perioada de toamnă",
                c: "în condiţii de vânt de peste 7 m/s, cer senin şi o umiditate relativă mare"
              },
              correctAnswer: "a"
            },
            {
              question: "73. Nori formaţi prin convecţie sunt totdeauna:",
              answers: {
                a: "cu înălţimea bazei în creştere pe parcursul zilei şi se pot dezvoltă până la stadiul de CB",
                b: "nori de tip stratificat",
                c: "CU, CB, sau Ns"
              },
              correctAnswer: "a"
            },
            {
              question: "74. Treapta barică se calculează pe intervale. La nivelul mării scade cu",
              answers: {
                a: "1 mb pentru 8,4 m",
                b: "1 mb pentru 16 m",
                c: "1 mb pentru 32 m"
              },
              correctAnswer: "a"
            },
            {
              question: "75. În ce strat al atmosferei au loc cele mai multe fenomene meteorologice:",
              answers: {
                a: "troposfera",
                b: "termosfera",
                c: "tropopauza"
              },
              correctAnswer: "a"
            },
            {
              question: "76. În care dintre straturile atmosferei găsim întotdeauna o inversiune sau o izotermie?",
              answers: {
                a: "tropopauza",
                b: "termosfera",
                c: "la baza norilor"
              },
              correctAnswer: "a"
            },
            {
              question: "77. Prin temperatura aerului înţelegem:",
              answers: {
                a: "starea de încălzire a aerului",
                b: "temperatura la care a ajuns aerul în urma încălzirii de la soare",
                c: "cantitatea de temperatură pe care aerul o cedează în urma încălzirii de la soare, mediului înconjurător"
              },
              correctAnswer: "a"
            },
            {
              question: "78. Încălzirea atmosferei se realizează prin:",
              answers: {
                a: "deplasarea maselor de aer cu diverse temperaturi",
                b: "direct de la soare prin intermediul radiaţiei cu lungime de undă mică",
                c: "prin contact la suprafaţă solului, prin convecţie în masa troposferei, prin radiaţie cu lungime de undă mare emisă"
              },
              correctAnswer: "c"
            },
            {
              question: "79. Cum variază procentual oxigenul cu înălţimea în troposferă?",
              answers: {
                a: "rămâne constant cu înălţimea",
                b: "creşte cu înălţimea",
                c: "scade cu înălţimea"
              },
              correctAnswer: "a"
            },
            {
              question: "80. Care din următoarele valori reprezintă gradientul adiabatic uscat?",
              answers: {
                a: "0,65 grd. C/100 m",
                b: "0,5 grd. C/100 m",
                c: "1,0 grd. C/100 m"
              },
              correctAnswer: "c"
            },
            {
              question: "81. Care din următoarele valori reprezintă gradientul adiabatic umed?",
              answers: {
                a: "0,5 grd. C/100 m",
                b: "0,65 grd. C/100 m",
                c: "1,0 grd. C/100 m"
              },
              correctAnswer: "a"
            },
            {
              question: "82. Nivelul de condensare reprezintă:",
              answers: {
                a: "înălţimea la care umezeala relativa devine 100%",
                b: "înălţimea până la care urcă aerul uscat",
                c: "înălţimea corespunzătoare vârfului norilor"
              },
              correctAnswer: "a"
            },
            {
              question: "83. Cum variază presiunea aerului în înălţime?",
              answers: {
                a: "scade cu înălţimea",
                b: "creşte cu înălţimea",
                c: "rămâne constantă"
              },
              correctAnswer: "a"
            },
            {
              question: "84. Care din următoarele relaţii este corectă?",
              answers: {
                a: "1mmHg = 11,2 hPa",
                b: "1mmHg = 4/3 hPa",
                c: "1mmHg = 8,4 hPa"
              },
              correctAnswer: "b"
            },
            {
              question: "85. Presiunea atmosferică scade în altitudine datorită:",
              answers: {
                a: "scăderii densităţii aerului în înălţime şi scurtării coloanei de aer",
                b: "scăderii temperaturii aerului în înălţime",
                c: "creşterii umezelii în înălţime"
              },
              correctAnswer: "a"
            },{
                question: "86. Presiunea standard la nivelul mării are valoarea de:",
                answers: {
                  a: "960 mm Hg",
                  b: "1013.25 hPa",
                  c: "760 hPa"
                },
                correctAnswer: "b"
              },
              {
                question: "87. Vântul este:",
                answers: {
                  a: "mişcarea turbulentă a aerului",
                  b: "mişcarea orizontală şi verticală a aerului",
                  c: "mişcarea orizontală a aerului"
                },
                correctAnswer: "c"
              },
              {
                question: "88. Anticiclonul se notează prescurtat pe hârtiile sinoptice cu litera:",
                answers: {
                  a: "M",
                  b: "D",
                  c: "L"
                },
                correctAnswer: "a"
              },
              {
                question: "89. Pe hârtiile sinoptice ciclonul se notează cu litera:",
                answers: {
                  a: "M",
                  b: "D",
                  c: "L"
                },
                correctAnswer: "b"
              },
              {
                question: "90. Vântul laminar este:",
                answers: {
                  a: "vântul care suferă variaţii datorită obstacolelor",
                  b: "vântul care ia naştere prin convecţia aerului",
                  c: "vântul care îşi păstrează direcţia şi intensitatea"
                },
                correctAnswer: "c"
              },
              {
                question: "91. Cu câte grade se răceşte în urcare o masă de aer uscat:",
                answers: {
                  a: "0,5 grdC /100 m",
                  b: "1 grd. C/100m",
                  c: "0.65 grd. C/100m"
                },
                correctAnswer: "b"
              },
              {
                question: "92. Ce temperatură a avut la sol o masă de aer uscat care la înălţimea de 1500 m are temperatura - 4 C ?",
                answers: {
                  a: "11 grd. C",
                  b: "6 grd. C",
                  c: "4 grd. C"
                },
                correctAnswer: "a"
              },
              {
                question: "93. Norii Cumulus sunt nori de tip :",
                answers: {
                  a: "ondulaţi",
                  b: "convectivi",
                  c: "stratificaţi"
                },
                correctAnswer: "b"
              },
              {
                question: "94. Norii Cumulus pot fi :",
                answers: {
                  a: "cumulus Humilis, Cumulus Congestus",
                  b: "altocumulus, Cirocumulus",
                  c: "stratocumulus, Cumulonimbus"
                },
                correctAnswer: "a"
              },
              {
                question: "95. Fronturile reci sunt marcate pe o hartă sinoptică cu culoarea:",
                answers: {
                  a: "neagră",
                  b: "roşie",
                  c: "albastră"
                },
                correctAnswer: "c"
              },
              {
                question: "96. Care dintre grupele următoare de nori sunt tipici frontului cald?",
                answers: {
                  a: "Ci, Cs, As, Ns",
                  b: "Cc, Ac, Cu, Cb",
                  c: "Cc, St, Ns"
                },
                correctAnswer: "a"
              },
              {
                question: "97. Vântul se roteşte odată cu creşterea altitudinii datorită:",
                answers: {
                  a: "scăderii presiunii în înălţime",
                  b: "zonelor de inversiune şi izotermie",
                  c: "forţei Coriolis"
                },
                correctAnswer: "c"
              },
              {
                question: "98. Ce se înţelege prin umezeala relativă?",
                answers: {
                  a: "raportul dintre umezeala absolută şi umezeala absolută maximă",
                  b: "cantitatea de vapori de apă conţinută într-un m3 de aer umed",
                  c: "cantitatea de vapori de apă conţinută într-un Kg de aer umed"
                },
                correctAnswer: "a"
              },
              {
                question: "99. Întrând în zbor într-o masa de aer mai rece, altimetrul barometric:",
                answers: {
                  a: "indică o înălţime mai mare",
                  b: "indică o înălţime mai mică",
                  c: "nu este afectat în indicaţie"
                },
                correctAnswer: "a"
              },
              {
                question: "100. La decolare am 'calat' scala presiunilor pe QFE şi acele altimetrului pe '0'. La aterizarea pe alt aerodrom (nu am mai umblat la altimetru), altimetrul indică:",
                answers: {
                  a: "diferenţa dintre QNH sosire şi QFE plecare",
                  b: "cota aerodromului de sosire",
                  c: "diferenţa dintre QFE plecare şi QFE sosire"
                },
                correctAnswer: "c"
              },
              {
                question: "101. Gradientul unui vânt de faţă la aterizare:",
                answers: {
                  a: "riscă să producă o diminuare prea puternică a incidenţei",
                  b: "impune adaptarea prealabilă a vitezei",
                  c: "impune încetinirea pentru a nu ajunge prea repede la sol"
                },
                correctAnswer: "b"
              },
              {
                question: "102. O perdea de copaci în faţa vântului provoacă:",
                answers: {
                  a: "turbulenţe în partea vântului",
                  b: "turbulenţe şi  'umbre de vânt' în spatele copacilor, sub vânt",
                  c: "nu provoacă turbulenţe"
                },
                correctAnswer: "b"
              },
              {
                question: "103. Atunci când zburăm cu vânt de spate, impresia vizuală tinde să modifice comportamenul pilotului:",
                answers: {
                  a: "el riscă să zboare prea încet",
                  b: "el riscă să zboare prea repede"
                },
                correctAnswer: "a"
              },
              {
                question: "104. Fineţea la sol este:",
                answers: {
                  a: "mărită de vântul de spate",
                  b: "diminuată de vântul de spate",
                  c: "mărită de vântul de faţă"
                },
                correctAnswer: "a"
              },
              {
                question: "105. În turbulenţă, este de preferat:",
                answers: {
                  a: "să vă apropiaţi de relief şi să măriţi viteza",
                  b: "să vă ajustaţi centura de siguranţă",
                  c: "să vă îndepărtaţi de limitele domeniului de zbor (angajare, VNE, factor de sarcină)"
                },
                correctAnswer: "c"
              },
              {
                question: "106. În zbor la pantă, virajul spre munte:",
                answers: {
                  a: "este recomandat",
                  b: "este dificil de evaluat şi periculos",
                  c: "permite de a profita din plin de gradient"
                },
                correctAnswer: "b"
              },
              {
                question: "107. Ce reprezintă abrevierile VMC şi IMC?",
                answers: {
                  a: "VMC=Visual Meteorological Conditions=conditii meteorologice de zbor la vedere, IMC-Instrumental Meteorological Conditions = conditii meteorologice de zbor instrumental"
                },
                correctAnswer: "a"
              },
              {
                question: "108. Puteţi întâlni turbulenţa de forfecare:",
                answers: {
                  a: "când două mase de aer au direcţii şi caracteristici diferite",
                  b: "când apare un strat de inversiune",
                  c: "într-o zonă în care izobarele se lărgesc"
                },
                correctAnswer: "a"
              },
              {
                question: "109. Efectul gradientului vântului în apropierea pantei se manifestă prin:",
                answers: {
                  a: "o viteză a aerului inferioară pe aripa apropiată de relief",
                  b: "o viteză a aerului superioară pe aripa apropiată de relief",
                  c: "tendinţă a aeronavei de a se îndepărta de relief"
                },
                correctAnswer: "a"
              },
              {
                question: "110. Vântul efectiv se manifestă prin:",
                answers: {
                  a: "modificare a vitezei aeronavei faţă de sol sol",
                  b: "un zbor derapat",
                  c: "un efect de deviere de la LDO"
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