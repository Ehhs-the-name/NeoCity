function changeSVG(e){
    let svgImg = document.getElementById('svg');
    let y = event.screenY;
    let height = window.outerHeight;

    if (y <= (height/2)) {
        // up  https://i.postimg.cc/CxCH4SZn/Webbed-Site2.png
        img.src = "https://i.postimg.cc/CxCH4SZn/Webbed-Site2.png";
    } else {
        // down  https://i.postimg.cc/Bn5cC48L/Webbed-Site.png
        img.src = "https://i.postimg.cc/Bn5cC48L/Webbed-Site.png";
    }   
}

