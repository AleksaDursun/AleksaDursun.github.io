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