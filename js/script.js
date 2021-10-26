const archivioEmail = ['marcorossi@gmail.com', 'gianlucaverdi@gmail.com', 'federicogialli@gmail.com', 'alessandrabianchi@yahoo.it', 'barbaracelestini@libero.it', 'francescototti@gmail.com', 'lorenzoinsigne@yahoo.com', 'robertobaggio@gmail.com', 'diegoarmandomaradona@gmail.com', 'fabiocannavaro@yahoo.com']

let emailUtente = prompt('Per favore inserisci la tua email');
// let emailUtente = 'robertobaggio@gmail.com';
let emailTrovata = false;
const esito = document.getElementById('messaggio');
// const imgEsito = document.getElementById('imgEsito');
const row = document.querySelector('.row');

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

let dadoCPU = document.createElement('div');
dadoCPU.className = 'dado-cpu';
row.append(dadoCPU);

let numeroUtente = Math.floor((Math.random()*6 + 1));
console.log(numeroUtente);

let numeroCPU = Math.floor((Math.random()*6 + 1));
console.log(numeroCPU);

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


