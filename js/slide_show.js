var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    if (slideIndex> slides.length){
        slideIndex = 1
    }else if(slideIndex < 1){
        slideIndex=slides.length
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

    $(document).scroll(function(){
        if ($(this).scrollTop()>50){
            // animate fixed div to small size:
            $('.hero-section').stop().animate({ height: 0 , 'padding-top': 20},0);
        } else {
            //  animate fixed div to original size
            $('.hero-section').stop().animate({ height: 0, 'padding-top': 0},0);
        }
    }); 