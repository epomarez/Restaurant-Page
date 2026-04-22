import './templateStyles.css'
import { loadHome } from "./home-page.js";
import { loadMenu } from "./menu-page.js";
import backgroundImg from "./background.jpeg";

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
console.log(btnsNav);

btnsNav.forEach(btn => {
    btn.addEventListener('click', () => {
        NAV_ROUTES[btn.id]?.();
    })
});

function cleanAndAppend(container, content) {
    container.removeChild(container.lastChild);
    container.appendChild(content);
}

