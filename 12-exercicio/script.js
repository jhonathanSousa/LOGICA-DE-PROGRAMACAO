// RECEBENDO ANO DO CURSO
let year = prompt('Informe o ano do seu curso: (1 | 2 | 3)');
year = Number(year);
// RECEBENDO NOME DO CURSO
let course = prompt('Informe seu curso: (ti | adm)');

// CURSOS DE INFORMÁTICA E ADMINISTRAÇÃO
if (year === 1 && course === "ti"){
  alert(`Por favor , encaminhar-se para o prédio A - 1º andar`);
}else if (year === 2 && course === "ti"){
  alert(`Por favor , encaminhar-se para o prédio A - 2º andar`);
}else if(year === 3 && course === "ti"){
  alert(`Por favor , encaminhar-se para o prédio A - 3º andar`);
}else if(year === 1 && course === "adm"){
  alert(`Por favor , encaminhar-se para o prédio B - 1º andar`);
}else if(year === 2 && course === "adm"){
  alert(`Por favor , encaminhar-se para o prédio B - 2º andar`);
}else if(year === 3 && course === "adm"){
  alert(`Por favor , encaminhar-se para o prédio B - 3º andar`);
}else{
  alert(`Por favor. Digite o ano ou nome do curso correto`);
}
