type Trip = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  itineraries: Itinerary[];
  status: "editing" | "upcoming" | "passed";
}

interface Itinerary {
  id: string;
  date: string;
  places: Place[];
  route: string | null; // JSON string of route data
}

interface ItineraryWithColor extends Itinerary {
  color: string;
}

type Place = {
  name: string;
  position: [number, number];
  description?: string;
  imageUrl?: string[];
};


