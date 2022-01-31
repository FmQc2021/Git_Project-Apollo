$( document ).ready(function() {
	
 function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
} 



const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(j) {
  j.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}





//----------------------------SLIDER IMAGES----------------------------//


var slideIndex = 1;
fullSlider(slideIndex);

function plusSlides(n) {
  fullSlider(slideIndex += n);
}

function currentSlide(n) {
  fullSlider(slideIndex = n);
}

var btn = document.getElementById("btn-next");
btn.addEventListener("click", function() {
  plusSlides(1)
}, false);

var btn = document.getElementById("btn-prev");
btn.addEventListener("click", function() {
  plusSlides(-1)
}, false);

function fullSlider(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; 
      
  }
  
  slides[slideIndex-1].style.display = 'block';  
  
}


nav();

smoothScroll();

fullSlider();

plusSlides();

currentSlide();

sendEmail();

sendContact();
});


