/* CRIE UM LAÇO DE REPETIÇÃO FOR. ESTE LAÇO DEVERÁ COMEÇAR A ITERAR NO NÚMERO 1. ENQUANTO O ÍNDICE FOR MENOR QUE 10, O LAÇO DEVERÁ CONTINUAR ITERANDO.

COM O LAÇO CRIADO, CRIA UM ESTRUTURA CONDICIONAL QUE, UTILIZANDO O COMANDO BREAK, PARE A ITERAÇÃO QUANDO ELA ALCANÇAR O VALOR 5. CASO ESTA CONDIÇÃO SEJA ATENDIDA, MOSTRE OS NÚMEROS UTILIZANDO O CONSOLE.LOG. */

for(let initial = 1; initial <= 10; initial++){

  console.log(initial);

  if(initial == 5){
    break;
  }
}