const temp = document.getElementById('temp').innerHTML;
const mph = document.getElementById('mph').innerHTML;

function calculateWindChill(temp, mph) {
    if (temp > 50 || mph < 3) { return "N/A" }
    return Math.round(
        35.74 + 0.6215 * temp - 35.75 * Math.pow(mph, 0.16) + 0.4275 * temp * Math.pow(mph, 0.16)
    );
}
const wc = calculateWindChill(temp, mph)
document.getElementById("windChill").innerHTML = wc;



const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentYear');
yearElement.textContent = currentYear;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = document.lastModified;