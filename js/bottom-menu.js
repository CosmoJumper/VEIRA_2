document.addEventListener('DOMContentLoaded', function() {
    // Получаем текущий URL
    const currentPage = window.location.pathname.split('/').pop();

    // Список страниц и соответствующих им иконок
    const pages = {
        'index.html': 'icon-home',
        'catalog.html': 'icon-find',
        'corzine.html': 'icon-market',
        'profile.html': 'icon-cabinet'
    };

    // Проверьте, если текущая страница есть в списке
    if (pages[currentPage]) {
        const iconId = pages[currentPage];
        const iconElement = document.getElementById(iconId);

        // Заменяем иконку на серую версию
        iconElement.src = iconElement.src.replace('.png', '-active.png');
    }
});
