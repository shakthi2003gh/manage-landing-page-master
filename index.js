const nav = document.querySelector("header nav");
const menu = document.querySelector("header .menu");
menu.children[1].style.display = "none";

menu.addEventListener("click", (e) => {
  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    menu.children[0].style.display = "none";
    menu.children[1].style.display = "block";
    document.querySelector("body").style.height = "100vh";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    menu.children[1].style.display = "none";
    menu.children[0].style.display = "block";
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.overflow = "auto";
  }
});
