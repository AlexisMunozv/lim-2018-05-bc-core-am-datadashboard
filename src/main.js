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
      for (let i=0; i<data.length; i++){
        let users = document.createElement('users');
        users.innerText=data[i].timezone;
        SedeContainer.appendChild(users);
    };
  
    console.log(data);
  }};
 
function computeUsersStats(users, progress, courses){
 
 }


