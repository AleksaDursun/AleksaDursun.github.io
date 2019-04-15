window.onscroll=function()
{
    if(document.getElementById('mobileNavigation').style.display=="block")
    {
        document.getElementById('headerNav').style.backgroundColor='rgba(0,0,90,1)';
    }
    else
    {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
        {
            document.getElementById('headerNav').style.backgroundColor='rgba(0,0,90,1)';
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
                x[i].style.color="rgba(0,0,90,1)";
            }
        }    
    }
}