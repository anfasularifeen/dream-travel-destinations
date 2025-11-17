import './App.css'; 

const travelDestinations = [
  {
    id: 1,
    cityCountry: "Kyoto, Japan",
    continentRegion: "Asia",
    mainAttraction: "Fushimi Inari Shrine (Torii Gates)",
    reasonToVisit: "I'm fascinated by the blend of ancient culture, beautiful temples, and modern life. Kyoto's serene gardens and historic architecture offer a peaceful contrast to bustling cities, and I want to experience the traditional tea ceremonies.",
    imageUrl: "https://www.datocms-assets.com/101439/1741965956-kyoto.avif?auto=format&fit=max&w=1200" 
  },
  {
    id: 2,
    cityCountry: "Reykjavík, Iceland",
    continentRegion: "Europe (Nordic)",
    mainAttraction: "Northern Lights (Aurora Borealis)",
    reasonToVisit: "Seeing the Northern Lights is a lifelong dream. Beyond that, I want to explore the dramatic landscapes of volcanoes, geysers, and black sand beaches that make Iceland feel like another planet. The unique geothermal energy and hot springs are also a huge draw.",
    imageUrl: "https://i.cdn.newsbytesapp.com/images/l23020240214110019.jpeg"
  },
  {
    id: 3,
    cityCountry: "Machu Picchu, Peru",
    continentRegion: "South America",
    mainAttraction: "Ancient Inca Citadel",
    reasonToVisit: "I am drawn to the mystery and engineering marvel of ancient civilizations. Trekking the Inca Trail to witness the sunrise over this 'Lost City' is a test of endurance and a historical pilgrimage I must complete. The surrounding Andean mountains are breathtaking.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLU4JUpEA1DG5z8dN_SBVtvc8UmTQNkL2m1A&s" 
  },
  {
    id: 4,
    cityCountry: "Serengeti National Park, Tanzania",
    continentRegion: "Africa",
    mainAttraction: "The Great Migration",
    reasonToVisit: "Experiencing wildlife in its natural, untamed habitat is a humbling experience. I want to witness the sheer scale of the Great Migration and learn about conservation efforts firsthand. The vast, open savannas represent a profound sense of natural freedom.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNW1w1nRGFHoSx30iQ_h6ELo_LbRBdcn-6iw&s" 
  },
];

const travelGoals = [
    "Visit all 7 continents (4 to go!)",
    "Learn to cook one authentic dish from 5 different countries.",
    "Go SCUBA diving in the Great Barrier Reef.",
    "Spend a month traveling only by train across Europe."
];

function App() {
  return (
    <div className="travel-app">
      
      {/* Header Section */}
      <header className="header-section">
        <h1>🌅 My Dream Destinations</h1>
        <p className="tagline">Exploring the World, One Dream at a Time</p>
      </header>

      <main>
        
        {/* About My Travel Dreams Section */}
        <section className="about-section">
          <h2>💭 About My Travel Dreams</h2>
          <p>
            My passion for travel stems from a deep curiosity about different cultures and history. 
            I believe seeing the world firsthand is the best form of education. 
            Exploring new places allows me to step outside my comfort zone, 
            gain a broader perspective, and collect unforgettable memories that enrich my life.
          </p>
        </section>

        {/* Destinations List Section */}
        <section className="destinations-section">
          <h2>⭐ Top Dream Destinations</h2>
          <div className="destinations-grid">
            {travelDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                
                {/* Image container for fixed sizing */}
                <div className="card-image-container">
                    <img 
                      src={destination.imageUrl} 
                      alt={`View of ${destination.cityCountry}`} 
                      className="destination-image" 
                      // Fallback for image loading errors
                      onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src="https://placehold.co/600x400/ccc/white?text=Image+Unavailable";
                      }}
                    />
                </div>
                
                {/* Content wrapper */}
                <div className="card-content">
                    <h3>{destination.cityCountry}</h3>
                    <p><strong>🗺️ Region:</strong> {destination.continentRegion}</p>
                    <p><strong>📍 Main Attraction:</strong> {destination.mainAttraction}</p>
                    <div className="reason">
                        <h4>Why I Want to Visit:</h4>
                        <p>{destination.reasonToVisit}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Goals Section */}
        <section className="goals-section">
          <h2>🎯 Travel Goals</h2>
          <ul className="goals-list">
            {travelGoals.map((goal, index) => (
              <li key={index}>✈️ {goal}</li>
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