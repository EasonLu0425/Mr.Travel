'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import "leaflet-routing-machine";
import type { LatLngTuple } from 'leaflet';
import L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Routing from './route';

type Place = {
  name: string;
  position: LatLngTuple;
};

export default function PlaceMap({ places }: { places: Place[] }) {
  const position: LatLngTuple = places.length ? places[0].position : [25.038, 121.564];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place, index) => (
        <Marker
          key={index}
          position={place.position}
          icon={L.divIcon({
            className: '',
            html: `
              <div 
                class="my-marker bg-red-400"
              >
                ${index + 1}
              </div>
            `,
            iconSize: [30, 38],
            iconAnchor: [15, 38],
          })}
        >
          <Popup>{place.name}</Popup>
        </Marker>
      ))}

      <Routing places={places} />
    </MapContainer>
  );
}
