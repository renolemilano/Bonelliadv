const menu = document.querySelector(".menu");

window.addEventListener('scroll' , () => {
    console.log(window.scrollY); // le menu n'est plus visible à scrollY=220

    if(window.scrollY > 220) {
        menu.classList.add('anim-menu');
    } else {
        menu.classList.remove('anim-menu');
    }
})