/*
Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per invertire i caratteri di una stringa.
Capire se la parola inserita è palindroma

Pari e Dispari
L'utente sceglie pari o dispari
L'utente inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.
*/

//PALINDROMA
var parola = prompt('Inserisci una parola.').toLowerCase().trim();

function inverti (word) {
  var parolaInvertita = '';
  for (var i = word.length - 1; i >= 0; i--) {
    parolaInvertita += word[i];
  }
  return parolaInvertita;
}

 if (inverti(parola) === parola) {
   alert('La parola inserita e\' palindroma!');
 } else {
   alert('La parola inserita non e\' palindroma!');
 }
