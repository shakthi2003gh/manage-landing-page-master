// >menu
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

// >slider
const scrollableSection = document.querySelector(".scrollable");
const dots = document.querySelectorAll(".slider-dots .dot");

const slide = (index) =>
  window.innerWidth < 900 &&
  scrollableSection.style.setProperty(
    "--scroll",
    `calc(${-100 * index}% - (${16 * index}px))`
  );

function scrollSlider(e) {
  dots.forEach((dot, index) => {
    dot.classList.remove("active");

    if (e.target === dot) {
      e.target.classList.add("active");

      slide(index);
    }
  });
}

function initSlider() {
  scrollableSection.scrollTo(0, 0);

  dots.forEach((dot, index) => {
    if (dot.classList.contains("active")) slide(index);

    dot.removeEventListener("click", scrollSlider);
    dot.addEventListener("click", scrollSlider);
  });
}

initSlider();

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900)
    return scrollableSection.style.setProperty("--scroll", "0%");

  initSlider();
});

// >input
const inputGroup = document.querySelector(".input-group");
const input = inputGroup.querySelector("input");
const submit = inputGroup.querySelector("button");

submit.addEventListener("click", () => {
  const email = input.value;

  if (!email.includes("@") || !email.endsWith(".com"))
    return inputGroup.classList.add("error");

  inputGroup.classList.remove("error");
  input.value = "";
});
