//Test zur Source
alert("Hey JS funkt.");

//Hier die neuen Städte eintragen
//Ortszeit Datum
var datum = document.getElementById("ortdate");
//Ortszeit Zeit
var orttime = document.getElementById("ortszeit");
//London Uhrzeit und Dat
var lontime = document.getElementById("london");
var londat = document.getElementById("londondate");
//Paris Uhrzeit und Dat
var partime = document.getElementById("paris");
var pardat = document.getElementById("parisdate");
//Peking Uhrzeit und Dat
var pektime = document.getElementById("peking");
var pekdat = document.getElementById("pekingdate");






var timeval = setInterval(GetTime, 999);

function GetTime(){
    time(orttime, 0);
    heutdatum(datum), 0;
    

    london();
    paris();
    peking();
}
//Hier die Funktionen
function paris(){
    time(partime, 0);
    heutdatum(pardat, 0);
}

function london(){
    time(lontime, -1);
    heutdatum(londat, -1);
}

function peking(){
    time(pektime, 7);
    heutdatum(pekdat, 7);
}














// x ist der Platz wo es hingehört
// t ist die Zeitverschiebung in h
function time(x, t){
    var zeit = new Date();
    var stunde = zeit.getHours() + t;
    var minute = zeit.getMinutes();
    var sekunde = zeit.getSeconds();
    //Start 0 hinzufügen
    if (sekunde < 10) {
        x.innerHTML = stunde + ":" + minute + ":0" + sekunde;
        if (minute < 10){
            x.innerHTML = stunde + ":0" + minute + ":0" + sekunde;
            if (stunde < 10) {
                x.innerHTML = "0" + stunde + ":0" + minute + ":0" + sekunde;
            }
        else if (stunde < 10) {
            x.innerHTML = "0" + stunde + ":" + minute + ":0" + sekunde;
            }
        }
    }

    if (minute < 10){
        x.innerHTML = stunde + ":0" + minute + ":" + sekunde;
        if (sekunde < 10) {
            x.innerHTML = stunde + ":0" + minute + ":0" + sekunde;
            if (stunde < 10) {
                x.innerHTML = "0" + stunde + ":0" + minute + ":0" + sekunde;
            }
        else if (stunde < 10) {
            x.innerHTML = "0" + stunde + ":0" + minute + ":" + sekunde;
            }
        }    
    }
    if (stunde < 10) {
        x.innerHTML = "0" + stunde + ":" + minute + ":" + sekunde;
        if (mintute < 10) {
            x.innerHTML = "0" + stunde + ":0" + minute + ":" + sekunde;
            if (sekunde < 10) {
                x.innerHTML = "0" + stunde + ":0" + minute + ":0" + sekunde;
            }
        }
        else if (sekunde < 10) {
            x.innerHTML = "0" + stunde + ":" + minute + ":0" + sekunde;
        
        }
    }
    if ((stunde > 10) && (minute > 10) && (sekunde > 10)) {
        x.innerHTML = stunde + ":" + minute + ":" + sekunde;
    }
    //Ende 0 hinzufügen
    //Start Datum
}



//o steht für den Ort
//t steht für die Zeitverschiebung in Stunden
function heutdatum(o, t){
    var innerdate = new Date();
    var innerYear = innerdate.getFullYear();
    var innerMonth = innerdate.getMonth();
    var innerDayOM = innerdate.getDate();
    var innerHours = innerdate.getHours() + t;


    var zeit = new Date(innerYear, innerMonth, innerDayOM, innerHours);
    var zeit = new Date(2020, 10, 22, 13);
    var jahr = zeit.getFullYear();
    var monat = zeit.getMonth() + 1;
    var tag = zeit.getDate();
    if (monat < 10){
        o.innerHTML = tag + ".0" + monat + "." + jahr;
        if (tag < 10) {
            o.innerHTML = "0" + tag + ".0" + monat + "." + jahr;
        }
    }
    else if (tag < 10) {
        o.innerHTML = "0" + tag + "." + monat + "." + jahr;
        if (monat < 10){
            o.innerHTML = "0" + tag + ".0" + monat + "." + jahr;
        }
    }
    else {
        o.innerHTML = tag + "." + monat + "." + jahr;
    }
}