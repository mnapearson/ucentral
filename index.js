window.onscroll = function () {
  myFunction();
  myFeatures();
};

var navbar = document.getElementById("nav");
var features = document.getElementById("feature-cards");
var section = document.getElementById("section1");
var sticky = section.offsetTop - 75;
var animate = section.offsetTop - 120;

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
  if (window.pageYOffset >= animate) {
    features.classList.add("animate");
  } else {
    features.classList.remove("animate");
  }
}
