let icon = document.querySelector('.fa-solid')
let nav__menu = document.querySelector('.nav__menu')

 icon.addEventListener('click' , function (){
    nav__menu.classList.toggle('hide')
})



let btn = document.getElementById('btn')
let sun = document.querySelector('.fa-sun')
let moon = document.querySelector('.fa-moon')

btn.addEventListener('click' , function (){
    let tema = document.getElementById('tema')
    if (tema.getAttribute('href') == 'style.css') {
        tema.href = 'style1.css';
        console.log('salom');

        moon.style.display = 'none'
        sun.style.display = 'block'
    }
    else{
        tema.href = 'style.css'
        sun.style.display = 'none'
        moon.style.display = 'block'
    }
})




