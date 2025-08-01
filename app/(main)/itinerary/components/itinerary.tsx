"use client"

import { tenTailwindColorMap } from "@/lib/utils"
import L from "leaflet"
import { Fragment, useMemo } from "react"
import { Marker, Popup } from "react-leaflet"
import Routing from "./route"

const Itinerary = ({ itinerary }: { itinerary: ItineraryWithColor }) => {

  const routeColor = useMemo(() => {
    const theSet = tenTailwindColorMap.find((colorSet) => {
      return colorSet.hex === itinerary.color
    })
    return theSet
  }, [itinerary])



  return (
    <Fragment>
      {itinerary.places.map((place, pIndex) => (
        <Marker
          key={`itinerary${itinerary.date}-${pIndex}`}
          position={place.position}
          icon={L.divIcon({
            className: '',
            html:
              `
                <div 
                  class="my-marker ${routeColor?.class || "bg-blue-500"}"
                >
                  ${pIndex + 1}
                </div>
              `,
            iconSize: [30, 38],
            iconAnchor: [15, 38],
          })}
        >
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
      {/* <Routing places={itinerary.places} color={routeColor?.hex ||"#3b82f6"} /> */}
    </Fragment>
  )
}

export default Itinerary