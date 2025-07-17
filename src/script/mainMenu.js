document.getElementById('close-menu').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
});

document.querySelector('.menuOpen').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});

// Close menu after navigation
const navLinks = document.querySelectorAll('.navlinks a[href="#projects"], .navlinks a[href="#about"], .navlinks a[href="#contact"], .navlinks a[href="#hola"]');

function closeMenuAfterNavigation() {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', closeMenuAfterNavigation);
});

// click
   document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('animationB');
    const content = document.getElementById('animation-content');
    const sectionSecond = document.getElementById('animation-second');
    const about = document.getElementsByClassName('about-content')[0];
    const header = document.getElementById('animationA');
    
    function handleScroll() {
      const sectionHeader = header.getBoundingClientRect().top;
        const sectionAbout = about.getBoundingClientRect().top;
        const sectionTopSecond = sectionSecond.getBoundingClientRect().top;
        const sectionTop = section.getBoundingClientRect().top;
        const sectionTopContent = content.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionHeader < windowHeight) {
            header.classList.add('animate');
        }
  
        if (sectionTop < windowHeight) {
            section.classList.add('animate');
        }

        if (sectionTopContent < windowHeight) {
            content.classList.add('animate');
        }

        if (sectionTopSecond < windowHeight) {
            sectionSecond.classList.add('animate');
        }

        if (sectionAbout < windowHeight) {
            about.classList.add('animate');
        }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });
