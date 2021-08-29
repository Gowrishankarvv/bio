const aboutbtn = document.querySelectorAll(".button");
const rembtn = document.querySelector(".remove");
const link = document.querySelectorAll("a");
const about = document.querySelector(".about");
const body = document.querySelector(".body");
const dark = document.querySelector(".dark");
const main = document.querySelector("#main");
const header = document.querySelector(".header");
const logotext = document.querySelector(".logotext");

dark.addEventListener("click", () => {
  main.classList.toggle("light");
  header.classList.toggle("light");
});
aboutbtn.forEach((btns) => {
  btns.addEventListener("click", () => {
    body.classList.toggle("close");
    about.classList.toggle("open");
    logotext.classList.toggle("open");
    about.classList.remove("close");
  });
});

rembtn.addEventListener("click", () => {
  about.classList.add("close");
});
