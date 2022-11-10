var album = document.querySelector(".container");

fetch("http://localhost:3000/album").then(res => res.json()).then(data => {
    data.map((element) => {
        album.innerHTML += `<div class="card my-3" style="width: 18rem;">
        <img src=${element.url} class="card-img-top">
        <div class="card-body">
        <p class="card-text">${element.title}</p>
        </div>
        </div>`;
    })
});