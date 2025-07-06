"use client";
import React, { useState, useEffect, useRef } from "react";
import { showSuccess, showError, showWarning } from '@/utils/toast';

function AddressForm(){
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    latitude: "",
    longitude: ""
  });

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const geocoderRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const initMap = () => {
    const defaultLocation = { lat: 40.73061, lng: -73.935242 };
    geocoderRef.current = new window.google.maps.Geocoder();

    const map = new window.google.maps.Map(mapRef.current, {
      center: defaultLocation,
      zoom: 14,
    });
    mapInstanceRef.current = map;

    const marker = new window.google.maps.Marker({
      position: defaultLocation,
      map,
      draggable: true,
    });
    markerRef.current = marker;

    getAddressFromCoords(defaultLocation);

    marker.addListener("dragend", () => {
      const newPos = marker.getPosition();
      if (newPos) {
        const latlng = {
          lat: newPos.lat(),
          lng: newPos.lng(),
        };
        getAddressFromCoords(latlng);
      }
    });
  };

  useEffect(() => {
    const existingScript = document.getElementById("google-maps-script");

    const initialize = () => {
      if (window.google && window.google.maps) {
        initMap();
      }
    };

    if (!window.google && !existingScript) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initialize;
      document.head.appendChild(script);
    } else if (window.google && window.google.maps) {
      initialize();
    } else if (existingScript) {
      existingScript.addEventListener("load", initialize);
    }
  }, []);

  const getAddressFromCoords = ({ lat, lng }) => {
    geocoderRef.current.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results[0]) {
        const addrComponents = results[0].address_components;
        const parsed = {
          street: extract(addrComponents, ["street_number", "route"]),
          city: extract(addrComponents, ["locality", "sublocality", "postal_town"]),
          state: extract(addrComponents, ["administrative_area_level_1"]),
          country: extract(addrComponents, ["country"]),
          zip: extract(addrComponents, ["postal_code"]),
          latitude: lat,
          longitude: lng,
        };
        setAddress(parsed);
      }
    });
  };

  const extract = (components, types) => {
    const found = components.find(c => types.includes(c.types[0]));
    return found ? found.long_name : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  function getCookie(name) {
    if (typeof document !== 'undefined') {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  const handleSubmit = async (e)=>{
          e.preventDefault();
          if(! getCookie('jwt_token')) showError("Pleaase Authenticate First")
          else{
              try{
                  const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-address`,{
                  method: "POST",
                  headers: {
                      Accept: "application/json",
                      Authorization: `Bearer ${getCookie('jwt_token')}`,
                      "Content-Type": "application/json",
                  }, body: `{ "street": "${address.street}", "city": "${address.city}", "zip": "${address.zip}", "state": "${address.state}", "country": "${address.country}" }`
                  })
                  const data = await responce.json()
                  if (responce.status == 200) showSuccess(data.message)
                  else showError(data.message)
              } catch {
                  showWarning("something went wrong")
              }
  
          }
      }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl text-center font-semibold mb-4 text-gray-700">Add Address</h2>

      <div className="rounded-lg overflow-hidden shadow mb-4">
        <div ref={mapRef} style={{ width: "100%", height: "300px" }} />
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Street</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">ZIP</label>
            <input
              type="text"
              name="zip"
              value={address.zip}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={(e) => handleSubmit(e)}
        >
          Add Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
