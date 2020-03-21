// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


// chiedo 5 volte all'utente di inserire un numero creando delle variabili prompt
var alert = alert("Questo tool è una mini calcolatrice, inserire cinque numeri per avere la somma di essi")
var numUno = parseInt(prompt("Inserisco un numero"));
var numDue = parseInt(prompt("Inserisco un numero"));
var numTre = parseInt(prompt("Inserisco un numero"));
var numQuattro = parseInt(prompt("Inserisco un numero"));
var numCinque = parseInt(prompt("Inserisco un numero"));

console.log(numUno , numDue, numTre, numQuattro, numCinque);

// creo una variabile con la somma di tutti i numeri

var somma = numUno + numDue + numTre + numQuattro + numCinque;

console.log(somma);

// dò output della somma

document.getElementById('output-num1').innerHTML = numUno;
document.getElementById('output-num2').innerHTML = numDue;
document.getElementById('output-num3').innerHTML = numTre;
document.getElementById('output-num4').innerHTML = numQuattro;
document.getElementById('output-num5').innerHTML = numCinque;
document.getElementById('output-somma').innerHTML = somma;
