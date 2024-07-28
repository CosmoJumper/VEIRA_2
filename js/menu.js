const buttonBurger = document.getElementById('button-burger');
const menuOpen = document.querySelector('.menu-open');
const menuBase = document.querySelector('.menu-base');

let isClicked = false;

buttonBurger.addEventListener('click', function() {

	if(isClicked == false) {
    menuOpen.style.opacity = 0.8;
    menuOpen.style.display = 'flex';
    menuBase.style.opacity = 0;
    isClicked = true;
	} else {
		menuOpen.style.opacity = 0;
		menuOpen.style.display = 'none';
    	menuBase.style.opacity = 0.8;
    	isClicked = false;
	}
});
