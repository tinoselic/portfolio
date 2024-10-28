const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const main = document.querySelector('main');
const footer = document.getElementById('copyright');
const modal = document.querySelector('.previewModal');
const modalImg = document.getElementById('previewImage');
const thumbnails = document.querySelectorAll('.thumbnail');

// Nav bar interaction on mobile devices
openMenu.addEventListener('click', showNav);
closeMenu.addEventListener('click', closeNav);

function showNav() {
	mainMenu.style.display = 'block';
	openMenu.style.display = 'none';
	main.style.display = 'none';
}

function closeNav() {
	mainMenu.style.display = 'none';
	openMenu.style.display = 'block';
	main.style.display = 'block';
}


// Footer
document.addEventListener("DOMContentLoaded", function () {
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


/* // Accordion
const accordion = document.getElementsByClassName('contentBox');

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
} */