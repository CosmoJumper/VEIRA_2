document.addEventListener('DOMContentLoaded', function() {
    // Функция для инициализации карусели
    const initCarousel = (carousel) => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.next');
        const prevButton = carousel.querySelector('.prev');
        const slideWidth = slides[0].getBoundingClientRect().width;

        let currentIndex = 0;

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });

        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;

            if (!nextSlide) return;

            moveToSlide(track, currentSlide, nextSlide);
        });

        prevButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;

            if (!prevSlide) return;

            moveToSlide(track, currentSlide, prevSlide);
        });

        slides[0].classList.add('current-slide');
    };

    // Инициализация всех каруселей на странице
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        initCarousel(carousel);
    });

    const initCarouselDesktop = (carouselDesktop) => {
        const trackDesktop = carouselDesktop.querySelector('.carousel-track');
        const slidesDesktop = Array.from(trackDesktop.children);
        const nextButtonDesktop = document.querySelector('.next-desktop');
        const prevButtonDesktop = document.querySelector('.prev-desktop');
        const slideWidthDesktop = slidesDesktop[0].getBoundingClientRect().width;

        let currentIndexDesktop = 0;

        const moveToSlideDesktop = (trackDesktop, currentSlideDesktop, targetSlideDesktop) => {
            trackDesktop.style.transform = 'translateX(-' + targetSlideDesktop.style.left + ')';
            currentSlideDesktop.classList.remove('current-slide');
            targetSlideDesktop.classList.add('current-slide');
        };

        slidesDesktop.forEach((slideDesktop, indexDesktop) => {
            slideDesktop.style.left = slideWidthDesktop * indexDesktop + 'px';
        });

        nextButtonDesktop.addEventListener('click', e => {
            const currentSlideDesktop = trackDesktop.querySelector('.current-slide');
            const nextSlideDesktop = currentSlideDesktop.nextElementSibling;

            if (!nextSlideDesktop) return;

            moveToSlideDesktop(trackDesktop, currentSlideDesktop, nextSlideDesktop);
        });

        prevButtonDesktop.addEventListener('click', e => {
            const currentSlideDesktop = trackDesktop.querySelector('.current-slide');
            const prevSlideDesktop = currentSlideDesktop.previousElementSibling;

            if (!prevSlideDesktop) return;

            moveToSlideDesktop(trackDesktop, currentSlideDesktop, prevSlideDesktop);
        });

        slidesDesktop[0].classList.add('current-slide');
    };

    // Инициализация всех каруселей на странице
    const carouselsDesktop = document.querySelectorAll('.carousel-desktop');
    carouselsDesktop.forEach(carouselDesktop => {
        initCarouselDesktop(carouselDesktop);
    });

    const initCarouselHits = (carouselHits) => {
        const trackHits = carouselHits.querySelector('.carousel-track');
        const slidesHits = Array.from(trackHits.children);
        const nextButtonHits = carouselHits.querySelector('.next-hits');
        const prevButtonHits = carouselHits.querySelector('.prev-hits');
        const slideWidthHits = slidesHits[0].getBoundingClientRect().width;

        let currentIndexHits = 0;

        const moveToSlideHits = (trackHits, currentSlideHits, targetSlideHits) => {
            trackHits.style.transform = 'translateX(-' + targetSlideHits.style.left + ')';
            currentSlideHits.classList.remove('current-slide');
            targetSlideHits.classList.add('current-slide');
        };

        slidesHits.forEach((slideHits, indexHits) => {
            slideHits.style.left = slideWidthHits * indexHits + 'px';
        });

        nextButtonHits.addEventListener('click', e => {

            const currentSlideHits = trackHits.querySelector('.current-slide');
            const nextSlideHits = currentSlideHits.nextElementSibling;

            if (!nextSlideHits) return;

            moveToSlideHits(trackHits, currentSlideHits, nextSlideHits);
        });

        prevButtonHits.addEventListener('click', e => {
            const currentSlideHits = trackHits.querySelector('.current-slide');
            const prevSlideHits = currentSlideHits.previousElementSibling;

            if (!prevSlideHits) return;

            moveToSlideHits(trackHits, currentSlideHits, prevSlideHits);
        });

        slidesHits[0].classList.add('current-slide');
    };

    // Инициализация всех каруселей на странице
    const carouselsHits = document.querySelectorAll('.carousel-hits');
    carouselsHits.forEach(carouselHits => {
        initCarouselHits(carouselHits);
    });


    

});
