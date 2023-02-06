// SELECTING ELEMENTS
const menuBar = document.querySelector('.menu');
const nav = document.querySelector('.nav-bar');
const links = document.querySelectorAll('.link');


//NAVIGATION EVENT LISTENERS
menuBar.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBar.classList.toggle('active');
});

links.forEach(n => n.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBar.classList.remove('active');
}));