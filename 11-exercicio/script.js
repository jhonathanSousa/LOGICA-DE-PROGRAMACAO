let listStudants = [
  {
    name: 'Jorge',
    noteOne: 8,
    noteTwo: 5
  },
  {
    name: 'Bernado',
    noteOne: 10,
    noteTwo: 7
  },
  {
    name: 'Patricia',
    noteOne: 10,
    noteTwo: 8
  },
  {
    name: 'Leticia',
    noteOne: 6,
    noteTwo: 7
  }
];

// CALCULAR A MÉDIA DAS NOTAS
function averageNote(noteOne, noteTwo){
  return ((noteOne + noteTwo) / 2);
}

function printStudant(studant){
  if(averageNote(studant.noteOne, studant.noteTwo) > 7){
    return `
      Parabéns ${studant.name} você foi aprovado
      ${averageNote(studant.noteOne, studant.noteTwo)}`;
  }else{
   return `Que pena, ${studant.name} você foi reprovado
    ${averageNote(studant.noteOne, studant.noteTwo)}`;
  }
}

for (let studant of listStudants){
  let noteMessage = printStudant(studant);
  alert(noteMessage)
}
