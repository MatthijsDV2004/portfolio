const title = document.getElementById('title');

title.addEventListener('mouseover', function() {
    // Add the 'rotated' class to apply the rotation effect
    this.classList.add('rotated');
});

title.addEventListener('mouseout', function() {
    // Remove the 'rotated' class to reset the rotation effect
    this.classList.remove('rotated');
});
