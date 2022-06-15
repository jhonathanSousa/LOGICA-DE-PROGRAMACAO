// Recebendo a idade do nadador
let age = prompt("Qual a idade do nadador:");
age = Number(age);

// Categorias
if(age < 5){
  alert("NÃO TEMOS CATEGORIA PARA ESS IDADE :)");
}else if(age >= 5 && age <= 7){
  alert("INFANTIL A - DE 5 A 7 ANOS ");
}else if(age >= 8 && age <= 11){
  alert("INFANTIL B - DE 8 A 11 ANOS");
}else if(age >= 12 && age <= 13){
  alert("JUVENIL A - DE 12 A 13 ANOS");
}else if(age >= 14 && age <= 17){
  alert("JUVENIL B - DE 14 A 17 ANOS");
}else{
  alert("ADULTO - A PARTIR DE 18 ANOS")
}
