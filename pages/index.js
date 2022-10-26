import * as React from "react";
import Head from "next/head";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoib3Vzc21hLXN1biIsImEiOiJjbDlneDF0NXkwOHo4M3VwMjF0Y3AwZXBwIn0.HImyzf9tBGCLSzIFh2d9AQ"; // Set your mapbox token here

export default function Home() {
  return (
    <>
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
    </>
  );
}
