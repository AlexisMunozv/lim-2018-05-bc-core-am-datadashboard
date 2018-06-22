const SedeList = document.getElementById('Sede');
const SedeContainer = document.getElementById('SedeContainer');
const AlumnasList = document.getElementById('Alumnas');
const AlumnasContainer = document.getElementById('AlumnasContainer');

const dataCohorts = '../data/cohorts.json';
const dataUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users(1).json';
const dataProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';


let dataCohorts1 = new XMLHttpRequest();
dataCohorts1.open('GET',dataCohorts,true);
request.onload = addSede;
request.send();