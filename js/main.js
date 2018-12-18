// const nav_link = document.querySelectorAll('.navigation__link');
const nav_nav = document.querySelector('.navigation__nav');
const nav_bg = document.querySelector('.navigation__background');
const nav_link = document.querySelectorAll('.navigation__link');
const nav_button = document.querySelector('.navigation__button');
const nav_icon = document.querySelector('.navigation__icon');
const nav_list = document.querySelector('.navigation__list');


nav_button.addEventListener('click', () => {
    if (nav_bg.style.zIndex < 1) {
        nav_bg.style.visibility = 'visible';
        nav_bg.style.opacity = '1';
        nav_bg.style.zIndex = '1000';
        nav_nav.style.visibility = 'visible';
        nav_nav.style.opacity = '1';
        nav_nav.style.height = '100vh';
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.opacity = '1';
        }
        console.log('hurray....1 block runs');
    } else {
        nav_bg.style.visibility == 'hidden';
        nav_bg.style.opacity = '0';
        nav_bg.style.zIndex = '-1';
        nav_nav.style.visibility = 'hidden';
        nav_nav.style.opacity = '0';
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.opacity = '0';
        }
        console.log('hurray....2 block runs');
    }

    if(nav_icon.classList.contains('open')){
        nav_icon.classList.remove('open');
    } else{
        nav_icon.classList.add('open');
    }
    console.log('hurray....2.5 block runs');
});

nav_list.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home' ||
        e.target.textContent === 'About' ||
        e.target.textContent === 'Portfolio' ||
        e.target.textContent === 'Contact') {
        nav_bg.style.visibility == 'hidden';
        nav_bg.style.opacity = '0';
        nav_bg.style.zIndex = '-1';
        nav_nav.style.visibility = 'hidden';
        nav_nav.style.opacity = '0';
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.opacity = '0';
        }
        nav_icon.classList.remove('open');
        console.log('hurray....3 block runs');
    }
});

// for(let i = 0; i < nav_link.length; i++) { 
//     nav_link[i].addEventListener('click' , function(){
//         nav_nav.style.visibility = 'hidden';
//         nav_nav.style.opacity = '0';
//         nav_bg.style.visibility = 'hidden';
//         nav_bg.style.opacity = '0';
//     });
//     console.log('Hello');
// }
// console.log('Hello');
// console.log(nav_link);
// console.log(nav_nav);
// console.log(nav_bg);