// Navbar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Menu Toggle
const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// LENIS FOR SMOOTH SCROLLING
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

//Scroll Reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 800,
  delay: 200,
  easing: "ease-in-out",
});

gsap.to("nav", {
  opacity: 1,
  duration: 2,
});
sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", { delay: "500" });
sr.reveal(".hero-headlines-buttons", { delay: "1000" });
sr.reveal(".hero-headlines-buttons", { delay: "1000" });
gsap.from(".hero-images img", {
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
sr.reveal(".requirements-headlines h1");
sr.reveal(".requirements-headlines p", { delay: "500" });
sr.reveal(".requirements img", { delay: "500" });
sr.reveal(".r-item-container", { delay: "1000" });
sr.reveal(".pets-headlines");
sr.reveal(".pet-item h3");
sr.reveal(".about-headlines");
sr.reveal(".about img");
sr.reveal(".testimonials h1", { delay: "500" });
sr.reveal(".testimonials h6");
sr.reveal(".testimony-item", { delay: "1000" });
sr.reveal(".footer-brand");
sr.reveal(".footer-links", { delay: "500", origin: "left" });
sr.reveal(".footer-contact-info", { delay: "500", origin: "right" });
sr.reveal(".copyright", { delay: "600" });
