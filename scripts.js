const title = document.getElementById('title');
const aboutMe = document.getElementById('about-me');

window.addEventListener('scroll', function() {
    // Add the 'visible' class to the about-me section when the user scrolls
    aboutMe.classList.add('visible');
});

title.addEventListener('click', function() {
    // Toggle the 'rotated' class to apply or remove the rotation effect on click
    this.classList.toggle('rotated');
});