// src/components/Map.tsx
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
  const center = [0, 0]; // Specify the initial center of the map here

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={3}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
