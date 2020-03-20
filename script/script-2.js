 // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// credo due variabili prompt

var parolaUno = prompt("inserisco una parola");
var parolaDue = prompt("inserisco una parola");

// stabilisco la lunghezza delle due parole

lungParolaUno = parolaUno.length;
lungParolaDue = parolaDue.length;

console.log(lungParolaUno , lungParolaDue);


// stabilisco quale delle due parole è più lunga e le stampo in successione

if (lungParolaUno > lungParolaDue) {
  document.getElementById('output').innerHTML = parolaUno + " " + parolaDue;
} else if (lungParolaDue > lungParolaUno) {
  document.getElementById('output').innerHTML = parolaDue +  " " + parolaUno;
} else {
  document.getElementById('output').innerHTML = parolaDue +  " " + parolaUno;
}
