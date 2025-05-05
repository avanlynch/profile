document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }

    // Get the hero section elements
    const imageWrapper = document.querySelector('.image-wrapper');
    const heroText = document.querySelector('.image-text');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    let lastScrollPosition = window.pageYOffset;
    let ticking = false;

    // Handle scroll event with better performance
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const currentScrollPosition = window.pageYOffset;
                // Calculate one-third point of viewport height instead of halfway
                const triggerPoint = window.innerHeight / 3;
                
                if (currentScrollPosition > triggerPoint) {
                    // Animate out
                    imageWrapper.classList.add('scroll-effect');
                    heroText.classList.add('scroll-effect');
                    heroSubtitle.classList.add('scroll-effect');
                } else {
                    // Animate in
                    imageWrapper.classList.remove('scroll-effect');
                    heroText.classList.remove('scroll-effect');
                    heroSubtitle.classList.remove('scroll-effect');
                }
                
                lastScrollPosition = currentScrollPosition;
                ticking = false;
            });
            ticking = true;
        }
    });
});

//About me Animation
document.addEventListener('DOMContentLoaded', () => {
    const aboutTitle = document.querySelector('.about h2');
    const spans = aboutTitle.querySelectorAll('span');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutTitle.classList.add('animate');
                spans.forEach((span, index) => {
                    span.style.animationDelay = `${index * 0.15}s`;
                });
            } else {
                aboutTitle.classList.remove('animate');
                aboutTitle.classList.add('scroll-effect');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutTitle);
});