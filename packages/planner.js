// planner.js - Trip Planner Logic Engine

// Core destinations fallback database
const CORE_DESTINATIONS = {
    "hyderabad": {
        name: "Hyderabad",
        banner: "./homepages/gallery/charminar.jpg",
        days: [
            [
                { time: "09:00 AM", name: "Charminar", desc: "The iconic four minarets monument in Urdu, situated in the heart of old city.", cost: 50, category: "historic" },
                { time: "12:00 PM", name: "Golconda Fort", desc: "A historic fortress complex which served as the capital of the Qutb Shahi dynasty.", cost: 100, category: "historic" },
                { time: "04:30 PM", name: "Birla Mandir", desc: "A beautiful white marble temple located on a hilltop overlooking Hussain Sagar.", cost: 0, category: "culture" }
            ],
            [
                { time: "08:30 AM", name: "Cafe Niloufer", desc: "Enjoy iconic Irani chai and Osmania biscuits for breakfast.", cost: 150, category: "food" },
                { time: "10:30 AM", name: "Nehru Zoological Park", desc: "One of the largest zoos in India hosting diverse animal species.", cost: 100, category: "nature" },
                { time: "05:00 PM", name: "Hussain Sagar Lake", desc: "Features a massive monolithic Buddha statue with speedboat rides.", cost: 300, category: "adventure" }
            ],
            [
                { time: "09:00 AM", name: "Ananthagiri Hills", desc: "Scenic hill station located near Vikarabad, perfect for nature walks.", cost: 0, category: "nature" },
                { time: "02:30 PM", name: "Chilkur Balaji Temple", desc: "Also known as the Visa Balaji temple, a historic shrine.", cost: 0, category: "culture" },
                { time: "07:00 PM", name: "Under The Moon (UTM)", desc: "A cozy open-air resort cafe known for its scenic views.", cost: 200, category: "food" }
            ],
            [
                { time: "09:30 AM", name: "Shri Peddamma Talli Temple", desc: "Highly popular Hindu temple in Jubilee Hills dedicated to Goddess Durga.", cost: 0, category: "culture" },
                { time: "11:00 AM", name: "Wonderla Amusement Park", desc: "An action-packed day of thrilling land and water rides.", cost: 1550, category: "adventure" }
            ],
            [
                { time: "10:00 AM", name: "Lumbini Park", desc: "Lush gardens on Hussain Sagar bank offering laser shows.", cost: 50, category: "nature" },
                { time: "02:00 PM", name: "Sarath City Capital Mall", desc: "One of India's largest shopping malls featuring AMB Cinemas.", cost: 0, category: "shopping" }
            ]
        ]
    },
    "goa": {
        name: "Goa",
        banner: "./homepages/gallery/goa.jpg",
        days: [
            [
                { time: "10:00 AM", name: "Anjuna Beach", desc: "Famed beach popular for its hippie vibes and weekly flea market.", cost: 0, category: "beach" },
                { time: "02:00 PM", name: "Chapora Fort", desc: "Perched fort overlooking the sea, famous from the movie Dil Chahta Hai.", cost: 0, category: "historic" },
                { time: "05:00 PM", name: "Arambol Beach & Sweet Lake", desc: "Serene sweet water lagoon near the sea with live sunset drum circles.", cost: 0, category: "beach" }
            ],
            [
                { time: "10:00 AM", name: "Baga Beach", desc: "Popular beach filled with water sports, shacks, and active nightlife.", cost: 0, category: "beach" },
                { time: "02:00 PM", name: "Fort Aguada", desc: "A well-preserved 17th-century Portuguese fort and lighthouse.", cost: 0, category: "historic" },
                { time: "04:30 PM", name: "Coco Jetty Mangrove Boating", desc: "Relaxing boat cruise spotting dolphins and navigating creeks.", cost: 1499, category: "adventure" }
            ],
            [
                { time: "09:30 AM", name: "Grand Island Scuba Diving", desc: "Exotic underwater exploration with reef sightings.", cost: 4000, category: "adventure" },
                { time: "03:00 PM", name: "Parasailing & Jet Skiing", desc: "Exciting high-speed watersports on Calangute Beach.", cost: 1500, category: "adventure" }
            ],
            [
                { time: "10:00 AM", name: "Basilica of Bom Jesus", desc: "UNESCO world heritage site containing the remains of St. Francis Xavier.", cost: 0, category: "historic" },
                { time: "01:00 PM", name: "Se Cathedral", desc: "One of the largest churches in Asia displaying classic Portuguese-Manueline architecture.", cost: 0, category: "historic" },
                { time: "03:30 PM", name: "Fontainhas Latin Quarter", desc: "Charming walk through colorful colonial-era Portuguese houses.", cost: 0, category: "culture" }
            ],
            [
                { time: "10:00 AM", name: "Cabo de Rama Fort", desc: "Southern clifftop fort providing panoramic ocean vistas.", cost: 0, category: "historic" },
                { time: "02:00 PM", name: "Butterfly Beach", desc: "A secluded cove shaped like a butterfly, reachable by a short trek.", cost: 0, category: "beach" }
            ]
        ]
    },
    "banglore": {
        name: "Bangalore",
        banner: "./homepages/gallery/bang (1).jpg",
        days: [
            [
                { time: "09:00 AM", name: "ISKCON Temple Bangalore", desc: "Massive neo-classical cultural complex dedicated to Radha-Krishna.", cost: 0, category: "culture" },
                { time: "11:30 AM", name: "Visvesvaraya Industrial & Technological Museum", desc: "Fascinating science exhibits and interactive laboratories.", cost: 80, category: "historic" },
                { time: "05:00 PM", name: "Church Street", desc: "Sip filter coffee and explore bookstores on this vibrant street.", cost: 100, category: "shopping" }
            ],
            [
                { time: "06:00 AM", name: "Nandi Hills Sunrise", desc: "Breathtaking hilltop cloud views early in the morning.", cost: 50, category: "nature" },
                { time: "01:00 PM", name: "Lalbagh Botanical Garden", desc: "Historic 240-acre park featuring a gorgeous Victorian glass house.", cost: 30, category: "nature" },
                { time: "04:30 PM", name: "Bangalore Palace", desc: "Royal palace built to resemble Windsor Castle in England.", cost: 230, category: "historic" }
            ],
            [
                { time: "09:30 AM", name: "Mysore Palace", desc: "Stunning palace of the Wodeyar dynasty (2-hour trip from Bangalore).", cost: 100, category: "historic" },
                { time: "02:30 PM", name: "Chamundeshwari Temple", desc: "Sacred temple atop Chamundi Hills overlooking Mysore.", cost: 0, category: "culture" }
            ],
            [
                { time: "09:30 AM", name: "Bannerghatta National Park", desc: "Wildlife safari park featuring lions, tigers, and a butterfly park.", cost: 350, category: "nature" },
                { time: "03:30 PM", name: "Cubbon Park & Vidhana Soudha", desc: "Walk through green lawns and view the grand state legislative building.", cost: 0, category: "nature" }
            ]
        ]
    },
    "jaipur": {
        name: "Jaipur",
        banner: "./homepages/gallery/pink.jpg",
        days: [
            [
                { time: "09:00 AM", name: "Amber Palace (Amer Fort)", desc: "Majestic fort of red sandstone and marble set high on a hill.", cost: 200, category: "historic" },
                { time: "01:00 PM", name: "Hawa Mahal", desc: "The famous five-story palace of winds built with pink screens.", cost: 50, category: "historic" },
                { time: "03:00 PM", name: "City Palace", desc: "Resplendent palace complex housing royal museums and courtyards.", cost: 300, category: "historic" }
            ],
            [
                { time: "10:00 AM", name: "Jantar Mantar", desc: "Fascinating astronomical observatory hosting the world's largest stone sundial.", cost: 100, category: "historic" },
                { time: "01:30 PM", name: "Nahargarh Fort", desc: "Stunning fort offering beautiful views of Jaipur city.", cost: 200, category: "historic" },
                { time: "04:30 PM", name: "Albert Hall Museum", desc: "Indo-Saracenic state museum showing historic arms and art.", cost: 150, category: "historic" }
            ],
            [
                { time: "10:00 AM", name: "Jal Mahal", desc: "The beautiful water palace floating in the center of Man Sagar Lake.", cost: 0, category: "historic" },
                { time: "01:00 PM", name: "Gaitore Ki Chhatriyan", desc: "Intricate royal cenotaphs exhibiting detailed marble carvings.", cost: 50, category: "culture" },
                { time: "03:30 PM", name: "Sisodia Rani Garden", desc: "Multi-tiered royal gardens adorned with fountains and murals.", cost: 50, category: "nature" }
            ]
        ]
    },
    "kerala": {
        name: "Kerala",
        banner: "./homepages/gallery/kerala (1).jpg",
        days: [
            [
                { time: "09:00 AM", name: "Periyar National Park Safari", desc: "Sanctuary protecting elephants and tigers amidst spice hills.", cost: 200, category: "nature" },
                { time: "01:00 PM", name: "Bamboo Rafting on Periyar Lake", desc: "Scenic eco-tourism raft ride down the lake.", cost: 1500, category: "adventure" },
                { time: "06:00 PM", name: "Kathakali Performance", desc: "Witness traditional Indian dance drama with heavy makeup.", cost: 300, category: "culture" }
            ],
            [
                { time: "09:30 AM", name: "Fort Kochi Walking Tour", desc: "See iconic Chinese Fishing Nets and historical landmarks.", cost: 0, category: "culture" },
                { time: "01:00 PM", name: "Indo-Portuguese Museum", desc: "Displays ancient Christian artifacts showing Portuguese heritage.", cost: 40, category: "historic" },
                { time: "04:30 PM", name: "Marine Drive Kochi", desc: "Water-facing walkway popular for evening strolls and sunset boats.", cost: 100, category: "nature" }
            ],
            [
                { time: "09:00 AM", name: "Munnar Tea Gardens Tour", desc: "Lush green rolling tea fields with fresh tea tasting.", cost: 0, category: "nature" },
                { time: "11:30 AM", name: "Eravikulam National Park", desc: "Park famous for the endangered Nilgiri Tahr mountain goat.", cost: 200, category: "nature" },
                { time: "03:30 PM", name: "Mattupetty Dam Boating", desc: "Storage concrete gravity dam with scenic water cruises.", cost: 50, category: "adventure" }
            ],
            [
                { time: "10:00 AM", name: "Kundala Lake", desc: "Picturesque lake offering pedal boating amidst tall pine groves.", cost: 50, category: "nature" },
                { time: "02:00 PM", name: "Lakkam Waterfalls", desc: "Scenic mountain cascade offering swimming pools in Munnar.", cost: 50, category: "nature" }
            ]
        ]
    },
    "araku": {
        name: "Araku",
        banner: "./homepages/gallery/arak (1).jpg",
        days: [
            [
                { time: "09:30 AM", name: "Borra Caves", desc: "Deep ancient limestone caves filled with stalactites and stalagmites.", cost: 150, category: "nature" },
                { time: "12:30 PM", name: "Katiki Waterfalls", desc: "A wild cascading stream reachable by a rugged jeep drive.", cost: 100, category: "nature" },
                { time: "03:30 PM", name: "Araku Coffee Museum", desc: "Sample freshly roasted local organic coffee and learn history.", cost: 50, category: "food" },
                { time: "05:00 PM", name: "Padmapuram Gardens", desc: "Historic botanical gardens housing tree huts and a toy train.", cost: 40, category: "nature" }
            ]
        ]
    },
    "chennai": {
        name: "Chennai",
        banner: "./homepages/gallery/chennai1 (1).jpg",
        days: [
            [
                { time: "08:30 AM", name: "Marina Beach", desc: "Stroll along the world's second-longest urban beach.", cost: 0, category: "beach" },
                { time: "11:00 AM", name: "Kapaleeshwarar Temple", desc: "Famous 7th-century Dravidian temple dedicated to Lord Shiva.", cost: 0, category: "culture" },
                { time: "02:30 PM", name: "Government Museum Chennai", desc: "Vast museum of human history and bronze sculptures.", cost: 15, category: "historic" }
            ],
            [
                { time: "09:30 AM", name: "Guindy National Park", desc: "One of the few national parks situated inside a city forest.", cost: 20, category: "nature" },
                { time: "01:00 PM", name: "San Thome Cathedral Basilica", desc: "Neo-gothic shrine built over the tomb of St. Thomas the Apostle.", cost: 0, category: "historic" },
                { time: "03:30 PM", name: "VGP Golden Beach", desc: "Vibrant beach theme park featuring water slides and rides.", cost: 600, category: "adventure" }
            ]
        ]
    },
    "agra": {
        name: "Agra",
        banner: "./homepages/gallery/taj.jpg",
        days: [
            [
                { time: "08:00 AM", name: "Taj Mahal", desc: "The global symbol of love, an ivory-white marble mausoleum.", cost: 50, category: "historic" },
                { time: "11:30 AM", name: "Agra Fort", desc: "Massive 16th-century red sandstone fortress of Mughal emperors.", cost: 50, category: "historic" },
                { time: "04:30 PM", name: "Sadar Bazar Shopping", desc: "Browse authentic handicrafts, leather goods, and local petha sweets.", cost: 0, category: "shopping" }
            ],
            [
                { time: "09:30 AM", name: "Fatehpur Sikri", desc: "Fortified ancient Mughal city of Emperor Akbar located near Agra.", cost: 80, category: "historic" },
                { time: "03:30 PM", name: "Mehtab Bagh", desc: "Moonlight garden offering stunning direct views of the Taj Mahal across the river.", cost: 25, category: "nature" },
                { time: "05:00 PM", name: "Tomb of Itimad-ud-Daulah", desc: "Beautiful draft tomb of marble often called the Baby Taj.", cost: 30, category: "historic" }
            ]
        ]
    }
};

