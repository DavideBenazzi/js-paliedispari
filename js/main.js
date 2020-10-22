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

/**
*PALINDROMA*********************************************************************
*/
//CHIEDO PAROLA ALL'UTENTE
var parola = prompt('Inserisci una parola.').toLowerCase().trim();
//FUNZIONE PER INVERTIRE L'ORDINE DEI CARATTERI IN UNA STRINGA
function inverti (wordToReverse) {
  var parolaInvertita = '';
  for (var i = wordToReverse.length - 1; i >= 0; i--) {
    parolaInvertita += wordToReverse[i];
  }
  return parolaInvertita;
}
//DECISIONE PER CAPIRE SE LA PAROLA E' PALINDROMA
 if (inverti(parola) === parola) {
   alert('La parola inserita e\' palindroma!');
 } else {
   alert('La parola inserita non e\' palindroma!');
 }

/**
*PARI E DISPARI*****************************************************************
*/
//CONTROLLO PER DATI IMMESSI DALL'UTENTE
var scommessa = '';
var numeroUtente = 0;
//CONTROLLO STRINGA
do {
  scommessa = prompt('Per favore digitare o pari o dispari.').toLowerCase().trim();
} while ( !( (scommessa === 'pari') || (scommessa === 'dispari') ) );
//CONTROLLO NUMERO
do {
  numeroUtente = parseInt( prompt('Per favore digitare un numero tra 1 e 5.') );
} while ( (numeroUtente < 1) || (numeroUtente > 5) );
//FUNZIONE PER CALCOLARE UN NUMERO RANDOM DA 1 A 5
function random1to5 () {
  return (Math.floor( Math.random() * 5 ) + 1);
}
//FUNZIONE PER STABILIRE SE UN NUMERO E' PARI O DISPARI
function pariDispari (num) {
  if (num % 2 === 0) {
    return 'pari';
  }
  return 'dispari';
}
//VARIABILI PER DECISIONE VINCITORE
var numRandomPc = random1to5();
var somma = numeroUtente + numRandomPc;
//DECISIONE SU PARI O DISPARI
if ( (pariDispari(somma) === 'pari') && (scommessa === 'pari') ) {
  alert('Congratulazioni! Hai vinto! Il tuo numero era : ' + numeroUtente + ',' + ' mentre il numero scelto dal pc era : ' + numRandomPc + ' quindi la somma fa : ' + somma + ' e di conseguenza è pari, infatti tu avevi scelto : ' + scommessa);
} else if ( (pariDispari(somma) === 'dispari') && (scommessa === 'dispari') ) {
  alert('Congratulazioni! Hai vinto! Il tuo numero era : ' + numeroUtente + ',' + ' mentre il numero scelto dal pc era : ' + numRandomPc + ' quindi la somma fa : ' + somma + ' e di conseguenza è dispari, infatti tu avevi scelto : ' + scommessa);
} else if ( (pariDispari(somma) === 'pari') && (scommessa === 'dispari') ) {
  alert('Mi spiace! Hai perso! Il tuo numero era : ' + numeroUtente + ',' + ' mentre il numero scelto dal pc era : ' + numRandomPc + ' quindi la somma fa : ' + somma + ' e di conseguenza è pari e tu avevi scelto : ' + scommessa);
} else if ( (pariDispari(somma) === 'dispari') && (scommessa === 'pari') ) {
  alert('Mi spiace! Hai perso! Il tuo numero era : ' + numeroUtente + ',' + ' mentre il numero scelto dal pc era : ' + numRandomPc + ' quindi la somma fa : ' + somma + ' e di conseguenza è dispari, e tu avevi scelto : '+ scommessa);
}
