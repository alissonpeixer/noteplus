const tarefasInput = document.querySelector(".tarefas");

const listTarefas = document.querySelector(".note_container");

const btnAdd = document.getElementById("btn_add")

const textLength = document.getElementById("length_text");
const lengthText = document.querySelector(".length___")



document.addEventListener('DOMContentLoaded', e =>{
  btnAdd.setAttribute("class", "btn__add");
})

document.addEventListener('click', e =>{
  const el = e.target;
  const classTarefa = el.className.split(' ');

  if(classTarefa[1] === "tarefa__remove"){
    const removeli = document.getElementById(classTarefa[0]);
    deletTarefa(classTarefa[0]);
    removeli.remove()

    alert('Anotação apagada!');
  }
})





document.addEventListener('keyup', e =>{

  if(tarefasInput.value.length > 140){
    lengthTexts(tarefasInput.value.length)
    btnAdd.setAttribute("class", "btn__nosend");
    textLength.setAttribute("class", "length__text n__nosend");
    return
  }



  btnAdd.setAttribute("class", "btn__send btn__add");
  textLength.setAttribute("class", "length__text");

  lengthTexts(tarefasInput.value.length);

  btnAdd.addEventListener('click', e =>{
    e.preventDefault();

    if(!tarefasInput.value){
      return;
    }
    if(e.target.className === "btn__nosend"){
      return;
    }


    creatNewTarefa(tarefasInput.value);
  })
})





function creatNewTarefa(tarefa){
  let data = new Date()

  const li = creatLi(tarefa);
  const randomID = newId()

  li.setAttribute("id",`${randomID}`);

  createFooter(li,randomID);
  listTarefas.appendChild(li);

  const infoLocal = localStorage.getItem('userdata');
  const info = JSON.parse(infoLocal);

  newTarefa({
    username: info.username,
    tarefaID: randomID,
    tarefa: tarefa,
    data: `${data.toLocaleDateString()} | ${data.getHours()}:${data.getMinutes()}`
  });

  alert('Anotação criada!');
  clearinput();
  closeNavbarNote();
  return;
}



function lengthTexts(data){
  const valuE = data
  lengthText.innerText  = `${valuE}`

}



function createFooter(li,randomID){
  let div = document.createElement("div");
  div.classList.add("tarefa__footer");
  addData(div);
  removeTarefa(div,randomID);

  return li.appendChild(div);
}



function addData(div){
  let data = new Date()
  let span = document.createElement("span");

  span.classList.add("tarefa__data");
  span.innerText = `📝 Criado dia ${data.toLocaleDateString()} as ${data.getHours()}:${data.getMinutes()}`;

  div.appendChild(span);
  return
}



function removeTarefa(div, randomID){
  let span = document.createElement("span",);
  span.setAttribute("class", `${randomID} tarefa__remove`);
  div.appendChild(span);
  return
}




function newId(){
  let id = Math.floor(Math.random() * 1000)
  return id+"alisson"
}




function creatLi(value){
  let li = document.createElement("li");
  let div = document.createElement("div");

  div.classList.add("tarefa__div");
  div.innerText = value;
  li.classList.add(`tarefa__li`);
  li.appendChild(div);
  return li
}



function clearinput(){
  tarefasInput.value = "";
  lengthText.innerText  = `0`;
  btnAdd.setAttribute("class", "btn__add");
  return
}

