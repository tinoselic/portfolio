// Nav bar interaction on mobile devices
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.getElementById("copyright");
const modal = document.querySelector('.previewModal');
const modalImg = document.getElementById("previewImage");
const thumbnails = document.querySelectorAll('.thumbnail');

openMenu.addEventListener('click', showNav);
closeMenu.addEventListener('click', closeNav);

function showNav() {
	nav.style.backgroundColor = 'rgba(0, 0, 0, 1)';
	mainMenu.style.display = 'block';
	openMenu.style.display = 'none';
	main.style.display = 'none';
}

function closeNav() {
	nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	mainMenu.style.display = 'none';
	openMenu.style.display = 'block';
	main.style.display = 'block';
}


// Footer
document.addEventListener("DOMContentLoaded", function() {
    var footerText = "© 2024 Tino Selić";
    footer.textContent = footerText;
});


// Preview Image
// Add click event to each image
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', function () {
    modal.style.display = 'flex'; // Show the modal
    modalImg.src = this.src; // Set the clicked image in the modal
	document.body.style.overflow = 'hidden';
  });
});

// Close the modal when clicking anywhere outside the image or on the close button
modal.addEventListener('click', function (e) {
  if (e.target !== modalImg) {
    modal.style.display = 'none';
	document.body.style.overflow = 'auto';
  }
});


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