// Global active state variable to track current planned trip details
let activeTrip = null;

// Initialize features on document load
document.addEventListener("DOMContentLoaded", () => {
    setupAutocomplete();
    setupSavedTripsList();
});

// 1. SETUP AUTOCOMPLETE WITH NOMINATIM GEOLOCATION
function setupAutocomplete() {
    const input = document.getElementById("autocomplete");
    if (!input) return;

    // Wrap the input in autocomplete wrapper to handle coordinates
    const wrapper = document.createElement("div");
    wrapper.className = "autocomplete-wrapper";
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    // Create dropdown element
    const dropdown = document.createElement("ul");
    dropdown.className = "autocomplete-suggestions";
    dropdown.style.display = "none";
    wrapper.appendChild(dropdown);

    let debounceTimeout = null;

    // Keyboard type listening
    input.addEventListener("input", () => {
        clearTimeout(debounceTimeout);
        const query = input.value.trim();

        if (query.length < 3) {
            dropdown.innerHTML = "";
            dropdown.style.display = "none";
            return;
        }

        debounceTimeout = setTimeout(() => {
            fetchSuggestions(query, dropdown);
        }, 300);
    });

    // Close dropdown on clicking outside
    document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
            dropdown.innerHTML = "";
            dropdown.style.display = "none";
        }
    });
}

