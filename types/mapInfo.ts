type Trip = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  itineraries: Itinerary[];
  status: "editing" | "upcoming" | "passed";

}

type Itinerary = {
  id: string;
  date: string;
  places: Place[];
  color: string;
  route?: string; // JSON string of route data
}

type Place = {
  name: string;
  position: [number, number];
  description?: string;
  imageUrl?: string[];
};