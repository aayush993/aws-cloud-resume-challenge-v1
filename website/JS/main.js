/* ====================== toggle icon navbar ============================ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ====================== scroll section active link ============================ */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(() => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }, links);
        };
    });

    /* ====================== sticky navbar ============================ */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ====================== remove toggle icon and navbar ============================ */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

 /* ====================== scroll reveal ============================ */
 ScrollReveal(
    {
        distance: '80px',
        duration: 2000,
        delay: 200,
    }
 );

 ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'buttom'});
 ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

 /* ====================== typed js ============================ */
 const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Cloud Architect'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 });

 /* ===================== counter js ===========================*/
const counter = document.querySelector(".views-counter");
async function updateCounter() {
    // cloud-resume-test lambda
    let response = await fetch("https://q5o76s6h6xoo4psm7ipnhsiy3a0nnlfx.lambda-url.ca-central-1.on.aws/")
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();