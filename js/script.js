const archivioEmail = ['marcorossi@gmail.com', 'gianlucaverdi@gmail.com', 'federicogialli@gmail.com', 'alessandrabianchi@yahoo.it', 'barbaracelestini@libero.it', 'francescototti@gmail.com', 'lorenzoinsigne@yahoo.com', 'robertobaggio@gmail.com', 'diegoarmandomaradona@gmail.com', 'fabiocannavaro@yahoo.com']

let emailUtente = prompt('Per favore inserisci la tua email');
// let emailUtente = 'robertobaggio@gmail.com';
let emailTrovata = false;
const esito = document.getElementById('messaggio');
// const imgEsito = document.getElementById('imgEsito');
const row = document.querySelector('.row');
const containerDadi = document.querySelector('.container-dadi');

console.log(archivioEmail[9]);

for(let i=0; i<archivioEmail.length; i++){
  if(emailUtente===archivioEmail[i]){
     emailTrovata=true;
  }
}

console.log(emailTrovata);

if(emailTrovata){
 esito.innerHTML = 
`
<h2>L'indirizzo email è presente nel nostro archivio</h2>
<h1 class="text-success"><strong>ACCESSO CONSENTITO</strong></h1>
`
let dadoUtente = document.createElement('div');
dadoUtente.className = 'dado-utente';
row.append(dadoUtente);
dadoUtente.innerHTML = 
`
<div class="btn btn-primary">
LANCIA IL DADO</div>
`

let numUtente = document.createElement('div');
let numCPU = document.createElement('div');
numUtente.className = 'dado-utente';
containerDadi.append(numUtente);

let totWinUtente= 0;
let totWinCPU= 0;

const buttonDado = document.querySelector('.btn-primary');
buttonDado.addEventListener('click', function(){
  let numeroUtente = Math.floor((Math.random()*6 + 1));

  numUtente.innerHTML = 
  `
  <h2 class="text-center">
   ${numeroUtente}
  </h2>
  `

  numCPU.className = 'dado-cpu';
  containerDadi.append(numCPU);
  
    let numeroCPU = Math.floor((Math.random()*6 + 1));
  
    numCPU.innerHTML = 
    `
    <h2 class="text-center">
     ${numeroCPU}
    </h2>
    `

    let resultPartita = document.querySelector('.fc-result');
    
    // let totWinCPU = 0;
   if(numeroUtente > numeroCPU) {
     resultPartita.innerHTML = ` <h4>HAI VINTO</h4>`;
     totWinUtente = totWinUtente + 1;
     console.log(totWinUtente);
    }

   if(numeroUtente < numeroCPU){
      resultPartita.innerHTML = ` <h4>HAI PERSO</h4>`;
      totWinCPU = totWinCPU + 1;
  
   } 


   if(numeroUtente == numeroCPU) resultPartita.innerHTML = ` <h4>PAREGGIO</h4>`;

    numUtente.append(totWinUtente);
    numCPU.append(totWinCPU);


   


    

console.log(resultPartita);

  
}

);


// FINE PRIMO DADO


let dadoCPU = document.createElement('div');
dadoCPU.className = 'dado-cpu';
row.append(dadoCPU);

dadoCPU.innerHTML =
`
<div class="btn btn-warning cursor-none">
LANCIO CPU</div>
`



}

else{

esito.innerHTML = 
`
<h2>L'indirizzo email non è presente nel nostro archivio</h2>
<h1 class="text-danger"><strong>ACCESSO NEGATO</strong></h1>
`
let imgEsito = document.createElement('div');
imgEsito.className = 'imgEsito';
row.append(imgEsito);


imgEsito.innerHTML =
`
 <img src="img/rejected-g5f347d89a_1920.png" alt="">
`
}


