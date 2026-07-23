
function changeSVG(event){
    let img = document.getElementById("fakeSVG");
    let y = event.clientY;
    let height = document.getElementById("fullBody").offsetHeight;

    if (y < (height/2)) {
        // up  --  https://i.postimg.cc/CxCH4SZn/Webbed-Site2.png
        img.src = "https://i.postimg.cc/CxCH4SZn/Webbed-Site2.png";
    } else {
        // down --   https://i.postimg.cc/Bn5cC48L/Webbed-Site.png
        img.src = "https://i.postimg.cc/Bn5cC48L/Webbed-Site.png";
    }   
}
