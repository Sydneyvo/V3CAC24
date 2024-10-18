// Initialize and add the map
function initMap() {
    // Create a map object centered on Seattle
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 47.6062, lng: -122.3321 },
    });

    // Define the markers data
    const locations = [
        {
            name: "Union Gospel Mission - Men’s Shelter",
            position: { lat: 47.6013, lng: -122.3301 },
            type: "shelter",
            info: "Provides meals, emergency shelter, and recovery programs for men."
        },
        {
            name: "Compass Housing Alliance - Youth Shelter",
            position: { lat: 47.6096, lng: -122.3215 },
            type: "shelter",
            info: "Offers emergency shelter, meals, and support services for homeless youth."
        },
        {
            name: "Housing Compass Alliance",
            position: { lat: 47.6082, lng: -122.3345 },
            type: "housing",
            info: "Provides housing support services and resources."
        },
        {
            name: "Sacred Heart Shelter",
            position: { lat: 47.6074, lng: -122.3258 },
            type: "shelter",
            info: "Offers meals and shelter for homeless individuals and families."
        },
        {
            name: "Mary’s Place - Family Shelter",
            position: { lat: 47.6452, lng: -122.3435 },
            type: "shelter",
            info: "Emergency shelter and supportive services for women and children."
        },
        {
            name: "Seattle Central Community Center",
            position: { lat: 47.6145, lng: -122.3154 },
            type: "community",
            info: "Offers recreational and educational programs for all ages."
        },
        {
            name: "Rainier Community Center",
            position: { lat: 47.5416, lng: -122.2817 },
            type: "community",
            info: "Hosts various events and activities for local residents."
        },
        {
            name: "Pioneer Square Clinic - Health Care for the Homeless",
            position: { lat: 47.6014, lng: -122.3313 },
            type: "health",
            info: "Provides primary care, mental health services, and substance use treatment for the homeless."
        },
        {
            name: "Hope Place - Women's and Children's Shelter",
            position: { lat: 47.6125, lng: -122.3533 },
            type: "shelter",
            info: "Provides shelter, meals, and support services for women and children in crisis."
        },
        {
            name: "Neighborhood House - High Point Center",
            position: { lat: 47.5402, lng: -122.3770 },
            type: "community",
            info: "Offers family support services, youth programs, and a food bank."
        },
        {
            name: "Community Health Centers of King County",
            position: { lat: 47.4836, lng: -122.2190 },
            type: "health",
            info: "Provides primary health care for uninsured and low-income individuals."
        },
        {
            name: "Seattle Indian Health Board",
            position: { lat: 47.6003, lng: -122.3198 },
            type: "health",
            info: "Culturally relevant health care services for urban Native Americans."
        }
    ];
    

    const markers = locations.map(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.name,
            type: location.type,
        });

        marker.addListener('click', () => {
            alert(`${marker.getTitle()}\n${location.info}`);
        });

        return marker;
    });

    // Store the current visible markers
    let currentMarkers = markers;

    // Filter markers by type
    window.filterMarkers = (type) => {
        // Clear current markers from map
        currentMarkers.forEach(marker => {
            marker.setMap(null);
        });

        // Filter new markers
        currentMarkers = markers.filter(marker => {
            const isVisible = marker.type === type;
            marker.setMap(isVisible ? map : null); // Show or hide the marker
            return isVisible;
        });
    };

    // Reset markers to show all
    window.resetMarkers = () => {
        currentMarkers.forEach(marker => {
            marker.setMap(map);
        });
        currentMarkers = markers; // Reset current markers
    };
}

// Load the Google Maps script
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAI0PrHCzZafrn6_oZRNaKUIvgOgrkAoLc&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);
