
document.querySelectorAll(".gallery__box").forEach(element => {
    element.addEventListener("click",()=>{
        document.querySelector(".gallery__modal").style.display = "block";
    });
});