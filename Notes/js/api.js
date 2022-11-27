const urlApi = 'http://localhost:9901'

getTarefa()




function getTarefa(){
  const infoLocal = localStorage.getItem('userdata');
  const acessToken = localStorage.getItem('token');

  fetch(`${urlApi}/note/getNotes`,{
    headers: {
      "Authorization": "Basic " + btoa(infoLocal),
      "Token": "Basic" + ":" +  btoa(acessToken)
    },
    method: "GET"
  })
  .then((res) =>res.json())
  .then((data) => {
    console.log(data)
    data.length && data.map(tarefa =>{

      const li = creatLi(tarefa.body);

      li.setAttribute("id",`${tarefa.id}`);

      createFooterAPI(li,tarefa);
      listTarefas.appendChild(li);

      console.log(tarefa)
      return;

    })
  })
  try {

  } catch (error) {

  }
}


function newTarefa(data){
  const acessToken = localStorage.getItem('token');



  fetch(`${urlApi}/note/created`,
  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer : ${btoa(acessToken)}`,
      },
      method: "POST",
      body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}



function deletTarefa(tarefaId){
  fetch("https://noteapi.alissonpeixer.repl.co/remove",
  {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        tarefaId: tarefaId
      })
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}




function createFooterAPI(li,tarefa){
  console.log(tarefa)
  let div = document.createElement("div");
  div.classList.add("tarefa__footer");
  creatData(div,tarefa.createdAt.split("|"));
  removeTarefa(div,`${tarefa.tarefaId}`);

  return li.appendChild(div);
}


function creatData(div,data){

  console.log(data)

  let span = document.createElement("span");

  span.classList.add("tarefa__data");
  span.innerText = `📝 Criado dia ${data[0]} as ${data[1]}`;

  div.appendChild(span);
  return
}

getSession();
function getSession(){
  const infoLocal = localStorage.getItem('userdata');
  const info = JSON.parse(infoLocal);

  setUserName(info)
}