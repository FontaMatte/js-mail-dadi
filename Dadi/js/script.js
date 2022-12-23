// Tramite la funzione Math.random genero i 2 numeri casuali compresi tra 1 e 6

// Numero utente
const userNumber = Math.floor(Math.random() * 6) + 1 ;
console.log(userNumber);

// Numero computer
const computerNumber = Math.floor(Math.random() * 6) + 1 ;
console.log(computerNumber);
    
alert('Premi OK per lanciare i dadi')

if (userNumber > computerNumber) {
    alert('Complimenti , hai vinto!!');
}

else if (userNumber < computerNumber) {
    alert('Peccato , il computer ha vinto. Prova di nuovo');
}

else {
    alert('E un pareggio'); 
}


// VERSIONE ALTERNATIVA UTILIZZANDO ARRAY
// let arrNumber = [];

// arrNumber.push(Math.floor(Math.random()*6)+1);
// arrNumber.push(Math.floor(Math.random()*6)+1);

// console.log(arrNumber);
// console.log(typeof(arrNumber[0]));
// console.log(typeof(arrNumber[1]));

// if ((arrNumber[0] > arrNumber[1])) {
//     console.log("hai vinto");
// }

// else if ((arrNumber[0] < arrNumber[1])) {
//     console.log("hai perso");
// }

// else {
//     console.log('E un pareggio'); 
// }

