"use client"
import { useState } from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 }); // Center of US

  // Dummy store data
  const stores = [
    {
      id: 1,
      name: 'Crumbl Cookies - Downtown',
      address: '123 Main Street, New York, NY 10001',
      phone: '(555) 123-4567',
      hours: 'Mon-Thu: 8AM-10PM, Fri-Sat: 8AM-12AM, Sun: 10AM-10PM',
      position: { lat: 40.7128, lng: -74.0060 },
      distance: '0.5 miles'
    },
    {
      id: 2,
      name: 'Crumbl Cookies - Beverly Hills',
      address: '456 Rodeo Drive, Beverly Hills, CA 90210',
      phone: '(555) 987-6543',
      hours: 'Mon-Thu: 8AM-10PM, Fri-Sat: 8AM-12AM, Sun: 10AM-10PM',
      position: { lat: 34.0522, lng: -118.2437 },
      distance: '1.2 miles'
    },
    {
      id: 3,
      name: 'Crumbl Cookies - Miami Beach',
      address: '789 Ocean Drive, Miami Beach, FL 33139',
      phone: '(555) 456-7890',
      hours: 'Mon-Thu: 8AM-10PM, Fri-Sat: 8AM-12AM, Sun: 10AM-10PM',
      position: { lat: 25.7617, lng: -80.1918 },
      distance: '2.1 miles'
    },
    {
      id: 4,
      name: 'Crumbl Cookies - Chicago Loop',
      address: '321 State Street, Chicago, IL 60601',
      phone: '(555) 321-0987',
      hours: 'Mon-Thu: 8AM-10PM, Fri-Sat: 8AM-12AM, Sun: 10AM-10PM',
      position: { lat: 41.8781, lng: -87.6298 },
      distance: '0.8 miles'
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // In a real app, this would geocode the address and update map center
      console.log('Searching for:', searchQuery);
    }
  };

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  const closeStoreDetails = () => {
    setSelectedStore(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Panel */}
        <div className="w-full lg:w-1/3 bg-white p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Select a location</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search City, State, or Zipcode"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent pr-12"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Navigation size={20} />
            </button>
          </div>

          {/* Error Message */}
          <div className="mb-6">
            <p className="text-red-600 font-semibold mb-2">We can't find you!</p>
            <p className="text-gray-600 text-sm">
              Try using the search bar, navigating on the map, or turning on your{' '}
              <button className="text-blue-600 underline hover:text-blue-800">
                location services
              </button>
              .
            </p>
          </div>

          {/* Store List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Nearby Stores</h2>
            {stores.map((store) => (
              <div
                key={store.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-pink-300 hover:shadow-md transition-all cursor-pointer"
                onClick={() => handleStoreClick(store)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{store.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{store.address}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin size={16} className="mr-1" />
                      <span>{store.distance}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <MapPin size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Panel */}
        <div className="flex-1 relative bg-blue-100">
          {/* Simulated Map */}
          <div className="w-full h-full relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-green-100 to-yellow-100">
              {/* Simulated map elements */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-1/4 w-32 h-16 bg-green-300 rounded-lg"></div>
                <div className="absolute top-40 right-1/3 w-24 h-32 bg-green-400 rounded-lg"></div>
                <div className="absolute bottom-32 left-1/3 w-40 h-20 bg-green-200 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-20 bg-blue-400"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-2 bg-blue-400"></div>
              </div>
            </div>

            {/* Store Markers - Positioned to represent actual US geography */}
            {/* New York - Northeast */}
            <button
              onClick={() => handleStoreClick(stores[0])}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform z-10"
              style={{ left: '78%', top: '25%' }}
            >
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                <MapPin size={20} className="text-white" />
              </div>
            </button>

            {/* California - West Coast */}
            <button
              onClick={() => handleStoreClick(stores[1])}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform z-10"
              style={{ left: '8%', top: '55%' }}
            >
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                <MapPin size={20} className="text-white" />
              </div>
            </button>

            {/* Florida - Southeast */}
            <button
              onClick={() => handleStoreClick(stores[2])}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform z-10"
              style={{ left: '75%', top: '75%' }}
            >
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                <MapPin size={20} className="text-white" />
              </div>
            </button>

            {/* Chicago - Midwest */}
            <button
              onClick={() => handleStoreClick(stores[3])}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform z-10"
              style={{ left: '55%', top: '35%' }}
            >
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                <MapPin size={20} className="text-white" />
              </div>
            </button>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col bg-white rounded-lg shadow-lg">
              <button className="p-2 hover:bg-gray-100 border-b border-gray-200">
                <span className="text-lg font-bold">+</span>
              </button>
              <button className="p-2 hover:bg-gray-100">
                <span className="text-lg font-bold">−</span>
              </button>
            </div>

            {/* Mapbox Attribution */}
            <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">
              © Mapbox © OpenStreetMap Improve this map
            </div>
          </div>
        </div>
      </div>

      {/* Store Details Modal */}
      {selectedStore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeStoreDetails}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <span className="text-2xl">×</span>
            </button>
            
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedStore.name}</h2>
              <div className="flex items-start text-gray-600 mb-3">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">{selectedStore.address}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">{selectedStore.phone}</span>
              </div>
              <div className="flex items-start text-gray-600 mb-4">
                <Clock size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">{selectedStore.hours}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <Navigation size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm font-semibold">{selectedStore.distance} away</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Directions
              </button>
              <button className="flex-1 bg-pink-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}