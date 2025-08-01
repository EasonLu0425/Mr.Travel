'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import "leaflet-routing-machine";
import type { LatLngTuple } from 'leaflet';
import L from 'leaflet';

import { MapContainer, TileLayer} from 'react-leaflet';
import Itinerary from './itinerary';

type Place = {
  name: string;
  position: LatLngTuple;
};

export default function PlaceMap({ itineraries }: { itineraries: ItineraryWithColor[]; }) {
  const position: LatLngTuple = [25.033, 121.565]; // Default center position

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        itineraries.map((itinerary) => (
          <Itinerary key={`itinerary-${itinerary.date}`} itinerary={itinerary} />
        ))
      }

    </MapContainer>
  );
}
