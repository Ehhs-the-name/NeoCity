
function changeSVG(event){
    let img = document.getElementById("fakeSVG");
    let y = event.clientY;
    let height = document.getElementById("fullBody").offsetHeight;

    if (y < (height/2)) {
        // up
        img.src = "https://i.postimg.cc/VLbngMGg/Webbed-Site2.png";
    } else {
        // down
        img.src = "https://i.postimg.cc/440ppw5r/Webbed-Site.png";
    }   
}
