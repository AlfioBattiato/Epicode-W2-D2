/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 5;
let b = 10;
if (a > b) {
  console.log("il numero maggiore è " + a);
} else {
  console.log("il numero maggiore è " + b);

}
//oppure
//a>b ?   console.log("il numero maggiore è " + a) :   console.log("il numero maggiore è " + b)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let equal=6
console.log(equal === 5 ? "is equal" : "not equal")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let divisibile=11
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(divisibile % 5 === 0 ? "divisibile per 5" : "non divisibile, o risultato decimale")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10
let num2 = 2

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
  console.log('numero 8 presente')
} else {
  console.log('nessun numero 8 presente')
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let articolo1 = 2;
let articolo2 = 30;
let totalShoppingCart = articolo1 + articolo2;


if (totalShoppingCart > 50) {
  console.log("hai diritto alla spedizione gratuita, totale da pagare = " + totalShoppingCart)
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("il costo della spedizione è di 10 euro, totale da pagare = " + totalShoppingCart)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = articolo1 + articolo2

if (totalShoppingCart > 50) {
  totalShoppingCart = articolo1 - (articolo1 * 0.20) + articolo2 - (articolo2 * 0.20)

  console.log("BLACK FRIDAY SCONTO 20%, spedizione gratuita, totale da pagare = " + totalShoppingCart)
} else {
  totalShoppingCart = articolo1 - (articolo1 * 0.20) + articolo2 - (articolo2 * 0.20)
  totalShoppingCart = totalShoppingCart + 10;
  console.log("BLACK FRIDAY SCONTO 20%, spedizione 10 euro, totale da pagare = " + totalShoppingCart)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 9;
let numero2 = 8;
let numero3 = 100;
if (numero1 >= numero2 && numero1 >= numero3) {
  if (numero2 >= numero3) {
    console.log(numero1, numero2, numero3);
  } else {
    console.log(numero1, numero3, numero2);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  if (numero1 >= numero3) {
    console.log(numero2, numero1, numero3);
  } else {
    console.log(numero2, numero3, numero1);
  }
} else {
  if (numero1 >= numero2) {
    console.log(numero3, numero1, numero2);
  } else {
    console.log(numero3, numero2, numero1);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let tipo = 1

typeof tipo === "number" ? console.log("type number") : console.log("is not a number")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pari = 2

if (pari % 2 === 0) {
  console.log("il numero è pari")
} else {
  console.log("il numero è dispari")
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 5
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

// oppure
// let val = 5
// if (val < 10 && val >= 5) {
//   console.log("Meno di 10");
// } else if (val < 5) {
//   console.log("Meno di 5");
// } else {
//   console.log("Uguale a 10 o maggiore");
// }

/* SCRIVI QUI LA TUA RISPOSTA */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}



/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array=[]
array.push(1,2,3,4,5,6,7,8,9,10)

console.log(array)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[9]=100;
console.log(array)

//oppure
// array[array.lenght-1]=100

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

