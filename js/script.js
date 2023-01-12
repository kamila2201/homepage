console.log("Witam! Życzę miłego dnia.");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark") ?"jasne" : "ciemne";
});
