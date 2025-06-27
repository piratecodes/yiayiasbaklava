"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';

//Redux profilesetup
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/features/userSlice'

const StoreLocator = () => {
  const router = useRouter();
  const pathname = usePathname()
  const mapRef = useRef(null);
  const initialized = useRef(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  //Redux
  const { jwt } = useSelector( userSelector );

  const stores = [
    {
      id: 1,
      name: "Downtown Store",
      description: "Fresh pizza ready in 15 mins",
      lat: 40.7589,
      lng: -73.9851,
      iconUrl: "/store1-icon.png",
    },
    {
      id: 2,
      name: "Brooklyn Branch",
      description: "Gourmet burgers - 20 mins prep",
      lat: 40.6892,
      lng: -73.9442,
      iconUrl: "/store2-icon.png",
    },
    {
      id: 3,
      name: "Queens Location",
      description: "Asian fusion - 25 mins",
      lat: 40.7282,
      lng: -73.7949,
      iconUrl: "/store3-icon.png",
    },
    {
      id: 4,
      name: "Bronx Store",
      description: "Italian cuisine - 18 mins",
      lat: 40.8448,
      lng: -73.8648,
      iconUrl: "/store4-icon.png",
    },
    {
      id: 5,
      name: "Staten Island",
      description: "Mexican food - 22 mins",
      lat: 40.5795,
      lng: -74.1502,
      iconUrl: "/store5-icon.png",
    },
  ];

  // useEffect(async()=>{
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`,{
  //     method: "POST",
  //     headers: {
  //     Accept: "application/json",
  //     Authorization: `Bearer ${jwt}`,
  //     "Content-Type": "application/json",
  //     },
  //     body: `{ "search": "Kimberton Whole Foods" }`,
  //   })
  //   const stores = response.json().data;
  // },[])

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const bounds = new window.google.maps.LatLngBounds();
      stores.forEach((store) => {
        bounds.extend(new window.google.maps.LatLng(store.lat, store.lng));
      });

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center: { lat: 40.7589, lng: -73.9851 },
        mapTypeId: "roadmap",
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      mapInstance.fitBounds(bounds);
      setMap(mapInstance);

      const infoWindowInstance = new window.google.maps.InfoWindow();
      setInfoWindow(infoWindowInstance);

      const markerInstances = stores.map((store) => {
        const marker = new window.google.maps.Marker({
          position: { lat: store.lat, lng: store.lng },
          map: mapInstance,
          title: store.name,
          icon: {
            url: store.iconUrl,
            scaledSize:
              window.innerWidth <= 768
                ? new window.google.maps.Size(40, 40)
                : new window.google.maps.Size(50, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 25),
          },
        });

        marker.addListener("click", () => {
          showInfoWindow(store, marker, infoWindowInstance, mapInstance);
        });

        marker.addListener("mouseover", () => {
          showInfoWindow(store, marker, infoWindowInstance, mapInstance);
        });

        return { marker, storeId: store.id };
      });

      setMarkers(markerInstances);
    };

    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMaps();

    const handleResize = () => {
      markers.forEach(({ marker, storeId }) => {
        const store = stores.find((s) => s.id === storeId);
        if (store) {
          marker.setIcon({
            url: store.iconUrl,
            scaledSize:
              window.innerWidth <= 768
                ? new window.google.maps.Size(40, 40)
                : new window.google.maps.Size(50, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 25),
          });
        }
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showInfoWindow = (store, marker, infoWindowInstance, mapInstance) => {
    const content = `
      <div class="p-4 max-w-xs">
        <h3 class="font-bold text-lg mb-2">${store.name}</h3>
        <p class="text-gray-600 mb-3">${store.description}</p>
        <button 
          onclick="handleOrderNow(${store.id})" 
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Order Now
        </button>
      </div>
    `;

    infoWindowInstance.setContent(content);
    infoWindowInstance.open(mapInstance, marker);
    setSelectedStore(store.id);

    window.handleOrderNow = (storeId) => {
      // alert(`Order from store ${storeId}`);
      router.push(`${pathname}/${storeId}`)
    };
  };

  const handleStoreClick = (store) => {
    if (!map || markers.length === 0) return;

    const markerData = markers.find((m) => m.storeId === store.id);
    if (markerData) {
      map.setCenter({ lat: store.lat, lng: store.lng });
      map.setZoom(15);
      if (infoWindow) {
        showInfoWindow(store, markerData.marker, infoWindow, map);
      }
    }
  };

  const handleOrderNow = (storeId) => {
    // alert(`Order from store ${storeId}`);
    router.push(`${pathname}/${storeId}`)
  };

  return (
    <React.Fragment>
      
      <header className="relative px-4 py-16 bg-sky-500">
        <h1 className="max-w-7xl text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white">Choose Your <span className="text-amber-300">Pickup</span> Location</h1>
        <p className="max-w-7xl text-center mt-2 text-lg lg:text-x text-white"> Find the perfect spot to pick up your fresh baklava delights. </p>

        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
            <svg 
            viewBox="0 0 1200 120" 
            fill="none" 
            className="w-full h-20"
            preserveAspectRatio="none"
            >
            <path 
                d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
                fill="white"
            />
            </svg>
        </div>
      </header>
        

      <section className="my-10">
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                ref={mapRef}
                className="w-full"
                style={{ height: "600px", minHeight: "400px" }}
              ></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Our Stores</h2>
              <div className="space-y-4 overflow-y-auto max-h-[520px]">
                {stores.map((store) => (
                  <div
                    key={store.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedStore === store.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleStoreClick(store)}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={store.iconUrl}
                        alt={store.name}
                        className="w-12 h-12 object-cover border-2 border-black rounded-full overflow-clip"
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iIzM5OGVmNCIvPgo8dGV4dCB4PSIyNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlM8L3RleHQ+Cjwvc3ZnPg==";
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{store.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{store.description}</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOrderNow(store.id);
                          }}
                          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StoreLocator;
