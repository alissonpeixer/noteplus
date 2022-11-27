function daySec(){
    let msg

    var data = new Date()
    let hour = data.getHours();
    
    if(hour <= 12){
        msg = "Bom dia,";
    }
    else if(hour <= 18 ){
        msg = "Bom tarde,";
    }
    else if(hour <= 24){
        msg = "Boa noite,";
    }

    return msg
}

function data(){
    let data = new Date()

    return data
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
  