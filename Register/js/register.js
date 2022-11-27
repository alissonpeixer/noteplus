const userLoged = localStorage.getItem('token');


if (userLoged) {
  window.location.href = "http://localhost:5500/web/Notes";
}

function singUp() {
  const name = document.getElementById("name").value;
  const surName = document.getElementById("surname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  if(!name || !surName || !username || !password || !email || !password){
    alert("Erro | Validação!");
    return;
  }

  fetch('http://localhost:9901/user/signup',{

    headers: {
      'Content-Type': 'application/json',
      'authorization': 'NullTypesEnumValue'
    },

    method: 'POST',
    body: JSON.stringify({
      name: name,
      surname: surName,
      username: username,
      email: email,
      password: password
    })
  })


  .then((res) =>{
    console.log(res)


    const data = res.json()
    let valid

    if(res.status=== 429){
      alert('Opa amigo pera ai, você está indo raipido demais!')
    }


    if(res.status === 402){

      data.then( object =>{

        if(object.code === 'uE104'){
          alert('Username ou E-mail já em uso!')


          return
        }

        return
      })


      return valid = false
    }






    // is for all is completed

    return data

  })


  .then((object) => {



    if(!object){
      //will not proceguir
      return
    }

    console.log(object)

    const info = {
      name: object.data.name,
      surname: object.data.surname,
      id: object.data.id,
      username: object.data.username
    }



    const JsonList = JSON.stringify(info)

    localStorage.setItem("token", object.data.acessToken);
    localStorage.setItem("userdata", JsonList );
    alert("Conta criada com sucesso!")
    window.location.href = "http://localhost:5500/web/Notes/";
  }


  )
}
