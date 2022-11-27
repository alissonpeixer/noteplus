const navIcon = document.querySelector(".nav__icon");
const closedSidebar = document.querySelector(".closed__sidebar");
const sidebar = document.getElementById("sidebar");
const iconNavIcon = document.getElementById("right");

const userInfo = document.getElementById('user__info');
const iconProfile = document.querySelector('.profile__')

const noteArea = document.querySelector('#page');




function  openNavbarNote() {
  sidebar.setAttribute("class", "active");
  noteArea.style.display = "none"
} 
function  openProfile() {
  userInfo.setAttribute("class", "active");
  noteArea.style.display = "none"
} 


function closeNavbarNote() { 
  sidebar.setAttribute("class", "");
  noteArea.style.display = "block";
} 

function closeProfile() { 
  userInfo.setAttribute("class", "");
  noteArea.style.display = "block";
} 