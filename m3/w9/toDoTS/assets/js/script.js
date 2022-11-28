var target = document.getElementById("target");
var title = document.getElementById("title");
var loadBtn = document.getElementById("loadBtn");
var Engages = /** @class */ (function () {
    function Engages(_id, _title) {
        this.id = _id;
        this.title = _title;
    }
    Engages.prototype.listCreation = function () {
        target.innerHTML += "<li>".concat(this.title, "</li>");
    };
    return Engages;
}());
window.addEventListener("DOMContentLoaded", print);
function print() {
    fetch("http://localhost:3000/todos")
        .then(function (res) {
        return res.json();
    })
        .then(function (res) {
        res.forEach(function (element) {
            var engage = new Engages(element.id, element.title);
            engage.listCreation();
        });
    });
}
function addEngage(data) {
    var response = fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    document.getElementById("title").value = " ";
}
loadBtn.addEventListener("click", function () {
    if (document.getElementById("title").value != '') {
        var data = {
            title: document.getElementById("title").value
        };
        addEngage(data);
    }
    else {
        alert("Campo di input vuoto");
    }
});
