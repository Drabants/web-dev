/*
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
*/
$(function(){
    $('.hero-section').data('size','big');
});

function draw(){
    if($('.hero-section').data('size') == 'big')
    {
        $('.hero-section').data('size','small');
        $('.hero-section').stop().animate({
            height:'5%'
        },4000, function(){
          printAbout();    
        });
    }
    
    else
    {
        if($('.hero-section').data('size') == 'small')
        {
            $('.hero-section').data('size','big');
            $('.hero-section').stop().animate({
                height:'100%'},5000);
        }  
    }
};

function printAbout(){
    var pause = true;
    function printFirst(){
              var text = $('.name').data('text');
              var loc = '.name';
              pause = typeWriter(text,0,loc);
    }
    function printSecond(){
              var text1 = $('.para1').data('text');
              var loc1 = '.para1';
              typeWriter(text1,0,loc1);
    }
              var text2 = $('.para2').data('text');
              var loc2 = '.para2';
    printFirst();
    function waitForIt(){
        if (pause) {
            setTimeout(function(){waitForIt()},100);
        } else {
        printSecond();
        }
    }
}
function startClouds(){
    var cloudArray = new Array();
    cloudArray.push(document.getElementById("binaryBites"));
    cloudArray.push(document.getElementById("cipher"));
    cloudArray.push(document.getElementById("oldPortfolio"));
    setCloudSpace(cloudArray);
};
window.addEventListener('resize', function(event){
  startClouds();
});
function setCloudSpace(cloudArray){
    if($(window).width() > 400){
    for(i=0; i<cloudArray.length; i++){
    yPos = (Math.random()*300) +200;
    xPos = (Math.random()*(200)) +(300*(i+1));
    cloudArray[i].style.top= yPos+"px";
    cloudArray[i].style.left= xPos+"px";
    }
  //  cloudArray[i].style.width= 500+"px";
  //  cloudArray[i].style.height= 300+"px";
 //   cloudArray[i].style.border= "1px #CCC solid";
    }    
            else{
                for(i=0; i<cloudArray.length; i++){
    yPos = (Math.random()*10)+(100*(i+1));
    xPos = (Math.random()*(200)) +(10*(i+1));
    cloudArray[i].style.top= yPos+"px";
    cloudArray[i].style.left= xPos+"px";
                }
            
        }
};

function typeWriter(text, n, loc) {
  if (n < (text.length)) {
    $(loc).html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n, loc)
    }, 50);
  }else{
      console.log('DONE');
      return false;
  }
}