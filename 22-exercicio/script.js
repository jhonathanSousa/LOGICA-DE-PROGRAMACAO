let items;
let listItems = [];

for(let initial = 0; initial < 10; initial++){
  items = prompt('Digite o nome do item:');
  listItems[initial] = items;
}

document.write(`${listItems.sort()}`);