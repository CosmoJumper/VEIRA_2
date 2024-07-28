document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

gsap.to(".menu-panel", {
  opacity: 0.8,
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-1",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,

    onEnter: () => {
      document.querySelector('.menu-panel').style.display = 'block';

  },
    onEnterBack: () => {document.querySelector('.menu-panel').style.display = 'block';
    },

    onLeave: () => {document.querySelector('.menu-panel').style.display = 'block';
    }, // Скрыть изображение, когда маркер достигнет конца триггера

    onLeaveBack: () => {document.querySelector('.menu-panel').style.display = 'none';
    }, // Скрыть изображение, когда маркер достигнет конца триггера

  },
 });

});