/* Function whitch shows and hides mobile navigation menu*/
function Mobile()
{
  var x = document.getElementById("mobileNavigation");
    
  if (x.style.display == "block") {
    x.style.display = "none";
    document.getElementById('headerNav').style.backgroundColor="transparent";
  } else {
    x.style.display = "block";
    document.getElementById('headerNav').style.backgroundColor='rgba(0,0,90,1)';
  }
}