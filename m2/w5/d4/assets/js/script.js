var menuBtn = document.getElementById("menuBtn");
var bigBtn = document.getElementById("big");
var paintBtn = document.getElementById("paint");
var uppercaseBtn = document.getElementById("uppercase");
var hideBtn = document.getElementById("hide");
var shownBtn = document.getElementById("shown");
var target = document.getElementById("target");
var toDoElements = document.querySelectorAll(".toDo");
var links = document.querySelectorAll(".links");


menuBtn.addEventListener("click", function() {
    let menu = document.getElementsByClassName("menu");
    menu[0].classList.toggle("menuOpen");
})

bigBtn.addEventListener("click", function() {
    target.style.fontSize = "50px";
})

paintBtn.addEventListener("click", function() {
    target.style.color = "red";
})

uppercaseBtn.addEventListener("click", function() {
    target.style.textTransform = "uppercase";
})

hideBtn.addEventListener("click", function() {
    target.style.visibility = "hidden";
})

shownBtn.addEventListener("click", function() {
    target.style.visibility = "visible";
})

toDoElements.forEach(toDoElement => {

    toDoElement.addEventListener("mouseover", function() {
        toDoElement.style.color = "red";
    })

    toDoElement.addEventListener("mouseout", function() {
        toDoElement.style.color = "black";
    })
    
    toDoElement.addEventListener("click", function() {
        toDoElement.classList.toggle("toDoClicked");
    })
})

links.forEach(link => {

    link.addEventListener("mouseover", function() {
        link.style.backgroundColor = "gray";
    })

    link.addEventListener("mouseout", function() {
        link.style.backgroundColor = "rgb(153, 91, 212)";
    })
    
})