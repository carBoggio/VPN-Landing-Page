



const toggle = document.querySelector(".logo-ham__img");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const carusel = document.querySelector(".box-4-carousel-container");



toggle.addEventListener("click", () => {
    nav.classList.toggle("rigth");
        if (nav.classList.contains("rigth")){
            body.classList.remove("hidden");
            carusel.classList.remove("display-none");
        }
        else {
            body.classList.add("hidden");
            carusel.classList.add("display-none");
        }
        
    });
    
window.addEventListener("load", function(){



  new Glider(document.querySelector(".box-4__carousel"), {
        slidesToShow: 2.5,
        dots: '.box-4__carousel-indicators',
        slidesToScroll: 1,

        draggable: true,
        arrows: {
            prev: '.box-4__before',
            next: '.box-4__after'
        }, 
        responsive: [
            {
            slidesToShow: 4.5,
              // screens greater than >= 775px
              breakpoint: 637,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 6.5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });

});




