import React, { createContext, useState, useEffect } from 'react'

const TimeZoneContext = createContext()

const TimeZoneProvider = props => {
  const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timeZone, setTimeZone] = useState(defaultTimeZone)
  const [allTimeZones, setAllTimeZones] = useState([])

  useEffect(
    () => {
      fetch('http://api.timezonedb.com/v2.1/list-time-zone?key=02GNRRUJEWYG&format=json')
        .then(response => response.json())
        .then(data => setAllTimeZones(data.zones.filter(zone => (
          !zone.zoneName.startsWith("Antarctica")
        ))))
    },
    []
  )

  const getTimeZones = query => {
    if (!query) return []
    return allTimeZones.filter(zone => (
      new RegExp(query, 'i').test(zone.zoneName)
    ))
  }

  const formatTimeZoneName = zoneName => {
    const zoneNameSegments = zoneName.split("/")
    const placeName = zoneNameSegments[zoneNameSegments.length - 1].replace("_", " ")
    const region = zoneNameSegments[0]
    return `${placeName} (${region})`
  }

  const data = { timeZone, setTimeZone, getTimeZones, formatTimeZoneName }

  return(
    <TimeZoneContext.Provider value={data}>
      { props.children }
    </TimeZoneContext.Provider>
  )
}

export { TimeZoneContext, TimeZoneProvider }
