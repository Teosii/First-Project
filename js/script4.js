const navSlider = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    hamburger.classList.toggle("toggle");
  });
};
navSlider();


// var goToSecondPage = document.querySelector(".project-one");

// goToSecondPage.addEventListener("click", function () {
//   document.location.pathname = "/index6.html";
// });
          