// Fetch suggestions from Nominatim API (OpenStreetMap)
async function fetchSuggestions(query, dropdown) {
    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`;
        const response = await fetch(url, {
            headers: {
                "Accept-Language": "en-US,en;q=0.9"
            }
        });

        if (!response.ok) throw new Error("API Limit reached");

        const data = await response.json();
        dropdown.innerHTML = "";

        if (data.length === 0) {
            dropdown.style.display = "none";
            return;
        }

        data.forEach((item) => {
            const li = document.createElement("li");
            li.className = "autocomplete-suggestion";
            li.innerHTML = `<i class="fas fa-map-marker-alt"></i> <span>${item.display_name}</span>`;
            li.addEventListener("click", () => {
                const input = document.getElementById("autocomplete");
                input.value = item.display_name;
                // Save coordinates and bounding boxes in input attributes
                input.setAttribute("data-lat", item.lat);
                input.setAttribute("data-lon", item.lon);
                dropdown.innerHTML = "";
                dropdown.style.display = "none";
            });
            dropdown.appendChild(li);
        });

        dropdown.style.display = "block";
    } catch (err) {
        console.error("Nominatim suggestion error:", err);
        // Fallback core local matching
        dropdown.innerHTML = "";
        const matches = Object.keys(CORE_DESTINATIONS).filter(k => k.includes(query.toLowerCase()));
        if (matches.length > 0) {
            matches.forEach(m => {
                const dest = CORE_DESTINATIONS[m];
                const li = document.createElement("li");
                li.className = "autocomplete-suggestion";
                li.innerHTML = `<i class="fas fa-city"></i> <span>${dest.name}, India</span>`;
                li.addEventListener("click", () => {
                    const input = document.getElementById("autocomplete");
                    input.value = dest.name;
                    input.removeAttribute("data-lat");
                    input.removeAttribute("data-lon");
                    dropdown.innerHTML = "";
                    dropdown.style.display = "none";
                });
                dropdown.appendChild(li);
            });
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    }
}

// 2. GENERATE AND RUN PLANNER ON CLICK
async function runPlanner() {
    const daysSelect = document.getElementById("travel-days");
    const autocompleteInput = document.getElementById("autocomplete");
    const styleSelect = document.getElementById("travel-style");

    if (!daysSelect || !autocompleteInput || !styleSelect) return;

    const daysVal = daysSelect.value;
    const destinationVal = autocompleteInput.value.trim();
    const styleVal = styleSelect.value;

    if (!destinationVal) {
        alert("Please enter a destination place.");
        return;
    }
    if (!daysVal) {
        alert("Please select the number of travel days.");
        return;
    }
    if (!styleVal) {
        alert("Please select a travel style.");
        return;
    }

    const numDays = parseInt(daysVal);
    let resolvedLat = autocompleteInput.getAttribute("data-lat");
    let resolvedLon = autocompleteInput.getAttribute("data-lon");
    const searchName = destinationVal.split(",")[0].trim().toLowerCase();

    // Show loading spinner
    let resultContainer = document.getElementById("planner-result-container");
    if (!resultContainer) {
        resultContainer = document.createElement("div");
        resultContainer.id = "planner-result-container";
        resultContainer.className = "container";
        document.querySelector(".container").after(resultContainer);
    }
    resultContainer.innerHTML = `
        <div class="planner-dashboard" style="opacity: 1; text-align: center; padding: 50px;">
            <i class="fas fa-circle-notch fa-spin" style="font-size: 50px; color: var(--primary-color);"></i>
            <h3 style="margin-top: 20px; font-size: 20px;">Fetching real-time tourist spots, weather, and photos...</h3>
        </div>
    `;

    // Core or Custom generation
    try {
        let tripPlan = null;

        // Check if destination is one of our hand-crafted local core packages
        if (CORE_DESTINATIONS[searchName]) {
            const data = CORE_DESTINATIONS[searchName];
            tripPlan = generateLocalTrip(data.name, data.banner, data.days, numDays, styleVal);
        } else {
            // Fetch coordinates if we don't have them
            if (!resolvedLat || !resolvedLon) {
                const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(destinationVal)}&format=json&limit=1`;
                const geoRes = await fetch(geoUrl);
                const geoData = await geoRes.json();
                if (geoData && geoData.length > 0) {
                    resolvedLat = geoData[0].lat;
                    resolvedLon = geoData[0].lon;
                }
            }

            if (resolvedLat && resolvedLon) {
                // Fetch dynamic real attractions using Wikipedia Geosearch API
                tripPlan = await generateApiTrip(destinationVal, resolvedLat, resolvedLon, numDays, styleVal);
            } else {
                // Final fallback if no internet or coordinates resolved
                tripPlan = generateMockTrip(destinationVal, numDays, styleVal);
            }
        }

        // Fetch live weather data using Open-Meteo API
        let weatherData = null;
        if (resolvedLat && resolvedLon) {
            weatherData = await fetchWeather(resolvedLat, resolvedLon);
        }

        activeTrip = {
            destination: tripPlan.destination,
            style: styleVal,
            daysCount: numDays,
            banner: tripPlan.banner,
            itinerary: tripPlan.itinerary,
            weather: weatherData,
            checklist: generateChecklist(styleVal)
        };

        // Render dashboard
        renderDashboard();

        // Scroll to dashboard
        document.getElementById("planner-result-container").scrollIntoView({ behavior: "smooth" });

    } catch (err) {
        console.error("Planner generation failed:", err);
        // Fallback to offline generation
        const tripPlan = generateMockTrip(destinationVal, numDays, styleVal);
        activeTrip = {
            destination: tripPlan.destination,
            style: styleVal,
            daysCount: numDays,
            banner: tripPlan.banner,
            itinerary: tripPlan.itinerary,
            weather: null,
            checklist: generateChecklist(styleVal)
        };
        renderDashboard();
    }
}

// // 3. GENERATION ENGINES
// Helper to score attractions based on travel style preferences
function scoreActivity(category, style) {
    const prefs = {
        adventure: ["adventure", "nature", "beach"],
        romantic: ["food", "beach", "nature", "culture"],
        family: ["historic", "culture", "nature"],
        friendly: ["shopping", "food", "adventure", "beach"]
    };
    const list = prefs[style] || [];
    const index = list.indexOf(category);
    if (index === 0) return 20; // primary preference
    if (index > 0) return 10;  // secondary preference
    return 1; // other
}

