let items = [];

for(let item = 0; item < 10; item++){
  let itemName = prompt("Informe o item que deseja adicionar na lista " 
  + (item +1));

  items[item] = itemName
}

alert(items);