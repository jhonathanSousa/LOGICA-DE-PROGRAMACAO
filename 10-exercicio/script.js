

let numberOne = prompt('Digite o primeiro número:');
numberOne = Number(numberOne);

let numberTwo = prompt('Digite o segundo número:');
numberTwo = Number(numberTwo);

let soma = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = (numberOne / numberTwo).toFixed(2);
let restDiv = numberOne % numberTwo;

alert(`A soma é : ${soma}`);
alert(`A subtração é : ${sub}`);
alert(`A multiplicação é : ${mult}`);
alert(`A divisão é : ${div}`);
alert(`O resto da divisão é : ${restDiv}`);

// [ ] VERIFIQUE SE A SOMA DOS DOIS NÚMEROS É PAR (OU ÍMPAR)
if(soma % 2 === 0){
  alert(`O número ${soma} é PAR`);
}else{
  alert(`O número ${soma} é IMPAR`);
}

// [ ] VERIFIQUE SE OS DOIS NÚMEROS INSERIDOS SÃO IGUAIS (OU DIFERENTES);
if (numberOne !== numberTwo){
  alert('OS DOIS NÚMEROS INSERIDOS SÃO DIFERENTES');
}else{
  alert('OS DOIS NÚMEROS INSERIDOS SÃO IGUAIS');
}