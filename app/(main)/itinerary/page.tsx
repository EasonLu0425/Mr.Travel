"use client";

import dynamic from "next/dynamic";

const PlacesMap = dynamic(() => import("./components/client"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const places: Place[] = [
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

export default function Home() {
  return (
    <main>
      <PlacesMap places={places} />
    </main>
  );
}