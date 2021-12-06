AOS.init();
let headcrab = document.querySelector('.toggle')
let menu = document.querySelector('.menu_mobile')

headcrab.addEventListener(("click"), () => {
    headcrab.classList.toggle("change");
    menu.classList.toggle("see");
})

let acc = document.getElementsByClassName("faq_accardion");
let sym = document.getElementsByClassName("faq_symbol")
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}






// надо подумать как можно сделать с бургер меню с этим методом
/* function toggle(x) {
    x.classList.toggle("change");
    
} */


