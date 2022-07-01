/* CRIE UM VETOR QUE CONTENHA OS SEGUINTES NOMES: “ANDRÉ”, “ANA PAULA”, “JÚLIO”, “MARCELA”, “RUBEM”. UTILIZE O LAÇO DE REPETIÇÃO FOR PARA PERCORRER ESTA LISTA. QUANDO A LEITURA FOR IGUAL A “JÚLIO”, UTILIZE O COMANDO CONTINUE. ELE IRÁ EXIBIR TODOS OS OUTROS NOMES DESTE VETOR. UTILIZE O CONSOLE.LOG PARA LOGAR OS DADOS NO CONSOLE. */

let names = ['ANDRÉ','ANA PAULA','JÚLIO','MARCELA','RUBEM'];
let empty;

for(let initial = 0; initial < names.length; initial++){
  
  empty = names[initial];
  
  if(empty == 'JÚLIO'){
    continue;
  }
  
  console.log(empty);
}


