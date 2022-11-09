var sec = 0;
var min = 0;
var timer = setInterval(stopwatch, 1000);
var secRecord = sessionStorage.getItem("flowingSec");
var minRecord = sessionStorage.getItem("flowingMin");

if (secRecord && minRecord) {
    sec = Number(secRecord);
    min = Number(minRecord);
}

function stopwatch() {

    if (sec == 60) {
        sec = 0;
        min++;
    }
    sec++;

    sessionStorage.setItem("flowingSec", sec);
    sessionStorage.setItem("flowingMin", min);

    document.querySelector(".display-4").innerHTML = `Tempo: ${min} min ${sec} sec`;

}

window.addEventListener("DOMContentLoaded", stopwatch);