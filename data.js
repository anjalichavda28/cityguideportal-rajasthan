
// ========================================
// RAJASTHAN CITY GUIDE PORTAL
// WEBSITE DATA
// ========================================


// 1. CITIES DATA

let cities = [

    {
        id: 1,
        name: "Jaipur",
        nickname: "The Pink City",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900",
        description: "Jaipur is famous for its royal palaces, historic forts, colourful markets and rich Rajasthani culture.",
        population: "3.1 Million",
        famousFor: "Hawa Mahal, Amber Fort, City Palace"
    },

    {
        id: 2,
        name: "Udaipur",
        nickname: "The City of Lakes",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900",
        description: "Udaipur is known for its beautiful lakes, magnificent palaces and romantic surroundings.",
        population: "0.45 Million",
        famousFor: "Lake Pichola, City Palace, Fateh Sagar"
    },

    {
        id: 3,
        name: "Jodhpur",
        nickname: "The Blue City",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900",
        description: "Jodhpur is famous for blue houses, royal architecture and the magnificent Mehrangarh Fort.",
        population: "1.5 Million",
        famousFor: "Mehrangarh Fort, Jaswant Thada"
    },

    {
        id: 4,
        name: "Jaisalmer",
        nickname: "The Golden City",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900",
        description: "Jaisalmer is famous for its golden sandstone architecture and beautiful desert experiences.",
        population: "0.08 Million",
        famousFor: "Jaisalmer Fort, Sam Sand Dunes"
    },

    {
        id: 5,
        name: "Pushkar",
        nickname: "The Holy City",
        image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?w=900",
        description: "Pushkar is known for its sacred lake, temples and traditional markets.",
        population: "0.02 Million",
        famousFor: "Pushkar Lake, Brahma Temple"
    },

    {
    id: 6,
    name: "Bikaner",
    nickname: "The Camel City",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800",
    description: "Explore the beautiful desert city of Bikaner.",
    population: "Approx. 6.5 lakh",
    famousFor: "Junagarh Fort, Camel Festival"
    }   

];


// 2. TOURIST PLACES DATA

let places = [

    {
        id: 1,
        name: "Hawa Mahal",
        city: "Jaipur",
        category: "Historical",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900",
        description: "The Palace of Winds is one of Jaipur's most famous historical monuments."
    },

    {
        id: 2,
        name: "Amber Fort",
        city: "Jaipur",
        category: "Fort",
        image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=900",
        description: "A magnificent hilltop fort known for its artistic architecture."
    },

    {
        id: 3,
        name: "City Palace",
        city: "Udaipur",
        category: "Palace",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900",
        description: "A beautiful royal palace overlooking Lake Pichola."
    },

    {
        id: 4,
        name: "Mehrangarh Fort",
        city: "Jodhpur",
        category: "Fort",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900",
        description: "One of India's largest forts with spectacular city views."
    },

    {
        id: 5,
        name: "Jaisalmer Fort",
        city: "Jaisalmer",
        category: "Historical",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900",
        description: "A historic golden sandstone fort located in the Thar Desert."
    },

    {
        id: 6,
        name: "Pushkar Lake",
        city: "Pushkar",
        category: "Religious",
        image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?w=900",
        description: "A sacred lake surrounded by temples and traditional ghats."
    }

];


// 3. HOTELS DATA

let hotels = [

    {
        id: 1,
        name: "Rambagh Palace",
        city: "Jaipur",
        price: "Luxury",
        rating: "5 Star",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900",
        description: "A luxurious heritage hotel with royal architecture."
    },

    {
        id: 2,
        name: "Taj Lake Palace",
        city: "Udaipur",
        price: "Luxury",
        rating: "5 Star",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
        description: "A beautiful luxury hotel situated on Lake Pichola."
    },

    {
        id: 3,
        name: "Umaid Bhawan Palace",
        city: "Jodhpur",
        price: "Luxury",
        rating: "5 Star",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900",
        description: "A grand palace hotel known for its royal hospitality."
    },

    {
        id: 4,
        name: "Suryagarh",
        city: "Jaisalmer",
        price: "Luxury",
        rating: "5 Star",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900",
        description: "A luxury desert-inspired hotel in Jaisalmer."
    }

];


// 4. RESTAURANTS DATA

let restaurants = [

    {
        id: 1,
        name: "Chokhi Dhani",
        city: "Jaipur",
        category: "Traditional Rajasthani",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
        description: "Experience traditional Rajasthani food and village-style hospitality."
    },

    {
        id: 2,
        name: "Ambrai Restaurant",
        city: "Udaipur",
        category: "Indian Cuisine",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900",
        description: "Enjoy dining with beautiful views of Lake Pichola."
    },

    {
        id: 3,
        name: "Gypsy Restaurant",
        city: "Jodhpur",
        category: "Rajasthani Cuisine",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900",
        description: "Discover delicious local Rajasthani dishes."
    },

    {
        id: 4,
        name: "Desert Boy's Dhani",
        city: "Jaisalmer",
        category: "Traditional Food",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900",
        description: "Experience traditional desert hospitality and local cuisine."
    }

];


// 5. WEBSITE INFORMATION

const websiteInfo = {

    name: "Rajasthan City Guide Portal",

    tagline: "Explore | Experience | Enjoy Rajasthan",

    description: "A tourism information portal that helps visitors explore Rajasthan cities, tourist places, hotels and restaurants.",

    email: "info@rajasthanguide.com",

    location: "Rajasthan, India"

};

// Load Admin Updated Data from LocalStorage



if (localStorage.getItem("rajasthanCities")) {
    cities = JSON.parse(localStorage.getItem("rajasthanCities"));
}

if (localStorage.getItem("rajasthanPlaces")) {
    places = JSON.parse(localStorage.getItem("rajasthanPlaces"));
}

if (localStorage.getItem("rajasthanHotels")) {
    hotels = JSON.parse(localStorage.getItem("rajasthanHotels"));
}

if (localStorage.getItem("rajasthanRestaurants")) {
    restaurants = JSON.parse(localStorage.getItem("rajasthanRestaurants"));
}
