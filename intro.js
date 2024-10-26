
let slideIndex = 0;
showSlides ();
function showSlides (){
    let i;
    let slides = document.getElementsByClassName('myslides');
    for(i = 0; i< slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex >slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides,5000);
}


function reveal() {
    var reveal = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  // Get the button:
let mybutton = document.getElementById("arrow-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 