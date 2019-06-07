
function displayNone()
{
    document.getElementById("copied").style.visibility="hidden";
}

function copyToClipboard(element)
{
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    document.getElementById("copied").style.visibility="visible";
    setTimeout(displayNone,1000);
}