// Local DB planner (prioritizes items matching selected travel style)
function generateLocalTrip(name, banner, coreDays, numDays, style) {
    // 1. Gather all activities in coreDays into a flat list
    let allActivities = [];
    coreDays.forEach(day => {
        day.forEach(act => {
            allActivities.push(JSON.parse(JSON.stringify(act)));
        });
    });

    // 2. Score and sort by style matching
    allActivities.sort((a, b) => scoreActivity(b.category, style) - scoreActivity(a.category, style));

    // 3. Select items, looping if needed
    const selected = [];
    for (let i = 0; i < numDays * 3; i++) {
        const act = allActivities[i % allActivities.length];
        selected.push(JSON.parse(JSON.stringify(act)));
    }

    // 4. Distribute into daily itineraries (3 per day)
    const itinerary = [];
    const timeSlots = ["09:30 AM", "01:30 PM", "04:30 PM"];
    for (let d = 0; d < numDays; d++) {
        const daySpots = [];
        for (let t = 0; t < 3; t++) {
            const act = selected[d * 3 + t];
            act.time = timeSlots[t];
            act.desc = `${act.desc} [Curated for your ${style} trip]`;
            daySpots.push(act);
        }
        itinerary.push(daySpots);
    }

    return { destination: name, banner, itinerary };
}

