document.addEventListener('DOMContentLoaded', function() {

    const phoneInput = document.getElementById('tel');
    Inputmask({ mask: '+7 (999) 999-9999' }).mask(phoneInput);

    const givenNameInput = document.getElementById('given-name');

	givenNameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё\s]/g, '');
    });


const partnerButton = document.getElementById('partnerButton');
const partnerForm = document.getElementById('partnerForm');

document.getElementById('partnerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pageTitle = document.title;

    const botToken = '6378176277:AAF2s1kUcW4XYG4LckuPbmVFvOSixuFQh50';
    const chatId = '-4039195343';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const phone = document.getElementById('tel').value;

    const name = document.getElementById('given-name').value;


    text = `Хочу стать партнером!\nИмя: ${name}\nТелефон: ${phone}`;

    

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