window.onscroll = function () {
  myFunction();
  myFeatures();
};

var navbar = document.getElementById("nav");
var features = document.getElementById("feature-cards");
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

function myFeatures() {
  if (window.pageYOffset >= sticky) {
    features.classList.add("animate");
  }
}
