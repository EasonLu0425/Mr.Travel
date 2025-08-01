"use client";

import { tenTailwindColorMap } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import ControlPanel from "./control-panel";

const PlacesMap = dynamic(() => import("./place-map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


export default function ItineraryPage({ trip }: { trip: Trip }) {

  const formatTrip: (Trip & { itineraries: ItineraryWithColor[] }) | null = useMemo(() => {
    if (!trip) return null;
    return {
      ...trip,
      itineraries: trip.itineraries.map((itinerary, index) => ({
        ...itinerary,
        color: tenTailwindColorMap[index % 10]["hex"]
      })),
    }
  }, [trip])

  if (!formatTrip) return null;

  return (
    <div className="relative flex flex-col flex-grow flex-shrink sm:basis-0 rounded-md border sm:overflow-hidden liquid-glass-nonhover">
      <PlacesMap itineraries={formatTrip.itineraries} />
      <ControlPanel />
    </div>
  );
}