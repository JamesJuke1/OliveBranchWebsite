document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Quick Exit Functionality
    const exitButton = document.getElementById('quick-exit');
    
    if (exitButton) {
        exitButton.addEventListener('click', () => {
            // Replace history and redirect to a neutral site immediately
            window.location.replace("https://www.google.com");
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Simple Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 5%';
            navbar.style.background = '#ffffff';
        } else {
            navbar.style.padding = '20px 5%';
        }
    });

});