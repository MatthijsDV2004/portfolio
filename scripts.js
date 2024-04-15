const title = document.getElementById('title');

title.addEventListener('click', function() {
    // Toggle the 'rotated' class to apply or remove the rotation effect on click
    this.classList.toggle('rotated');
});