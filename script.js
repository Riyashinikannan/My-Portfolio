document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const button = document.querySelectorAll('.details-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});
const button = document.querySelectorAll('.details-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const detailsContent = button.nextElementSibling;
        if (detailsContent.style.display === 'block') {
            detailsContent.style.display = 'none';
            button.textContent = 'View Details';
        } else {
            detailsContent.style.display = 'block';
            button.textContent = 'Hide Details';
        }
    });
});
