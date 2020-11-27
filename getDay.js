//Code to be added in Index
var dertag = document.getElementById("theday");
var dasdate = document.getElementById("thedate");
var weekdays=new Array
("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
//Btw Sunday is 0

var text = document.getElementById("datum");
var sectext = document.getElementById("day");

function getDay(day, month, year) {
    var d = new Date(year, month, day);
    text.innerHTML = d;
    return theDay = weekdays[d.getDay()];
} 

function thesys() {
    var day = prompt("Bitte den Tag eingeben");
    var month= prompt("Bitte den Monat")-1;
    //BTW Monat beginnt von 0
    var year= prompt("Hier das Jahr");
    getDay(day, month, year);
    dertag.innerHTML = theDay;
    var altmonth = month + 1;
    dasdate.innerHTML = day + "." + altmonth + "." + year;

}
//Ende