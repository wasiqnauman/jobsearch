import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getcenter";
import logo from "/assets/images/logo.png";
import Image from "next/image";
function LocalMap({ searchResults }) {
  const [selLocation, setSelLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.longitude,
    latitude: result.latitude,
  }));
  const centerLocation = getCenter(coordinates);
  const [viewState, setViewState] = useState({
    width: "100",
    height: "100",
    longitude: centerLocation.longitude,
    latitude: centerLocation.latitude,
    zoom: 8,
  });
  return (
    <Map
      //   mapStyle="mapbox://styles/wasiqnauman/cl316colh005n15nst05eba8w"
      //   mapStyle="mapbox://styles/wasiqnauman/cl31c07zp000f15nva00z9rcd"
      mapStyle="mapbox://styles/wasiqnauman/cl31c26hi005o15nsvvyn8mk6"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.longitude}>
          <Marker
            longitude={result.longitude}
            latitude={result.latitude}
            anchor="bottom"
          >
            <div className="relative h-100 w-100">
              <Image
                src={logo}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Marker>
        </div>
      ))}
    </Map>
  );
}

export default LocalMap;
