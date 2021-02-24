window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav");
var section = document.getElementById("section1");
var sticky = section.offsetTop - 75;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav");
    navbar.classList.remove("nav-hidden");
  } else {
    navbar.classList.add("nav-hidden");
    navbar.classList.remove("nav");
  }
}
