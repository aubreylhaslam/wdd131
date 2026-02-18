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
        floral: "floral",
        image: "images/invite-1.webp"
    },
    {
        name: "Framed Photo Wedding Invitation",
        price: "$2.00",
        color: "beige",
        photo: "photo",
        image: "images/invite-2.webp"
    },
    {
        name: "Floral Minimalist Wedding Invitation",
        price: "$2.00",
        color: "beige",
        floral: "floral",
        minimalist: "minimalist",
        image: "images/invite-3.webp"
    },
    {
        name: "Floral Logo Minimalist Wedding Invitation",
        price: "$2.00",
        color: "beige",
        floral: "floral",
        minimalist: "minimalist",
        image: "images/invite-4.webp"
    },
    {
        name: "Two Flowers Minimalist Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        floral: "floral",
        minimalist: "minimalist",
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
        floral: "floral",
        painting: "painting",
        image: "images/invite-7.webp"
    },
    {
        name: "Framed Floral Wedding Invitation",
        price: "$3.00",
        color: "blue",
        floral: "floral",
        image: "images/invite-8.webp"
    },
    {
        name: "Framed Logo Floral Wedding Invitation",
        price: "$3.00",
        color: "beige",
        floral: "floral",
        image: "images/invite-9.webp"
    },
    {
        name: "Painted Floral Wedding Invitation",
        price: "$5.00",
        color: "green",
        floral: "floral",
        painting: "painting",
        image: "images/invite-10.webp"
    },
    {
        name: "Photo Wedding Invitation",
        price: "$2.00",
        color: "beige",
        photo: "photo",
        image: "images/invite-11.webp"
    },
    {
        name: "Intricate Floral Wedding Invitation",
        price: "$3.00",
        color: "blue",
        floral: "floral",
        image: "images/invite-12.webp"
    },
    {
        name: "Faded Photo Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        photo: "photo",
        image: "images/invite-13.webp"
    },
    {
        name: "Minimalist Wedding Invitation",
        price: "$2.00",
        color: "green",
        minimalist: "minimalist",
        image: "images/invite-14.webp"
    },
    {
        name: "Light Floral Wedding Invitation",
        price: "$3.00",
        color: "beige",
        floral: "floral",
        image: "images/invite-15.webp"
    },
    {
        name: "Floral Leaves Wedding Invitation",
        price: "$3.00",
        color: "beige",
        floral: "floral",
        image: "images/invite-16.webp"
    },
    {
        name: "Flower Minimalist Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        minimalist: "minimalist",
        image: "images/invite-17.webp"
    },
    {
        name: "Floral Frame Wedding Invitation",
        price: "$3.00",
        color: "blue",
        floral: "floral",
        image: "images/invite-18.webp"
    },
    {
        name: "B/W Minimalist Wedding Invitation",
        price: "$2.00",
        color: "black and white",
        minimalist: "minimalist",
        image: "images/invite-19.webp"
    },
    {
        name: "Painted Flowers Wedding Invitation",
        price: "$5.00",
        color: "color",
        painting: "painting",
        image: "images/invite-20.webp"
    }
];