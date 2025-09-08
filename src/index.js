import "./nav-styles.css";
import loadPage from "./homepage.js";
import loadMenu from "./menu-page.js";

loadPage();

const content = document.querySelector("#content");

document.addEventListener("click", (e) => {
    const button = e.target;
    if(button.classList.contains("home")){
        content.innerHTML = "";
        loadPage();
    } else if(button.classList.contains("menu")){
        content.innerHTML = "";
        loadMenu();
    }
});