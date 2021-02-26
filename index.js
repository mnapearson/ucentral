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

let bdy = document.querySelector("body");
let colors = ["e4e4f0", "#dbdbf2", "#d1d1f2", "#c5c5f1", "#babaf1", "#b4b4f1"];

window.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop ||
    window.pageYOffset > window.innerHeight
  ) {
    var diff = parseInt(window.pageYOffset - window.innerHeight);
    var step = parseInt(window.innerHeight * 2);
    bdy.style.backgroundColor = colors[Math.floor(diff / step)];
  }
});
