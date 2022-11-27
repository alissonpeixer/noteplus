function logout(){
    const data = localStorage.removeItem('token') ||  localStorage.removeItem('userdata');
    window.location.href = "https://alissonpeixer.github.io/anotacao-ui"
    return data
}

const userLoged = localStorage.getItem('token');

if (!userLoged) {
  window.location.href = "https://alissonpeixer.github.io/anotacao-ui";
}
