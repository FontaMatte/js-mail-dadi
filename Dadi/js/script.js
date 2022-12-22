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