/*RECEBER E SOMAR 2 NÚMEROS E INFORMAR SE O RESULTADO É POSITIVO OU NEGATIVO */

let numberOne = prompt('Digite o primeiro número: ');
numberOne = Number(numberOne);

let numberTwo = prompt('Digite o segundo número:');
numberTwo = Number(numberTwo);

let som = numberOne + numberTwo;

if(som >= 0){
  alert(`O resultado ${som} é : POSITIVO`);
}else{
  alert(`O resultado ${som} é : NEGATIVO`);
}