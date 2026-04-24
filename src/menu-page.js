import { DishesList } from './dishes.js';
import './contentStyles.css';
import './dishesStyles.css'

export function loadMenu() {

    const menuContainer = document.createElement('div');
    menuContainer.id = "menuContainer";


    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "This is our delicious Menu";
    menuContainer.appendChild(menuTitle);

    // The code bellow adds different dishes according to a fixed structure.
    // The content is imported and dishes will be added regardless of their quantity.
    DishesList.forEach((dish) => {
        const dishElement = document.createElement('article');
        dishElement.className = "dishContent";

        const dishTitle = document.createElement('h3');
        dishTitle.className = "title";
        dishTitle.textContent = dish.title;

        const dishImage = document.createElement('img');
        dishImage.src = dish.imageSource;

        const dishDescription = document.createElement('p');
        dishDescription.textContent = dish.description;

        dishElement.appendChild(dishTitle);
        dishElement.appendChild(dishImage);
        dishElement.appendChild(dishDescription);

        menuContainer.appendChild(dishElement);
    });


    return menuContainer;

}