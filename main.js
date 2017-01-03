(function() {
  // Path map description
  var pathPoints = [
    // Bag End to Rivendell (397 miles)
    { coords: [6.6, 23.75], dist: 0.0, smooth: [[6.95, 25.5], [8, 25.9], [9, 25.8]] },
    { coords: [9.85, 25.45], dist: 11.0 },
    { coords: [12.045, 24.5], dist: 12.0 },
    { coords: [14.16, 24.4], dist: 11.0 },
    { coords: [16.2, 24.4], dist: 11.0, smooth: [[16.9, 24.2]] },
    { coords: [18.25, 23], dist: 10.0 },
    { coords: [20.7, 21.42], dist: 10.0 },
    { coords: [22.98, 20.7], dist: 10.0, smooth: [[24, 20.6]] },
    { coords: [25, 20.82], dist: 10.0 },
    { coords: [26.65, 21.64], dist: 6.0 },
    { coords: [28.62, 22.67], dist: 10.0 },
    { coords: [30.47, 23.87], dist: 12.0 },
    { coords: [32.65, 25.13], dist: 12.0 },
    { coords: [35, 26.25], dist: 12.0 },
    { coords: [37.27, 26.35], dist: 12.0 },
    { coords: [39.57, 25.73], dist: 11.0 },
    { coords: [41.45, 24.9], dist: 10.0 },
    { coords: [43.45, 23.7], dist: 10.0 },
    { coords: [45.4, 22.35], dist: 10.0 },
    { coords: [47, 20.9], dist: 10.0 },
    { coords: [48.5, 19.3], dist: 10.0, smooth: [[49, 18.7]] },
    { coords: [49.4, 17.8], dist: 9.0 },
    { coords: [50.5, 16.5], dist: 9.0 },
    { coords: [52.2, 14.8], dist: 9.0, smooth: [[53.3, 14]] },
    { coords: [54.1, 13.7], dist: 9.0 },
    { coords: [56.2, 14], dist: 9.0 },
    { coords: [58.1, 14.6], dist: 9.0 },
    { coords: [59.85, 15.2], dist: 9.0 },
    { coords: [61.57, 15.275], dist: 9.0 },
    { coords: [63.33, 15], dist: 9.0 },
    { coords: [65.15, 14.9], dist: 9.0 },
    { coords: [66.75, 15.7], dist: 9.0 },
    { coords: [68.2, 17.15], dist: 8.0, smooth: [[69.2, 18.85]] },
    { coords: [71.35, 19.2], dist: 15.0, smooth:[[71.7, 20.5], [71.7, 21.5], [71.4, 22.65]] },
    { coords: [73.35, 23.7], dist: 12.0, smooth: [[76, 24.4]] },
    { coords: [78, 24.4], dist: 16.0, smooth:[[80.8, 23.95], [81.7, 23.4]] },
    { coords: [82.8, 22.1], dist: 13.0, smooth: [[83.9, 20], [85, 19.8], [85.9, 18.4], [87.25, 18.75]] },
    { coords: [87.25, 19.2], dist: 16.0, smooth: [[87.5, 18.9], [88, 19.4], [88.5, 19.2], [89.8, 17]] },
    { coords: [91.28, 15.18], dist: 8.0 },
    // Rivendell to Erebor (555 miles)
    { coords: [9.05, 97.7], dist: 0.0, smooth: [[9.4, 97]], breakpoint: true },
    { coords: [9.25, 96.7], dist: 4.0, smooth: [[9.7, 96.7], [9.65, 96.1]] },
    { coords: [10.15, 95.75], dist: 4.0, smooth: [[10.3, 96.1], [10.5, 95.35]] },
    { coords: [10.95, 95.2], dist: 4.0, smooth: [[11.6, 94.6]] },
    { coords: [11.8, 94.7], dist: 4.0, smooth: [[12, 94.9], [12.2, 94.45]] },
    { coords: [12.75, 94.4], dist: 4.0, smooth: [[13.1, 94.1], [13.15, 94.5], [13.5, 93.9]] },
    { coords: [13.64, 94.15], dist: 4.0, smooth: [[14.25, 93.7], [14.25, 94.1]] },
    { coords: [14.58, 94.08], dist: 4.0, smooth: [[15.1, 93.55]] },
    { coords: [15.4, 93.65], dist: 4.0, smooth: [[15.5, 93.9], [15.8, 93.2]] },
    { coords: [16.15, 93.4], dist: 4.0, smooth: [[16.4, 93.5], [16.5, 92.9]] },
    { coords: [17, 93], dist: 4.0, smooth: [[17.35, 92.4], [17.4, 92.8]] },
    { coords: [17.85, 92.5], dist: 4.0, smooth: [[18.3, 92.45], [18.35, 91.8]] },
    { coords: [18.7, 91.75], dist: 4.0, smooth: [[19, 91.4], [19.4, 91.8]] },
    { coords: [19.4, 91.15], dist: 4.0, smooth: [[19.83, 91.17], [19.75, 90.65]] },
    { coords: [20.15, 90.35], dist: 4.0, smooth: [[20.6, 90.35], [20.55, 89.7], [20.7, 90]] },
    { coords: [20.92, 89.35], dist: 4.0, smooth: [[21.2, 89.35], [21.1, 88.7], [21.55, 88.6]] },
    { coords: [21.55, 88.25], dist: 4.0, smooth: [[21.9, 87.5], [22.23, 87.2]] },
    { coords: [22.23, 86.7], dist: 4.0, smooth: [[22.4, 86], [22.2, 85.7], [22.45, 85.4]] },
    { coords: [22.45, 84.9], dist: 4.0, smooth: [[22.9, 84.3], [22.7, 84], [23, 83.9], [23, 83.2], [23.55, 82.8]] },
    { coords: [23.88, 81.92], dist: 26.0, smooth: [[25.4, 81.4]] },
    { coords: [25.9, 81.1], dist: 11.0, smooth: [[26.3, 80.2], [26.25, 79.8], [26.85, 80.3], [27.1, 81.6], [27.6, 81.8], [28.1, 82.9]] },
    { coords: [28.7, 79.1], dist: 41.0, smooth: [[34, 79.6], [36, 80], [37, 80.5], [38, 81.45]] },
    { coords: [39.3, 81.3], dist: 58.0, smooth: [[39.7, 80.2], [39.85, 79.4]] },
    { coords: [39.83, 77.87], dist: 9.0, smooth: [[39.4, 75]] },
    { coords: [38.5, 71.4], dist: 20.0, smooth: [[37.1, 66]] },
    { coords: [36.6, 63.6], dist: 25.0, smooth: [[36.35, 61.5], [36.45, 60], [36.8, 58.2], [37.3, 57.45]] },
    { coords: [37.35, 57.65], dist: 18.0, smooth: [[37.4, 57.35], [38.5, 57]] },
    { coords: [38.6, 57.1], dist: 8.0, smooth: [[38.8, 57]] },
    { coords: [40.15, 57.35], dist: 7.0 },
    { coords: [41.74, 57.95], dist: 7.0 },
    { coords: [43.3, 58.65], dist: 7.0 },
    { coords: [45.1, 59.35], dist: 7.0, smooth: [[45.2, 59.45], [46.45, 59.8]] },
    { coords: [46.55, 59.75], dist: 7.0, smooth: [[47.3, 60]] },
    { coords: [47.8, 60.3], dist: 7.0 },
    { coords: [49.25, 60.9], dist: 7.0, smooth: [[49.45, 61.6]] },
    { coords: [50.15, 61.7], dist: 7.0 },
    { coords: [51.8, 62.25], dist: 7.0 },
    { coords: [53.4, 62.8], dist: 7.0 },
    { coords: [54.97, 63.25], dist: 7.0 },
    { coords: [56.45, 63.5], dist: 7.0 },
    { coords: [57.88, 63.75], dist: 7.0 },
    { coords: [59.2, 63.97], dist: 7.0 },
    { coords: [60.63, 63.75], dist: 7.0 },
    { coords: [62.12, 63.45], dist: 7.0 },
    { coords: [63.59, 63.19], dist: 7.0 },
    { coords: [65.1, 62.78], dist: 7.0 },
    { coords: [66.35, 62.1], dist: 7.0 },
    { coords: [67.7, 61.55], dist: 5.0 },
    { coords: [68.95, 60.85], dist: 6.0 },
    { coords: [70.3, 60.1], dist: 6.0 },
    { coords: [71.65, 59.25], dist: 6.0 },
    { coords: [73, 58.25], dist: 6.0 },
    { coords: [74.4, 57.1], dist: 6.0, smooth: [[75.05, 56.4], [75.2, 56], [75.3, 56.2], [75.5, 55.8]] },
    { coords: [75.9, 55.8], dist: 7.0, smooth: [[76.4, 55.5], [76.1, 55.3]] },
    { coords: [76.38, 54.75], dist: 4.0, smooth: [[76.7, 54.2]] },
    { coords: [76.85, 53.25], dist: 7.0, smooth: [[77.2, 53.8], [79.45, 54.5]] },
    { coords: [79.7, 54.25], dist: 14.0, smooth: [[80, 54.7], [83, 55.5], [86, 57]] },
    { coords: [86.47, 56.68], dist: 32.0, smooth: [[86.9, 56]] },
    { coords: [86.97, 55.2], dist: 5.0 },
    { coords: [87.25, 53.6], dist: 5.0, smooth: [[87.35, 52.6]] },
    { coords: [87, 52.15], dist: 5.0 },
    { coords: [85.2, 49.3], dist: 13.0, smooth: [[84.5, 48.4], [84.44, 48], [84.55, 47.55]] },
    { coords: [85.2, 47.2], dist: 12.0 },
  ];

  var shirePoints = [
    { coords: [66.8, 51.7], dist: 0.0, smooth: [[67.1, 52.1], [67.8, 52.7], [68.05, 53], [68, 53.2]] },
    { coords: [67.6, 54.3], dist: 0.5, smooth: [[67.5, 54.8], [68.5, 55.1]] },
    { coords: [69.15, 55.85], dist: 4.5, smooth: [[69.3, 55.95]] },
    { coords: [69.5, 57], dist: 2.0 },
    { coords: [71, 57.45], dist: 2.0 },
    { coords: [72.5, 57.32], dist: 2.0, smooth: [[74.9, 56.5]] },
    { coords: [77, 55.3], dist: 12.0, smooth: [[80.45, 55.05]] },
    { coords: [81.48, 54.64], dist: 11.0, smooth: [[84, 54.9]] },
    { coords: [86, 54.15], dist: 11.0 },
    { coords: [90.3, 50.75], dist: 10.0, smooth: [[93.5, 49.1]] },
    { coords: [95, 48.5], dist: 4.0, smooth: [[96, 48.2]] },
    { coords: [101, 48.13], dist: 100.0  },
  ];

  var eriadorWestPoints = [
    { coords: [59, 59.8], dist: 0.0, smooth: [[59.5, 61]] },
    { coords: [60.9, 61.15], dist: 11.0 },
    { coords: [62.2, 61], dist: 12.0 },
    { coords: [63.5, 60.75], dist: 11.0 },
    { coords: [64.95, 60.4], dist: 11.0 },
    { coords: [66.2, 59.95], dist: 10.0 },
    { coords: [67.5, 59.15], dist: 10.0 },
    { coords: [69.3, 58.6], dist: 10.0 },
    { coords: [70.75, 59.1], dist: 10.0 },
    { coords: [72, 59.5], dist: 6.0 },
    { coords: [73.2, 60.3], dist: 10.0 },
    { coords: [74, 60.8], dist: 12.0 },
    { coords: [74.9, 61.1], dist: 12.0 },
    { coords: [75.7, 61.1], dist: 12.0 },
    { coords: [76.45, 61.2], dist: 12.0 },
    { coords: [77.3, 61.1], dist: 11.0 },
    { coords: [78.65, 60.85], dist: 10.0 },
    { coords: [80.1, 60.5], dist: 10.0 },
    { coords: [81.4, 59.9], dist: 10.0 },
    { coords: [82.4, 58.9], dist: 10.0 },
    { coords: [83.2, 57.9], dist: 10.0 },
    { coords: [83.9, 57.1], dist: 9.0 },
    { coords: [84.8, 55.95], dist: 9.0 },
    { coords: [85.9, 55.1], dist: 9.0 },
    { coords: [87, 54.6], dist: 9.0 },
    { coords: [88.2, 54.6], dist: 9.0 },
    { coords: [89.5, 55.1], dist: 9.0 },
    { coords: [90.8, 55.55], dist: 9.0 },
    { coords: [91.8, 55.68], dist: 9.0 },
    { coords: [92.7, 55.7], dist: 9.0 },
    { coords: [93.7, 55.8], dist: 9.0 },
    { coords: [94.25, 56.25], dist: 9.0 },
    { coords: [94.7, 56.8], dist: 8.0, smooth: [[95.4, 57.7]] },
    { coords: [97, 57.8], dist: 15.0, smooth:[[97.3, 58.3], [97.1, 59.7], [96.73, 60.45]] },
    { coords: [97.8, 61.15], dist: 12.0 },
    { coords: [101, 62], dist: 100.0 },
  ];

  var maps = {
    path: [
      { image: './maps/path.jpg', minDist: 0, points: pathPoints }
    ],
    regional: [
      { image: './maps/region-shire.jpg', minDist: 0, points: shirePoints },
      { image: './maps/region-eriador-west.jpg', minDist: 59, points: eriadorWestPoints },
      { image: '', minDist: 345, points: [] }, // FIXME: 344
    ]
  };

  var points = maps.path[0].points;

  itinerary = [
    // Bag End to Rivendell
    { dist: 0, cdist: 0, day: 1, text: 'Bilbo vyběhl ze Dna pytle na jih, dolů ulicí směrem k Hobitínu.' },
    { dist: 0.5, cdist: 0.5, day: 1, text: 'Bilbo překročil most přes Vodu a dal se na východ po cestě k Povodí.' },
    { dist: 4.5, cdist: 5, day: 1, text: 'Bilbo doběhl k hospodě U Zeleného draka v Povodí. Trpaslíci pro něj měli přichystaného poníka a všichni se vydali ihned na cestu. Čaroděj Gandalf se k nim brzy připojil. Odbočili na jihovýchod po cestě z Povodí. Cesta byla obklopena vysokými břehy porostlými křovím.' },
    { dist: 2, cdist: 7, day: 1, text: 'Společnost dorazila k Velké východní cestě a pokračovala dál na východ.' },
    { dist: 2, cdist: 9,  day: 1, text: 'Společnost projela okolo Tříčtvrtkového kamene.' },
    { dist: 2, cdist: 11, day: 1, text: 'Společnost se utábořila na noc. Ráno pokračovali volným tempem na východ po Cestě.' },
    { dist: 12, cdist: 23, day: 2, text: 'Žabovřesky. Společnost přenocovala v hospodě U Plovoucí klády a ráno pokračovala na východ po Cestě volným tempem.' },
    { dist: 11, cdist: 34, day: 3, text: 'Přes pole na jihu byly vidět stromy Zálesí. Společnost se utábořila a ráno pokračovala na východ po Cestě volným tempem.' },
    { dist: 11, cdist: 45, day: 4, text: 'Společnost dorazila k mostu přes Brandyvínu a strávila noc v hospodě U Mostu. Ráno překročili Brandyvínu. Minuli cestu vedoucí na jih k Rádovsku a projeli okolo Vysokého křoví. Na jihu se vynořil západní okraj Starého Hvozdu.' },
    { dist: 10, cdist: 55, day: 5, text: 'Společnost se utábořila na noc vedle Cesty. Ráno pokračovali na východ. Od jihu se k nim Starý Hvozd stále víc přibližoval.' },
    { dist: 6, cdist: 61, day: 6, text: 'Společnost projížděla stále řídčeji obydlenou oblastí.' },
    { dist: 4, cdist: 65, day: 6, text: 'Společnost se utábořila na noc. Ráno minuli východní okraj Starého Hvozdu.' },
    { dist: 4, cdist: 69, day: 7, text: 'Společnost pokračovala volným tempem na východ. Daleko na jihu se objevily nejzápadnější svahy Mohylových vrchů.' },
    { dist: 6, cdist: 75, day: 7, text: 'Společnost se utábořila na noc. Příštího dne míjeli Mohylové vrchy. Mezi Cestou a vrchy se tyčily křoviny.' },
    { dist: 6, cdist: 81, day: 8, text: 'Společnost se utábořila na noc. Příštího dne míjeli Mohylové vrchy. Mezi Cestou a vrchy se tyčily křoviny.' },
    { dist: 4, cdist: 85, day: 8, text: 'Společnost dorazila do Hůrky a ubytovala se v hostinci U Skákavého poníka. Zůstali vzhůru dlouho do noci. Zdrželi se také většinu rána a poté se vydali po okraji Hůreckého kopce znovu na východ.' },
    { dist: 1, cdist: 86, day: 9, text: 'Společnost dorazila k jižní bráně a opustili vesnici Hůrku. Pokračovali po Velké východní cestě.' },
    { dist: 5, cdist: 91, day: 9, text: 'Společnost se utábořila u stezky vedoucí na sever k Hustolesu na Hůreckém kopci. Ráno pokračovali volným tempem na východ. Cesta se stáčela vedle Hustolesa na východo-jihovýchod.' },
    { dist: 5, cdist: 96, day: 10, text: 'Společnost pokračovala z kopce podél cesty vedoucí do středu Hustolesa.' },
    { dist: 5, cdist: 101, day: 10, text: 'Společnost se utábořila v Opuštěném hostinci, který byl posledním hostincem u Velké východní cesty směrem na východ. Ráno se vydali na cestu dříve než obvykle. Jeli na jihovýchod pohodlným tempem.' },
    { dist: 6, cdist: 107, day: 11, text: 'Společnost minula východní okraj Hustolesa. Na jihu viděli statky roztroušené po krajině.' },
    { dist: 4, cdist: 111, day: 11, text: 'Společnost zpozorovala Komáří močály na severovýchodě.' },
    { dist: 2, cdist: 113, day: 12, text: 'Společnost se utábořila na noc. Ráno pokračovali ma východo-jihovýchod.' },
    { dist: 4, cdist: 117, day: 12, text: 'Společnost pokračovala dál po Cestě, která se začala mírně svažovat dolů.' },
    { dist: 8, cdist: 125, day: 12, text: 'Přesně na sever od cestující společnosti se rozkládal západní okraj Komářích močálů. Cesta pokračovala na východo-jihovýchod.' },
    { dist: 8, cdist: 133, day: 13, text: 'Společnost po cestě minula pospíchajícího cestovatele. Cesta se přiblížila k močálům na severu. Pokračovali na východo-jihovýchod pohodlným tempem. Počasí se toho dne vydařilo.' },
    { dist: 4, cdist: 137, day: 13, text: 'Společnost se utábořila na jihu od Komářích močálů. Ráno se cesta stočila zpět k východu a močály vyplňovaly celý severní obzor.' },
    { dist: 6, cdist: 143, day: 14, text: 'Cesta společnosti pokračovala na východ okolo jižního okraje močálů.' },
    { dist: 6, cdist: 149, day: 14, text: 'Společnost se utábořila na jih od cesty, pryč od močálů, a ráno pokračovala po Velké východní cestě.' },
    { dist: 6, cdist: 155, day: 15, text: 'Cesta se začala stáčet trochu víc na sever.' },
    { dist: 5, cdist: 160, day: 15, text: 'Společnost dorazila k jihovýchodnímu okraji Komářích močálů a utábořila se. Ráno pokračovali po Cestě, která se stáčela na severovýchod a zvolna do kopce.' },
    { dist: 5, cdist: 165, day: 16, text: 'Společnost před sebou v dáli spatřila Větrov. Větrovské vrchy byly viditelné směrem na sever.' },
    { dist: 5, cdist: 170, day: 16, text: 'Společnost se k večeru utábořila. Na obou stranách cesty se rozléhala drsná otevřená krajina. Počasí bylo příjemné. Ráno pokračovali pohodlným tempem na severovýchod po Cestě.' },
    { dist: 5, cdist: 175, day: 17, text: 'Krajina se stále pomalu svažovala do kopce směrem k Větrovu.' },
    { dist: 5, cdist: 180, day: 17, text: 'Větrov se tyčil stále blíž. Společnost se utábořila. Ráno pokračovali po Cestě na severovýchod pomalu do kopce.' },
    { dist: 5, cdist: 185, day: 18, text: 'Větrov se tyčil před projíždějící společností a vyplňoval celé její zorné pole.' },
    { dist: 5, cdist: 190, day: 18, text: 'Větrov se tyčil přímo na sever od Cesty. Společnost se utábořila na jeho úpatí. Ráno projížděli okolo Větrova na severovýchod.' },
    { dist: 5, cdist: 195, day: 19, text: 'Společnost projela jihovýchodní úpatí Větrova.' },
    { dist: 5, cdist: 200, day: 19, text: 'Společnost dorazila k posledním kopcům pod Větrovem a utábořila se na jejich úpatí. Ráno pokračovali po Cestě na severovýchod a pomalu klesali směrem k Pustinám. Stav Velké východní cesty se začal zhoršovat.' },
    { dist: 5, cdist: 205, day: 20, text: 'Jižně od projíždějící společnosti se rozkládala drsná krajina porostlá bodláčím.' },
    { dist: 5, cdist: 210, day: 20, text: 'Společnost se utábořila za teplého počasí a čisté oblohy. Ráno pokračovali dál na severovýchod. Větrov byl stále viditelný přímo za nimi.' },
    { dist: 5, cdist: 215, day: 21, text: 'Cesta se zhoršovala stále více. Větrov za společností nyní vypadal menší.' },
    { dist: 4, cdist: 219, day: 21, text: 'Společnost se utábořila na noc a ráno pokračovali dál po Velké východní cestě.' },
    { dist: 9, cdist: 228, day: 22, text: 'Společnost se utábořila a ráno pokračovala po Cestě, která se stáčela více k východu. Větrov již nebyl přímo za nimi.' },
    { dist: 9, cdist: 237, day: 23, text: 'Společnost se utábořila a ráno pokračovala dál na východ. Větrovské vrchy byly stále viditelné na západním obzoru.' },
    { dist: 5, cdist: 242, day: 24, text: 'Cesta se začala stáčet zpět k východu.' },
    { dist: 4, cdist: 246, day: 24, text: 'Společnost se utábořila a ráno pokračovala po Cestě na východ.' },
    { dist: 9, cdist: 255, day: 25, text: 'Společnost se utábořila a ráno pokračovala na východ. Daleko za nimi byly Větrovské vrchy stále méně viditelné. Před sebou v dáli společnost zpozorovala vrcholky Obřích lesů.' },
    { dist: 9, cdist: 264, day: 26, text: 'Společnost se utábořila a ráno pokračovala na východ. Cesta byla drsná.' },
    { dist: 9, cdist: 273, day: 27, text: 'Společnost se utábořila a ráno pokračovala na východ. Za nimi se Větrovské vrchy téměř úplně ztratily z dohledu. Blížili se k zalesněným kopcům Obřích lesů.' },
    { dist: 9, cdist: 282, day: 28, text: 'Společnost se utábořila a ráno pokračovala v cestě otevřenou krajinou. V okolí se nenacházel žádný vodní tok.' },
    { dist: 9, cdist: 291, day: 29, text: 'Společnost pokračovala po Cestě na východ. Obří lesy byly stále blíž.' },
    { dist: 9, cdist: 300, day: 30, text: 'Společnost se utábořila a ráno pokračovala po Cestě, která se stáčela k jihovýchodu. Na jih od cesty rostly keře a zakrslé stromy, divoké a neprůchodné.' },
    { dist: 9, cdist: 309, day: 31, text: 'Společnost se utábořila na sever od Cesty. Ráno pokračovali za příjemného počasí. Před nimi se tyčily kopce Obřích lesů.' },
    { dist: 8, cdist: 317, day: 32, text: 'Společnost se utábořila a ráno pokračovala na jihovýchod skrz otevřenou krajinu. Počasí se změnilo ve studené a mokré. Společnost dorazila k severovýchodnímu konci údolí na jihu od Cesty, která se stala jen rozbahněnou stezkou. Na zalesněných kopcích viděli staré hrady zlověstného vzhledu.' },
    { dist: 6, cdist: 323, day: 33, text: 'Společnost překročila Poslední most krátce před setměním.' },
    { dist: 2, cdist: 325, day: 33, text: ' Zastavili se, aby se utábořili pod skupinou stromů, a zjistili, že Gandalf zmizel. Ztratili zásoby jídla, když se splašil poník a vběhl do řeky. Zahlédli oheň mezi stromy na svahu kopce směrem na východ a rozhodli se pro průzkum.' },
    { dist: 7, cdist: 332, day: 33, text: 'Společnost dorazila k ohni obtížnou cestou skrz stromy a narazila na zlobry. Padli do zajetí. Objevil se Gandalf a lstí přiměl zlobry k hádce až do rána, kdy se s východem slunce proměnili v kámen.' },
    { dist: 7, cdist: 339, day: 34, text: 'Společnost se vrátila z kopců na Velkou východní cestu. Pokračovali směrem na východ.' },
    { dist: 1, cdist: 340, day: 34, text: 'Cesta se stáčela opět na jihovýchod. Společnost projížděla úpatím kopců Obřích lesů.' },
    { dist: 4, cdist: 344, day: 34, text: 'Společnost se utábořila na noc. Ráno vyjeli brzy a ve spěchu.' },
    { dist: 4, cdist: 348, day: 35, text: 'Společnost opět vjela do lesů. Pokračovali na východ po cestě mezi stromy.' },
    { dist: 2, cdist: 350, day: 35, text: 'Společnost vyjela do údolí.' },
    { dist: 5, cdist: 355, day: 35, text: 'Společnost pokračovala dál úpatím kopců.' },
    { dist: 5, cdist: 360, day: 35, text: 'Společnost se utábořila nedaleko údolí. Ráno pokračovali po Cestě, která opět vedla přímo na východ. Nezbývalo jim již mnoho zásob, proto pospíchali.' },
    { dist: 5, cdist: 365, day: 36, text: 'Společnost spatřila rozvaliny na vrcholu kopce na severu.' },
    { dist: 3, cdist: 368, day: 36, text: 'Projíždějící společnost se přiblížila ke korytu řeky Bouřné (Bruinen) jižně od Cesty, která se dále stočila na severovýchod.' },
    { dist: 2, cdist: 370, day: 36, text: 'Společnost projela po severním okraji údolí.' },
    { dist: 3, cdist: 373, day: 36, text: 'Společnost se utábořila na noc. Ráno pokračovali na severovýchod. Cesta stále vedla úpatím kopců Obřích lesů.' },
    { dist: 5, cdist: 378, day: 37, text: 'Společnost překročila potůček. Cesta se stočila více na severovýchod. Bouřná (Bruinen) se nacházela nedaleko na jihu a tekla také k východo-severovýchodu.' },
    { dist: 2, cdist: 380, day: 37, text: 'Společnost pokračovala po Cestě na východo-severovýchod. Jeli velice rychle.' },
    { dist: 5, cdist: 385, day: 37, text: 'Cesta začala mírně klesat z kopce. Po stranách byla obklopena spoustou trávy. Kopce byly stále vidět na severu.' },
    { dist: 3, cdist: 388, day: 37, text: 'Cesta poklesla skrz brázdu červeného kamene pokrytého vysokými borovicemi a pokračovala směrem k řece.' },
    { dist: 1, cdist: 389, day: 37, text: 'Společnost dorazila k Bruinenskému brodu. Mlžné hory již byly zřetelně viditelné.' },
    { dist: 1, cdist: 390, day: 38, text: 'Společnost se utábořila na noc. Ráno překročili řeku Bouřnou (Bruinen) a Gandalf prozkoumával cestu. Museli jet opatrně.' },
    { dist: 2, cdist: 392, day: 38, text: 'Cesta vedla napravo podél strmé rokle.' },
    { dist: 2, cdist: 394, day: 38, text: 'Společnost na východě spatřila hlubokou rokli s vodopádem.' },
    { dist: 2, cdist: 396, day: 38, text: 'Společnost dorazila k náhlému srázu nad údolím Roklinky. Sjížděli po klikaté cestě pomalu dolů. Borovice brzy nahradily duby a buky.' },
    { dist: 1, cdist: 397, day: 38, text: 'Společnost převedla poníky přes úzký můstek nad horním tokem Bouřné (Bruinen) a dorazila do Posledního domáckého domu v Roklince. Poradili se s pánem Elrondem a doplnili zásoby. Za několik týdnů společnost opustila Roklinku a vydala se s poníky do podhůří Mlžných hor.' },
    { dist: 4, cdist: 401, day: 39, text: 'Společnost se utábořila v podhůří Mlžných hor. Ráno pokračovali v cestě na ponících.' },
    { dist: 4, cdist: 405, day: 40, text: 'Společnost s poníky započala výstup do Mlžných hor.' },
    { dist: 4, cdist: 409, day: 41, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 413, day: 42, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 417, day: 43, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 421, day: 44, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 425, day: 45, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 429, day: 46, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 433, day: 47, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 437, day: 48, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 441, day: 49, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 445, day: 50, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 449, day: 51, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 453, day: 52, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 457, day: 53, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 461, day: 54, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 465, day: 55, text: 'Společnost s poníky pokračovala ve výstupu k vrcholkům Mlžných hor.' },
    { dist: 4, cdist: 469, day: 56, text: 'Společnost se ukryla v jeskyni před strašlivým hromobitím. Byli zajati skřety.' },
    { dist: 5, cdist: 474, day: 57, text: 'Thorin Pavéza byl vyslýchán v Jeskyni velkého skřeta. Gandalf zachránil společnost.' },
    { dist: 2, cdist: 476, day: 57, text: 'Společnost se zastavila. Gandalf vyčaroval světlo. Trpaslíci museli nést Bilba.' },
    { dist: 6, cdist: 482, day: 57, text: 'Gandalf a Thorin odráželi útoky skřetů.' },
    { dist: 12, cdist: 494, day: 57, text: 'Boj mezi společností a skřety pokračoval.' },
    { dist: 1, cdist: 495, day: 57, text: 'Skřeti byli odraženi. Trpaslíci ve spěchu zapomněli na Bilba.' },
    { dist: 1, cdist: 496, day: 57, text: 'Bilbo se probudil ve tmě a uvědomil si, že je sám. Začal se plazit kupředu a našel Jeden prsten. Použil meč jako zdroj světla a vydal se klusem po cestě.' },
    { dist: 7.5, cdist: 503.5, day: 57, text: 'Bilbo nevědomky minul cestu k Zadní bráně, ke které mezitím dorazil zbytek společnosti.' },
    { dist: 1, cdist: 504.5, day: 57, text: 'Bilbo dorazil ke Glumovu jezeru. Potkává Gluma a soutěží s ním v hádankách.' },
    { dist: 0.5, cdist: 505, day: 57, text: 'Bilbo následoval Gluma zpátky cestou nahoru. Začínaly se objevovat boční cesty.' },
    { dist: 0.5, cdist: 505.5, day: 57, text: 'Glum zastoupil vchod do tunelu k Zadním dveřím. Bilbo ho přeskočil a utíkal k východu.' },
    { dist: 0.5, cdist: 506, day: 57, text: 'Bilbo dorazil k Zadním dveřím. Uprchl Glumovi a skřetům, kteří ho ještě kus sledovali do vysoko položeného údolí, po stezce mezi útesem a svahem.' },
    { dist: 8, cdist: 514, day: 57, text: 'Bilbo našel trpaslíky s Gandalfem v údolí pod stezkou. Společnost pokračovala ve výpravě.' },
    { dist: 4, cdist: 518, day: 57, text: 'Společnost překročila vodní tok.' },
    { dist: 4, cdist: 522, day: 57, text: 'Společnost pokračovala po cestičce k vrcholu svahu a ocitla se uprostřed sesouvajících se kamenů.' },
    { dist: 4, cdist: 526, day: 57, text: 'Společnost se sesunula na úpatí svahu a vyrazila na východ do borovicového lesa.' },
    { dist: 1, cdist: 527, day: 57, text: 'Společnost dorazila k pasece. Slyšeli vlky a vyšplhali na stromy. Ocitli se pod útokem vrrků.' },
    { dist: 8, cdist: 535, day: 57, text: 'Orli zachránili společnost. Odnesli je na orlí hnízdo.' },
    { dist: 12, cdist: 547, day: 57, text: 'Společnost letěla na hřbetech orlů, kteří je dopravili na Skalbal.' }, // Days may be off after this point
    { dist: 52, cdist: 599, day: 58, text: 'Společnost pokračovala pěšky na východ směrem k Temnému Hvozdu.' },
    { dist: 6, cdist: 605, day: 59, text: 'Společnost dorazila k Meddědovu obydlí, kde si odpočinula několik dní. Na cestu (k severu) se opět vydali odpoledne na vypůjčených ponících.' },
    { dist: 9, cdist: 614, day: 60, text: 'Společnost se utábořila a ráno pokračovala v cestě skrz pastviny na západ od Temného hvozdu.' },
    { dist: 20, cdist: 634, day: 61, text: 'Společnost pokračovala v cestě na sever v mlze. Bilbo zahlédl Medděda. Pokračovali pod svitem měsíce.' },
    { dist: 25, cdist: 659, day: 62, text: 'Společnost se opět vydala na cestu před úsvitem. Krajina se začala svažovat do kopce, jak se blížili k Temnému hvozdu. Odpoledne dorazili ke stromům.' },
    { dist: 18, cdist: 677, day: 63, text: 'Společnost se utábořila. Příští den je Gandalf varoval, aby neopouštěli lesní stezku. Poté odjel a vzal s sebou poníky zpět k Meddědovi. Společnost vstoupila do Temného hvozdu.' },
    { dist: 8, cdist: 685, day: 39, text: 'Společnost přečkala první noc v lese. Pokračovali po stezce do hlubin Temného hvozdu.' },
    { dist: 7, cdist: 692, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 699, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 706, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 713, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 720, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 727, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 734, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 741, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 748, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 755, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 762, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 769, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 776, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 783, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 790, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 797, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 804, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 811, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 7, cdist: 818, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 2, cdist: 820, day: 39, text: 'Společnost po stezce dorazila k Začarované řece, kterou překročili na lodičce. Bombur spadl do vody a okamžitě usnul. Trpaslíci ho museli nést.' },
    { dist: 3, cdist: 823, day: 39, text: 'Společnost se utábořila a ráno pokračovala po stezce v Temném hvozdu.' },
    { dist: 6, cdist: 829, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 6, cdist: 835, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 6, cdist: 841, day: 39, text: 'Společnost procházela většinu dne otevřenějším prostranstvím posetým buky.' },
    { dist: 6, cdist: 847, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu. Bilbo vylezl na strom, ale neviděl okolo nic než stromy. Nacházeli se na dně širokého údolí.' },
    { dist: 4, cdist: 851, day: 39, text: 'Společnost pokračovala po stezce v Temném hvozdu.' },
    { dist: 2, cdist: 853, day: 39, text: 'Společnost se utábořila. K večeři snědli poslední zásoby jídla. Ráno se Bombur probudil. Pršelo celý den. Nikde žádné jídlo.' },
    { dist: 6, cdist: 859, day: 39, text: 'Společnost se chystala utábořit, když zahlédli oheň a opustili stezku. Dorazili k prvnímu elfskému ohni a okolo nich všechno zhaslo. Zběsile se hledali.' },
    { dist: 0.5, cdist: 859.5, day: 39, text: 'Společnost dorazila k druhému elfskému ohni. Opět se ocitli ve tmě, ale tentokrát zůstali spolu.' },
    { dist: 0.5, cdist: 860, day: 39, text: 'Před úsvitem zahlédli třetí oheň elfů. Světla opět zhasla a Thorin byl zajat elfy. Ostatní trpaslíci byli polapeni pavouky. Přehlédnutý Bilbo zabil pavouka a omdlel.' },
    { dist: 0.5, cdist: 860.5, day: 39, text: 'Bilbo se probudil a pojmenoval svůj meč: Žihadlo. Našel trpaslíky zamotané v sítích a osvobodil je.' },
    { dist: 1.5, cdist: 862, day: 39, text: 'Bilbo se snažil odlákat pavouky.' },
    { dist: 1, cdist: 863, day: 39, text: 'Pavouci se po dalším boji s trpaslíky vzdali.' },
    { dist: 1, cdist: 864, day: 39, text: 'Společnost se utábořila. Celý následující den se prodírali lesem. Nakonec byli obklíčeni elfy a vzdali se. Bilbo použil prsten a zmizel.' },
    { dist: 5, cdist: 869, day: 39, text: 'Trpaslíci byli uvězněni v jeskyních elfského krále Thranduila. Bilbo je sledoval.' },
    { dist: 2, cdist: 871, day: 39, text: 'Společnost uprchla z jeskyní v sudech po Lesní řece. Propluli východním okrajem Temného hvozdu.' },
    { dist: 2, cdist: 873, day: 39, text: 'Společnost pokračovala v plavbě po Lesní řece. Za soumraku dopluli k chýším elfů. Trpaslíci byli stále v sudech a Bilbo se s prstenem skrýval poblíž.' },
    { dist: 12, cdist: 885, day: 39, text: 'Elfové svázáním sudů postavili vor a vypluli po řece k Jezernímu městu. Bilbo plul s nimi neviditelný.' },
    { dist: 10, cdist: 895, day: 39, text: 'Společnost plula po lesní řece. Proplouvali bažinatou oblastí. Bilbo spatřil Osamělou horu.' },
    { dist: 20, cdist: 915, day: 39, text: 'Společnost vyplula z oblasti bažin a pokračovala dál po lesní řece.' },
    { dist: 2, cdist: 917, day: 39, text: 'Společnost po západu slunce doplula do Jezerního města. Bilbo osvobodil trpaslíky a společně vstoupili do města, kde strávili několik týdnů. Thorin žádal o zásoby. Opustili město ve třech loďkách.' },
    { dist: 5, cdist: 922, day: 39, text: 'Společnost se utábořila u ústí Bystré řeky. Ráno veslovali dál do kopce a proti proudu.' },
    { dist: 5, cdist: 927, day: 39, text: 'Společnost se utábořila na noc. Ráno pokračovali v plavbě a strávili třetí den v loďkách.' },
    { dist: 5, cdist: 932, day: 39, text: 'Společnost se utábořila na západním břehu řeky, kde na ně čekali poníci a zásoby. Pokračovali k severozápadu na ponících a dorazili ke Šmakově dračí poušti.' },
    { dist: 5, cdist: 937, day: 39, text: 'Společnost projížděla přes Šmakovu dračí poušť.' },
    { dist: 8, cdist: 945, day: 39, text: 'Společnost se utábořila na jižním okraji západního výběžku Osamělé hory. Bilbo, Fili, Kili a Balin se vydali na průzkum k Bystré řece a k Přední bráně Ereboru. Poté se všichni přesunuli do užšího údolí na západní straně hory.' },
    { dist: 12, cdist: 956.8, day: 39, text: 'Bilbo, Fili a Kili našli tajné dveře.' },
  ];

  // Auth & API call
  var fitbitAccessToken;
  var steps;
  var stride;
  var totalSteps;
  var currentMarker = 4.0;

  if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=***REMOVED***&redirect_uri=https%3A%2F%2F***REMOVED***%2F&scope=activity%20location%20profile%20settings%20social&expires_in=600');
  }
  else {
    var fragmentQueryParameters = {};
    window.location.hash.slice(1).replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { fragmentQueryParameters[$1] = $3; }
    );

    fitbitAccessToken = fragmentQueryParameters.access_token;
  };

  var processResponse = function(res) {
    if (!res.ok) {
      throw new Error('Fitbit API request failed: ' + res);
    }

    var contentType = res.headers.get('content-type')
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return res.json();
    }
    else {
      throw new Error('JSON expected but received ' + contentType);
    }
  };

  var processStride = function(data) {
    stride = parseFloat(data.user.strideLengthWalking);
    totalSteps = parseInt(((957 / 0.621371192) * 100000) / stride);
    document.getElementById('info-final-steps').innerText = totalSteps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  var requestSteps = function() {
    return fetch(
      'https://api.fitbit.com/1/user/-/activities.json',
      {
        headers: new Headers({
          'Authorization': 'Bearer ' + fitbitAccessToken
        }),
        mode: 'cors',
        method: 'GET'
      }
    );
  };

  var processSteps = function(data) {
    steps = parseInt(data.lifetime.total.steps);
    steps = steps <= totalSteps ? steps : totalSteps;
  };

  var appRun = function() {
    drawPaths(points);
    if (Math.round(steps / 500) == 0) {
      drawPosition(steps);
      document.getElementById('info-current-steps').innerText = steps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      document.getElementById('info-current-dist-mi').innerText = (((steps * stride) / 100000) * 0.621371192).toFixed(2).replace('.', ',');
      document.getElementById('info-current-dist-km').innerText = ((steps * stride) / 100000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace('.', ',');
      var distanceKm = (steps * stride) / 100000;
      var distanceMi = distanceKm * 0.621371192;
      var flag = false;
      document.getElementById('info-itinerary').innerHTML = '';
      for (var i = 0; i < itinerary.length; i++) {
        if (itinerary[i].cdist <= distanceMi) {
          continue;
        }
        else {
          document.getElementById('info-itinerary').innerText = itinerary[i - 1 >= 0 ? i - 1 : 0].text;
          flag = true;
          break;
        }
      }
      if (!flag) document.getElementById('info-itinerary').innerText = itinerary[itinerary.length - 1].text;
    }
    else animatePath(0, Math.round(steps / 500), 1, steps);
    animateMarker(4.0, 6.0, 'up', 0.01);
    //drawPosition(steps);
  };

// FIXME
  /*fetch(
    'https://api.fitbit.com/1/user/-/profile.json',
    {
      headers: new Headers({
        'Authorization': 'Bearer ' + fitbitAccessToken
      }),
      mode: 'cors',
      method: 'GET'
    }
  ).then(processResponse)
  .then(processStride)
  .then(requestSteps)
  .then(processResponse)
  .then(processSteps)
  .then(appRun)
  .catch(function(error) {
    console.log(error);
  });*/
  stride = 72.06;
  steps = 140000;
  totalSteps = ((957 / 0.621371192) * 100000) / stride;
  appRun();

  //
  // Setup etc.
  //

  // Window resize
  window.addEventListener('resize', function() {
    clearMap();
    drawPaths(points);
    drawPosition(steps);
  });

  // Map switches
  var pathMapSwitch = document.getElementById('map-switch-path');
  var regionalMapSwitch = document.getElementById('map-switch-regional');

  pathMapSwitch.style.color = '#f90054';
  pathMapSwitch.style.fontWeight = 'bold';

  pathMapSwitch.addEventListener('click', function() {
    document.getElementById('map-world').style.backgroundImage = 'url("' + maps.path[0].image + '")';

    var switches = document.getElementsByClassName('map-switch');
    for (var i = 0; i < switches.length; i++) {
      switches[i].style.color = '#000000';
      switches[i].style.fontWeight = 'normal';
    }
    document.getElementById('map-switch-path').style.color = '#f90054';
    document.getElementById('map-switch-path').style.fontWeight = 'bold';

    points = maps.path[0].points;
    clearMap();
    drawPaths(points);
    drawPosition(steps);
  });

  regionalMapSwitch.addEventListener('click', function() {
    var distanceKm = (steps * stride) / 100000;
    var distanceMi = distanceKm * 0.621371192;
    var index;
    for (var i = 0; i < maps.regional.length; i++) {
      if (distanceMi >= maps.regional[i].minDist) {
        index = i;
      }
      else break;
    }
    document.getElementById('map-world').style.backgroundImage = 'url("' + maps.regional[index].image + '")';

    var switches = document.getElementsByClassName('map-switch');
    for (var i = 0; i < switches.length; i++) {
      switches[i].style.color = '#000000';
      switches[i].style.fontWeight = 'normal';
    }
    document.getElementById('map-switch-regional').style.color = '#f90054';
    document.getElementById('map-switch-regional').style.fontWeight = 'bold';

    points = maps.regional[index].points;
    clearMap();
    drawPaths(points);
    drawPosition(steps);
  });

  // 
  // Functions
  //

  function clearMap() {
    document.getElementById('map-world').innerHTML = '';
  }

  function drawPaths(points) {
    var polylines = [];
    var polylinePath = '';
    var containerWidth = parseFloat(document.getElementById('map-world').width.baseVal.value);
    var containerHeight = parseFloat(document.getElementById('map-world').height.baseVal.value);

    for (var i = 0; i < points.length; i++) {
      var point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      point.setAttributeNS(null, 'cx', points[i].coords[0] + '%');
      point.setAttributeNS(null, 'cy', points[i].coords[1] + '%');
      point.setAttributeNS(null, 'r', 2);
      point.setAttributeNS(null, 'stroke', '#f90054');
      point.setAttributeNS(null, 'stroke-width', 1);
      point.setAttributeNS(null, 'fill', '#f90054');

      if (typeof points[i].breakpoint !== 'undefined') {
        polylines.push(polylinePath);
        polylinePath = '';
      }

      polylinePath += (containerWidth * (points[i].coords[0] / 100));
      polylinePath += ',';
      polylinePath += (containerHeight * (points[i].coords[1] / 100));
      if (i != (points.length - 1)) polylinePath += ' ';

      if (typeof points[i].smooth !== 'undefined') {
        for (var j = 0; j < points[i].smooth.length; j++) {
          polylinePath += (containerWidth * (points[i].smooth[j][0] / 100));
          polylinePath += ',';
          polylinePath += (containerHeight * (points[i].smooth[j][1] / 100));
          polylinePath += ' ';
        }
      }

      document.getElementById('map-world').appendChild(point);
    }

    polylines.push(polylinePath);

    for (var i = 0; i < polylines.length; i++) {
      var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      polyline.setAttributeNS(null, 'points', polylines[i]);
      polyline.setAttributeNS(null, 'stroke', '#f90054');
      polyline.setAttributeNS(null, 'stroke-width', 1);
      polyline.setAttributeNS(null, 'fill', 'none');

      document.getElementById('map-world').appendChild(polyline);
    }
  }

  function drawPosition(steps) {
    var distanceKm = (steps * stride) / 100000;
    var distanceMi = distanceKm * 0.621371192;
    var cumulativeDist = 0.0;
    var markerDisplayed = false;

    var oldMarker = document.getElementById('marker');
    if (oldMarker != null) oldMarker.parentNode.removeChild(oldMarker);

    for (var i = 0; i < points.length; i++) {
      cumulativeDist += points[i].dist;
      if (!markerDisplayed && cumulativeDist > distanceMi) {
        //console.log('distMi: ' + distanceMi);
        //console.log('cDist: ' + cumulativeDist);

        var segLen = 0.0;
        var subSegLens = [];

        var direction = {};
        var markerCoords = {};

        if (typeof points[i - 1].smooth !== 'undefined') {
          for (var j = 0; j < points[i - 1].smooth.length; j++) {
            if (j == 0) {
              segLen += Math.sqrt(Math.pow(Math.abs(points[i - 1].smooth[j][0] - points[i - 1].coords[0]), 2) + Math.pow(Math.abs(points[i - 1].smooth[j][1] - points[i - 1].coords[1]), 2));
              subSegLens.push(segLen);
            }
            else {
              segLen += Math.sqrt(Math.pow(Math.abs(points[i - 1].smooth[j][0] - points[i - 1].smooth[j - 1][0]), 2) + Math.pow(Math.abs(points[i - 1].smooth[j][1] - points[i - 1].smooth[j - 1][1]), 2));
              subSegLens.push(segLen);
            }
          }

          segLen += Math.sqrt(Math.pow(Math.abs(points[i].coords[0] - points[i - 1].smooth[points[i - 1].smooth.length - 1][0]), 2) + Math.pow(Math.abs(points[i].coords[1] - points[i - 1].smooth[points[i - 1].smooth.length - 1][1]), 2));
          subSegLens.push(segLen);

          //console.log(segLen);
          //console.log(subSegLens);

          var segNormRem = (cumulativeDist - distanceMi) / points[i].dist;
          var segNormDone = 1 - segNormRem;

          //console.log(segNormRem);
          //console.log(segNormDone);

          var targetSeg = 0;
          var subSegLenNorm = 0.0;
          var prevSubSegLens = 0.0;

          for (var j = 0; j < subSegLens.length; j++) {
            var cumulativeSubSegLenNorm = subSegLens[j] / segLen;
            if (segNormDone < cumulativeSubSegLenNorm) {
              var tmp = subSegLens[j];
              if (j > 0) {
                tmp -= subSegLens[j - 1]
                prevSubSegLens += subSegLens[j - 1]
              }
              subSegLenNorm = tmp / segLen;

              targetSeg = j;
              break;
            }
          }

          prevSubSegLens /= segLen;

          //console.log(targetSeg);

          var j = targetSeg;

          //console.log(j);
          //console.log(subSegLenNorm);
          //console.log(prevSubSegLens);
          //console.log('pt: ' + points[i-1].smooth.length);

          if (j == 0) {
            direction.x = points[i - 1].smooth[j][0] - points[i - 1].coords[0];
            direction.y = points[i - 1].smooth[j][1] - points[i - 1].coords[1];

            markerCoords.x = points[i - 1].coords[0] + (segNormDone * (1 / subSegLenNorm)) * direction.x;
            markerCoords.y = points[i - 1].coords[1] + (segNormDone * (1 / subSegLenNorm)) * direction.y;
          }
          else if (j >= points[i - 1].smooth.length) {
            j = points[i - 1].smooth.length;

            direction.x = points[i].coords[0] - points[i - 1].smooth[j - 1][0];
            direction.y = points[i].coords[1] - points[i - 1].smooth[j - 1][1];

            markerCoords.x = points[i - 1].smooth[j - 1][0] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.x;
            markerCoords.y = points[i - 1].smooth[j - 1][1] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.y;
          }
          else {
            direction.x = points[i - 1].smooth[j][0] - points[i - 1].smooth[j - 1][0];
            direction.y = points[i - 1].smooth[j][1] - points[i - 1].smooth[j - 1][1];

            markerCoords.x = points[i - 1].smooth[j - 1][0] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.x;
            markerCoords.y = points[i - 1].smooth[j - 1][1] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.y;
          }
        }
        else {
          segLen = Math.sqrt(Math.pow(Math.abs(points[i].coords[0] - points[i - 1].coords[0]), 2) + Math.pow(Math.abs(points[i].coords[1] - points[i - 1].coords[1]), 2));

          var segNormRem = (cumulativeDist - distanceMi) / points[i].dist;
          var segNormDone = 1 - segNormRem;

          direction.x = points[i].coords[0] - points[i - 1].coords[0];
          direction.y = points[i].coords[1] - points[i - 1].coords[1];

          markerCoords.x = points[i - 1].coords[0] + segNormDone * direction.x;
          markerCoords.y = points[i - 1].coords[1] + segNormDone * direction.y;
        }

        //markerCoords.x = points[i - 1].coords[0];
        //markerCoords.y = points[i - 1].coords[1];

        var marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        marker.setAttributeNS(null, 'id', 'marker');
        marker.setAttributeNS(null, 'cx', markerCoords.x + '%');
        marker.setAttributeNS(null, 'cy', markerCoords.y + '%');
        marker.setAttributeNS(null, 'r', currentMarker);
        marker.setAttributeNS(null, 'stroke', '#479100');
        marker.setAttributeNS(null, 'stroke-width', 1);
        marker.setAttributeNS(null, 'fill', '#6ddf00');

        document.getElementById('map-world').appendChild(marker);

        markerDisplayed = true;
      }
    }
  }

  function animateMarker(initial, target, direction, step) {
    marker.setAttributeNS(null, 'r', currentMarker);
    if (direction == 'up') {
      if (currentMarker + step <= target) currentMarker += step;
      else {
        currentMarker = target;
        direction = 'down';
      }
    }
    else if (direction == 'down') {
      if (currentMarker - step >= initial) currentMarker -= step;
      else {
        currentMarker = initial;
        direction = 'up';
      }
    }
    setTimeout(function() { animateMarker(initial, target, direction, step); }, 1);
  }

  function animatePath(initial, step, multiplier, steps) {
    if (steps > totalSteps) steps = totalSteps;

    document.getElementById('info-current-steps').innerText = initial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    document.getElementById('info-current-dist-mi').innerText = (((initial * stride) / 100000) * 0.621371192).toFixed(2).replace('.', ',');
    document.getElementById('info-current-dist-km').innerText = ((initial * stride) / 100000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace('.', ',');

    /*var distanceKm = (initial * stride) / 100000;
    var distanceMi = distanceKm * 0.621371192;
    for (var i = 0; i < itinerary.length; i++) {
      if (itinerary[i].cdist <= distanceMi) {
        continue;
      }
      else {
        document.getElementById('info-itinerary').innerText = itinerary[i - 1 >= 0 ? i - 1 : 0].text;
        break;
      }
    }*/

    drawPosition(initial);

    if (initial + step <= steps) initial += step;
    else initial = steps;

    step *= multiplier;

    if (initial < steps) setTimeout(function () { animatePath(initial, step, multiplier, steps); }, 1);
    if (initial == steps) {
      document.getElementById('info-current-steps').innerText = initial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      document.getElementById('info-current-dist-mi').innerText = (((initial * stride) / 100000) * 0.621371192).toFixed(2).replace('.', ',');
      document.getElementById('info-current-dist-km').innerText = ((initial * stride) / 100000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace('.', ',');
      var distanceKm = (initial * stride) / 100000;
      var distanceMi = distanceKm * 0.621371192;
      var flag = false;
      document.getElementById('info-itinerary').innerHTML = '';
      for (var i = 0; i < itinerary.length; i++) {
        if (itinerary[i].cdist <= distanceMi) {
          continue;
        }
        else {
          document.getElementById('info-itinerary').innerText = itinerary[i - 1 >= 0 ? i - 1 : 0].text;
          flag = true;
          break;
        }
      }
      if (!flag) document.getElementById('info-itinerary').innerText = itinerary[itinerary.length - 1].text;
      drawPosition(initial);
    }
  }
})();
