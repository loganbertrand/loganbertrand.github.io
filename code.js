// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Scroll Reveal
ScrollReveal().reveal('.landing-message', { delay: 100 });
ScrollReveal().reveal('.landing-btn', { delay: 600 });
//About Section
ScrollReveal().reveal('#about-hdr');
ScrollReveal().reveal('.skills-crd');

//Portfolio Section
ScrollReveal().reveal('.port-img-wrap');
//Contact
ScrollReveal().reveal('#contact-hdr');