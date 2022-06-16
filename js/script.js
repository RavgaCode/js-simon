// FUNCTIONS

// Imposto una funzione che mi genera un numero casuale

const randomNumberGenerator = function () {
  let randomNumber = Math.floor(Math.random() * 100 + 1);

  return randomNumber;
};
// Imposto una funzione per verificare se due array sono uguali
const arrayCheck = function (array1, array2) {
  let check = true;
  if (array1.length !== array2.length) return (check = false);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return (check = false);
  }
  return (check = true);
};
// ----------------------------------------

// INIZIO PROGRAMMA

// Invoco la funzione per generare un numero causale all'interno di un ciclo for, e pusho tutti i valori dentro un array
const randomArray = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = randomNumberGenerator();
  randomArray.push(randomNumber);
}
// Stampo l'array dei 5 numeri causali generati tramite un alert
alert(randomArray);

// Imposto una funzione per chiedere i 5 numeri precedentemente stampati 30 secondi dopo la chiusura dell'alert

// Dichiario un array vuoto dove pusherò i numeri digitati dall'utente
const userNumber = [];
setTimeout(askingNumber, 30000);
function askingNumber() {
  for (let i = 0; i < 5; i++) {
    // Chiedo per 5 volte un numero all'utente tramite prompt
    let numberAsked = parseInt(
      prompt("Digita i precedenti numeri in ordine ed uno alla volta")
    );
    userNumber.push(numberAsked);
  }

  //   Invoco la funzione per verificare se i due array, quello utente e quello random, siano uguali
  arrayCheck(userNumber, randomArray);

  // Dichiaro una variabile per raccogliere il valore booleano della funzione di arraycheck. Stampo l'esito della verifica tramite alert
  let finalCheck = arrayCheck(userNumber, randomArray);
  if (finalCheck) {
    alert("Bravo!! Hai indovinato tutti i numeri!!");
  } else {
    alert("Mi spiace ma non hai indovinato tutti i numeri");
  }
}
