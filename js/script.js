let navbar = document.querySelector('.navbar');
let iconMenu = document.querySelector('#icon-menu');

iconMenu.onclick = () => {
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    navbar.classList.remove('open');
}

// Add event listener to the document body to close the menu when clicking outside
document.body.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !iconMenu.contains(event.target)) {
        navbar.classList.remove('open');
    }
});
