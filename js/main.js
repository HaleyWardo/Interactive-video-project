
const video = document.querySelector("video");
const span = document.querySelectorAll("span");



for (let i = 0; i < span.length; i += 1) {
    span[i].addEventListener("click", () => {
        span[i].style.backgroundColor= "lightyellow";
    });
}