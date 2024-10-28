let but = document.getElementById("lgn-btn");
let what = but.firstChild.innerHTML;

but.addEventListener("click", () => 
{
    if(but.getAttribute("clicked") == "true") {return;} else {but.setAttribute("clicked", "true");}
    but.firstChild.innerHTML = "PROTOTYPE";
    setTimeout(() => {
        but.firstChild.innerHTML = what;
        but.setAttribute("clicked", "false")
    }, 1000); 
})