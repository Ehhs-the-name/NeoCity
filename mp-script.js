
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

function fontChange(){
    const eleList = document.querySelectorAll('[class="fonter"]');
   
    for(let i=0; i < eleList.length; i++) {
        console.log(eleList[i].nodeName);

        if(eleList[i].style.fontFamily == 'OpenDyslexic') {
            eleList[i].style.fontFamily = 'MatrixType';
            eleList[i].style.fontSize = '1rem';
        } else {
            eleList[i].style.fontFamily = 'OpenDyslexic';
            //eleList[i].style.fontSize = '0.75rem';
        }
    }
}
