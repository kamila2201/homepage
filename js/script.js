{
    const welcome = () => {
        console.log("Witam! Życzę miłego dnia!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init()
}



