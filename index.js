// HOME HTML
// Define your promotions
const promotions = [
    {
        title: "Summer Sale",
        description: "Get up to 50% off on selected items! Don't miss out!",
    },
    {
        title: "Back-to-School Special",
        description: "Buy one, get one free on all school supplies!",
    },
    {
        title: "Holiday Bonanza",
        description: "Shop now and receive a free gift with every purchase!",
    }
];

// Function to display promotions
function displayPromotions() {
    const promotionsContainer = document.getElementById("promotions-container");

    // Clear any existing content
    promotionsContainer.innerHTML = "";

    // Loop through each promotion and create HTML elements to display them
    promotions.forEach(promotion => {
        const promotionElement = document.createElement("div");
        promotionElement.classList.add("promotion");

        const titleElement = document.createElement("h3");
        titleElement.textContent = promotion.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = promotion.description;

        promotionElement.appendChild(titleElement);
        promotionElement.appendChild(descriptionElement);

        promotionsContainer.appendChild(promotionElement);
    });
}

// Event listener for the "View Promotions" button
const viewPromosBtn = document.getElementById("view-promos-btn");
viewPromosBtn.addEventListener("click", displayPromotions);


document.getElementById("view-events-btn").addEventListener("click", function () {
    // Dummy event data, replace this with your actual event data
    var events = [
        "Music Concert - April 25, 2024",
        "Fashion Show - May 1, 2024",
        "Food Festival - May 10, 2024"
    ];

    var eventsList = document.getElementById("events-list");
    eventsList.innerHTML = ""; // Clear previous events

    // Add each event to the list
    events.forEach(function (event) {
        var eventItem = document.createElement("p");
        eventItem.textContent = event;
        eventsList.appendChild(eventItem);
    });

    // Show the events list
    eventsList.style.display = "block";
});

document.getElementById("view-map-btn").addEventListener("click", function () {
    // Show the map container
    document.getElementById("kenyan-map").style.display = "block";
});
