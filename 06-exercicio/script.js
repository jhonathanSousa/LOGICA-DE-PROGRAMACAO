let output = document.querySelector("#output");
let msg = [];

for(let yearInitial = 1930; yearInitial <= 2022; yearInitial+=4){
  msg += "<li>" + yearInitial + "</li>";
  output.innerHTML = msg
}