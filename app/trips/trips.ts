// data/trips.ts

export interface Trip {
  id: number;
  name: string;
  title: string;
  days: number;
  categories: string[];
  image: string;
  backdrop: string;
  // REQUIRED for the detail page
  description: string;
  gallery: string[]; 
}

export const trips: Trip[] = [
      {
    id: 1,
    name: "3-Day Coastal & Hill Country Explorer from Colombo",
    title: "Coast & Hills",
    days: 3,
    categories: ["Adventure", "Scenic", "Cultural"],
    image:"/Images/coastal.jpg",
    backdrop:"/Images/backdrop-3.jpg",
    description: `
  Experience the best of Sri Lanka’s coastlines and hill country in this 3-day, 2-night journey from Colombo — blending golden beaches, cool mountains, and cultural charm.

  🗓️ **Day 1 – Colombo ➜ Bentota (Beaches & River Safari)**
  - Pick up from your Colombo hotel.
  - Drive south along the **scenic coastal road** to Bentota.
  - Enjoy a **Madu River Boat Safari** – explore mangroves, fish therapy, and cinnamon island.
  - Visit the **Turtle Hatchery** in Kosgoda and learn about sea turtle conservation.
  - Evening at leisure by the **Bentota beach**.
  - 🏖️ **Overnight in Bentota.**

  🗓️ **Day 2 – Bentota ➜ Galle ➜ Ella (Culture & Hill Country)**
  - After breakfast, head to **Galle Fort (UNESCO World Heritage Site)** for a guided walk.
  - Visit the **Moonstone Mine** and **Gem Factory** at Meetiyagoda.
  - Continue your scenic journey to **Ella**, passing tea plantations and waterfalls.
  - Visit **Nine Arches Bridge** and **Ravana Falls** on arrival.
  - 🌄 **Overnight in Ella.**

  🗓️ **Day 3 – Ella ➜ Colombo (Tea & Mountains)**
  - Morning hike to **Little Adam’s Peak** for panoramic mountain views.
  - Visit a **Tea Plantation & Factory** to learn about tea making and enjoy tasting.
  - Optional Adventure Activities near Ella:  
    • Zipline  
    • ATV Rides  
    • Swing  
  - Begin the scenic return journey to **Colombo**, with photo stops en route.
  - 🌅 **Evening: Drop off at your Colombo hotel.**

  ---

  🌟 **Highlights:**
  - **Nature & Scenery:** Madu River, Ella Mountains, Ravana Falls  
  - **Wildlife & Conservation:** Turtle Hatchery Experience  
  - **Adventure:** Zipline, ATV, Swing  
  - **Culture & Heritage:** Galle Fort, Gem & Jewellery Factory, Tea Plantation  
  - **Relaxation:** Beach stay in Bentota, cool mountain air in Ella
    `,
    gallery: [
      "/Images/benthota beach.jpg",
      "/Images/ella.jpg",
      "/Images/Galle Fort 1.jpg",
      "/Images/Galle Fort 2.jpg",
      "/Images/Ravana-Waterfall.jpg",
      "/Images/madu river 1.jpg",
      "/Images/madu river 2.jpg",
      "/Images/nine arches.jpg",
      "/Images/kosgoda-turtle-hatchery 1.jpg",
      "/Images/kosgoda-turtle-hatchery 2.jpg",
      "/Images/little-adams-peak-view.jpg",
    ],
  },

  {
    id: 2,
    name: "3-Day Southern Adventure from Bentota",
    title: "Southern Quest",
    days: 3,
    categories: ["Adventure", "Wildlife", "Hill Side"],
    image:"/Images/benthota beach.jpg",
    backdrop:"/Images/backdrop-3.jpg", 
    description: `
  Embark on a thrilling 3-day, 2-night journey from Bentota through Sri Lanka’s southern wonders — from serene rivers and coastal gems to wild safaris and breathtaking mountain landscapes.

  🗓️ **Day 1 – Bentota ➜ Yala (River, Gems & Wildlife)**
  - Pick up from Bentota hotel.
  - Enjoy a **Madu River Boat Safari** — explore mangroves, cinnamon island, and fish therapy.
  - Visit the **Moonstone Mine & Gem Factory** in Meetiyagoda.
  - Stop at **Galle Fort** for a short walk.
  - Continue the scenic coastal drive to **Yala**.
  - Check in to hotel in **Tissamaharama** (Yala area); relax by the lake or enjoy a village walk.
  - 🐆 **Overnight in Yala / Tissamaharama.**

  🗓️ **Day 2 – Yala ➜ Ella (Safari & Hill Country)**
  - Early morning **Jeep Safari** at Yala National Park — spot leopards, elephants, and rare birds.
  - Return for breakfast; drive to **Ella** via scenic mountain roads.
  - Visit **Ravana Falls** and **Nine Arches Bridge**.
  - Evening: explore **Ella town** or relax with mountain views.
  - 🏞 **Overnight in Ella.**

  🗓️ **Day 3 – Ella ➜ Bentota (Train Ride & Adventure)**
  - After breakfast, enjoy the **scenic train ride**.
  - Visit **Little Adam’s Peak** for panoramic views.
  - Optional **Adventure Activities** near Ella:  
    • Zipline  
    • Wall Climbing  
    • ATV Rides  
    • Swing  
  - Visit a **Tea Plantation & Factory** for a tea-making tour and tasting.
  - Afternoon: drive back to Bentota with photo stops.
  - 🌅 **Evening: Drop off at Bentota hotel.**

  ---

  🌟 **Highlights:**
  - **Wildlife & Safari:** Yala National Park Jeep Safari  
  - **Nature & Scenery:** Madu River, Ravana Falls, Ella mountains  
  - **Adventure:** Zipline, Wall Climbing, ATV, Swing  
  - **Culture & Heritage:** Galle Fort, Gem & Jewellery Factory, Tea Plantation  
  - **Relaxation:** Lake view stay in Yala / Ella mountain escape
    `,
    gallery: [
      "/Images/benthota beach.jpg",
      "/Images/madu river 1.jpg", 
      "/Images/Ravana-Waterfall.jpg",
      "/Images/yala-national-park-1.jpg",
      "/Images/yala-national-park-2.jpg",
      "/Images/yala-national-park-3.jpg",
      "/Images/little-adams-peak-view.jpg",
      "/Images/tea estate 1.jpg",
      "/Images/ella.jpg",
    ],
  },

  {
    id: 3,
    name: "3-Day Culture, Heritage & Village Experience Tour from Negombo",
    title: "Cultural Essence",
    days: 3,
    categories: ["Cultural", "Historical", "Village Life"],
    image:"/Images/Pinnawala-Elephant-Orphanage-1.jpg",
    backdrop:"/Images/backdrop-6.jpg",
    description: `
  Discover Sri Lanka’s cultural heartland in this 3-day journey from Negombo — visiting ancient kingdoms, sacred temples, and experiencing authentic village life.

  🗓️ **Day 1 – Negombo ➜ Kandy (Culture & Temples)**
  - Pick up from your Negombo hotel.
  - Visit **Pinnawala Elephant Orphanage** – watch elephants bathing and feeding.
  - Continue to **Kandy**, the hill capital of Sri Lanka.
  - Visit the **Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)**.
  - Explore **Kandy Lake**, the **local market**, and a **Gem & Jewellery workshop**.
  - Experience a **Cultural Dance Show** in the evening.
  - Check in and relax at your hotel surrounded by Kandy’s misty hills.  
  - 🏯 **Overnight in Kandy.**

  🗓️ **Day 2 – Kandy ➜ Matale ➜ Sigiriya ➜ Polonnaruwa (Spices & Heritage Trail)**
  - After breakfast, visit a **Spice Garden** in Matale to learn about Sri Lanka’s famous spices and herbal medicine.
  - Continue to **Sigiriya Rock Fortress (UNESCO World Heritage Site)** — climb the rock, see ancient frescoes, and enjoy breathtaking views.
  - Visit **Polonnaruwa**, the ancient second capital of Sri Lanka — see the **Royal Palace**, **Gal Vihara**, and **Parakrama Samudra**.
  - Return to your hotel in **Sigiriya / Habarana** for a relaxing evening.  
  - 🏯 **Overnight in Sigiriya / Habarana.**

  🗓️ **Day 3 – Sigiriya ➜ Dambulla ➜ Negombo (Village Life & Traditions)**
  - After breakfast, enjoy a **Sigiriya Village Tour** to experience authentic rural life:
    • Bull Cart Ride through the village  
    • Lake Boat Ride with scenic views  
    • Visit a local home to see traditional Sri Lankan cooking  
    • Enjoy an authentic **Sri Lankan lunch** made by villagers
  - Visit the **Dambulla Cave Temple (UNESCO Site)** — famous for its Buddha statues and colorful murals.
  - Begin your scenic return journey to **Negombo**.  
  - 🌅 **Evening: Drop off at your Negombo hotel.**

  ---

  🌟 **Highlights:**
  - **UNESCO World Heritage Sites:** Kandy, Sigiriya, Polonnaruwa, Dambulla  
  - **Cultural Experiences:** Temple of the Tooth, Spice Garden, Cultural Show  
  - **Village Life & Traditions:** Bull Cart Ride, Boat Ride, Traditional Cooking & Lunch  
  - **Ancient Kingdoms & Architecture:** Sigiriya Fortress, Polonnaruwa Ruins, Dambulla Cave Temple
    `,
    gallery: [
      "/Images/Pinnawala-Elephant-Orphanage-1.jpg",
      "/Images/Pinnawala-Elephant-Orphanage-2.jpg",
      "/Images/Sigiriya Village Tour.jpg",
      "/Images/Sigiriya Village Tour 2.jpg",
      "/Images/sigiriya.jpeg",
      "/Images/Parakrama-Samudraya.jpg",
      "/Images/Sri Dalada Maligawa.jpg",
    ],
  },

    {
    id: 4,
    name: "7-Day Sri Lanka Highlights Tour from Colombo",
    title: "Sri Lanka Highlights",
    days: 7,
    categories: ["Cultural", "Adventure", "Nature"],
    image: "/Images/ella.jpg",
    backdrop: "/Images/ella.jpg",
    description: `
Explore Sri Lanka’s best highlights in 7 unforgettable days — from Colombo’s city vibes to ancient temples, misty hills, wild safaris, and golden beaches.

🗓️ **Day 1 – Arrival & Explore Colombo**
City Tour | Galle Face | Independence Square | Gangaramaya Temple | Lotus Tower

🗓️ **Day 2 – Colombo ➜ Pinnawala ➜ Kandy**
Pinnawala Elephant Orphanage | Spice Garden | Cultural Show | Temple of the Tooth

🗓️ **Day 3 – Kandy ➜ Nuwara Eliya**
Gem Factory | Ramboda Falls | Tea Plantation | Gregory Lake

🗓️ **Day 4 – Nuwara Eliya ➜ Ella (Train Ride)**
Scenic Train | Little Adam’s Peak | Nine Arches Bridge

🗓️ **Day 5 – Ella ➜ Yala**
Ravana Falls | Jeep Safari | Wildlife Spotting

🗓️ **Day 6 – Yala ➜ Galle ➜ Bentota**
Galle Fort | Turtle Hatchery | Madu River Boat Safari

🗓️ **Day 7 – Bentota ➜ Colombo**
Beach Relaxation | Water Sports | Return Journey

🌴 **Highlights:**
City, Wildlife, Culture, Nature, Heritage & Beach Bliss.
    `,
    gallery: [
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg"
    ]
  },

  // Trip #5 — 10-Day Grand Experience
  {
    id: 5,
    name: "10-Day Sri Lanka Grand Experience Tour",
    title: "Grand Experience",
    days: 10,
    categories: ["Adventure", "Cultural", "Heritage"],
    image: "/Images/ella.jpg",
    backdrop: "/Images/ella.jpg",
    description: `
A 10-day journey through Sri Lanka’s coast, highlands, heritage cities, and wildlife reserves — the perfect blend of adventure and relaxation.

🗓️ **Day 1 – Bentota ➜ Galle ➜ Mirissa**
Madu River | Turtle Hatchery | Galle Fort | Mirissa Sunset

🗓️ **Day 2 – Mirissa ➜ Yala**
Whale Watching | Yala Safari

🗓️ **Day 3 – Yala ➜ Ella**
Ravana Falls | Little Adam’s Peak | Nine Arches

🗓️ **Day 4 – Ella ➜ Nuwara Eliya**
Train Ride | Tea Plantation | Gregory Lake

🗓️ **Day 5 – Nuwara Eliya ➜ Kandy**
Ramboda Falls | Temple of the Tooth | Cultural Dance

🗓️ **Day 6 – Kandy ➜ Sigiriya / Dambulla**
Spice Garden | Sigiriya Rock | Dambulla Caves

🗓️ **Day 7 – Sigiriya ➜ Polonnaruwa ➜ Sigiriya**
Ancient City | Village Tour | Authentic Lunch

🗓️ **Day 8 – Sigiriya ➜ Trincomalee**
East Coast | Koneswaram Temple | Hot Springs | Beach

🗓️ **Day 9 – Trincomalee ➜ Anuradhapura**
Sacred City Tour | Sri Maha Bodhi | Ruwanwelisaya

🗓️ **Day 10 – Anuradhapura ➜ Colombo**
Return Drive | Optional City Tour

🌿 **Highlights:**
Whale Watching, Safari, Ancient Cities, Beaches & Tea Hills.
    `,
    gallery: [
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg"
    ]
  },

  // Trip #6 — 14-Day Grand Discovery
  {
    id: 6,
    name: "14-Day Sri Lanka Grand Discovery Tour",
    title: "Grand Discovery",
    days: 14,
    categories: ["Adventure", "Cultural", "Nature"],
    image: "/Images/ella.jpg",
    backdrop: "/Images/ella.jpg",
    description: `
This 14-day trip covers everything — heritage, culture, wildlife, mountains, beaches, and modern city life. A full-circle Sri Lankan experience.

🗓️ **Day 1 – Arrival in Negombo**
City Tour | Fish Market | Beach Sunset

🗓️ **Day 2 – Negombo ➜ Sigiriya**
Pinnawala | Dambulla Caves

🗓️ **Day 3 – Sigiriya ➜ Polonnaruwa ➜ Sigiriya**
Ancient Ruins | Village Tour

🗓️ **Day 4 – Sigiriya ➜ Anuradhapura**
Sacred City | Ruwanwelisaya

🗓️ **Day 5 – Sigiriya ➜ Kandy**
Spice Garden | Temple of the Tooth

🗓️ **Day 6 – Kandy Sightseeing**
Botanical Garden | Gem Workshop | Market

🗓️ **Day 7 – Kandy ➜ Nuwara Eliya**
Ramboda Falls | Tea Country

🗓️ **Day 8 – Nuwara Eliya ➜ Horton Plains ➜ Ella**
World’s End | Train Ride | Little Adam’s Peak

🗓️ **Day 9 – Ella**
Nine Arches | Ravana Falls | Zipline

🗓️ **Day 10 – Ella ➜ Yala**
Jeep Safari

🗓️ **Day 11 – Yala ➜ Mirissa**
Beach Relaxation

🗓️ **Day 12 – Mirissa ➜ Galle ➜ Bentota**
Whale Watching | Galle Fort | Madu River

🗓️ **Day 13 – Bentota**
Beach & Ayurveda

🗓️ **Day 14 – Bentota ➜ Colombo**
City Tour | Shopping | Departure

🏯 **Highlights:**
UNESCO Sites, Wildlife Safaris, Train Journeys, Beaches, & Culture.
    `,
    gallery: [
      "/Images/ella.jpg",
      "/Images/ella.jpeg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg"
    ]
  },

  // Trip #7 — 21-Day Ceylon Explorer
  {
    id: 7,
    name: "21-Day Ceylon Explorer – The Grand Circle Tour",
    title: "Ceylon Explorer",
    days: 21,
    categories: ["Cultural", "Adventure", "Heritage", "Nature"],
    image: "/Images/ella.jpg",
    backdrop: "/Images/ella.jpg",
    description: `
A 21-day ultimate journey across Sri Lanka — from ancient kingdoms to modern cities, mountains, beaches, and sacred sites.

🗓️ **Highlights Include:**
Negombo | Wilpattu | Anuradhapura | Mihintale | Sigiriya | Polonnaruwa | Dambulla | Kandy | Nuwara Eliya | Horton Plains | Ella | Buduruwagala | Yala | Tangalle | Mirissa | Galle | Bentota | Colombo | Kalpitiya

🏝️ Wildlife, Culture, Tea Hills, Temples, Beaches, and Urban Life all in one grand adventure.

🌿 **Tour Summary:**
- Heritage & Culture: Anuradhapura, Polonnaruwa, Sigiriya, Dambulla
- Wildlife: Wilpattu, Yala, Dolphins, Turtle Hatchery
- Nature: Tea Hills, Horton Plains, Waterfalls
- Adventure: Train Ride, Zipline, Safaris
- Beaches: Tangalle, Mirissa, Bentota, Kalpitiya
- Local Life: Village Tours & Cooking
- Modern Touch: Colombo City & Shopping
    `,
    gallery: [
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpeg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg",
      "/Images/ella.jpg"
    ]
  }
];

// Helper function to find a trip by ID
export const getTripById = (id: number) => {
    return trips.find(trip => trip.id === id);
};