const contact = document.getElementById('contact');
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const home = document.getElementById('home');
const main = document.querySelector('main');
const footer = document.getElementById('copyright');
const modal = document.querySelector('.previewModal');
const modalImg = document.getElementById('previewImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const projects = document.querySelectorAll('.highlight-project');
const filterButtons = document.querySelectorAll('.filter-button');
const projectItems = document.querySelectorAll('.project-item');
const counter = document.querySelector('#project-counter');
let isRotated = false;


// Contact/Email button interaction
if (contact) {
	contact.addEventListener('click', function () {
		const mailtoLink = 'mailto:tino.selic@gmail.com';
		window.location.href = mailtoLink;
	});
}


// Nav bar interaction
if (openMenu && mainMenu && main && footer) {
	openMenu.addEventListener('click', () => {
		isRotated = !isRotated;

		if (isRotated) {
			mainMenu.style.display = 'block';
			openMenu.style.transform = 'rotate(45deg)';
			main.style.display = 'none';
			footer.style.display = 'none';
		} else {
			mainMenu.style.display = 'none';
			openMenu.style.transform = 'rotate(0deg)';
			main.style.display = 'block';
			footer.style.display = 'block';
		}
	});
}


// Filter
filterButtons.forEach(button => {
	button.addEventListener('click', () => {
		const filter = button.textContent.trim().toLowerCase();
		const isActive = button.classList.contains('active');

		// DEBUGGING LOGS: Open your browser console (F12) and click a button
		console.log("--- Filter Clicked ---");
		console.log("Button Filter Value:", `"${filter}"`);

		if (filter === 'show all') {
			filterButtons.forEach(b => b.classList.remove('active'));
			button.classList.add('active');
			projectItems.forEach(item => item.style.display = '');
		} else if (isActive) {
			button.classList.remove('active');
			projectItems.forEach(item => item.style.display = '');
		} else {
			filterButtons.forEach(b => b.classList.remove('active'));
			button.classList.add('active');

			projectItems.forEach(item => {
				const categories = item.getAttribute('data-category')?.toLowerCase() || '';

				// MORE DEBUGGING LOGS
				console.log(`Checking item categories: "${categories}" against filter: "${filter}"`);

				item.style.display = categories.includes(filter) ? '' : 'none';
			});
		}
		updateProjectCounter();
	});
});


// Highlight Project on Scroll
const options = {
	root: null,
	rootMargin: '0px',
	threshold: 1
};

function highlightOnScroll(entries, observer) {
	if (window.innerWidth <= 796) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('highlight');
			} else {
				entry.target.classList.remove('highlight');
			}
		});
	}
}

if (projects.length > 0) {
	const observer = new IntersectionObserver(highlightOnScroll, options);
	projects.forEach(box => observer.observe(box));
}


// Footer - Safely handles if script loads early
document.addEventListener("DOMContentLoaded", function () {
	const footerElement = document.getElementById('copyright');
	if (footerElement) {
		footerElement.textContent = "© 2026 Tino Selić";
	}
});


// Preview Image
if (modal && modalImg) {
	thumbnails.forEach((thumbnail) => {
		thumbnail.addEventListener('click', function () {
			modal.style.display = 'flex';
			modalImg.src = this.src;
			document.body.style.overflow = 'hidden';
		});
	});

	modal.addEventListener('click', function (e) {
		if (e.target !== modalImg) {
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
}