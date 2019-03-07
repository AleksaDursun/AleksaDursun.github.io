
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
var slideIndex = 0;
carousel();
/* Function whitch controls image change */
function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      
      x[i].style.display = "none";
      if(slideIndex!=0)
      {
        if(i==slideIndex-1)
        {
          x[i].style.display = "block";
          x[i].style.zIndex = "1"; 
        }
      }
      else
      {
        x[x.length-1].style.zIndex = "1";
      }     
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    x[slideIndex-1].style.zIndex = "2";
    x[slideIndex-1].style.animation="fade 1000ms linear 0s 1 ";
    setTimeout(carousel, 5000);
}
