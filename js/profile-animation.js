document.addEventListener("DOMContentLoaded", function() {
            // Целевое значение, до которого нужно увеличить число
            const targetValue = 97;

            // Продолжительность анимации в секундах
            const duration = 3;

            // Функция GSAP для анимации числа
            gsap.fromTo("#numberScore", 
                {innerHTML: 0}, 
                {
                    innerHTML: targetValue, 
                    duration: duration, 
                    ease: "power1.inOut", 
                    snap: {innerHTML: 1},
                    onUpdate: function() {
                        document.getElementById("numberScore").innerHTML = Math.floor(this.targets()[0].innerHTML);
                    }
                }
            );
        });