
// ========================================
// CITY GUIDE PORTAL - RAJASTHAN
// Main JavaScript File
// ========================================


// 1. LIVE DATE AND TIME
function updateLiveClock() {
    const clock = document.getElementById("liveClock");

    if (clock) {
        const now = new Date();

        clock.textContent = now.toLocaleString("en-IN", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }
}

updateLiveClock();
setInterval(updateLiveClock, 1000);


// 2. MOBILE NAVIGATION MENU
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

});


// 3. GET FAVOURITES FROM LOCAL STORAGE
function getFavorites() {
    return JSON.parse(localStorage.getItem("rajasthanFavorites")) || [];
}


// 4. CHECK FAVOURITE STATUS
function isFavorite(type, id) {
    const favorites = getFavorites();

    return favorites.some(item =>
        item.type === type && item.id === id
    );
}


// 5. ADD OR REMOVE FAVOURITES
function toggleFavorite(type, id) {

    let favorites = getFavorites();

    const existingIndex = favorites.findIndex(item =>
        item.type === type && item.id === id
    );

    if (existingIndex !== -1) {
        favorites.splice(existingIndex, 1);
        alert("Removed from favourites!");
    } else {
        favorites.push({
            type: type,
            id: id
        });

        alert("Added to favourites!");
    }

    localStorage.setItem(
        "rajasthanFavorites",
        JSON.stringify(favorites)
    );

    document.dispatchEvent(new Event("favoritesUpdated"));
}


// 6. GOOGLE MAPS SEARCH LINK
function getMapLink(name, city) {

    const searchText = name + " " + city + " Rajasthan";

    return "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(searchText);
}


// 7. CREATE REUSABLE CARD
function makeCard(item, type) {

    const title = item.name || item.city || "Explore Rajasthan";
    const cityName = item.city || "Rajasthan";
    const image = item.image || "";

    const description = item.description || "";
    const favorite = isFavorite(type, item.id);

    const mapLink = getMapLink(title, cityName);

    let buttonText = "Explore More";

    if (type === "place") {
        buttonText = "Explore Place";
    } else if (type === "hotel") {
        buttonText = "View Hotel";
    } else if (type === "restaurant") {
        buttonText = "Explore Restaurant";
    } else if (type === "city") {
        buttonText = "Explore City";
    }

    return `
        <div class="destination-card">

            <div class="card-image">
                <img src="${image}"
                     alt="${title}"
                     onerror="this.src='https://placehold.co/600x400?text=Rajasthan'">

                <button class="favorite-btn"
                    onclick="toggleFavorite('${type}', '${item.id}')">
                    ${favorite ? "♥" : "♡"}
                </button>
            </div>

            <div class="card-content">

                <h3>${title}</h3>

                <p class="card-location">📍 ${cityName}, Rajasthan</p>

                <p>${description}</p>

                ${item.price ? `<p><strong>Price:</strong> ${item.price}</p>` : ""}

                ${item.rating ? `<p><strong>Rating:</strong> ⭐ ${item.rating}</p>` : ""}

                <div class="card-buttons">
                <a href="city-details.html?id=${item.id}&type=${type}">
                     View Details
                </a>   
                    <a href="${mapLink}"
                       target="_blank"
                       rel="noopener">
                       View Map
                    </a>

                    <button onclick="alert('${title.replace(/'/g, "\\'")} - ${description.replace(/'/g, "\\'")}')">
                        ${buttonText}
                    </button>
                    ${type === "hotel" || type === "restaurant" ? `
                    <a class="booking-link" href="booking.html?type=${type}&id=${encodeURIComponent(item.id)}">
                        ${type === "hotel" ? "Book Room" : "Book Table"}
                    </a>` : ""}

                </div>

            </div>

        </div>
    `;
}


// 8. RENDER CARDS
function renderCards(items, containerId, type) {

    const container = document.getElementById(containerId);

    if (!container) return;

    if (!items || items.length === 0) {
        container.innerHTML = "<p>No results found.</p>";
        return;
    }

    container.innerHTML = items.map(item =>
        makeCard(item, type)
    ).join("");
}


// 9. SEARCH AND FILTER
function searchItems(items, searchText, cityFilter) {

    const search = (searchText || "").toLowerCase();
    const city = (cityFilter || "").toLowerCase();

    return items.filter(item => {

        const name = (item.name || "").toLowerCase();
        const itemCity = (item.city || item.name || "").toLowerCase();
        const description = (item.description || "").toLowerCase();

        const matchesSearch =
            name.includes(search) ||
            itemCity.includes(search) ||
            description.includes(search);

        const matchesCity =
            !city || itemCity === city;

        return matchesSearch && matchesCity;
    });
}


// 10. CONNECT SEARCH INPUT TO LIST
function setupSearch(items, searchId, cityId, containerId, type) {

    const searchInput = document.getElementById(searchId);
    const citySelect = document.getElementById(cityId);

    function updateResults() {

        const searchText = searchInput ? searchInput.value : "";
        const cityValue = citySelect ? citySelect.value : "";

        const filteredItems = searchItems(
            items,
            searchText,
            cityValue
        );

        renderCards(filteredItems, containerId, type);
    }

    if (searchInput) {
        searchInput.addEventListener("input", updateResults);
    }

    if (citySelect) {
        citySelect.addEventListener("change", updateResults);
    }

    updateResults();
}


// 11. DISPLAY FAVOURITES
function displayFavorites(containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    const favorites = getFavorites();

    const allItems = [
        ...(window.cities || []).map(item => ({ ...item, type: "city" })),
        ...(window.places || []).map(item => ({ ...item, type: "place" })),
        ...(window.hotels || []).map(item => ({ ...item, type: "hotel" })),
        ...(window.restaurants || []).map(item => ({ ...item, type: "restaurant" }))
    ];

    const favoriteItems = allItems.filter(item =>
        favorites.some(fav =>
            fav.type === item.type && fav.id === item.id
        )
    );

    if (favoriteItems.length === 0) {
        container.innerHTML = "<p>You have not added any favourites yet.</p>";
        return;
    }

    container.innerHTML = favoriteItems.map(item =>
        makeCard(item, item.type)
    ).join("");
}


// 12. REFRESH FAVOURITES WHEN UPDATED
document.addEventListener("favoritesUpdated", function () {
    displayFavorites("favoritesGrid");
});


// 13. MAKE FUNCTIONS AVAILABLE TO OTHER PAGES
window.getFavorites = getFavorites;
window.isFavorite = isFavorite;
window.toggleFavorite = toggleFavorite;
window.getMapLink = getMapLink;
window.makeCard = makeCard;
window.renderCards = renderCards;
window.searchItems = searchItems;
window.setupSearch = setupSearch;
window.displayFavorites = displayFavorites;
