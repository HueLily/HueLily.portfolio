/*================== toggle icon navbar ==================*/
let menuIcon = document.querySelectionAll('#menu-icon');
let navbar = document.querySelectionAll('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

/*================== scroll sections active link ==================*/
let sections = document.querySelectionAll('sections');
let navLinks = document.querySelectionAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height){
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelection('header nav a[href*=' + id + '}').classList.add('active')
			});
		};
	});

/*==================== sticky navbar ====================*/
let header = document.querySelectionAll('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar links ====================*/

menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

};

/*==================== scroll reveal ====================*/
ScrollReveal({ 
	//reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});


ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-content, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
	strings: ['am a student at DePauw University', 'am a Computer Science major'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});
