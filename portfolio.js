document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarLinks = document.querySelectorAll('.menu a');
    navbarLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                toggleMenu(); 
            }
        });
    });
 
    const getStartedButton = document.querySelector('button[onclick*=\"scrollToSection\"]');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', () => {
            scrollToSection('aboutme');
        }); 
    }
   
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
 
    window.toggleMenu = function () {
        menu.classList.toggle('show');
    };

    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });

    // Smooth scroll
    const links = document.querySelectorAll('.menu a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                menu.classList.remove('show');
            }
        });
    });
});