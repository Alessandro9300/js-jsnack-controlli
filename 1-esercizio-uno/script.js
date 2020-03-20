// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// creo le variabili in prompt


var avviso = alert("Questo tool serve a calcolare numero è maggiore dell'altro. Inserisca quindi due numeri non uguali fra di loro e scopra quale dei due è il maggiore ")
var numUno = parseInt(prompt("Inserire un numero"));
var numDue = parseInt(prompt("Inserire un numero"));
var outPutMaggiore = null;

// creo la logica per stabilire quale numero è il maggiore

if (numUno > numDue) {
  outPutMaggiore = numUno;
} else if (numDue > numUno) {
  outPutMaggiore = numDue;
} else {
  outPutMaggiore = "Parebbe proprio che lei ha inserito due numeri uguali. Ci viene un pò difficile stabilire quale dei due numeri è il più grande se i due numeri sono uguali. Uguali significa che i due numeri non hanno un maggiore ne un minore perchè sono...uguali. Si accerti quindi di utilizzare due numeri diversi (e non uguali) la prossima volta che usa il nostro potentissimo tool, possibilmente naturali perchè abbiamo testato solo quelli."
}

// mando output in html

document.getElementById('num-maggiore').innerHTML = outPutMaggiore;
