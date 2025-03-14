const button = document.querySelector(".switcher");
const body = document.querySelector(".container");

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});