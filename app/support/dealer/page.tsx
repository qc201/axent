"use client";
import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import * as Yup from "yup";

export const DEFAULT_DISTANCE_IN_KM = "100";

const configureSchema = Yup.object().shape({
  city: Yup.string().required("Required"),
});

const containerStyle = {
  width: "100vw",
  height: "70vh",
};

async function getLatLonForCity(city: string) {
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    city + ", USA"
  )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
  const geocodeResponse = await fetch(geocodeUrl);
  const geocodeData = await geocodeResponse.json();

  if (geocodeData.results && geocodeData.results.length > 0) {
    const { lat, lng } = geocodeData.results[0].geometry.location;
    return { lat, lng };
  } else {
    throw new Error(`No results found for city: ${city}`);
  }
}

export type Place = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

const initialCenter = {
  lat: 33.66199140028126,
  lng: -117.7053040887279,
};

export default function Dealer() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [city, setCity] = useState("");
  const [center, setCenter] = useState(initialCenter);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
    },
    [center]
  );

  const onUnmount = useCallback((map: google.maps.Map) => {
    // Cleanup if necessary
  }, []);

  const handleSearch = async () => {
    try {
      const { lat, lng } = await getLatLonForCity(city);
      setCenter({ lat, lng });
      // Fetch and set places based on the new center if needed
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
      alert(error.message); // Display an alert or update the UI to inform the user
    }
  };

  return isLoaded ? (
    <div className="mt-20">
      <div className="px-60 flex flex-row gap-5 h-10">
        <input
          className="basis-4/5 shadow border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Search your local dealer by city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="basis-1/5 bg-blue-500 text-sm hover:bg-blue-700 text-white font-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {places.map((place) => (
          <MarkerF
            key={`${place.address}-${place.name}-${place.latitude}-${place.longitude}`}
            onClick={() => setSelectedPlace(place)}
            position={{ lat: place.latitude, lng: place.longitude }}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.latitude,
              lng: selectedPlace.longitude,
            }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h3>{selectedPlace.name}</h3>
              <p>{selectedPlace.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
