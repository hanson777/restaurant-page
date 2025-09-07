const loadPage = () => {
    for (let i = 0; i < 3; i++) {
        const button = document.createElement("button");
        button.classList.add(`number-${i}`);
        document.querySelector(".nav").appendChild(button);
    }

    document.querySelector(".number-0").textContent = "Home";
    document.querySelector(".number-1").textContent = "Menu";
    document.querySelector(".number-2").textContent = "Contact";

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "RESTAURANT";
    document.getElementById("content").appendChild(title); 

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent =
        "Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.";
    document.querySelector("#content").appendChild(caption); 
}

export default loadPage;
