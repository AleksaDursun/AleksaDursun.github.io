/* Function whitch shows and hides mobile navigation menu*/
function Mobile()
{
  var x = document.getElementById("mobileNavigation");
  var y=document.getElementsByClassName("navItem");
  for (var i = 0; i < y.length; i++) 
  {
    y[i].style.color="#fff";   
  }
  if (x.style.display == "block") 
  {
    x.style.display = "none";
    document.getElementById('headerNav').style.backgroundColor="transparent";
    for (var i = 0; i < y.length; i++) 
    {
      y[i].style.color="rgb(0, 40, 120)";   
    }
  } 
  else 
  {
    x.style.display = "block";
    document.getElementById('headerNav').style.backgroundColor='rgb(0, 40, 120)';
  }
}