let seconds = document.querySelector('#seconds');

function countDown(){
  setTimeout(function(){
    
    let time = Number(seconds.textContent) - 1
    
    seconds.textContent = time;

    if(time < 0){
      seconds.textContent = 5;
    }

    countDown();    
  
  },1000); 
}
 
countDown();




