// Optional: Simple Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - window.innerHeight / 2) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    });
});
