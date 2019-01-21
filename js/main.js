// const nav_link = document.querySelectorAll('.navigation__link');
const nav_nav = document.querySelector('.navigation__nav');
const nav_bg = document.querySelector('.navigation__background');
const nav_link = document.querySelectorAll('.navigation__link');
const nav_button = document.querySelector('.navigation__button');
const nav_icon = document.querySelector('.navigation__icon');
const nav_list = document.querySelector('.navigation__list');
const label = document.querySelectorAll('.form__label');
const textarea = document.querySelector('.form__input--message');
const formName = document.querySelector('.form__input--name');


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
    } else {
        nav_bg.style.visibility == 'hidden';
        nav_bg.style.opacity = '0';
        nav_bg.style.zIndex = '-1';
        nav_nav.style.visibility = 'hidden';
        nav_nav.style.opacity = '0';
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.opacity = '0';
        }
    }

    if(nav_icon.classList.contains('open')){
        nav_icon.classList.remove('open');
    } else{
        nav_icon.classList.add('open');
    }
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
    }
});



$('#contactForm').submit(function(event){
    event.preventDefault();

    const name = $('#name');
    const email = $('#email');
    const message = $('#message');

    console.log(name,email,message);

    if(name && email && message){

     $.ajax({
            url: "https://afternoon-sands-81292.herokuapp.com/api/form", 
            method: "POST",
            data: {
                name : name.val(),
                email : email.val(),
                message: message.val()
            },
            success : function(result){
                if(result == 'OK'){
                    alert('I have received your message. I\'ll reply as soon as possible.');
                    name.val('');
                    email.val('');
                    message.val('');
                }
            },
            error : function( jqXhr, textStatus, errorThrown ){
                alert('Ooops, something wrong! Please check again later!');
            }
        });

    }


})