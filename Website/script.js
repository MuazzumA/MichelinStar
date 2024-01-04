var messageArray = ["The Best Coming from New York "];
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#message").
    innerHTML = messageArray[0].substring(0, textPosition) 
    + "<span>\u25ae</span>";


    if (textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);

function initMap() {
    // Create a map centered on NYC
    var map = L.map('map', {
        scrollWheelZoom: false
    });
    map.setView([40.7128, -74.0060], 16.7);

    // Add the base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for each Michelin-starred restaurant
    var restaurants = [
        { name: 'Le Bernardin', location: [40.7614, -73.9817], address: '155 W 51st St, New York, NY 10019' },
        { name: 'Eleven Madison Park', location: [40.7419, -73.9871], address: '11 Madison Ave, New York, NY 10010' },
        // Add more restaurants as needed
    ];

    var customIcon = L.icon({
        iconUrl: 'Website/images/mapmarker.png', // replace with marker image
        iconSize: [83, 83],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });


    restaurants.forEach(function (restaurant) {
        var marker = L.marker(restaurant.location, { icon: customIcon }).addTo(map);

        marker.on('click', function () {
            updateCard(restaurant);
        });

    });
        // fit the map to a bounding box around New York City
        var bounds = [
            [40.4774, -74.2591], // Southwest coordinates of NYC
            [40.9176, -73.7004]  // Northeast coordinates of NYC
        ];
    
        map.fitBounds(bounds);
}

function updateCard(restaurant) {
    var cardName = document.getElementById('card-name');
    var cardAddress = document.getElementById('card-address');

    if (cardName && cardAddress) {
        cardName.innerText = restaurant.name;
        cardAddress.innerText = restaurant.address;
        // Update more card details as needed
    }
}

// Call the initMap function when the document is ready
document.addEventListener('DOMContentLoaded', initMap);
