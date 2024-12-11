const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const home = document.getElementById('home');
const main = document.querySelector('main');
const contact = document.getElementById('contact');
const footer = document.getElementById('copyright');
const modal = document.querySelector('.previewModal');
const modalImg = document.getElementById('previewImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const projects = document.querySelectorAll('.highlight-project');

// Nav bar interaction on mobile devices
openMenu.addEventListener('click', showNav);
closeMenu.addEventListener('click', closeNav);

function showNav() {
	mainMenu.style.display = 'block';
	openMenu.style.display = 'none';
	main.style.display = 'none';
	home.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

function closeNav() {
	mainMenu.style.display = 'none';
	openMenu.style.display = 'block';
	main.style.display = 'block';
	home.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

// Contact/Email button interaction
contact.addEventListener('click', function () {
	const mailtoLink = 'mailto:tino.selic@gmail.com}';
	window.location.href = mailtoLink;
});


// Highlight Project on Scroll
// Options for the Intersection Observer
const options = {
	root: null, // Sets the viewport as the root
	rootMargin: '0px',
	threshold: 1 // Triggers when 100% of the box is visible
};

// Callback function for the observer
function highlightOnScroll(entries, observer) {
	if (window.innerWidth <= 796) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Add the highlight class when the element is in view
				entry.target.classList.add('highlight');
			} else {
				// Optionally, remove the highlight when it’s out of view
				entry.target.classList.remove('highlight');
			}
		});
	}
}

// Create the observer with the callback and options
const observer = new IntersectionObserver(highlightOnScroll, options);

// Observe each box
projects.forEach(box => observer.observe(box));

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