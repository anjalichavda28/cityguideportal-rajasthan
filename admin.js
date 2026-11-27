
// Admin Panel - Management Functions

function getAdminData(key, defaultData) {
    return JSON.parse(localStorage.getItem(key)) || defaultData;
}

function saveAdminData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function showAdminItems(type, containerId) {
    let dataMap = {
        cities: cities,
        places: places,
        hotels: hotels,
        restaurants: restaurants
    };

    let storageMap = {
        cities: "rajasthanCities",
        places: "rajasthanPlaces",
        hotels: "rajasthanHotels",
        restaurants: "rajasthanRestaurants"
    };

    let items = getAdminData(storageMap[type], dataMap[type]);
    let container = document.getElementById(containerId);

    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = "<p>No records found.</p>";
        return;
    }

    container.innerHTML = items.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.city || item.nickname || "-"}</td>
            <td>
                <button onclick="deleteAdminItem('${type}', ${index})">
                    Delete
                </button>
            </td>
        </tr>
    `).join("");
}

function addAdminItem(type, event) {
    event.preventDefault();

    let dataMap = {
        cities: cities,
        places: places,
        hotels: hotels,
        restaurants: restaurants
    };

    let storageMap = {
        cities: "rajasthanCities",
        places: "rajasthanPlaces",
        hotels: "rajasthanHotels",
        restaurants: "rajasthanRestaurants"
    };

    let form = event.target;
    let name = form.querySelector('[name="name"]').value.trim();
    let cityField = form.querySelector('[name="city"]');
    let city = cityField ? cityField.value.trim() : "";

    if (!name) {
        alert("Please enter a name.");
        return;
    }

    let items = getAdminData(storageMap[type], dataMap[type]);

    let newItem = {
        id: Date.now(),
        name: name,
        city: city,
        description: "Added by administrator",
        image: "",
        category: "General"
    };

    items.push(newItem);
    saveAdminData(storageMap[type], items);

    alert("Record added successfully!");
    form.reset();
    showAdminItems(type, "adminItemsTable");
}

function deleteAdminItem(type, index) {
    if (!confirm("Are you sure you want to delete this record?")) return;

    let dataMap = {
        cities: cities,
        places: places,
        hotels: hotels,
        restaurants: restaurants
    };

    let storageMap = {
        cities: "rajasthanCities",
        places: "rajasthanPlaces",
        hotels: "rajasthanHotels",
        restaurants: "rajasthanRestaurants"
    };

    let items = getAdminData(storageMap[type], dataMap[type]);

    items.splice(index, 1);
    saveAdminData(storageMap[type], items);

    showAdminItems(type, "adminItemsTable");
}
