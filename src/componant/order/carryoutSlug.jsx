"use client" // This component needs to be client-side for interactivity and hooks

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // For accessing productSlug

// --- Map product slugs to their display names and bundle counts ---
// This replaces the need to fetch pack details from an API
const packInfoMap = {
  'single': { name: 'Single Pack', bundle_count: 1 },
  '4-pack': { name: '4-Pack', bundle_count: 4 },
  '6-pack': { name: '6-Pack', bundle_count: 6 },
  '9-pack': { name: '9-Pack', bundle_count: 9 },
  // Add more product slugs and their details as needed
};

export default function CarryoutPackSelectionPage({flavour}) { // Added 'flavour' prop
  const params = useParams();
  const { productSlug } = params; // Now we get productSlug from the URL

  // The deliveryType is now hardcoded for this specific file
  const deliveryType = 'carryout'; 

  // Get pack details using productSlug
  const packDetails = packInfoMap[productSlug];

  // Fallback values if productSlug doesn't match any known pack
  const displayPackName = packDetails?.name || "Custom Pack";
  const requiredFlavorCount = packDetails?.bundle_count || 0; 

  // State to manage selected flavors and their quantities
  // Keys will now be product_id (numbers), values will be counts
  const [selectedFlavors, setSelectedFlavors] = useState({});

  // Calculate current total selected flavors
  const totalSelectedFlavors = useMemo(() => {
    return Object.values(selectedFlavors).reduce((sum, count) => sum + count, 0);
  }, [selectedFlavors]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    let sum = 0;
    for (const productId in selectedFlavors) {
      const flavor = flavour.find(f => f.product_id === Number(productId)); // Use Number() to match product_id type
      if (flavor) {
        sum += parseFloat(flavor.price) * selectedFlavors[productId]; // Use parseFloat for price
      }
    }
    return sum.toFixed(2); // Format to 2 decimal places
  }, [selectedFlavors, flavour]); // Added 'flavour' to dependency array

  // Handlers for adding/removing flavors
  const handleAddFlavor = (productId) => { // Changed 'flavorId' to 'productId'
    if (requiredFlavorCount === 0 || totalSelectedFlavors < requiredFlavorCount) { 
      setSelectedFlavors(prev => ({
        ...prev,
        [productId]: (prev[productId] || 0) + 1, // Use 'productId' as key
      }));
    }
  };

  const handleRemoveFlavor = (productId) => { // Changed 'flavorId' to 'productId'
    setSelectedFlavors(prev => {
      const newCount = (prev[productId] || 0) - 1; // Use 'productId' as key
      if (newCount <= 0) {
        const { [productId]: _, ...rest } = prev; // Remove entry if count is 0 or less
        return rest;
      }
      return { ...prev, [productId]: newCount };
    });
  };

  // Prepare images for the box visualization
  const flavorsInBox = useMemo(() => {
    const images = [];
    for (const productId in selectedFlavors) { // Changed 'flavorId' to 'productId'
      const count = selectedFlavors[productId];
      const flavor = flavour.find(f => f.product_id === Number(productId)); // Use Number()
      if (flavor) {
        for (let i = 0; i < count; i++) {
          images.push(flavor.images); // Changed 'flavor.image' to 'flavor.images'
        }
      }
    }
    return images;
  }, [selectedFlavors, flavour]); // Added 'flavour' to dependency array


  return (
    <main className="min-h-screen bg-sky-50 py-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-500 mb-8 md:mb-10">
        Select {requiredFlavorCount} Flavors for your {displayPackName} ({deliveryType})
      </h1>

      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side: Box Visualization */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center relative border-4 border-sky-500">
          {/* Main Container for the Box and Lid */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden flex flex-col items-center justify-center">
            {/* The "Lid" part - positioned absolutely above the box body */}
            <div className="absolute top-0 w-[95%] h-12 bg-white rounded-t-lg shadow-md -translate-y-1/2 transform -rotate-3 origin-bottom-left border border-gray-200 z-0">
                {/* Inner detail for lid thickness */}
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-100 opacity-75"></div>
            </div>

            {/* The "Box Body" - where items sit */}
            <div className={`
              relative w-full bg-sky-100 rounded-b-lg shadow-xl p-6 flex items-center justify-center min-h-64 pt-12 // pt-12 to push content down from "lid" area
              ${requiredFlavorCount === 4 ? 'max-w-md' : 'max-w-sm'} 
            `}>
              {/* Conditional grid/flex layout for flavors based on pack size */}
              {requiredFlavorCount === 4 ? (
                  <div className="relative z-10 flex flex-row flex-wrap justify-center items-center gap-4 w-full"> {/* Flex for 4-pack */}
                      {Array.from({ length: requiredFlavorCount }).map((_, index) => (
                          <div key={`box-slot-${index}`} className="relative w-28 h-28 bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center border border-gray-200"> {/* Individual flavor item slot */}
                              {flavorsInBox[index] ? (
                                  <Image
                                      src={flavorsInBox[index]}
                                      alt={`Selected flavor ${index + 1}`}
                                      fill
                                      objectFit="cover"
                                      sizes="112px" 
                                  />
                              ) : (
                                  <span className="text-gray-500 text-xs sm:text-sm">Slot {index + 1}</span>
                              )}
                          </div>
                      ))}
                  </div>
              ) : ( // For 6-pack and 9-pack (or any other, default to 3 columns)
                  <div className="relative z-10 grid grid-cols-3 gap-4 p-2 w-full"> {/* Grid for 6/9-pack */}
                      {Array.from({ length: requiredFlavorCount }).map((_, index) => (
                          <div key={`box-slot-${index}`} className="relative w-28 h-28 bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center border border-gray-200"> {/* Individual flavor item slot */}
                              {flavorsInBox[index] ? (
                                  <Image
                                      src={flavorsInBox[index]}
                                      alt={`Selected flavor ${index + 1}`}
                                      fill
                                      objectFit="cover"
                                      sizes="112px" 
                                  />
                              ) : (
                                  <span className="text-gray-500 text-xs sm:text-sm">Slot {index + 1}</span>
                              )}
                          </div>
                      ))}
                  </div>
              )}
            </div> {/* End of box body */}
          </div> {/* End of main container for box and lid */}
          <p className="mt-6 text-xl font-semibold text-gray-800">
            {totalSelectedFlavors} / {requiredFlavorCount} Flavors Selected
          </p>
        </div>

        {/* Right Side: Flavor Selection List */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-6 border-4 border-sky-500">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-500 mb-6">Available Flavors</h2>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2"> 
            {flavour.map(flavor => ( // Iterating over the 'flavour' prop
              <div key={flavor.product_id} className="flex items-center justify-between p-4 bg-sky-50 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 flex-grow">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-sky-200 flex-shrink-0">
                    <Image
                      src={flavor.images} // Use 'flavor.images'
                      alt={flavor.name}
                      fill
                      objectFit="cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-gray-900">{flavor.name}</h3>
                    <p className="text-sm text-gray-600">{flavor.calories ? `${flavor.calories} cal` : ''}</p> {/* Conditional calories display */}
                    <p className="text-base font-medium text-gray-800">${parseFloat(flavor.price).toFixed(2)}</p> {/* Ensure price is parsed */}
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() => handleRemoveFlavor(flavor.product_id)} // Use 'flavor.product_id'
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    disabled={!selectedFlavors[flavor.product_id] || selectedFlavors[flavor.product_id] === 0} // Use 'flavor.product_id'
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">{selectedFlavors[flavor.product_id] || 0}</span> {/* Use 'flavor.product_id' */}
                  <button
                    onClick={() => handleAddFlavor(flavor.product_id)} // Use 'flavor.product_id'
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    disabled={requiredFlavorCount !== 0 && totalSelectedFlavors >= requiredFlavorCount} 
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-sky-500 text-white p-4 rounded-lg shadow-lg">
            <label className="flex items-center space-x-2 text-lg font-medium mb-4 sm:mb-0">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-sky-700 rounded accent-sky-600" />
              <span>Make this a gift</span>
            </label>
            <button
              className="w-full sm:w-auto px-6 py-3 bg-white text-sky-500 font-bold rounded-lg shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={requiredFlavorCount !== 0 && totalSelectedFlavors !== requiredFlavorCount} 
            >
              Add to Bag - ${totalPrice}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}