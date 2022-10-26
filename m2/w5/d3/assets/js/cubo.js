var frecciaSx = document.getElementsByClassName('left-arrow');
var frecciaDx = document.getElementsByClassName('right-arrow');
var tastoPlay = document.getElementsByClassName('play-pause');
var cubo = document.querySelectorAll(".cube")
var length = cubo.length;
var trigger = true;

frecciaSx[0].addEventListener('mouseover', function() {
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo-25)+"deg)";
    }
})

frecciaSx[0].addEventListener('mouseout', function() {
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo+25)+"deg)";
    }
})

frecciaSx[0].addEventListener('click', function() {
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo-90)+"deg)";
    }
})

frecciaDx[0].addEventListener('mouseover', function() {
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo+25)+"deg)";
    }
})

frecciaDx[0].addEventListener('mouseout', function() {
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo-25)+"deg)";
    }
})

frecciaDx[0].addEventListener('click', function() {
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo+90)+"deg)";
    }
})