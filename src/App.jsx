// src/App.jsx
import './App.css'; // Import the CSS file for styling

// --- 1. Define Data Structures ---

const travelDestinations = [
  {
    id: 1,
    cityCountry: "Kyoto, Japan",
    continentRegion: "Asia",
    mainAttraction: "Fushimi Inari Shrine (Torii Gates)",
    reasonToVisit: "I'm fascinated by the blend of ancient culture, beautiful temples, and modern life. Kyoto's serene gardens and historic architecture offer a peaceful contrast to bustling cities, and I want to experience the traditional tea ceremonies."
  },
  {
    id: 2,
    cityCountry: "Reykjavík, Iceland",
    continentRegion: "Europe (Nordic)",
    mainAttraction: "Northern Lights (Aurora Borealis)",
    reasonToVisit: "Seeing the Northern Lights is a lifelong dream. Beyond that, I want to explore the dramatic landscapes of volcanoes, geysers, and black sand beaches that make Iceland feel like another planet. The unique geothermal energy and hot springs are also a huge draw."
  },
  {
    id: 3,
    cityCountry: "Machu Picchu, Peru",
    continentRegion: "South America",
    mainAttraction: "Ancient Inca Citadel",
    reasonToVisit: "I am drawn to the mystery and engineering marvel of ancient civilizations. Trekking the Inca Trail to witness the sunrise over this 'Lost City' is a test of endurance and a historical pilgrimage I must complete. The surrounding Andean mountains are breathtaking."
  },
  {
    id: 4,
    cityCountry: "Serengeti National Park, Tanzania",
    continentRegion: "Africa",
    mainAttraction: "The Great Migration",
    reasonToVisit: "Experiencing wildlife in its natural, untamed habitat is a humbling experience. I want to witness the sheer scale of the Great Migration and learn about conservation efforts firsthand. The vast, open savannas represent a profound sense of natural freedom."
  },
];

const travelGoals = [
    "Visit all 7 continents (4 to go!)",
    "Learn to cook one authentic dish from 5 different countries.",
    "Go SCUBA diving in the Great Barrier Reef.",
    "Spend a month traveling only by train across Europe."
];

// --- 2. Main App Component ---

function App() {
  return (
    <div className="travel-app">
      
      {/* 2.1 Header Section */}
      <header className="header-section">
        <h1>🌍 My Dream Destinations</h1>
        <p className="tagline">Exploring the World, One Dream at a Time</p>
      </header>

      <main>
        
        {/* 2.2 About My Travel Dreams Section */}
        <section className="about-section">
          <h2>💭 About My Travel Dreams</h2>
          <p>
            My passion for travel stems from a deep curiosity about different cultures and history. 
            I believe seeing the world firsthand is the best form of education. 
            Exploring new places allows me to step outside my comfort zone, 
            gain a broader perspective, and collect unforgettable memories that enrich my life.
          </p>
        </section>

        {/* 2.3 Destinations List Section */}
        <section className="destinations-section">
          <h2>⭐ Top Dream Destinations</h2>
          <div className="destinations-grid">
            {/* Map over the travelDestinations array to render each card */}
            {travelDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <h3>{destination.cityCountry}</h3>
                <p><strong>🗺️ Region:</strong> {destination.continentRegion}</p>
                <p><strong>📍 Main Attraction:</strong> {destination.mainAttraction}</p>
                <div className="reason">
                  <h4>Why I Want to Visit:</h4>
                  <p>{destination.reasonToVisit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2.4 Travel Goals Section */}
        <section className="goals-section">
          <h2>🎯 Travel Goals</h2>
          <ul className="goals-list">
             {/* Map over the travelGoals array */}
            {travelGoals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Dream Travel List</p>
      </footer>
    </div>
  );
}

export default App;