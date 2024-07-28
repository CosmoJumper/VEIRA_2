const promotionsTrack = document.querySelector('.promotions-track');
const promotionsSlides = Array.from(promotionsTrack.children);
const promotionsNextButton = document.querySelector('.promotions-next');
const promotionsPrevButton = document.querySelector('.promotions-prev');
const promotionsSlideWidth = promotionsSlides[0].getBoundingClientRect().width;

let promotionsCurrentIndex = 0;

const promotionsMoveToSlide = (promotionsTrack, promotionsCurrentSlide, promotionsTargetSlide) => {
    promotionsTrack.style.transform = 'translateX(-' + promotionsTargetSlide.style.left + ')';
    promotionsCurrentSlide.classList.remove('promotions-current-slide');
    promotionsTargetSlide.classList.add('promotions-current-slide');
};

promotionsSlides.forEach((promotionsSlide, promotionsIndex) => {
    promotionsSlide.style.left = promotionsSlideWidth * promotionsIndex + 'px';
});

promotionsNextButton.addEventListener('click', e => {
    const promotionsCurrentSlide = promotionsTrack.querySelector('.promotions-current-slide');
    const promotionsNextSlide = promotionsCurrentSlide.nextElementSibling;

    if (!promotionsNextSlide) return;

    promotionsMoveToSlide(promotionsTrack, promotionsCurrentSlide, promotionsNextSlide);
});

promotionsPrevButton.addEventListener('click', e => {
    const promotionsCurrentSlide = promotionsTrack.querySelector('.promotions-current-slide');
    const promotionsPrevSlide = promotionsCurrentSlide.previousElementSibling;

    if (!promotionsPrevSlide) return;

    promotionsMoveToSlide(promotionsTrack, promotionsCurrentSlide, promotionsPrevSlide);
});

promotionsSlides[0].classList.add('promotions-current-slide');