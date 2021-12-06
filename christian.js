// Teil 1
const ewanMcGregor = {
  geburtsjahr: 1971,
  wohnort: "Schottland",
  geschlecht: "männlich",
  letzterFilm: "The Birthday Cake",
};

const charlizeTheron = {
  geburtsjahr: 1975,
  wohnort: "South Africa",
  geschlecht: "weiblich",
  letzterFilm: "The Old Guard",
};

const zendaya = {
  geburtsjahr: 1996,
  wohnort: "USA",
  geschlecht: "weiblich",
  letzterFilm: "Dune",
};

// Teil 2 - Möglichkeit 1:
let schauspieler = [ewanMcGregor, charlizeTheron, zendaya];
console.log("Schauspieler:", schauspieler);

// Teil 2 - Möglichkeit 2:
let schauspieler2 = []; // leeres Array
schauspieler2.push(ewanMcGregor); // füge zum Array hinzu
schauspieler2.push(charlizeTheron); // füge zum Array hinzu
schauspieler2.push(zendaya); // füge zum Array hinzu
console.log("Schauspieler2:", schauspieler);

// Ausgabe gibt eine Liste (Array) von Objekten aus

// Beobachtung: man kann von der Ausgabe nicht ableiten
// wie der/die Schauspieler/-in heißt. Sollte vielleicht
// als weitere Eigenschaft im Objekt drinstehen.