// Real-Time Wikipedia Geosearch API planner (curates by travel style preferences)
async function generateApiTrip(cityName, lat, lon, numDays, style) {
    const wikiSearchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lon}&gsradius=10000&gslimit=30&format=json&origin=*`;
    const res = await fetch(wikiSearchUrl);
    const data = await res.json();
    
    let spots = [];
    if (data.query && data.query.geosearch) {
        // Filter out boring geocodes (e.g. railway stations, suburbs, local schools)
        spots = data.query.geosearch.filter(spot => {
            const lowerTitle = spot.title.toLowerCase();
            return !lowerTitle.includes("station") && 
                   !lowerTitle.includes("suburb") && 
                   !lowerTitle.includes("metro") && 
                   !lowerTitle.includes("district") &&
                   !lowerTitle.includes("division");
        });
    }

    // Fallback if geosearch yields no results
    if (spots.length === 0) {
        return generateMockTrip(cityName, numDays, style);
    }

    // Take up to 20 spots to search for different category matches
    const poolSize = Math.min(spots.length, 20);
    const titles = spots.slice(0, poolSize).map(s => encodeURIComponent(s.title)).join("|");
    const detailsUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&explaintext&piprop=thumbnail&pithumbsize=600&titles=${titles}&format=json&origin=*`;
    
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();
    
    const fetchedAttractions = [];
    if (detailsData.query && detailsData.query.pages) {
        Object.values(detailsData.query.pages).forEach(page => {
            if (page.title && page.extract && page.extract.trim().length > 15) {
                const category = getCategoryFromText(page.title + page.extract);
                fetchedAttractions.push({
                    name: page.title,
                    desc: page.extract.substring(0, 180) + "...",
                    image: page.thumbnail ? page.thumbnail.source : null,
                    category: category,
                    cost: Math.random() > 0.5 ? Math.floor(Math.random() * 4) * 50 + 50 : 0
                });
            }
        });
    }

    // Score and Sort by travel style preference
    fetchedAttractions.sort((a, b) => scoreActivity(b.category, style) - scoreActivity(a.category, style));

    // Get city banner image from Wikipedia
    let cityBanner = "./homepages/gallery/taj.jpg"; // default
    try {
        const cityBannerUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail&pithumbsize=1000&titles=${encodeURIComponent(cityName)}&format=json&origin=*`;
        const bannerRes = await fetch(cityBannerUrl);
        const bannerData = await bannerRes.json();
        if (bannerData.query && bannerData.query.pages) {
            const pages = Object.values(bannerData.query.pages);
            if (pages[0] && pages[0].thumbnail) {
                cityBanner = pages[0].thumbnail.source;
            }
        }
    } catch(e) {}

    // Distribute fetched attractions into days
    const itinerary = [];
    const timeSlots = ["09:30 AM", "01:30 PM", "04:30 PM"];
    
    // Fallbacks if we run out of spots
    const fallbackActivities = {
        adventure: ["Nature Hike & Exploration", "Local Watersports/Trekking Activity", "Mountain Sunset Viewpoint"],
        romantic: ["Fine Dining Experience", "Scenic Riverside Walk", "Local Historic Monument Tour"],
        family: ["City Science Museum Tour", "Botanical Flower Gardens", "Historical Landmark Walk"],
        friendly: ["Popular Street Food Crawl", "Amusement Theme Park Rides", "Market Souvenir Shopping"]
    };

    for (let d = 0; d < numDays; d++) {
        const daySpots = [];
        for (let t = 0; t < 3; t++) {
            const index = d * 3 + t;
            let att = null;
            if (index < fetchedAttractions.length) {
                const fetched = fetchedAttractions[index];
                att = {
                    time: timeSlots[t],
                    name: fetched.name,
                    desc: `${fetched.desc} [Curated for your ${style} trip]`,
                    image: fetched.image,
                    cost: fetched.cost,
                    category: fetched.category
                };
            } else {
                // Fallback procedural attraction
                const actName = fallbackActivities[style][t];
                att = {
                    time: timeSlots[t],
                    name: `${cityName} ${actName}`,
                    desc: `Explore the dynamic ${actName.toLowerCase()} in ${cityName}. Beautiful experience tailored for ${style} trips.`,
                    image: null,
                    cost: t === 1 ? 500 : 0,
                    category: style === "adventure" ? "adventure" : (t === 0 ? "culture" : "nature")
                };
            }
            daySpots.push(att);
        }
        itinerary.push(daySpots);
    }

    return { destination: cityName, banner: cityBanner, itinerary };
}

// Procedural generator when fully offline or APIs fail
function generateMockTrip(cityName, numDays, style) {
    const itinerary = [];
    const timeSlots = ["09:00 AM", "01:30 PM", "04:30 PM"];
    const activities = {
        adventure: [
            { name: "Mountain Peak Hike", desc: "Embark on an early morning hike to capture panoramic views from the highest point in town.", cost: 150, category: "adventure" },
            { name: "River Rafting & Zip-lining", desc: "Enjoy thrilling water rapids and a zip line cruise over lush forest canopies.", cost: 1200, category: "adventure" },
            { name: "Sunset Camping", desc: "Set up camps, enjoy stargazing, and bond over a roaring campfire.", cost: 500, category: "adventure" }
        ],
        romantic: [
            { name: "Sleek Hilltop Cafe", desc: "Start the day with hot chocolate, croissants, and views of the valley.", cost: 250, category: "food" },
            { name: "Royal Palace Museum", desc: "A quiet stroll through the mirrors and chambers of historical palaces.", cost: 200, category: "historic" },
            { name: "Candlelight Dinner Cruise", desc: "Private boat ride with dinner and soft music reflecting on waves.", cost: 2500, category: "food" }
        ],
        family: [
            { name: "Botanical Glasshouse Gardens", desc: "Lush paths filled with unique flowers and age-old tall trees.", cost: 50, category: "nature" },
            { name: "Science and Toy Museum", desc: "Interactive display boxes, spatial experiments, and educational activities for kids.", cost: 100, category: "culture" },
            { name: "Musical Light Fountains", desc: "End the day watching synchronised lasers dancing on high pressure waters.", cost: 50, category: "nature" }
        ],
        friendly: [
            { name: "Street Food & Local Markets", desc: "Feast on delicious street food delicacies and buy local handmade crafts.", cost: 100, category: "shopping" },
            { name: "Theme Amusement Park", desc: "Ride colossal rollercoasters and drop towers with your group.", cost: 1200, category: "adventure" },
            { name: "Rooftop Live Music Lounge", desc: "Dine under string lights enjoying acoustic pop music by local bands.", cost: 800, category: "food" }
        ]
    };

    for (let d = 0; d < numDays; d++) {
        const daySpots = [];
        const baseIndex = d % 3;
        for (let t = 0; t < 3; t++) {
            const template = activities[style][(baseIndex + t) % 3];
            daySpots.push({
                time: timeSlots[t],
                name: template.name + " in " + cityName,
                desc: template.desc,
                cost: template.cost,
                category: template.category,
                image: null
            });
        }
        itinerary.push(daySpots);
    }

    return {
        destination: cityName,
        banner: "./homepages/gallery/pink.jpg",
        itinerary
    };
}

// Categorize items by matching content keywords
function getCategoryFromText(text) {
    const t = text.toLowerCase();
    if (t.includes("beach") || t.includes("sea") || t.includes("coast")) return "beach";
    if (t.includes("fort") || t.includes("palace") || t.includes("historic") || t.includes("museum") || t.includes("temple") || t.includes("mosque")) return "historic";
    if (t.includes("hike") || t.includes("raft") || t.includes("ride") || t.includes("adventure") || t.includes("sport")) return "adventure";
    if (t.includes("cafe") || t.includes("restaurant") || t.includes("food") || t.includes("dine") || t.includes("bar")) return "food";
    if (t.includes("garden") || t.includes("park") || t.includes("hill") || t.includes("lake") || t.includes("waterfall")) return "nature";
    if (t.includes("mall") || t.includes("shop") || t.includes("market")) return "shopping";
    return "culture";
}

// Fetch real-time weather from Open-Meteo
async function fetchWeather(lat, lon) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.current_weather) {
            return {
                temp: data.current_weather.temperature,
                code: data.current_weather.weathercode,
                wind: data.current_weather.windspeed,
                max: data.daily.temperature_2m_max[0],
                min: data.daily.temperature_2m_min[0]
            };
        }
    } catch (e) {
        console.error("Weather fetch failed:", e);
    }
    return null;
}

// Fetch checklist items by travel style
function generateChecklist(style) {
    const list = {
        adventure: [
            { item: "Hiking boots / Trail running shoes", checked: false },
            { item: "Waterproof windbreaker jacket", checked: false },
            { item: "Reusable insulated water bottle", checked: false },
            { item: "Insect repellent spray", checked: false },
            { item: "Small first-aid kit", checked: false },
            { item: "Portable power bank", checked: false }
        ],
        romantic: [
            { item: "Elegant outfits for dinner nights", checked: false },
            { item: "High-protection SPF sunscreen", checked: false },
            { item: "Polarized sunglasses", checked: false },
            { item: "DSLR / Mirrorless Camera", checked: false },
            { item: "Travel perfume & cosmetics", checked: false },
            { item: "Cozy light shawl or jacket", checked: false }
        ],
        family: [
            { item: "Mini travel medical kit", checked: false },
            { item: "Sanitizer and wet disinfectant wipes", checked: false },
            { item: "Snacks & juice boxes for children", checked: false },
            { item: "Comfortable walking sneakers", checked: false },
            { item: "Cameras & chargers", checked: false },
            { item: "Physical print copies of IDs/Bookings", checked: false }
        ],
        friendly: [
            { item: "High-capacity power bank", checked: false },
            { item: "Swimwear / Quick-dry trunks", checked: false },
            { item: "Compact card games (UNO, Monopoly Deal)", checked: false },
            { item: "Comfortable sandals / flip flops", checked: false },
            { item: "Toiletry travel pouch", checked: false },
            { item: "Bluetooth portable speaker", checked: false }
        ]
    };
    return list[style] || list.friendly;
}

// 4. RENDER DASHBOARD INTERFACE
function renderDashboard() {
    const container = document.getElementById("planner-result-container");
    if (!container || !activeTrip) return;

    // Build overall layout
    container.innerHTML = `
        <div class="planner-dashboard active">
            <!-- Header Banner -->
            <div class="planner-banner">
                <img src="${activeTrip.banner}" alt="${activeTrip.destination}" class="planner-banner-img" onerror="this.src='./homepages/gallery/taj.jpg'">
                <div class="planner-banner-overlay">
                    <h2 class="planner-banner-title">${activeTrip.destination} Itinerary</h2>
                    <div class="planner-banner-subtitle">${activeTrip.daysCount} Days &bull; ${activeTrip.style} Vibe</div>
                </div>
            </div>

            <!-- Two Column Grid -->
            <div class="planner-grid">
                
                <!-- Left Column (Itinerary cards) -->
                <div class="itinerary-card">
                    <!-- Day selector tabs -->
                    <div class="day-tabs" id="day-tabs-container"></div>
                    
                    <!-- Day Content list -->
                    <div id="day-itinerary-list"></div>
                </div>

                <!-- Right Column (Widgets) -->
                <div>
                    <!-- Weather Widget -->
                    <div class="widget-card" id="weather-widget-container"></div>

                    <!-- Budget Widget -->
                    <div class="widget-card" id="budget-widget-container"></div>

                    <!-- Packing Widget -->
                    <div class="widget-card" id="packing-widget-container"></div>
                </div>

            </div>

            <!-- Bottom Actions -->
            <div class="dashboard-actions">
                <button class="btn-dashboard btn-dashboard-save" onclick="saveTripToHistory()">
                    <i class="fas fa-bookmark"></i> Save Trip to History
                </button>
                <button class="btn-dashboard btn-dashboard-print" onclick="window.print()">
                    <i class="fas fa-print"></i> Print Itinerary
                </button>
            </div>
        </div>
    `;

    renderDayTabs();
    showDay(0);
    renderWeatherWidget();
    renderBudgetWidget();
    renderPackingWidget();
}

// Renders day selector tab buttons
function renderDayTabs() {
    const container = document.getElementById("day-tabs-container");
    if (!container) return;

    container.innerHTML = "";
    for (let d = 0; d < activeTrip.daysCount; d++) {
        const btn = document.createElement("button");
        btn.className = `day-tab-btn ${d === 0 ? 'active' : ''}`;
        btn.innerHTML = `<i class="fas fa-calendar-day"></i> Day ${d + 1}`;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".day-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            showDay(d);
        });
        container.appendChild(btn);
    }
}

// Shows timeline details for specified day index
function showDay(dayIndex) {
    const container = document.getElementById("day-itinerary-list");
    if (!container) return;

    const dayActivities = activeTrip.itinerary[dayIndex] || [];
    container.innerHTML = "";

    const timeline = document.createElement("div");
    timeline.className = "timeline";

    dayActivities.forEach((act, actIndex) => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        
        // Match icon based on category
        let icon = "fa-map-pin";
        if (act.category === "beach") icon = "fa-umbrella-beach";
        if (act.category === "historic") icon = "fa-landmark";
        if (act.category === "adventure") icon = "fa-hiking";
        if (act.category === "food") icon = "fa-utensils";
        if (act.category === "nature") icon = "fa-tree";
        if (act.category === "shopping") icon = "fa-shopping-bag";
        if (act.category === "culture") icon = "fa-gopuram";

        const imageHtml = act.image ? `<img src="${act.image}" alt="${act.name}" class="timeline-img">` : '';

        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <span class="timeline-time">${act.time}</span>
                <div class="timeline-header">
                    <h4 class="timeline-title"><i class="fas ${icon}"></i> ${act.name}</h4>
                    <span class="timeline-cost-badge ${act.cost === 0 ? 'free' : ''}">
                        ${act.cost === 0 ? 'Free Entry' : '₹' + act.cost}
                    </span>
                </div>
                <p class="timeline-desc">${act.desc}</p>
                ${imageHtml}
                <div class="timeline-actions">
                    <button class="btn-action edit-action" onclick="openEditActivityForm(${dayIndex}, ${actIndex})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn-action delete-action" onclick="deleteActivity(${dayIndex}, ${actIndex})">
                        <i class="fas fa-trash-alt"></i> Delete
                    </button>
                </div>
            </div>
        `;
        timeline.appendChild(item);
    });

    container.appendChild(timeline);

    // Add Custom Activity Row
    const addBtn = document.createElement("button");
    addBtn.className = "add-custom-btn";
    addBtn.innerHTML = `<i class="fas fa-plus-circle"></i> Add Custom Activity`;
    addBtn.addEventListener("click", () => openAddActivityForm(dayIndex));
    container.appendChild(addBtn);
}

