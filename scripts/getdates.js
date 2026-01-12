const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentYear');
yearElement.textContent = currentYear;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = document.lastModified;