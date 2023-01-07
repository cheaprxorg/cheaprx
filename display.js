const main = document.querySelector(".card");
const icon = document.querySelector(".icon-logo");
const exit = document.querySelector(".x-icon");

icon.addEventListener("click", () => {
    if  (main.style.display !== "none"){
        main.style.display = "none";
    } else {
        main.style.display = "block"
    }
} )

exit.addEventListener("click", () => {
        main.style.display = "none";
    } 
)