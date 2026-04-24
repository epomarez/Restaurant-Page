import './templateStyles.css'
import { loadHome } from "./home-page.js";
import { loadMenu } from "./menu-page.js";
import backgroundImg from "./background.jpeg";

// This object contains the different events a nav button can have according to their id. 
const NAV_ROUTES = {
    btnHome: () =>
        cleanAndAppend(contentContainer, loadHome()),
    btnMenu: () =>
        cleanAndAppend(contentContainer, loadMenu()),
    btnContact: () =>
        cleanAndAppend(contentContainer, loadContact())
}

const body = document.body;
body.style.backgroundImage = `url(${backgroundImg})`;

const header = document.getElementById('header');

const contentContainer = document.getElementById('content');

contentContainer.appendChild(loadHome());

const btnsNav = document.querySelectorAll('.btnNav');


// Adds an event to each nav button.
btnsNav.forEach(btn => {
    btn.addEventListener('click', () => {
        NAV_ROUTES[btn.id]?.();
    })
});

// This adds or deletes certain html elements according to the selected button.
function cleanAndAppend(container, content) {
    container.removeChild(container.lastChild);
    container.appendChild(content);
}

