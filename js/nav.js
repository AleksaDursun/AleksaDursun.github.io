window.onscroll=function()
{
    if(document.getElementById('mobileNavigation').style.display=="block")
    {
        document.getElementById('headerNav').style.backgroundColor='rgb(0, 40, 120)';
    }
    else
    {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
        {
            document.getElementById('headerNav').style.backgroundColor='rgb(0, 40, 120)';
            var x=document.getElementsByClassName('regularNav');
            for(var i=0;i<x.length;i++)
            {
                x[i].style.color="#fff";
            }
        }
        else
        {
    
            document.getElementById('headerNav').style.backgroundColor='transparent';
            var x=document.getElementsByClassName('regularNav');
            for(var i=0;i<x.length;i++)
            {
                x[i].style.color="rgb(0, 40, 120)";
            }
        }    
    }
}