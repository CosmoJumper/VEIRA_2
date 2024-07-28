document.addEventListener('DOMContentLoaded', function() {

    const phoneInput = document.getElementById('tel');
    Inputmask({ mask: '+7 (999) 999-9999' }).mask(phoneInput);

});