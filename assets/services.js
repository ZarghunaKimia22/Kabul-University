const services = [
    {
        icon: "01",
        title: "Library & Learning",
        description: "Explore books, digital resources, and quiet study spaces to support your coursework and research.",
        link: "#programs",
        linkText: "Explore learning"
    },
    {
        icon: "02",
        title: "Academic Guidance",
        description: "Get help planning your studies, understanding academic pathways, and making informed decisions.",
        link: "#contact",
        linkText: "Ask for guidance"
    },
    {
        icon: "03",
        title: "Student Community",
        description: "Meet fellow students, take part in campus activities, and find ways to contribute to university life.",
        link: "#about",
        linkText: "Discover our community"
    },
    {
        icon: "04",
        title: "Research Support",
        description: "Connect with a culture of inquiry and find opportunities to develop ideas with faculty and peers.",
        link: "#programs",
        linkText: "View research programs"
    }
];

const servicesList = document.querySelector("#services-list");

const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    primaryNavigation.classList.toggle("is-open", !isOpen);
});

primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        primaryNavigation.classList.remove("is-open");
    });
});

services.forEach((service) => {
    const card = document.createElement("article");
    card.classList.add("service-card");

    const number = document.createElement("span");
    number.classList.add("service-card__number");
    number.textContent = service.icon;

    const title = document.createElement("h3");
    title.classList.add("service-card__title");
    title.textContent = service.title;

    const description = document.createElement("p");
    description.classList.add("service-card__description");
    description.textContent = service.description;

    const link = document.createElement("a");
    link.classList.add("service-card__link");
    link.href = service.link;
    link.textContent = service.linkText;

    card.append(number, title, description, link);
    servicesList.append(card);
});
