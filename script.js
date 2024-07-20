// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

// Add active class on hover and change section background color
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        const sectionId = link.getAttribute('href').substring(1); // Extract section id from href
        const section = document.getElementById(sectionId);
        console.log('Hovering over link:', sectionId); // Debugging line
        section.style.backgroundColor = '#555'; // Change background color of section on hover
        link.classList.add('active');
    });

    link.addEventListener('mouseleave', function() {
        const sectionId = link.getAttribute('href').substring(1); // Extract section id from href
        const section = document.getElementById(sectionId);
        console.log('Mouse left link:', sectionId); // Debugging line
        // Reset background color to original
        switch (sectionId) {
            case 'home':
                section.style.backgroundColor = 'red';
                break;
            case 'about':
                section.style.backgroundColor = 'palevioletred';
                break;
            case 'services':
                section.style.backgroundColor = 'orange';
                break;
            case 'contact':
                section.style.backgroundColor = 'green';
                break;
            default:
                section.style.backgroundColor = ''; // Default reset
        }
        link.classList.remove('active');
    });
});

// Change body background color on mouse move
document.addEventListener('mousemove', function(event) {
    const body = document.body;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Example: Change background color based on mouse position
    const red = Math.round((mouseX / window.innerWidth) * 255);
    const green = Math.round((mouseY / window.innerHeight) * 255);
    const blue = 100; // Fixed value for blue

    const backgroundColor = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = backgroundColor;
});
