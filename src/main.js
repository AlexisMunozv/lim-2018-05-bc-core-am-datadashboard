//En este caso puedes usar main.js para todo tu código que tenga que ver con mostrar los datos en la pantalla,
const SedeList=document.getElementById('Sede');
const SedeContainer=document.getElementById('SedeContainer');

SedeList.addEventListener('click', function(e){
e.preventDefault();
SedeContainer.innerHTML = '';
getSede();
})


  function getSede(){
    const request = new XMLHttpRequest();
    request.open('GET','http://192.168.1.12:8887/users(1).json',true);
    request.onload = addSede;
    request.onerror = handleError;
    request.send();
   
   function handleError (){
    console.log('error');
   }

   function addSede (){
    const data=JSON.parse(this.responseText);
      for (let i=0; i<data.length; i++){
        let li = document.createElement('li');
        li.innerText=data[i].name;
        SedeContainer.appendChild(li);
    };
  
    console.log();
    
}}



