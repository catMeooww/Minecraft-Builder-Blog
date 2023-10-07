loaddb = false;
function selectedbutton(button) {
    if (loaddb == false) {
        if (button == 1) {
            document.getElementById("bottomtext").innerHTML = "Go to Minecraft Builders blog page!";
        } else if (button == 2) {
            document.getElementById("bottomtext").innerHTML = "View our other minecrafting websites";
        } else if (button == 3) {
            document.getElementById("bottomtext").innerHTML = "Go to Minecraft official website: Minecraft.net";
        }
    }
}

function redirect(to) {
    document.getElementById("bottomimg").style.visibility = "visible";
    loaddb = true;
    document.getElementById("bottomtext").innerHTML = "Redirecting, please wait";
    setTimeout(function redirected() {
        if (to == 1) {
            console.log("Redirecting to blog");
            window.location = "blog.html";
        } else if (to == 2) {
            console.log("Redirecting to sites");
        } else if (to == 3) {
            console.log("Redirecting to minecraft.net");
            window.location = "https://www.minecraft.net/pt-pt";
        }
        setTimeout(function loaderror(){
            document.getElementById("bottomtext").innerHTML = "This is taking so long to redirect, try again";
            document.getElementById("bottomtext").style.color = "red";
        },1000)
    }, 2300)
}