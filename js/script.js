const nav = document.querySelector('.nav__show');
document.addEventListener('click', showNav);

function showNav(event) {
    if (event.target.closest('.nav__show')) {
        nav.classList.toggle('active');
    }
    if (!event.target.closest('.nav__show')) {
        nav.classList.remove('active');
    } 
}
document.addEventListener('keyup', function(event) {
    if (event.code === 'Escape') {
        nav.classList.remove('active');
    }
})

const burgerShow = document.querySelector('.burger__show');
document.addEventListener('click', showBurger);

function showBurger(event) {
    if (event.target.closest('.burger__show')) {
        burgerShow.classList.toggle('active');
    }
    if (!event.target.closest('.burger__show')) {
        burgerShow.classList.remove('active');
    } 
}

const headerSpoiler = document.querySelectorAll('.header__spoiler');

document.addEventListener("click", function(event) {
    if(event.target.closest('.block__spoiler')){
        headerSpoiler[0].classList.toggle('active');
    } else if(event.target.closest('.block__spoiler_two')){
        headerSpoiler[1].classList.toggle('active');
    }
})

document.addEventListener('keyup', function(event) {
    if(event.code === 'Escape') {
        headerSpoiler[0].classList.remove('active');
        headerSpoiler[1].classList.remove('active');
    }
})

const burger = document.querySelector('.nav__burger');
const burgerWidth = document.querySelector('.burger__hidden');

burger.addEventListener('click', function(event) {
    if (event.target.closest('.burger__button')) {
        burger.classList.toggle('active');
    }
});

burger.addEventListener('keyup', function(event) {
    if (event.code === 'Escape') {
        burger.classList.remove('active');
    }
} );


const cursorBlock = document.querySelector('.cursor');
const cursor = () => {
        window.addEventListener("mousemove", function(e) {
        const target = e.target // определяем, где находится курсор
        if (!target) return  
        
        if (target.closest('a, button, .header__spoiler, .nav__show')) { // если курсор наведён на ссылку
            cursorBlock.classList.add('active'); // элементу добавляем активный класс
        } else {
            cursorBlock.classList.remove('active');
        }

        cursorBlock.style.left = e.pageX + 'px'
        cursorBlock.style.top = e.pageY + 'px'
    });
};    

cursor()
