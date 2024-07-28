document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  

  gsap.to(".slides-1", {
  x: "-200vw", // Сдвиг изображения вниз на 100 пикселей
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: '.slides-wrapper',
    pinSpacing: false,
  },
 });

  gsap.to(".slides-3", {
  x: "-200vw", // Сдвиг изображения вниз на 100 пикселей
  ease: "none",
  scrollTrigger: {
    trigger: ".trigger-3",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: '.slides-wrapper',
    pinSpacing: false,
  },
 });


const registrationButton = document.getElementById('registrationButton');
const helloForm = document.querySelector('.hello-form');
const closeButton = document.getElementById('closeButton');

registrationButton.addEventListener('click', function() {
    helloForm.style.top = '50%';
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

    const text = `Заявка на регистрацию! Форма: ${pageTitle}. Имя: ${name}\nТелефон: ${phone}`;

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
});


