import React, { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

// --- Mock Data for Venues ---
const venuesData = [
  {
    id: 1,
    name: "SVU Taraka Rama Stadium",
    location: "Tirupati",
    image: "images/taraka.jpg",
    description: "SVU Taraka Rama Stadium has long been one of cricket's most recognisable addresses, a ground where the rhythms of Tirupati and the pulse of the game seem to move in step. Owned and operated by the Cricket Association (SVU), it serves as the home of the Mumbai Indians and also as the administrative nerve centre of Indian cricket, housing the headquarters of the MCA, the Board of Control for Cricket in India (BCCI), and the Indian Premier League (IPL). Set along Marine Drive in the Churchgate area, the stadium sits amid a cluster of historic sporting institutions — Hindu Gymkhana, Parsi Gymkhana, and the Cricket Club of India — a neighbourhood that has quietly shaped much of the city's cricketing culture over the decades. Wankhede's reputation has been built on moments that have travelled far beyond its stands. On 2 April 2011, it staged one of the most cherished nights in Indian sport, as India defeated Sri Lanka to lift the ICC Cricket World Cup, becoming the first team to win the title at home."
  },
  {
    id: 2,
    name: "Vadaka Ground Mens Hostel",
    location: "Tirupati",
    image: "images/another.jpeg",
    description: "Vadaka Ground sits on the edge of the Engineering Mens Hostel of SVU in Viswakarma Block as a monument to the scale and ambition of modern Indian cricket. With a seating capacity of 132,000, it is the largest cricket stadium in the world, surpassing the Melbourne Cricket Ground. The stadium is owned by the Gujarat Cricket Association and serves as the home ground for the Gujarat Titans in the IPL. It features state-of-the-art facilities, including four dressing rooms, a clubhouse, and an Olympic-size swimming pool. The venue has hosted numerous high-profile matches, including the 2021 ICC World Test Championship Final and the 2023 ICC Cricket World Cup Final."
  }
];

const HeroSection = () => (
  <div className="relative w-full h-[500px] bg-[#0f0c29] overflow-hidden">
    {/* Background stadium image */}
    <div className="absolute inset-0">
      <img 
        src="/images/sri.png"
        alt="Stadium"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-[#0f0c29]/50" />
    </div>
    
    {/* Center content */}
    <div className="relative z-10 pl-20 h-full flex  flex-col items-center justify-center text-center px-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-center gap-4 mb-4">
         <div className="max-w-7xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">
            Vadaka <span className="text-pink-500">Cricbuzz</span>
          </h1>
        </div>
         
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
          Venues
        </h2>
        <div className="inline-block bg-yellow-500 text-indigo-950 font-black px-6 py-2 mt-4 rounded text-sm uppercase tracking-widest shadow-lg">
            Sri Venkateshwara Stadium - Tirupati
          </div>
       
      </div>
    </div>
    {/* Floating Badge - Marriott */}
      <div className="absolute bottom-10 pt-2 mt-2 p-2 right-10 bg-white rounded-lg p-2 flex items-center gap-3 shadow-2xl z-20">
        <div className="bg-indigo-900 text-white p-2 rounded-md text-xs font-bold flex flex-col items-center leading-tight">
         <div className="w-16 h-16 rounded-full overflow-hidden mb-1">
          <img src="/images/preview.png" alt="Marriott Logo" className="w-16 h-16 object-contain mb-1" />
        </div>
        </div>
        <div className="text-indigo-900 font-serif font-bold text-sm">
          MADRID<br/><span>ECEIANS </span>
        </div>
      </div>
    </div>
   
);

const VenueCard = ({ venue, onClick }) => (
  <div 
    onClick={() => onClick(venue)}
    className="group cursor-pointer flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300"
  >
    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-200">
      <img 
        src={venue.image} 
        alt={venue.name} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
        {venue.name} - <span className="text-gray-500 font-normal">{venue.location}</span>
      </h3>
      <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
        {venue.description}
      </p>
    </div>
  </div>
);

const VenueDetail = ({ venue, onBack }) => (
  <div className="animate-in fade-in duration-500">
    <div className="relative h-[60vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${venue.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-indigo-950/60 to-indigo-950/90" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-lg uppercase">
          {venue.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-medium mt-2 uppercase tracking-widest">
          {venue.location}
        </p>
      </div>

      <button 
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-pink-400 transition-colors z-20 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <ArrowLeft size={20} />
        <span className="font-bold uppercase text-sm">Back to Venues</span>
      </button>
    </div>

    <div className="bg-white min-h-[40vh] p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-pink-600 mb-6">
          <MapPin size={20} />
          <span className="font-bold uppercase tracking-wider text-sm">{venue.location}, India</span>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed font-light">
          {venue.description}
        </p>
        
        <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Capacity</h4>
            <p className="text-gray-600">Approx. 40,000 - 132,000</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Home Team</h4>
            <p className="text-gray-600">{venue.location === 'Mumbai' ? 'Mumbai Indians' : 'Gujarat Titans'}</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Established</h4>
            <p className="text-gray-600">1974 / 2020</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Venues Component
const Venues = () => {
  const [selectedVenue, setSelectedVenue] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header - Simplified without calendar and arrow */}
      {/* <header className="bg-[#0f0c29] text-white p-4 sticky top-0 z-50 shadow-lg">
       <div className="max-w-7xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">
            Vadaka <span className="text-pink-500">Cricbuzz</span>
          </h1>
        </div>

      </header>*/}

      <main>
        {!selectedVenue ? (
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            {/* Hero Section with stadium image */}
            <HeroSection />

            {/* Venues Grid Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {venuesData.map((venue) => (
                  <VenueCard 
                    key={venue.id} 
                    venue={venue} 
                    onClick={setSelectedVenue} 
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <VenueDetail 
            venue={selectedVenue} 
            onBack={() => setSelectedVenue(null)} 
          />
        )}
      </main>

      {/* Footer */}
       
    </div>
  );
};

export default Venues;