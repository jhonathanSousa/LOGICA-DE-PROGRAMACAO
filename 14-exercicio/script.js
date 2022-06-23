/*
Digamos que um formulário receba duas informações sobre uma pessoa: a idade e se ela é ou não sócia de um clube. Baseado nestas informações, temos que apresentar o preço de um evento para este perfil. Temos 4 faixas de preço:

Sócios: Grátis
Não sócios menores de 18 anos: R$ 6,00
Não sócios maiores de 18 maiores de 18 anos: R$ 12,00
Maiores de 65 anos: Grátis

*/
let name = prompt('Digite seu nome:');

let age = prompt('Digite sua idade:');
age = Number(age);

let information = prompt('Você é sócia de um clube?');

if(information == "sim" || age >= 65){
  alert(`Olá ${name}, a sua entrada é GRÁTIS :)`);
}else if (information == "não" || age <= 18){
  alert(`Olá ${name}, a sua entrada custa R$ 6,00`);
}else{
  alert(`Olá ${name}, a sua entrada custa R$ 12,00`);
}