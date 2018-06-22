const SedeList=document.getElementById('Sede');
const SedeContainer=document.getElementById('SedeContainer');
const AlumnasList=document.getElementById('Alumnas');
const AlumnasContainer=document.getElementById('AlumnasContainer');

SedeList.addEventListener('click', function(e){
e.preventDefault();
SedeContainer.innerHTML = '';
getSede();
})

AlumnasList.addEventListener('click', function(e){
    e.preventDefault();
    AlumnasContainer.innerHTML = '';
    getAlumnas();
    })

  function getSede(){
    const request = new XMLHttpRequest();
    request.open('GET','../data/cohorts.json',true);
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

function getAlumnas(){
    const request = new XMLHttpRequest();
    request.open('GET','../data/cohorts/lim-2018-03-pre-core-pw/users(1).json',true);
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
        AlumnasContainer.appendChild(li);
    };
  
    console.log();
    
}}