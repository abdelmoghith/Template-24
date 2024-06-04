let show = document.querySelector(".nav");
let exit = document.getElementById("exit");
let menu = document.querySelector(".navphone");
let p = document.querySelector(".ObjText");

show.onclick = function () {
  menu.style.display = "block";
  p.style.display = "none";
  menu.classList.add("show");
};

exit.onclick = function () {
  menu.style.display = "none";
  p.style.display = "block";
  menu.classList.remove("show");
};
