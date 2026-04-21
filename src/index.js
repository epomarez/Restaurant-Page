import { loadHome } from "./home-page.js";
import backgroundImg from "./background.jpeg";

const body = document.body;
body.style = "margin: 0; padding: 0;";
body.style.backgroundImage = `url(${backgroundImg})`;

body.style.display = 'grid';
body.style.gridTemplateColumns = '15% 1fr 15%';
body.style.gridTemplateRows = '20% auto 15%';
body.style.justifyItems = 'center';

const header = document.getElementById('header');
header.style.gridColumnStart = '2';
header.style.backgroundColor = '#2f9677';

const content = document.getElementById('content');
content.style.gridColumnStart = '2';
content.style.gridRowStart = '2';
content.style.backgroundColor = '#914c37';
content.appendChild(loadHome());

