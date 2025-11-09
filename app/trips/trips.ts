// data/trips.ts

interface Trip {
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
    image:"/images/coastal.jpg",
    backdrop:"/images/backdrop-1.jpg",
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
      "/images/benthota beach.jpg",
      "/images/ella.jpg",
      "/images/Galle Fort 1.jpg",
      "/images/Galle Fort 2.jpg",
      "/images/Ravana-Waterfall.jpg",
      "/images/madu river 1.jpg",
      "/images/madu river 2.jpg",
      "/images/nine arches.jpg",
      "/images/kosgoda-turtle-hatchery 1.jpg",
      "/images/kosgoda-turtle-hatchery 2.jpg",
      "/images/little-adams-peak-view.jpg",
    ],
  },

  {
    id: 2,
    name: "3-Day Southern Adventure from Bentota",
    title: "Southern Quest",
    days: 3,
    categories: ["Adventure", "Wildlife", "Hill Side"],
    image:"/images/benthota beach.jpg",
    backdrop:"/images/madu river 2.jpg", 
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
      "/images/benthota beach.jpg",
      "/images/madu river 1.jpg", 
      "/images/Ravana-Waterfall.jpg",
      "/images/yala-national-park-1.jpg",
      "/images/yala-national-park-2.jpg",
      "/images/yala-national-park-3.jpg",
      "/images/little-adams-peak-view.jpg",
      "/images/tea estate 1.jpg",
      "/images/ella.jpg",
    ],
  },

  {
    id: 3,
    name: "3-Day Culture, Heritage & Village Experience Tour from Negombo",
    title: "Cultural Essence",
    days: 3,
    categories: ["Cultural", "Historical", "Village Life"],
    image:"/images/Pinnawala-Elephant-Orphanage-1.jpg",
    backdrop:"/images/Sri Dalada Maligawa.jpg",
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
      "/images/Pinnawala-Elephant-Orphanage-1.jpg",
      "/images/Pinnawala-Elephant-Orphanage-2.jpg",
      "/images/Sigiriya Village Tour.jpg",
      "/images/Sigiriya Village Tour 2.jpg",
      "/images/sigiriya.jpeg",
      "/images/Parakrama-Samudraya.jpg",
      "/images/Sri Dalada Maligawa.jpg",
    ],
  },

  {
    id: 4,
    name: "Tea Trails of Nuwara Eliya",
    title: "Tea Trails",
    days: 3,
    categories: ["Hill Side", "Countryside"],
    image:"/images/tea trails 1.jpg",
    backdrop:"/images/backdrop-1.jpg",
    description: "Immerse yourself in the colonial charm and rolling tea plantations of Nuwara Eliya, the 'Little England' of Sri Lanka.",
    gallery: [
      "/images/tea trails 1.jpg",
      "/images/tea trails 2.jpg",
    ],
  },
  {
    id: 5,
    name: "Anuradhapura Heritage Tour",
    title: "Sacred Ruins",
    days: 14,
    categories: ["Historical"],
    image:"/images/anuradhapura heritage 2.jpg",
    backdrop:"/images/anuradhapura heritage 4.jpg",
    description: "A deep dive into Sri Lanka's ancient kingdom, exploring colossal dagobas, ancient reservoirs, and historical ruins.",
    gallery: [
      "/images/anuradhapura heritage 1.jpg",
      "/images/anuradhapura heritage 2.jpg",
      "/images/anuradhapura heritage 3.jpg",
      "/images/anuradhapura heritage 4.jpg",
    ],
  },
  {
    id: 6,
    name: "Adam's Peak Hike",
    title: "Adam’s Ascent",
    days: 21,
    categories: ["Adventure", "Safari", "Hill Side"],
    image:"/images/adam's peak 2.jpeg",
    backdrop:"/images/adam's peak 4.jpg",
    description: "The ultimate Sri Lankan expedition, combining culture, wildlife, and the challenging but rewarding climb to the summit of Adam's Peak.",
    gallery: [
      "/images/adam's peak 1.jpg",
      "/images/adam's peak 2.jpeg",
      "/images/adam's peak 3.jpg",
      "/images/adam's peak 4.jpg",
    ],
  },
];

// Helper function to find a trip by ID
export const getTripById = (id: number) => {
    return trips.find(trip => trip.id === id);
};