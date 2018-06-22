const SedeList=document.getElementById('Sede');
const SedeContainer=document.getElementById('SedeContainer');
const AlumnasList=document.getElementById('Alumnas');
const AlumnasContainer=document.getElementById('AlumnasContainer');


SedeList.addEventListener('click', (e)=>{
e.preventDefault();
SedeContainer.innerHTML = '';
getSede();
});

AlumnasList.addEventListener('click',(i)=>{
 i.preventDefault();
 AlumnasContainer.innerHTML = '';
 getUser();
});

function getSede(){
    const request = new XMLHttpRequest();
    request.open('GET','http://192.168.1.12:8887/cohorts/lim-2018-03-pre-core-pw/users(1).json?static=1',true);
    request.onload = addSede;
    request.onerror = handleError;
    request.send();
   
   function handleError (){
    console.log('error');
   }
  
   function addSede (){
    const data=JSON.parse(this.responseText);
      for (let i=0; i<5; i++){
        let sede = document.createElement('sede');
        sede.innerText=data[i].timezone;
        SedeContainer.appendChild(sede);
    };
  
}};

function getUser() {
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/users(1).json')
        .then(res => res.json())
        .then(users1 => {
            // console.log(users1)
            user(users1)
        })
}
function user(users1){
    contenido.innerHTML='';
 for(let valor of users1){
    console.log(valor.nombre) ;
}}


/*function getProgress() {
    fetch('http://192.168.1.12:8887/cohorts/lim-2018-03-pre-core-pw/progress.json?static=1')
        .then(res => res.json())
        .then(progress1 => {
            // console.log(progress)
            progress(progress1)
        })
}

function getCourses() {
    fetch('http://192.168.1.12:8887/cohorts/lim-2018-03-pre-core-pw/progress.json?static=1')
        .then(res => res.json())
        .then(courses1 => {
            // console.log(courses)
            courses(courses1)
        })
} */


