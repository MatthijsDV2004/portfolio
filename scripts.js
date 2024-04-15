const title = document.getElementById('title');
const aboutMe = document.getElementById('about-me');

title.addEventListener('click', function() {
    // Toggle the 'rotated' class to apply or remove the rotation effect on click
    this.classList.toggle('rotated');
    // Toggle the 'visible' class on the about-me section to show/hide it
    aboutMe.classList.toggle('visible');
});
