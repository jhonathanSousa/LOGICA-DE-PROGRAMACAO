let numberOne = prompt('Digite o primero número:');
numberOne = Number(numberOne);

let numberTwo = prompt('Digite o segundo número:');
numberTwo = Number(numberTwo);

let empty = null;

if (numberOne > numberTwo){
  empty = numberTwo;
  alert(`A sequência é ${empty} e ${numberOne}`);
}else{
  empty = numberOne;
  alert(`A sequência é ${numberOne} e ${numberTwo}`);
}


