// PEDIR PARA O USUÁRIO DGITAR UM NÚMERO E REALIZAR A TABUADA DO VALOR ATÉ O 10.
let output = document.querySelector('#output');

let number = prompt('Digite um número:');
number = Number(number);

for(let initial = 1; initial <= 10; initial++){
  
  let calc = number * initial;
  let brokeLine = '</br>';

  document.write(`${number} X ${initial} = ${calc} ${brokeLine}`);
}