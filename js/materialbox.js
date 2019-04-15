var divs=document.getElementsByClassName("materialboxdiv");
function materialbox(openid)
{
    var span = document.getElementsByClassName("close");
   
    switch(openid)
    {
        case 0:
        divs[0].style.display="flex";
        break;
        case 1:
        divs[1].style.display="flex";
        break;
        case 2:
        divs[2].style.display="flex";
        break;
        case 3:
        divs[3].style.display="flex";
        break;
        case 4:
        divs[4].style.display="flex";
        break;
    }
}
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
