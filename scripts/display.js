const main = document.querySelector("#main-card");
const icon = document.querySelector("#rectangle img#logo");
const exit = document.querySelector("#exit");
console.log(exit)

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
