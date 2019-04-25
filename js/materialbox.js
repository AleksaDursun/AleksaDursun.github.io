var divs=document.getElementsByClassName("materialboxdiv");

for (var i = 0; i < divs.length; i++) 
{
    divs[i].onclick=function()
    {
        for (var j = 0; j < divs.length; j++) 
        {
            divs[j].style.display="none";
        }
    }
}

var images=document.getElementsByClassName("appImg");

for (var i = 0; i < images.length; i++) 
{
    images[i].onclick=function(event)
    {
        divs[event.target.id-1].style.display="flex";
        
    }
}