// 5. WEATHER WIDGET RENDERING
function renderWeatherWidget() {
    const container = document.getElementById("weather-widget-container");
    if (!container) return;

    if (!activeTrip.weather) {
        // Render fallback forecast details
        container.innerHTML = `
            <h4 class="widget-title"><i class="fas fa-cloud-sun"></i> Weather Outlook</h4>
            <div class="weather-details">
                <i class="fas fa-sun weather-icon-large" style="color: #f6ad55;"></i>
                <div class="weather-temp-info">
                    <h3>28°C</h3>
                    <p>Sunny & Clear skies</p>
                </div>
            </div>
            <p style="margin-top: 12px; font-size: 1.3rem; color: var(--text-muted);">
                *Typical climate info loaded for ${activeTrip.destination}. Great time for sightseeing!
            </p>
        `;
        return;
    }

    const w = activeTrip.weather;
    
    // Map Open-Meteo weather codes to icons/descriptions
    let weatherIcon = "fa-sun";
    let weatherDesc = "Clear skies";
    let iconColor = "#e28743";

    if (w.code >= 1 && w.code <= 3) {
        weatherIcon = "fa-cloud-sun";
        weatherDesc = "Partly cloudy";
        iconColor = "#cbd5e0";
    } else if (w.code >= 45 && w.code <= 48) {
        weatherIcon = "fa-smog";
        weatherDesc = "Foggy conditions";
        iconColor = "#a0aec0";
    } else if (w.code >= 51 && w.code <= 67) {
        weatherIcon = "fa-cloud-showers-heavy";
        weatherDesc = "Rain showers";
        iconColor = "#4299e1";
    } else if (w.code >= 71 && w.code <= 77) {
        weatherIcon = "fa-snowflake";
        weatherDesc = "Light snow";
        iconColor = "#90cdf4";
    } else if (w.code >= 80 && w.code <= 99) {
        weatherIcon = "fa-cloud-bolt";
        weatherDesc = "Thunderstorms";
        iconColor = "#805ad5";
    }

    container.innerHTML = `
        <h4 class="widget-title"><i class="fas fa-cloud-sun"></i> Live Weather</h4>
        <div class="weather-details">
            <i class="fas ${weatherIcon} weather-icon-large" style="color: ${iconColor};"></i>
            <div class="weather-temp-info">
                <h3>${w.temp}°C</h3>
                <p>${weatherDesc}</p>
            </div>
        </div>
        <div class="weather-extra">
            <span>High: <b>${w.max}°C</b></span>
            <span>Low: <b>${w.min}°C</b></span>
            <span>Wind: <b>${w.wind} km/h</b></span>
            <span>Status: <b>Good</b></span>
        </div>
    `;
}

// 6. BUDGET ESTIMATOR WIDGET RENDERING
function renderBudgetWidget() {
    const container = document.getElementById("budget-widget-container");
    if (!container) return;

    // Load saved settings if exist, else default values
    const travelers = activeTrip.travelers || 2;
    const hotelTier = activeTrip.hotelTier || "standard";
    const transport = activeTrip.transport || "cab";

    container.innerHTML = `
        <h4 class="widget-title"><i class="fas fa-wallet"></i> Trip Budget Estimator</h4>
        <div class="budget-estimator">
            <div class="form-row" style="margin: 0;">
                <div class="budget-input-row">
                    <label>Travelers</label>
                    <input type="number" id="budget-travelers" min="1" max="20" value="${travelers}" onchange="updateBudget()">
                </div>
                <div class="budget-input-row">
                    <label>Hotel Tier</label>
                    <select id="budget-hotel" onchange="updateBudget()">
                        <option value="budget" ${hotelTier === "budget" ? "selected" : ""}>Budget (Homestay)</option>
                        <option value="standard" ${hotelTier === "standard" ? "selected" : ""}>Standard (3-Star)</option>
                        <option value="luxury" ${hotelTier === "luxury" ? "selected" : ""}>Luxury (5-Star)</option>
                    </select>
                </div>
            </div>
            <div class="budget-input-row">
                <label>Local Transport</label>
                <select id="budget-transport" onchange="updateBudget()">
                    <option value="public" ${transport === "public" ? "selected" : ""}>Public Transit (Low Cost)</option>
                    <option value="cab" ${transport === "cab" ? "selected" : ""}>Private Cab / Car Rental</option>
                </select>
            </div>
            
            <div class="budget-summary-cost" id="budget-total-display">₹0</div>
            
            <div class="budget-progress-container">
                <div class="budget-progress-bar" id="budget-ratio-bar"></div>
            </div>

            <div class="budget-summary-breakdown">
                <span id="breakdown-fees">Fees: ₹0</span>
                <span id="breakdown-stay">Stay: ₹0</span>
                <span id="breakdown-food">Meals: ₹0</span>
            </div>
        </div>
    `;

    updateBudget();
}

