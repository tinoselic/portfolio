// Nav bar interaction on mobile devices
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

openMenu.addEventListener('click', showNav);
closeMenu.addEventListener('click', closeNav);

function showNav() {
	mainMenu.style.display = 'block';
	openMenu.style.display = 'none';
	main.style.display = 'none';
	nav.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

function closeNav() {
	mainMenu.style.display = 'none';
	openMenu.style.display = 'block';
	main.style.display = 'block';
	nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}


// Accordion
const accordion = document.getElementsByClassName('contentBox');

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});	
}


// Fade out when scroll
/* var fade = document.querySelector('.fade');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}

	//var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
	var distanceToTop = 0;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(fade);
}

window.addEventListener('scroll', scrollHandler);
main.style.display = 'block'; */