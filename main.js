
/* Aufgabenstellung - Teil 1 */

const Tom = {
    Geburtsjahr:1956,
    Wohnort:"USA",
    Geschlecht: "Männer",
    LetzterGespielteFilm:"Cast Away",
    
};
console.log(Tom);
console.log(Tom.Wohnort);
console.log(Tom.Geschlecht);
console.log(Tom.LetzterGespielteFilm);


/* Aufgabenstellung - Teil 2 */


function info(){
    document.getElementById("info").innerHTML  =
    document.getElementById("info").innerHTML  +
    "<li>"+" Geburtsjahr : "+ Tom.Geburtsjahr+"</li>" +"<li>"+"Wohnort ist :" + Tom.Wohnort +"</li>"
    +"<li>"+"Geschlecht ist :"+ Tom.Geschlecht + "</li>" +"<li>" +"Letzter Gespielte Film :" + Tom.LetzterGespielteFilm +"</li>" ;
   
}