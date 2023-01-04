AOS.init();

window.addEventListener("scroll",()=>{
    if(scrollY>100) document.querySelector("header").classList.add("header__active");
    
    if(scrollY < 100) document.querySelector("header").classList.remove("header__active");

});

document.querySelector(".backtop").addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll(".nav__items").forEach(element => {
    element.classList.remove("active__navbar__item");
    if(window.location.pathname.substring(1).includes(element.innerText)){  
        element.classList.add("active__navbar__item");
    }
});

document.querySelector(".scroll__click").addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: 500,
        behavior: 'smooth'
    });
});
