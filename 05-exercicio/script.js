let result = prompt("ADVINHE O NÚMERO QUE ESTOU PENSANDO? ESTÁ ENTRE 0 E 10");
const randomNumber = Math.round(Math.random() * 10);

let xAttempsts = 1;

while(Number(result) != randomNumber){
  result = prompt("ERRO, TENTE NOVAMENTE:");
  xAttempsts++;
}

alert(`PARABÉNS! VOCÊ ADVINHOU O NÚMERO ${randomNumber} EM ${xAttempsts} TENTATIVAS`);