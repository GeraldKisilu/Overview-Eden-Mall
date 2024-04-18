// Variables
const viewPromosBtn = document.getElementById('view-promos-btn');
const viewEventsBtn = document.getElementById('view-events-btn');
const viewMapBtn = document.getElementById('view-map-btn');

// Functions
function viewPromotions() {
    // Logic to display promotions
    console.log('Displaying promotions...');
}

function viewEvents() {
    // Logic to display events
    console.log('Displaying events...');
}

function viewMap() {
    // Logic to display mall map
    console.log('Displaying mall map...');
}

// Event Listeners
viewPromosBtn.addEventListener('click', viewPromotions);
viewEventsBtn.addEventListener('click', viewEvents);
viewMapBtn.addEventListener('click', viewMap);


// Define mall information
const mallInfo = {
    history: "Our mall was founded in 1990 and has since grown to become one of the largest shopping centers in the region.",
    mission: "Our mission is to provide a diverse and enjoyable shopping experience for our customers while supporting the local community.",
    facilities: "Our mall offers a wide range of facilities including spacious parking lots, clean restrooms, family-friendly amenities, and wheelchair accessibility.",
    communityEngagement: "We actively engage with the local community through various initiatives such as charity events, sponsorships, and environmental sustainability programs."
};

// Function to display information based on button click
function displayInfo(infoType) {
    const infoDisplay = document.getElementById("info-display");
    infoDisplay.innerHTML = mallInfo[infoType];
}

// Add event listeners to buttons
document.getElementById('history-btn').addEventListener('click', function() {
    displayInfo('history');
});

document.getElementById('mission-btn').addEventListener('click', function() {
    displayInfo('mission');
});

document.getElementById('facilities-btn').addEventListener('click', function() {
    displayInfo('facilities');
});

document.getElementById('community-btn').addEventListener('click', function() {
    displayInfo('communityEngagement');
});
 