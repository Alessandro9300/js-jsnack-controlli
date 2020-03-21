 // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// credo due variabili prompt
var alert = alert("Questo tool serve a capire quale delle due parole inserite è la più lunga")
var parolaUno = prompt("inserire una parola");
var parolaDue = prompt("inserire una parola");

// stabilisco la lunghezza delle due parole

lungParolaUno = parolaUno.length;
lungParolaDue = parolaDue.length;

console.log(lungParolaUno , lungParolaDue);


// stabilisco quale delle due parole è più lunga e le stampo in successione

if (lungParolaUno > lungParolaDue) {
  document.getElementById('output-1').innerHTML = parolaUno;
  document.getElementById('output-2').innerHTML = parolaDue;
} else if (lungParolaDue > lungParolaUno) {
  document.getElementById('output-1').innerHTML = parolaDue;
  document.getElementById('output-2').innerHTML = parolaUno;
} else {
  document.getElementById('output-1').innerHTML = parolaDue +  " " + parolaUno;
}
