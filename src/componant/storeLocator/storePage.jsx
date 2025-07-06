"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';

function StoreLocator({storeApi}){
  const router = useRouter();
  const pathname = usePathname();
  const mapRef = useRef(null);
  const initialized = useRef(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  //Api data Convrsion    
  const stores = storeApi.data

  useEffect(() => {
    if (!stores.length || initialized.current) return;
    initialized.current = true;

    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const bounds = new window.google.maps.LatLngBounds();
      stores.forEach((store) => {
        bounds.extend(new window.google.maps.LatLng(parseFloat(store.latitude), parseFloat(store.longitude)));
      });

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center: { lat: parseFloat(stores[0].latitude), lng: parseFloat(stores[0].longitude) },
        mapTypeId: "roadmap",
        styles: [{
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        }],
      });

      mapInstance.fitBounds(bounds);
      setMap(mapInstance);

      const infoWindowInstance = new window.google.maps.InfoWindow();
      setInfoWindow(infoWindowInstance);

      const markerInstances = stores.map((store) => {
        const marker = new window.google.maps.Marker({
          position: { lat: parseFloat(store.latitude), lng: parseFloat(store.longitude) },
          map: mapInstance,
          title: store.name,
          icon: {
            url: store.image,
            scaledSize: window.innerWidth <= 768 ? new window.google.maps.Size(40, 40) : new window.google.maps.Size(50, 50),
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

      window.handleOrderNow = (storeId) => {
        router.push(`${pathname}/${storeId}`);
      };
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
            url: store.image,
            scaledSize: window.innerWidth <= 768 ? new window.google.maps.Size(40, 40) : new window.google.maps.Size(50, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 25),
          });
        }
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [stores, markers]);

  const showInfoWindow = (store, marker, infoWindowInstance, mapInstance) => {
    const content = `
      <div class="p-4 max-w-xs">
        <h3 class="font-bold text-lg mb-2">${store.name}</h3>
        <p class="text-gray-600 mb-3">${store.address}</p>
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=${parseFloat(store.latitude)},${parseFloat(store.longitude)}"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-sky-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Get Directions
        </a>
      </div>
    `;
    infoWindowInstance.setContent(content);
    infoWindowInstance.open(mapInstance, marker);
    setSelectedStore(store.id);
  };

  const handleStoreClick = (store) => {
    if (!map || markers.length === 0) return;

    const markerData = markers.find((m) => m.storeId === store.id);
    if (markerData) {
      map.setCenter({ lat: parseFloat(store.latitude), lng: parseFloat(store.longitude) });
      map.setZoom(15);
      if (infoWindow) {
        showInfoWindow(store, markerData.marker, infoWindow, map);
      }
    }
  };

  const handleOrderNow = (storeId) => {
    router.push(`${pathname}/${storeId}`);
  };

  return (
    <React.Fragment>
      <header className="relative px-4 py-16 bg-sky-500">
        <h1 className="max-w-7xl text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white">Choose Your <b className="text-amber-300">Store</b> Location</h1>
        <p className="max-w-7xl text-center mt-2 text-lg lg:text-x text-white"> Find the perfect spot to pick up your fresh baklava delights. </p>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20" preserveAspectRatio="none">
            <path d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </header>

      <section className="my-10">
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div ref={mapRef} className="w-full" style={{ height: "600px", minHeight: "400px" }}></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">Our Stores</h2>
              <div className="space-y-4 overflow-y-auto max-h-[520px]">
                {stores.map((store) => (
                  <div
                    key={store.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${selectedStore === store.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
                    onClick={() => handleStoreClick(store)}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-12 h-12 object-cover border-2 border-black rounded-full overflow-clip"
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iIzM5OGVmNCIvPgo8dGV4dCB4PSIyNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlM8L3RleHQ+Cjwvc3ZnPg==";
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{store.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{store.address}</p>
                        <p className="text-gray-600 text-sm mt-1">{store.phone}</p>
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
