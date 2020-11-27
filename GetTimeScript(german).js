//Code made by Minze

//To add this code, you have to place the Source in the footer (at the very bottom), because I didn't add the window.load

//Test zur Source Funktionalität
alert("Hey JS funkt.");


//Hier die neuen Städte eintragen bzw. die Ids zum ändern der Werte
//Ortszeit Datum und Zeit
var datum = document.getElementById("ortdate");
var orttime = document.getElementById("ortszeit");
//London Uhrzeit und Datum
var lontime = document.getElementById("london");
var londat = document.getElementById("londondate");
//Paris Uhrzeit und Datum
var partime = document.getElementById("paris");
var pardat = document.getElementById("parisdate");
//Peking Uhrzeit und Datum
var pektime = document.getElementById("peking");
var pekdat = document.getElementById("pekingdate");
//Beispiel mit Zeitverschiebung von 10h
var example_time = document.getElementById("");
var example_date = document.getElementById("");

//"var" durch "const" ersetzbar, aber zur Funktionalität in "ECMA6" unkompatibilitätsfähigen Geräten wurde "var" genutzt



//Zur aktuellen Zeitangabe
var timeval = setInterval(GetTime, 999);


//Hier die unteren functions eingeben
function GetTime(){
    time(orttime, 0);
    datum(datum), 0;
    

    london();
    paris();
    peking();

    //Beispiel
    example();
}


//Hier die Funktionen für die einzelnen Städte/Orte
function paris(){
    time(partime, 0);
    datum(pardat, 0);
}

function london(){
    time(lontime, -1);
    datum(londat, -1);
}

function peking(){
    time(pektime, 7);
    datum(pekdat, 7);
}

//Beispiel
function example(){
    time(example_time, 10);
    datum(example_date, 10);
}
//Erklärung:
//Erster Parameter (hier: "example_time" und "example_date") steht für die ID des Places, wo die Uhrzeit oder Datum hinsoll hin soll
//Zweiter Parameter steht für die Zeitverschiebung der Orte in h







//Ab hier Code für Interessierte


//Start Uhrzeit kriegen
// x ist der Place (also ID eingeben bsp. example_time) wo es hingehört
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
}
//Ende Uhrzeit kriegen


//Start Datum kriegen
//o steht für den Place (Also ID eingeben bsp. example_date)
//t steht für die Zeitverschiebung in Stunden
function datum(o, t){
    var innerdate = new Date();
    var innerYear = innerdate.getFullYear();
    var innerMonth = innerdate.getMonth();
    var innerDayOM = innerdate.getDate();
    var innerHours = innerdate.getHours() + t;


    //Komplexität des Codes, aufgrund von Zeitverschiebung
    var zeit = new Date(innerYear, innerMonth, innerDayOM, innerHours);
    var zeit = new Date(2020, 10, 22, 13);
    var jahr = zeit.getFullYear();
    var monat = zeit.getMonth() + 1;
    var tag = zeit.getDate();
    //Ende des "unnötigen Teils"
    //Start 0 hinzufügen
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
    //Ende 0 hinzufügen
}

//Ende Datum kriegen