function updateBudget() {
    const travelersInput = document.getElementById("budget-travelers");
    const hotelSelect = document.getElementById("budget-hotel");
    const transportSelect = document.getElementById("budget-transport");

    if (!travelersInput || !hotelSelect || !transportSelect) return;

    const count = parseInt(travelersInput.value) || 1;
    const tier = hotelSelect.value;
    const trans = transportSelect.value;

    // Save states
    activeTrip.travelers = count;
    activeTrip.hotelTier = tier;
    activeTrip.transport = trans;

    // Daily costs multipliers
    let hotelCostPerPersonDay = 800; // budget
    if (tier === "standard") hotelCostPerPersonDay = 2000;
    if (tier === "luxury") hotelCostPerPersonDay = 6000;

    let foodCostPerPersonDay = 400; // budget
    if (tier === "standard") foodCostPerPersonDay = 1000;
    if (tier === "luxury") foodCostPerPersonDay = 2500;

    let transportCostDay = 300; // public
    if (trans === "cab") transportCostDay = 1500;

    const days = activeTrip.daysCount;

    // 1. Calculate stays, meals, transport
    const totalStay = hotelCostPerPersonDay * count * days;
    const totalFood = foodCostPerPersonDay * count * days;
    const totalTrans = transportCostDay * days;

    // 2. Calculate attractions entry fees
    let totalFees = 0;
    activeTrip.itinerary.forEach(day => {
        day.forEach(act => {
            totalFees += (act.cost || 0) * count;
        });
    });

    const totalCost = totalStay + totalFood + totalTrans + totalFees;

    // Update Display
    document.getElementById("budget-total-display").innerText = `₹${totalCost.toLocaleString()}`;
    document.getElementById("breakdown-fees").innerText = `Fees: ₹${totalFees.toLocaleString()}`;
    document.getElementById("breakdown-stay").innerText = `Stay: ₹${totalStay.toLocaleString()}`;
    document.getElementById("breakdown-food").innerText = `Meals: ₹${totalFood.toLocaleString()}`;

    // Fill ratio progress bar (max reference budget ₹100,000)
    const ratio = Math.min((totalCost / 80000) * 100, 100);
    document.getElementById("budget-ratio-bar").style.width = `${ratio}%`;
}

// 7. PACKING CHECKLIST WIDGET RENDERING
function renderPackingWidget() {
    const container = document.getElementById("packing-widget-container");
    if (!container) return;

    container.innerHTML = `
        <h4 class="widget-title"><i class="fas fa-clipboard-list"></i> Packing Checklist</h4>
        <ul class="packing-list" id="packing-checklist-ul"></ul>
    `;

    const ul = document.getElementById("packing-checklist-ul");
    activeTrip.checklist.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "packing-item";
        li.innerHTML = `
            <input type="checkbox" id="pack-${index}" ${item.checked ? 'checked' : ''} onchange="togglePackingItem(${index})">
            <label for="pack-${index}">${item.item}</label>
        `;
        ul.appendChild(li);
    });
}

function togglePackingItem(index) {
    if (activeTrip && activeTrip.checklist[index]) {
        activeTrip.checklist[index].checked = !activeTrip.checklist[index].checked;
    }
}

// 8. ADD/EDIT/DELETE ACTIVITIES ACTIONS
function openAddActivityForm(dayIndex) {
    // Check if form is already open
    const existing = document.getElementById("custom-activity-form");
    if (existing) existing.remove();

    const container = document.getElementById("day-itinerary-list");
    const formCard = document.createElement("div");
    formCard.id = "custom-activity-form";
    formCard.className = "custom-activity-form-card";
    formCard.innerHTML = `
        <h4 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 12px; color: var(--primary-color);">
            <i class="fas fa-plus"></i> Add New Activity
        </h4>
        <div class="form-row">
            <div class="form-group">
                <label>Time Slot</label>
                <input type="text" id="act-time" placeholder="e.g. 09:30 AM" value="09:00 AM">
            </div>
            <div class="form-group">
                <label>Attraction Name</label>
                <input type="text" id="act-name" placeholder="e.g. Local Museum">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Category</label>
                <select id="act-category">
                    <option value="culture">Culture / Sightseeing</option>
                    <option value="historic">Historic / Monument</option>
                    <option value="nature">Nature / Park</option>
                    <option value="adventure">Adventure / Activity</option>
                    <option value="food">Food / Dining</option>
                    <option value="beach">Beach / Relax</option>
                    <option value="shopping">Shopping</option>
                </select>
            </div>
            <div class="form-group">
                <label>Entry Fee (₹ per person)</label>
                <input type="number" id="act-cost" min="0" value="0">
            </div>
        </div>
        <div class="form-group" style="margin-bottom: 15px;">
            <label>Description</label>
            <textarea id="act-desc" rows="2" placeholder="Brief description of the activity..."></textarea>
        </div>
        <div class="form-actions">
            <button class="btn-form btn-form-cancel" onclick="document.getElementById('custom-activity-form').remove()">Cancel</button>
            <button class="btn-form btn-form-save" onclick="saveNewActivity(${dayIndex})">Add Activity</button>
        </div>
    `;
    container.appendChild(formCard);
    formCard.scrollIntoView({ behavior: "smooth" });
}

function saveNewActivity(dayIndex) {
    const time = document.getElementById("act-time").value || "09:00 AM";
    const name = document.getElementById("act-name").value.trim();
    const cost = parseInt(document.getElementById("act-cost").value) || 0;
    const category = document.getElementById("act-category").value;
    const desc = document.getElementById("act-desc").value.trim() || "Enjoy local sights and explore.";

    if (!name) {
        alert("Please enter a name for the attraction.");
        return;
    }

    if (!activeTrip.itinerary[dayIndex]) {
        activeTrip.itinerary[dayIndex] = [];
    }

    activeTrip.itinerary[dayIndex].push({
        time, name, desc, cost, category, image: null
    });

    // Re-sort activities by time (basic sorting)
    activeTrip.itinerary[dayIndex].sort((a, b) => {
        return a.time.localeCompare(b.time);
    });

    document.getElementById("custom-activity-form").remove();
    showDay(dayIndex);
    updateBudget();
}

function openEditActivityForm(dayIndex, actIndex) {
    const existing = document.getElementById("custom-activity-form");
    if (existing) existing.remove();

    const act = activeTrip.itinerary[dayIndex][actIndex];
    const container = document.getElementById("day-itinerary-list");
    
    const formCard = document.createElement("div");
    formCard.id = "custom-activity-form";
    formCard.className = "custom-activity-form-card";
    formCard.innerHTML = `
        <h4 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 12px; color: var(--primary-color);">
            <i class="fas fa-edit"></i> Edit Activity
        </h4>
        <div class="form-row">
            <div class="form-group">
                <label>Time Slot</label>
                <input type="text" id="edit-time" value="${act.time}">
            </div>
            <div class="form-group">
                <label>Attraction Name</label>
                <input type="text" id="edit-name" value="${act.name}">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Category</label>
                <select id="edit-category">
                    <option value="culture" ${act.category === "culture" ? "selected" : ""}>Culture / Sightseeing</option>
                    <option value="historic" ${act.category === "historic" ? "selected" : ""}>Historic / Monument</option>
                    <option value="nature" ${act.category === "nature" ? "selected" : ""}>Nature / Park</option>
                    <option value="adventure" ${act.category === "adventure" ? "selected" : ""}>Adventure / Activity</option>
                    <option value="food" ${act.category === "food" ? "selected" : ""}>Food / Dining</option>
                    <option value="beach" ${act.category === "beach" ? "selected" : ""}>Beach / Relax</option>
                    <option value="shopping" ${act.category === "shopping" ? "selected" : ""}>Shopping</option>
                </select>
            </div>
            <div class="form-group">
                <label>Entry Fee (₹ per person)</label>
                <input type="number" id="edit-cost" min="0" value="${act.cost}">
            </div>
        </div>
        <div class="form-group" style="margin-bottom: 15px;">
            <label>Description</label>
            <textarea id="edit-desc" rows="2">${act.desc}</textarea>
        </div>
        <div class="form-actions">
            <button class="btn-form btn-form-cancel" onclick="document.getElementById('custom-activity-form').remove()">Cancel</button>
            <button class="btn-form btn-form-save" onclick="saveEditedActivity(${dayIndex}, ${actIndex})">Save Changes</button>
        </div>
    `;
    container.appendChild(formCard);
    formCard.scrollIntoView({ behavior: "smooth" });
}

