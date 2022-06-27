let namePerson = null;
let sex = null;
let men = 0;
let woman = 0;

for(let initial = 1; initial <= 10; initial++){

  namePerson = prompt('Digite seu nome:');
  sex = prompt('Digite seu sexo:');

  if(sex === 'm'){
    men++;
  }else{
    woman++;
  } 

}

alert(`O total foi de : ${men} homens`);
alert(`O total foi de: ${woman} mulheres`);
