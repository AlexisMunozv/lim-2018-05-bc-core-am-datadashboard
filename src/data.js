const SedeList=document.getElementById('Sede');
const SedeContainer=document.getElementById('SedeContainer');
const AlumnasList=document.getElementById('Alumnas');
const AlumnasContainer=document.getElementById('AlumnasContainer');


SedeList.addEventListener('click', function(e){
e.preventDefault();
SedeContainer.innerHTML = '';
getSede();
});

AlumnasList.addEventListener('click', function(e){
    e.preventDefault();
    AlumnasContainer.innerHTML = '';
    getUser();
    });


function getUser() {
    fetch('http://192.168.1.12:8887/cohorts/lim-2018-03-pre-core-pw/users(1).json?static=1')
        .then(res => res.json())
        .then(users1 => {
             console.log(users1)
           // users(users1)
        // for(let valor of users){
                // console.log(valor.nombre)
              
        });
}

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


