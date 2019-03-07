
var slideIndex = 0;
carousel();
/* Function whitch controls image change */
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  slideIndex++;
  if (slideIndex > x.length) 
  {
    slideIndex = 1;
    for (i = 0; i < x.length; i++) {
      x[i].style.zIndex = "0"; 
    }
  } 
  x[slideIndex-1].style.zIndex = slideIndex; 
  x[slideIndex-1].style.animation="fade 1000ms linear 0s 1 ";
  setTimeout(carousel, 5000); 
}

/* Function whitch shows and hides mobile navigation menu*/
function Mobile()
{
    var x = document.getElementById("mobileNavigation");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}