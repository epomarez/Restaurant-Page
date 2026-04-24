import './contentStyles.css';
import './contact-pageStyles.css'
export function loadContact() {

    const contactContainer = document.createElement('div');
    contactContainer.id = "contactContainer";

    const h2About = document.createElement('h2');
    h2About.textContent = "Get in touch with us now!";

    const articleContact = document.createElement('article');


    const labelPhoneNumber = document.createElement('span');
    labelPhoneNumber.textContent = "Phone Number";
    const pPhoneNumber = document.createElement('p');
    pPhoneNumber.textContent = "+506 12346578";
    const phoneContainer = document.createElement('div');
    phoneContainer.appendChild(labelPhoneNumber);
    phoneContainer.appendChild(pPhoneNumber);

    const labelEmail = document.createElement('span');
    labelEmail.textContent = "Email:";
    const pEmail = document.createElement('p');
    pEmail.textContent = "brothers.restaurant@email.restaurant";
    const emailContainer = document.createElement('div');
    emailContainer.appendChild(labelEmail);
    emailContainer.appendChild(pEmail);

    const labelLocation = document.createElement('span');
    labelLocation.textContent = "Location";
    const pLocation = document.createElement('p');
    pLocation.textContent = "Far, far away";
    const locationContainer = document.createElement('div');
    locationContainer.appendChild(labelLocation);
    locationContainer.appendChild(pLocation);

    articleContact.appendChild(phoneContainer);
    articleContact.appendChild(emailContainer);
    articleContact.appendChild(locationContainer);

    contactContainer.appendChild(h2About);
    contactContainer.appendChild(articleContact);

    return contactContainer;

}