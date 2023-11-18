/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 4000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: [ 'Cloud Solutions Architect-in-Training', 'Child of the Internet','Continuous Learner'],
    typeSpeed: 10,
    backSpeed: 25,
    backDelay: 2000,
    loop: true
});


/*=========skillsjs =======*/
document.querySelectorAll('.skill-percentage').forEach((skill) => {
    let percentage = skill.dataset.percentage;
    let degrees = (percentage / 100) * 360;

    skill.style.background = `conic-gradient(#0ef ${degrees}deg, #eee 0deg)`;
});


ScrollReveal().reveal('.skill', {
    distance: '20px',
    origin: 'bottom',
    interval: 200 // This will add a slight delay between each skill reveal
});


document.querySelectorAll('.skill-percentage').forEach((skill) => {
    let percentage = skill.dataset.percentage;
    let degrees = (percentage / 100) * 360;

    skill.style.background = `conic-gradient(#0ef ${degrees}deg, #eee 0deg)`;
});



/*=========gallery =======*/

document.querySelectorAll('.gallery-container a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor action

        // Create the overlay
        let overlay = document.createElement("div");
        overlay.classList.add("modal-overlay");

        // Create the modal content with the image
        let modalContent = document.createElement("img");
        modalContent.setAttribute("src", this.href); // Set the source to the href of the clicked link
        modalContent.classList.add("modal-content");

        // Append the content to the overlay
        overlay.appendChild(modalContent);

        // Append the overlay to the body
        document.body.appendChild(overlay);

        // Show the overlay
        overlay.style.display = "block";

        // Close the modal when clicked on
        overlay.addEventListener('click', function() {
            overlay.style.display = "none";
            overlay.remove();
        });
    });
});




/*=========timeline =======*/

$(document).ready(function() {
    $("#timeline-link").click(function(e) {
        e.preventDefault(); // Prevent the default behavior of the link
        
        // Toggle the "hidden" class for the timeline section
        $(".timeline-section").toggleClass("hidden");
    });
});


/*----special header- doesnt work will test it later---*/
customElements.define('special-header', SpecialHeader);

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <a href="#" class="logo">SP</a>

                <div class='bx bx-menu' id="menu-icon"></div>

                <nav class="navbar">
                    <a href="#home" class="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#skill">Skills</a>
                    <a href="#timeline-section">Professional History</a>
                    <a href="#Projects">Projects</a>
                    
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                    <div class="theme-switch">
                        <input type="checkbox" id="dark-mode-toggle">
                        <label for="dark-mode-toggle">
                            <i class="fas fa-sun"></i> <!-- Sun icon for light mode -->
                            <i class="fas fa-moon"></i> <!-- Moon icon for dark mode -->
                            <span class="slider round"></span>
                        </label>
                    </div>
                </nav>
            </header>
        `
    }
}

/*----special header- doesnt work will test it later---*/

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-text">
                    <p>Copyright &copy; 2023 by Siddharth Patel | All Rights Reserved.</p>
                    <p>Hosted on AWS</p>
                </div>

                <div class="footer-iconTop">
                    <a href="#home"><i class='bx bx-up-arrow-alt'></i></a>
                </div>
            </footer>
        `
    }
}

customElements.define('special-footer', SpecialFooter);
