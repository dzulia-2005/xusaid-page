const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}



// script.js
document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeader = document.querySelector('.collapsible-header');
    const collapsibleContent = document.querySelector('.collapsible-content');
    const arrow = document.querySelector('.arrow');

    collapsibleHeader.addEventListener('click', function() {
        if (collapsibleContent.style.display === 'block') {
            collapsibleContent.style.display = 'none';
            arrow.classList.remove('collapsed');
        } else {
            collapsibleContent.style.display = 'block';
            arrow.classList.add('collapsed');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeader = document.querySelector('.collapsible-header2');
    const collapsibleContent = document.querySelector('.collapsible-content2');
    const arrow = document.querySelector('.arrow2');

    collapsibleHeader.addEventListener('click', function() {
        if (collapsibleContent.style.display === 'block') {
            collapsibleContent.style.display = 'none';
            arrow.classList.remove('collapsed2');
        } else {
            collapsibleContent.style.display = 'block';
            arrow.classList.add('collapsed2');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeader = document.querySelector('.collapsible-header3');
    const collapsibleContent = document.querySelector('.collapsible-content3');
    const arrow = document.querySelector('.arrow3');

    collapsibleHeader.addEventListener('click', function() {
        if (collapsibleContent.style.display === 'block') {
            collapsibleContent.style.display = 'none';
            arrow.classList.remove('collapsed3');
        } else {
            collapsibleContent.style.display = 'block';
            arrow.classList.add('collapsed3');
        }
    });
});


let btn = document.querySelector(".close_btn")

btn.addEventListener("click",()=>{
    document.querySelector(".min_menu").style.display = "none";
})

let openbtn = document.querySelector(".open_list")
openbtn.addEventListener("click",()=>{
    document.querySelector(".min_menu").style.display = "block";
})




