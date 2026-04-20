export function loadHome() {
    const container = document.createElement('div');

    const h1Title = document.createElement('h1');
    h1Title.textContent = "Mi restaurante";

    const imgRandom = document.createElement('img');
    imgRandom.src = "https://picsum.photos/600/400";
    imgRandom.alt = "Restaurant";

    const pExample = document.createElement('p');
    pExample.textContent = "El mejor restaurante de Liberia";

    container.appendChild(h1Title);
    container.appendChild(imgRandom);
    container.appendChild(pExample);

    return container;

}

// <h1>Mi Restuarante</h1>
//        <img src="https://picsum.photos/600/400" alt="Restaurant">
//        <p>El mejor restaurante de Liberia</p>