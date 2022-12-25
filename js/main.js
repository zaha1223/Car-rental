const elAboutBtn = document.getElementById("about1");
const aboutDropDown = document.querySelector(".ab-down");

elAboutBtn.addEventListener("click", (e) => {
  aboutDropDown.classList.toggle("open");
});

const loginBtn = document.getElementById("navbtn");
const elModal = document.querySelector(".modal");

loginBtn.addEventListener("click", (e) => {
  elModal.classList.toggle("open");
});
