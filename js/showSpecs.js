document.getElementById("specsButton").onclick=function()
{
    var tbody=document.getElementById("showSpecs");
    if(tbody.style.display=="block")
    {
        tbody.style.display="none";
    }
    else
    {
        tbody.style.display="block";
    }
}