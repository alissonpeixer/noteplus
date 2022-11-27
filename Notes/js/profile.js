const spanNameHome = document.getElementById('name_1');
const spanNameCreatNote = document.getElementById('name_2');

const spanUserName = document.getElementById('name_3');
const spanUserSurname = document.getElementById('surname_1');

const dayTime = document.getElementById('day_time');


function setUserName(name){
  dayTime.innerText = daySec();

  spanNameHome.innerText = name.name;
  spanNameCreatNote.innerText = name.name;
  spanUserName.innerText = name.name;

  spanUserSurname.innerText = name.surname;
}