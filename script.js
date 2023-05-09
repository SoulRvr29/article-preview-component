let shareButton = document.querySelector("button");
let author = document.querySelector(".author");
let socialMenu = document.querySelector(".social");
let authorBar = document.querySelector(".authorBar");
let barBkg = document.querySelector(".barBkg");

let button = false;

shareButton.addEventListener("click", function () {
  if (button == false) {
    socialMenu.style.display = "flex";
    authorBar.classList.add("barBkg");
    author.classList.add("visibility");
    button = true;
  } else {
    socialMenu.style.display = "none";
    authorBar.classList.remove("barBkg");
    author.classList.remove("visibility");
    button = false;
  }
});
