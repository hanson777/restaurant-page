import "./homepage-styles.css";

const loadPage = () => {

    document.querySelector("#content").className = "homepage";

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "The Afterlife";
    document.getElementById("content").appendChild(title); 

    const caption = document.createElement("div");
    caption.classList.add("caption");

    caption.textContent = "A legendary spot for legendary mercs, the Afterlife is one of the city’s most unique bars. It was originally a mortuary, and was converted way back in 2020. Over the years it’s gone by different names — such as “The Crypt” and “Hades” — and now as “Afterlife” it’s the place to be for gig hunters looking for street cred. If you manage to gain entry to this underground bar, located in Watson, be sure to browse the iconic selection of drinks. The macabre menu features cocktails named after edgerunners who bit the dust in spectacular fashion. Friendly barkeep Claire will fill you in — and while you raise a glass, keep an eye out for some truly iconic fixers from Night City’s underground.";

    document.querySelector("#content").appendChild(caption); 
}

export default loadPage;
