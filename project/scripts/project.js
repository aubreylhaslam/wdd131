const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

const invitations = [
    {
        name: "Floral Wedding Invitation",
        price: "$3.00",
        color: "green",
        style: "floral",
        image: "images/invite-1.webp"
    },
    {
        name: "Framed Photo Wedding Invitation",
        price: "$2.00",
        color: "beige",
        style: "photo",
        image: "images/invite-2.webp"
    },
    {
        name: "Floral Minimalist Wedding Invitation",
        price: "$2.00",
        color: "beige",
        style: ["floral", "minimalist"],
        image: "images/invite-3.webp"
    },
    {
        name: "Floral Logo Minimalist Wedding Invitation",
        price: "$2.00",
        color: "beige",
        style: ["floral", "minimalist"],
        image: "images/invite-4.webp"
    },
    {
        name: "Two Flowers Minimalist Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        style: ["floral", "minimalist"],
        image: "images/invite-5.webp"
    },
    {
        name: "B/W Framed Wedding Invitation",
        price: "$3.00",
        color: "black and white",
        image: "images/invite-6.webp"
    },
    {
        name: "Watercolor Floral Wedding Invitation",
        price: "$5.00",
        color: "colorful",
        style: ["floral", "painting"],
        image: "images/invite-7.webp"
    },
    {
        name: "Framed Floral Wedding Invitation",
        price: "$3.00",
        color: "blue",
        style: "floral",
        image: "images/invite-8.webp"
    },
    {
        name: "Framed Logo Floral Wedding Invitation",
        price: "$3.00",
        color: "beige",
        style: "floral",
        image: "images/invite-9.webp"
    },
    {
        name: "Painted Floral Wedding Invitation",
        price: "$5.00",
        color: "green",
        style: ["floral", "painting"],
        image: "images/invite-10.webp"
    },
    {
        name: "Photo Wedding Invitation",
        price: "$2.00",
        color: "beige",
        style: "photo",
        image: "images/invite-11.webp"
    },
    {
        name: "Intricate Floral Wedding Invitation",
        price: "$3.00",
        color: "blue",
        style: "floral",
        image: "images/invite-12.webp"
    },
    {
        name: "Faded Photo Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        style: "photo",
        image: "images/invite-13.webp"
    },
    {
        name: "Minimalist Wedding Invitation",
        price: "$2.00",
        color: "green",
        style: "minimalist",
        image: "images/invite-14.webp"
    },
    {
        name: "Light Floral Wedding Invitation",
        price: "$3.00",
        color: "beige",
        style: "floral",
        image: "images/invite-15.webp"
    },
    {
        name: "Floral Leaves Wedding Invitation",
        price: "$3.00",
        color: "beige",
        style: "floral",
        image: "images/invite-16.webp"
    },
    {
        name: "Flower Minimalist Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        style: "minimalist",
        image: "images/invite-17.webp"
    },
    {
        name: "Floral Frame Wedding Invitation",
        price: "$3.00",
        color: "blue",
        style: "floral",
        image: "images/invite-18.webp"
    },
    {
        name: "B/W Minimalist Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        style: "minimalist",
        image: "images/invite-19.webp"
    },
    {
        name: "Painted Flowers Wedding Invitation",
        price: "$5.00",
        color: "colorful",
        style: "painting",
        image: "images/invite-20.webp"
    }
];

createInviteCard(invitations);

function createInviteCard(filteredInvite) {
    document.querySelector(".invite-cards").innerHTML = "";
    filteredInvite.forEach(invitations => {
        let inviteImage = document.createElement("img");
        let card = document.createElement("section");
        let inviteName = document.createElement("h3");
        let invitePrice = document.createElement("p");

        inviteImage.setAttribute("src", invitations.image);
        inviteImage.setAttribute("alt", `${invitations.name} for sale`);
        inviteImage.setAttribute("loading", "lazy");
        inviteName.textContent = invitations.name;
        invitePrice.innerHTML = `<span class="label">Price:</span> ${invitations.price}`;

        card.appendChild(inviteImage);
        card.appendChild(inviteName);
        card.appendChild(invitePrice);

        document.querySelector(".invite-cards").appendChild(card);
    });
}

const colorSelect = document.querySelector('select[name="color"]');
const styleSelect = document.querySelector('select[name="style"]');
const priceSelect = document.querySelector('select[name="price"]');

colorSelect.addEventListener("change", filterInvitations);
styleSelect.addEventListener("change", filterInvitations);
priceSelect.addEventListener("change", filterInvitations);

function filterInvitations() {
    const selectedColor = colorSelect.value;
    const selectedStyle = styleSelect.value;
    const selectedPrice = priceSelect.value;

    const filtered = invitations.filter(invitations => {
        const matchesColor = !selectedColor || invitations.color == selectedColor;
        const matchesStyle = !selectedStyle || invitations.style == selectedStyle;
        const matchesPrice = !selectedPrice || invitations.price == selectedPrice;

        return matchesColor && matchesStyle && matchesPrice;
    });

    createInviteCard(filtered);
}
