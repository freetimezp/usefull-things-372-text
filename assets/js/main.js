const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const title = document.querySelector(".intro-title");

setTimeout(() => {
    loader.style.transition = "1s";
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";

        intro.classList.add("active");

        setTimeout(() => {
            title.classList.add("glitch");
        }, 2200);

        setTimeout(() => {
            title.classList.remove("glitch");
        }, 3200);
    }, 1000);
}, 5000);
