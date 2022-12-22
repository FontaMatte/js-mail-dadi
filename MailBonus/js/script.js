// 1.CHIEDO ALL'UTENTE LA MAIL 
// 2.VERIFICO SE LA MAIL E' PRESENTE ALL'INTERNO DI UNA MAILING LIST
// 3.STAMPO L'ESITO DELLA VERIFICA

const userMail = document.getElementById('user-email');
const verifyButton = document.getElementById('verify-mail');

// Variabile per verificare se l'email è autorizzata
let emailAuthorized = false;

// genero un array per simulare la mailing list
const mailingList = ['mail1','mail2','mail3','pinco.pallo@gmail.com','mail4',];

verifyButton.addEventListener('click',
    function() {
        // utilizzo un ciclo 'for' per confrontare la mail inserita con quelle presenti nell-array
        for (let i = 0 ; i < mailingList.length ; i++) {

        if (userMail.value == mailingList[i]) {
            emailAuthorized = true;
            break;
        }
        }

        // stampo i risultati
        if (emailAuthorized == true) {

            document.getElementById('result').innerHTML = `Benvenuto, ${userMail.value}!`;

        }

        else {

            document.getElementById('result').innerHTML = 'Accesso negato: email non autorizzata.';

        }
    }    
)    