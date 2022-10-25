import { getCenter } from "geolib";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
const MapVP = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults?.map(({ long, lat }) => ({
    longitude: long,
    latitude: lat,
  }));
  const center = getCenter(coordinates);
  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });
  const offset = mapboxgl.Point(-20, -10);
  return (
    <>
      <Map
        mapStyle={"mapbox://styles/oussma-sun/cl9ilkp0s001d14mej8rhxl0g"}
        mapboxAccessToken={process.env.mapbox_key}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {searchResults?.map((result) => (
          <div key={result.long}>
            <Marker
              offset={offset}
              latitude={result.lat}
              longitude={result.long}
            >
              <p
                role={"img"}
                onClick={() => setSelectedLocation(result)}
                className="animate-bounce text-2xl cursor-pointer"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>

            {selectedLocation.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                longitude={result.long}
                latitude={result.lat}
                key={result.lat}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </Map>
    </>
  );
};

export default MapVP;
