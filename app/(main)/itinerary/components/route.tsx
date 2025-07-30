'use client';

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

type Place = {
  name: string;
  position: LatLngTuple;
};

export default function Routing({ places }: { places: Place[] }) {
  const map = useMap();

  useEffect(() => {
    if (!map || places.length < 2) return;

    // @ts-expect-error types 有時不完整
    const routingControl = L.Routing.control({
      waypoints: places.map((p) => L.latLng(p.position[0], p.position[1])),
      lineOptions: {
        styles: [{ color: "#1976d2", opacity: 0.6, weight: 10 }],
      },
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      createMarker: () => null,
    });

    routingControl.addTo(map);

  }, [map, places]);

  return null;
}
