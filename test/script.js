window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const videoHeight = document.querySelector('#background-video').offsetHeight;

    if (window.scrollY > videoHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
