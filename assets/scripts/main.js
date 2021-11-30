
let headcrab = document.querySelector('.toggle')
let menu = document.querySelector('.menu_mobile')

headcrab.addEventListener(("click"), () => {
    headcrab.classList.toggle("change");
    menu.classList.toggle("see");
})




// надо подумать как можно сделать с бургер меню с этим методом
/* function toggle(x) {
    x.classList.toggle("change");
    
} */


