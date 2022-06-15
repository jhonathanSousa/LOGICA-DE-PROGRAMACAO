// Pedir para o usuario digitar um número
let number = prompt('Digite um número:');
number = Number(number);

if(number >= 20 && number <= 90){
  alert('DENTRO DA FAIXA')
}else{
  alert('FORA DA FAIXA');
}