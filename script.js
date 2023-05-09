let shareButton = document.querySelector("button");
let author = document.querySelector(".author");
let socialMenu = document.querySelector(".social");

let button = false;

shareButton.addEventListener("click", function () {
  if (button == false) {
    socialMenu.style.opacity = "100%";
    author.classList.add("visibility");
    button = true;
  } else {
    socialMenu.style.opacity = "0%";
    author.classList.remove("visibility");
    button = false;
  }
});
