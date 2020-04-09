/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(mTime){

  let parsedTime = parseInt(mTime.split(':'));
<<<<<<< HEAD
  if(parsedTime < 12){
    return ('Good Morning');
  }
  
  else if( 12<= parsedTime && parsedTime <=17){
    return ('Good Afternoon');
  }
  
  else {
=======
  if(parsedTime <= 12){
    return ('Good Morning');
  }
  
  else if( 12<mTime<17){
    return ('Good Afternoon');
  }
  
  else (){
>>>>>>> a754a6782ac942757fdaf43e154edceb1b08af5f
    return ('Good Evening');
  }
}
/* Write your implementation of displayMessage() */
<<<<<<< HEAD
function displayMessage(greet){
   document.getElementById('greeting').innerText = greet ;
  
=======
function displayMessage(){
  document.getElementById('greeting').textContent = greet();
>>>>>>> a754a6782ac942757fdaf43e154edceb1b08af5f
}

