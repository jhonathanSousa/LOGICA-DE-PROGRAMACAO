// Obter notas dos 4º bimestres
let bimOne = prompt('Qual foi a nota do 1º bimestre:');
let bimTwo = prompt('Qual foi a nota do 2º bimestre:');
let bimThree = prompt('Qual foi a nota do 3º bimestre:');
let bimFour = prompt('Qual foi a nota do 4º bimestre:');

// Converter notas do bimestres em número
bimOne = Number(bimOne);
bimTwo = Number(bimTwo);
bimThree = Number(bimThree);
bimFour = Number(bimFour);

// Calculando média
let media = (bimOne + bimTwo + bimThree + bimFour) / 4;

if(media < 5){
  alert("ALUNO REPROVADO");
}else if(media == 5){
  alert("ALUNO EM RECUPERAÇÃO");
}else{
  alert("ALUNO APROVADO");
}

