// ======= Scroll Section Active Link ===========
let menubar = document.querySelector('#menubar');
let nav = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    nav.classList.toggle('active');

};


// ======= Scroll Section Active Link ===========
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });



    //  ========= Sticky Navbar ========
let  head = document.querySelector('.header');

head.classList.toggle('sticky', window.scrollY > 100);


// ======= Remove menu icon navbar when click navbar link ===========

menubar.classList.remove('bx-x');
nav.classList.remove('active');


};



 //  ========= dark mode button function ========

 let darkmodeIcon = document.querySelector('#darkmode-icon');

 darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
 };


 //  ========= scroll reveal function ========

 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('services-contianer, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .heading, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, home-content p, .about-content', { origin: 'right' });
