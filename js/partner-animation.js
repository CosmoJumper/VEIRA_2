document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

gsap.to(".element", {
  marginRight: "0%",
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: '.partner-container',
    pinSpacing: true
  },

 });

gsap.to(".profit-left", {
  marginLeft: "0%",
  ease: "none",
  scrollTrigger: {
    trigger: ".partner-container",
    start: "bottom top",
    end: "bottom top",
  },

 });

gsap.to(".profit-right", {
  marginRight: "0%",
  ease: "none",
  scrollTrigger: {
    trigger: ".title",
    start: "bottom top",
    end: "bottom top",
  },

 });

gsap.to(".gift-2", {
  marginTop: "-400%",
  ease: "none",
  scrollTrigger: {
    trigger: ".gift-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },

 });

gsap.to(".bonus-title", {
  marginTop: "-150%",
  ease: "none",
  scrollTrigger: {
    trigger: ".gift-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },

 });


gsap.to(".firework", {
  marginTop: "-300%",
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".gift-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },

 });




 });
