document.addEventListener('DOMContentLoaded', function() {

	const nameInput = document.getElementById('name');
	const addressLevel1Input = document.getElementById('address-level1');
    const addressLevel2Input = document.getElementById('address-level2');
    const postalCodeInput = document.getElementById('postal-code');
    const givenNameInput = document.getElementById('given-name');

	nameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё\s]/g, '');
    });

    addressLevel1Input.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё\s]/g, '');
    });

    addressLevel2Input.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё\s]/g, '');
    });

    postalCodeInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    givenNameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё\s]/g, '');
    });

const deliveryForm = document.getElementById('deliveryForm');
    const radioButtons = document.querySelectorAll('input[name="receiving"]');
    const offlinePayButton = document.getElementById('offlinePayButton');
    const onlinePayButton = document.getElementById('onlinePayButton');
    const contactForm = document.getElementById('contactForm');

    const phoneInput = document.getElementById('tel');
    Inputmask({ mask: '+7 (999) 999-9999' }).mask(phoneInput);

    const phoneInput1 = document.getElementById('tel-1');
    Inputmask({ mask: '+7 (999) 999-9999' }).mask(phoneInput1);

    let deliveryActive = 1; // Объявляем переменную вне функции
    let onlinePay = 1; // Объявляем переменную вне функции

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.id === 'delivery-receiving' && this.checked) {
                deliveryForm.style.display = 'flex';
                offlinePayButton.style.display = 'none';
                onlinePayButton.style.opacity = '1';
                onlinePayButton.style.pointerEvents = 'none';
                contactForm.style.display = 'none';

                deliveryActive = 1;

            } else {
                deliveryForm.style.display = 'none';
                offlinePayButton.style.opacity = '0.1';
                offlinePayButton.style.pointerEvents = 'all';
                offlinePayButton.style.display = 'flex';
                onlinePayButton.style.opacity = '1';
                onlinePayButton.style.pointerEvents = 'all';
                contactForm.style.display = 'flex';

                deliveryActive = 0;
            }
        });
    });

    // Функция, которая будет выполняться при клике на кнопку
function offlineRadioButton() {
    offlinePayButton.style.opacity = '1';
    onlinePayButton.style.opacity = '0.1';

    onlinePay = 0;
}

function onlineRadioButton() {
    onlinePayButton.style.opacity = '1';
    offlinePayButton.style.opacity = '0.1';

    onlinePay = 1;
}

// Ждем загрузки содержимого страницы, чтобы элементы были доступны для скриптов
    // Находим кнопку по её ID
    
    // Добавляем обработчик событий для клика на кнопку
    offlinePayButton.addEventListener('click', offlineRadioButton);
    onlinePayButton.addEventListener('click', onlineRadioButton);



const orderButton = document.getElementById('orderButton');
const orderForm = document.getElementById('orderForm');

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pageTitle = document.title;

    const botToken = '6378176277:AAF2s1kUcW4XYG4LckuPbmVFvOSixuFQh50';
    const chatId = '-4039195343';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    let text = '';

    if (deliveryActive == 1) {

    const name = document.getElementById('name').value;
    const addressLevel1 = document.getElementById('address-level1').value;
    const addressLevel2 = document.getElementById('address-level2').value;
    const postalCode = document.getElementById('postal-code').value;
    const phone = document.getElementById('tel').value;

   	

    if (!name || !addressLevel1 || !addressLevel2 || !postalCode || !phone) {
            alert('Заполните все поля');
            return;
        }

        text = `НОВЫЙ ЗАКАЗ! Форма: ${pageTitle}.\nИмя: ${name}\nОбласть: ${addressLevel1}\nГород: ${addressLevel2}\nИндекс: ${postalCode}\nТелефон: ${phone}\nОплата: Онлайн`;

	}  else {
		if(onlinePay == 0) {
			const givenName = document.getElementById('given-name').value;
    		const phone1 = document.getElementById('tel-1').value;

    		if (!givenName || !phone1) {
            alert('Заполните все поля');
            return;
        	}

        	text = `НОВЫЙ ЗАКАЗ! Форма: ${pageTitle}. \n Имя: ${givenName}\n Телефон: ${phone1}\nОплата: При получении`;
		}
	}

    

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