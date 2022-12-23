// 1.CHIEDO ALL'UTENTE LA MAIL 
// 2.VERIFICO SE LA MAIL E' PRESENTE ALL'INTERNO DI UNA MAILING LIST
// 3.STAMPO L'ESITO DELLA VERIFICA
 
// uso prompt per chiedere la mail
const userMail = prompt("Qual'e' il tuo indirizzo mail? (indirizzo per essere verificato: pinco.pallo@gmail.com");

// Variabile per verificare se l'email è autorizzata
let emailAuthorized = false;

// genero un array per simulare la mailing list
const mailingList = ['mail1','mail2','mail3','pinco.pallo@gmail.com','mail4',];

// utilizzo un ciclo 'for' per confrontare la mail inserita con quelle presenti nell-array
for (let i = 0 ; i < mailingList.length ; i++) {

if (userMail == mailingList[i]) {
    emailAuthorized = true;
}
}

// stampo i risultati
if (emailAuthorized == true) {

alert(`Benvenuto, ${userMail}!`);

}

else {

alert('Accesso negato: email non autorizzata.');

}