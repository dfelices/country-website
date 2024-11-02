// hamburger menu toggle

const button = document.getElementById('main-nav-button')
const links = document.getElementById('main-nav-list')
const buttonSVG = document.getElementById('button-svg')


button.addEventListener('click', function(){
    links.classList.toggle('toggled')
})