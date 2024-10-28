let but2 = document.getElementsByClassName("but");

for(let i = 0; i < but2.length; i++)
{
    but2[i].setAttribute("clicked", "false");
    but2[i].addEventListener("click", function ()
    {
        if(but2[i].getAttribute("clicked") == "true") {return;} else {but2[i].setAttribute("clicked", "true");}
        let beatit = but2[i].innerHTML;
        but2[i].innerHTML = "PROTOTYPE";
        setTimeout(() => {
            but2[i].innerHTML = beatit;
            but2[i].setAttribute("clicked", "false")
        }, 1000);
    })
}
