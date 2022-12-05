/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let abc = "string" //--> Le strigns sono alphanumeriche ossia della a alla z e da 0 a 9, sono usate con le virgolette, 
console.log(abc)


let num = 09345//   --> Datatype numerico, sono i numeri da 0 a 9 e posso essere infinity.
console.log(num)

let bool = true
console.log(bool)//-->Solo puo essere vero o falso
console.log(!bool)

let vuoto = null    //-->è vuoto, non ha un valore dentro della variabile
console.log(vuoto)

let und = undefined //-->che non ha un valore o non è stato dichiarato
console.log(und)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Carlos"
console.log(name)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12
let num2 = 20

somma = num1 + num2
console.log("Il risultato della somma è: " + somma)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x
x = 12

console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Sarmiento"
console.log(name)

const cognome = name

// cognome = "Zarmiento"
// typeError: Assignment to constant variable.


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
sottrazione = x - 4
console.log("Il risultato della sottrazione è: " + sottrazione)




/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name1 = "john"
name2 = "John"

console.log(name1 + " e " + name2 + " sono uguali?: " + (name1 === name2))

if (name1 !== name2) {
  lower = name2.toLowerCase()
  console.log("ora entrambi sono uguali: " + "name1: " + name1 + " name2: " + name2.toLowerCase())

}

console.log("name2: " + name2)