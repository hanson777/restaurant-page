import jackie from "./images/jackie-welles.webp";
import johnny from "./images/johnny-silverhand.webp";
import david from "./images/david-martinez.webp";
import "./menu-styles.css";


const createImage = (src, alt = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

const loadMenu = () => {
    const davidImage = createImage(david)

    const jackieImage = createImage(jackie);

    const johnnyImage = createImage(johnny);

    const jackieCard = document.createElement("div");
    jackieCard.classList.add("jackie");
    const jackieCaption = document.createElement("div");
    jackieCaption.textContent = "A shot of vodka, lime juice, ginger beer and, most importantly… a splash of love.";
    jackieCaption.classList.add("jackie-caption"); 

    const johnnyCard = document.createElement("div");
    johnnyCard.classList.add("johnny");
    const johnnyCaption = document.createElement("div");
    johnnyCaption.textContent = "A tequila old fashioned with a splash of beer and a chili garnish. For the rockerboy who never gave up.";
    johnnyCaption.classList.add("johnny-caption"); 

    const davidCard = document.createElement("div");
    davidCard.classList.add("david");
    const davidCaption = document.createElement("div");
    davidCaption.textContent = "A shot of vodka on the rocks, topped with NiCola. Aim high and go out with a bang.";
    davidCaption.classList.add("david-caption"); 

    davidCard.appendChild(davidImage);
    jackieCard.appendChild(jackieImage);
    johnnyCard.appendChild(johnnyImage);

    davidCard.appendChild(davidCaption);
    jackieCard.appendChild(jackieCaption);
    johnnyCard.appendChild(johnnyCaption);

    document.querySelector("#content").className = "menu";
    document.querySelector("#content").append(jackieCard, davidCard, johnnyCard);
}

export default loadMenu;