function saveEditedActivity(dayIndex, actIndex) {
    const time = document.getElementById("edit-time").value || "09:00 AM";
    const name = document.getElementById("edit-name").value.trim();
    const cost = parseInt(document.getElementById("edit-cost").value) || 0;
    const category = document.getElementById("edit-category").value;
    const desc = document.getElementById("edit-desc").value.trim() || "";

    if (!name) {
        alert("Please enter a name.");
        return;
    }

    activeTrip.itinerary[dayIndex][actIndex] = {
        ...activeTrip.itinerary[dayIndex][actIndex],
        time, name, desc, cost, category
    };

    document.getElementById("custom-activity-form").remove();
    showDay(dayIndex);
    updateBudget();
}

function deleteActivity(dayIndex, actIndex) {
    if (confirm("Are you sure you want to delete this activity?")) {
        activeTrip.itinerary[dayIndex].splice(actIndex, 1);
        showDay(dayIndex);
        updateBudget();
    }
}

// 9. LOCAL STORAGE PERSISTENCE (SAVE / LOAD TRIPS)
function saveTripToHistory() {
    if (!activeTrip) return;

    let saved = localStorage.getItem("saved_trips");
    saved = saved ? JSON.parse(saved) : [];

    // Check if we are overwriting
    const existingIndex = saved.findIndex(t => t.destination.toLowerCase() === activeTrip.destination.toLowerCase());
    if (existingIndex > -1) {
        saved[existingIndex] = activeTrip;
    } else {
        saved.push(activeTrip);
    }

    localStorage.setItem("saved_trips", JSON.stringify(saved));
    alert(`${activeTrip.destination} trip plan saved successfully to your history!`);
    setupSavedTripsList();
}

function setupSavedTripsList() {
    const container = document.querySelector(".trip-plans");
    if (!container) return;

    let saved = localStorage.getItem("saved_trips");
    saved = saved ? JSON.parse(saved) : [];

    // Header with optional Clear All action if saved trips exist
    let headerHtml = `
        <div class="trip-plans-header">
            <h2>Recently Created Trip Plans</h2>
            ${saved.length > 0 ? `<button class="clear-history-btn" onclick="clearAllSavedTrips()"><i class="fas fa-trash-alt"></i> Clear All</button>` : ''}
        </div>
    `;

    let cardsHtml = '';

    if (saved.length === 0) {
        const placeholders = [
            { destination: "Hyderabad", style: "Adventure", daysCount: 4, banner: "./homepages/gallery/charminar.jpg" },
            { destination: "Araku", style: "Romantic", daysCount: 2, banner: "./homepages/gallery/arak (1).jpg" },
            { destination: "Banglore", style: "Family", daysCount: 3, banner: "./homepages/gallery/bang (1).jpg" },
            { destination: "Kerala", style: "Friendly", daysCount: 4, banner: "./homepages/gallery/kerala (1).jpg" }
        ];

        cardsHtml = placeholders.map(p => `
            <div class="trip-plan-card" onclick="loadDefaultTrip('${p.destination.toLowerCase()}', ${p.daysCount}, '${p.style.toLowerCase()}')">
                <div class="trip-plan-image-container">
                    <img src="${p.banner}" alt="${p.destination}">
                    <span class="trip-plan-badge badge-${p.style.toLowerCase()}">${p.style}</span>
                </div>
                <div class="trip-plan-info">
                    <h3>${p.destination}</h3>
                    <p><i class="far fa-calendar-alt"></i> ${p.daysCount} Days Itinerary</p>
                </div>
            </div>
        `).join('');
    } else {
        cardsHtml = saved.map((trip, idx) => `
            <div class="trip-plan-card" onclick="loadSavedTripByIndex(${idx})">
                <div class="trip-plan-image-container">
                    <img src="${trip.banner}" alt="${trip.destination}" onerror="this.src='./homepages/gallery/taj.jpg'">
                    <span class="trip-plan-badge badge-${trip.style.toLowerCase()}">${trip.style}</span>
                    <button class="delete-trip-btn" onclick="deleteSavedTrip(event, ${idx})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="trip-plan-info">
                    <h3>${trip.destination}</h3>
                    <p><i class="far fa-calendar-alt"></i> ${trip.daysCount} Days Itinerary</p>
                </div>
            </div>
        `).join('');
    }

    container.innerHTML = `
        ${headerHtml}
        <div class="trip-plans-grid">
            ${cardsHtml}
        </div>
    `;
}

function clearAllSavedTrips() {
    if (confirm("Are you sure you want to clear all your saved trip plans?")) {
        localStorage.removeItem("saved_trips");
        setupSavedTripsList();
    }
}

function deleteSavedTrip(event, index) {
    event.stopPropagation(); // prevent loading the trip when clicking delete
    if (confirm("Are you sure you want to delete this trip plan?")) {
        let saved = localStorage.getItem("saved_trips");
        if (saved) {
            saved = JSON.parse(saved);
            saved.splice(index, 1);
            localStorage.setItem("saved_trips", JSON.stringify(saved));
            setupSavedTripsList();
        }
    }
}

// Loads a local default placeholder
function loadDefaultTrip(cityName, days, style) {
    const daysSelect = document.getElementById("travel-days");
    const autocompleteInput = document.getElementById("autocomplete");
    const styleSelect = document.getElementById("travel-style");

    if (daysSelect && autocompleteInput && styleSelect) {
        daysSelect.value = days + (days === 1 ? "day" : "days");
        autocompleteInput.value = cityName.toUpperCase();
        styleSelect.value = style;
        runPlanner();
    }
}

// Loads trip from saved index
function loadSavedTripByIndex(index) {
    let saved = localStorage.getItem("saved_trips");
    if (!saved) return;
    
    saved = JSON.parse(saved);
    const trip = saved[index];
    if (!trip) return;

    activeTrip = trip;

    // Update select inputs values to match loaded trip
    const daysSelect = document.getElementById("travel-days");
    const autocompleteInput = document.getElementById("autocomplete");
    const styleSelect = document.getElementById("travel-style");

    if (daysSelect && autocompleteInput && styleSelect) {
        daysSelect.value = trip.daysCount + (trip.daysCount === 1 ? "day" : "days");
        autocompleteInput.value = trip.destination;
        styleSelect.value = trip.style;
    }

    // Render
    renderDashboard();

    // Scroll
    document.getElementById("planner-result-container").scrollIntoView({ behavior: "smooth" });
}
