const userLoged = localStorage.getItem('token');


if (userLoged) {
  window.location.href = "http://localhost:5500/web/Notes";
}



function login() {

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if(!login || !password){
    alert("Erro | Validação!");
    return;
  }

  fetch("http://localhost:9901/user/signin",
    {
      headers: {
        "Authorization": "Basic " + btoa(login + ":" + password)
      },
      method: "GET"
    })



    .then((res) => res.json())



    .then((data) => {


      console.log(data)


      const info = {
        name: data.user.name,
        surname: data.user.surname,
        id: data.user.id,
        username: data.user.username
      }
      const JsonList = JSON.stringify(info)
      localStorage.setItem("token", data.user.acessToken);
      localStorage.setItem("userdata", JsonList );
      window.location.href = "http://localhost:5500/web/Notes";
    })

}