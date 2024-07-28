document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

gsap.to(".colp", {
  y: "-250%", // Сдвиг изображения вниз на 100 пикселей
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-1",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,

    onEnter: () => {
      document.querySelector('.colp').style.display = 'block';

  },
    onEnterBack: () => {document.querySelector('.colp').style.display = 'block';
    },

    onLeave: () => {document.querySelector('.colp').style.display = 'none';
    }, // Скрыть изображение, когда маркер достигнет конца триггера
  },
 });

gsap.to(".spray", {
  y: "250%", // Сдвиг изображения вниз на 100 пикселей
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-1",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,

    onEnter: () => {
      document.querySelector('.spray').style.display = 'block';

  },
    onEnterBack: () => {document.querySelector('.spray').style.display = 'block';
    },

    onLeave: () => {document.querySelector('.spray').style.display = 'none';
    }, // Скрыть изображение, когда маркер достигнет конца триггера
  },
 });

gsap.to(".logo", {
  y: "250%", // Сдвиг изображения вниз на 100 пикселей
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,

    onEnter: () => {
      document.querySelector('.spray').style.display = 'block';

  },
    onEnterBack: () => {document.querySelector('.spray').style.display = 'block';
    },

    onLeave: () => {document.querySelector('.spray').style.display = 'none';
    }, // Скрыть изображение, когда маркер достигнет конца триггера
  },
 });

gsap.to(".logo", {
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-3",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,

    onEnter: () => {
      document.querySelector('.logo').style.display = 'block';

  },
    onEnterBack: () => {document.querySelector('.logo').style.display = 'block';
    },

    onLeave: () => {document.querySelector('.logo').style.display = 'none';
    }, // Скрыть изображение, когда маркер достигнет конца триггера
  },
 });

gsap.to(".menu-panel", {
  opacity: 0.8,
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-4",
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




gsap.to(".hits-label", {
  x: "-200%",
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-7",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    pin: true,
    pinSpacing: false
    
  },
 });

gsap.to(".catalog-image", {
  opacity: 1,
  x: '0%',
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-6",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,

    

  },
 });


// Получение всех кнопок с классом 'loyalty-button'
const loyaltyButtons = document.querySelectorAll('.loyalty-button');
const helloForm = document.querySelector('.hello-form');
const closeButton = document.getElementById('closeButton');

// Добавление события для каждой кнопки
loyaltyButtons.forEach(button => {
    button.addEventListener('click', function() {
        helloForm.style.top = '50%';
    });
});

closeButton.addEventListener('click', function() {
    helloForm.style.top = '500%';
});

const phoneInput = document.getElementById('phone');
Inputmask({ mask: '+7 (999) 999-9999' }).mask(phoneInput);

const givenNameInput = document.getElementById('given-name');
givenNameInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё\s]/g, '');
});

document.getElementById('helloForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pageTitle = document.title;

    const botToken = '6378176277:AAF2s1kUcW4XYG4LckuPbmVFvOSixuFQh50';
    const chatId = '-4039195343';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const name = document.getElementById('given-name').value;
    const phone = document.getElementById('phone').value;

    if (!name || !phone) {
        alert('Заполните все поля');
        return;
    }

    const text = `Заявка с сайта на карту лояльности! Форма: ${pageTitle}. Имя: ${name}\nТелефон: ${phone}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            window.location.href = 'thank_you.html';
        } else {
            alert('Error sending message');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message');
    });
});

const attentionElements = document.querySelectorAll('.attention-element');

attentionElements.forEach(element => {
    element.addEventListener('click', function() {
        window.location.href = 'article.html';
    });
});



});