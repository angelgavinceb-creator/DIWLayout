const url = "../componentes/nav.html";

document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.querySelector(".barraNavegacion").innerHTML = data;
    })
});
