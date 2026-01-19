const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentYear');
yearElement.textContent = currentYear;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = document.lastModified;