import ItineraryPage from "./components/view";


 const places1: Place[] = [
  {
    name: "台北101",
    position: [25.038, 121.564],
  },
  {
    name: "故宮博物院",
    position: [25.102, 121.548],
  },
  {
    name: "士林夜市",
    position: [25.087, 121.525],
  },
  {
    name: "陽明山國家公園",
    position: [25.166, 121.566],
  },
];

const places2: Place[] = [
  {
    name: "淡水老街",
    position: [25.168, 121.443],
  },
  {
    name: "八里左岸",
    position: [25.161, 121.446],
  },
  {
    name: "漁人碼頭",
    position: [25.166, 121.456],
  },
];

const places3: Place[] = [
  {
    name: "貓空纜車",
    position: [24.993, 121.576],
  },
  {
    name: "木柵動物園",
    position: [24.994, 121.576],
  },
  {
    name: "象山步道",
    position: [25.027, 121.570],
  },
];

const trip: Trip = {
  id: "trip-1",
  name: "台北四日遊",
  startDate: "20235-08-01",
  endDate: "2023-08-04",
  status: "editing",
  itineraries: [
    {
      id: "itinerary-1",
      date: "2023-08-01",
      places: places1,
      route: null,
    },
    {
      id: "itinerary-2",
      date: "2023-08-02",
      places: places2,
      route: null,
    },
    {
      id: "itinerary-3",
      date: "2023-08-03",
      places: places3,
      route: null,
    }
  ]

}

export default function Page() {
  return (
    <ItineraryPage trip={trip} />
  );
}