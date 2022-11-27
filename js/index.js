const btn = document.querySelector(".btn__add");
const tarefasInput = document.querySelector(".tarefas");

const listTarefas = document.querySelector(".tarefas__");


btn.addEventListener("click", (e) =>{
  e.preventDefault();
  
  if(!tarefasInput.value){
    return;
  }

  creatNewTarefa(tarefasInput.value);
})


document.addEventListener('click', (e)=>{
  const el = e.target;
  const classBtn = el.className
  if(!Boolean(classBtn)){
    return
  }
  const classTarefa = classBtn.split(' ');

  const removeli = document.getElementById(classTarefa[0]);

  deletTarefa(classTarefa[0]);
  removeli.remove()
  alert('Tarefa apagada!');
})



function creatNewTarefa(tarefa){
  var data = new Date()

  const li = creatLi(tarefa);
  const randomID = newId()
 
  li.setAttribute("id",`${randomID}`);

  createFooter(li,randomID);
  listTarefas.appendChild(li);

  newTarefa({
    tarefaID: randomID,
    tarefa: tarefa,
    data: `${data.toLocaleDateString()} | ${data.getHours()}:${data.getMinutes()}`
  });

  clearinput();
  return;
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

function createFooter(li,randomID){
  let div = document.createElement("div");
  div.classList.add("tarefa__footer");
  addData(div);
  removeTarefa(div,randomID);

  return li.appendChild(div);
}

function addData(div){
  var data = new Date()
  let span = document.createElement("span");

  span.classList.add("tarefa__data");
  span.innerText = `Criado dia ${data.toLocaleDateString()} as ${data.getHours()}:${data.getMinutes()}`;

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



function clearinput(){
  tarefasInput.value = "";
  tarefasInput.focus();

  return
}
