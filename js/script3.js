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

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

gsap.fromTo('.title',{opacity:0,x:-500},{opacity:1,x:0,duration:2,})
gsap.fromTo('.line',{opacity:0,x:-500},{opacity:1,x:0,duration:2,})
gsap.fromTo('.txt',{opacity:0,y:500},{opacity:1,y:0,duration:2,})
gsap.fromTo('.building',{opacity:0,x:500},{opacity:1,x:0,duration:2,})
