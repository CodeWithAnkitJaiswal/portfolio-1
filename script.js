// Smooth scrolling for navigation links
document.querySelectorAll('.slide a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// menu

function show() {
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const list = document.getElementById('list');
    open.classList.toggle('active');
    close.classList.toggle('active');
    list.classList.toggle('active');
}

// to open contact page from button
function openContact() {
    window.location.href = 'contact.html';
}

// Highlight current section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[i].classList.add('active');
        }
    });
});

// Form submission and validation
const form = document.querySelector('.contact form');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = this.querySelector('#name').value;
    const email = this.querySelector('#email').value;
    const message = this.querySelector('#message').value;

    if (name && validateEmail(email) && message) {
        try {
            const response = await fetch('https://example.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                // Successful submission
                alert('Form submitted successfully!');
                this.reset();
            } else {
                // Error in submission
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            // Network error or other issues
            console.error('Error:', error);
            alert('Something went wrong. Please try again later.');
        }
    } else {
        // Form fields not filled or invalid email
        alert('Please fill in all fields and provide a valid email.');
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Smooth scroll-to-top button
const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});